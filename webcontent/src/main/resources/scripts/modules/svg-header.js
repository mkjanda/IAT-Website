define(['knockout', 'text!templates/svg-header.html', 'modules/font-face-map'], 
function (ko, htmlString, fontFaceMap) {
    function SvgHeader(params) {
        SvgHeader.Count++;
        var self = this;
        self.loaded = ko.observable(false);
        self.display = params.display;
        self.caption = params.caption;
        self.captionText = ko.pureComputed(function () {
            return ko.isObservable(self.caption) ? self.caption() : self.caption;
        });
        self.captions = ko.observableArray([]);
        if (ko.isObservable(self.caption)) {
            self.captions.push(self.caption());
            self.caption.subscribe(function (newVal) {
                if (self.captions.indexOf(newVal) === -1)
                    self.captions.push(newVal);
            });
        } else {
            self.captions.push(self.caption);
        }
        self.template = params.template;
        const template = self.template;
//        self.template.displayWidth = Math.min(self.template.displayWidth, 1000);
        const textMetrics = ko.observable(undefined);
        if (self.template.displayWidth > self.template.width)
            self.template.displayWidth = self.template.width;
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        fontFaceMap[self.template.font].subscribe(newVal => {
            ctx.font = newVal;
            textMetrics(ctx.measureText(self.captionText()));
            self.loaded(true);
        });
        self.width = ko.pureComputed(() =>  textMetrics() ? textMetrics().width : 0);
        self.height = ko.pureComputed(() => textMetrics() ? (textMetrics().actualBoundingBoxAscent + 
            textMetrics().actualBoundingBoxDescent) : 0);
        self.viewBox = ko.pureComputed(() => {
            "0 0 " + self.width().toString() + " " + self.height().toString();
        });
        self.textX = ko.computed(() => 
            (template.textAnchor === "start") ? 0 : (self.width() / 2)
        );
        self.textY = ko.pureComputed(() => 
            (template.textAnchor === "start") ? textMetrics().actualBoundingBoxAscent + 
                textMetrics().actualBoundingBoxDescent : textMetrics().actualBoundingBoxAscent
        );
        self.filterX = function (template) {
            return "-" + ((template.blurSize - 100) / 2).toString() + "%";
        };
        self.filterY = function (template) {
            return "-" + ((template.blurSize - 100) / 2).toString() + "%";
        };
        self.filterWidth = function (template) {
            return template.blurSize.toString() + "%";
        };
        self.filterHeight = function (template) {
            return template.blurSize.toString() + "%";
        };
        if (params.id)
            self.id = params.id;
        else
            self.id = "svgh-" + SvgHeader.Count.toString();
        self.textMaskId = self.id + "-text-mask";
        self.innerShadowId = self.id + "-inner-shadow";
        self.linearGradientId = self.id + "-linear-gradient";
        self.textMaskUrl = "url(#" + self.textMaskId + ")";
        self.innerShadowUrl = "url(#" + self.innerShadowId + ")";
        self.linearGradientUrl = "url(#" + self.linearGradientId + ")";
        self.font = fontFaceMap[self.template.font];
    }
    SvgHeader.Count = 0;

    return {viewModel: SvgHeader, template: htmlString};
});
