define(['knockout', 'text!templates/svg-header.html', 'modules/font-face-map'], 
function (ko, htmlString, fontFaceMap) {
    function SvgHeader(params) {
        SvgHeader.Count++;
        var self = this;
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
        self.viewBox = function (width, height) {
            return "0 0 " + width.toString() + " " + height.toString();
        };
        self.textX = function (template) {
            return (template.textAnchor === "start") ? 0 : (template.width / 2);
        };
        self.textY = function (template) {
            return (template.textAnchor === "start") ? template.font.match(/^[0-9]+.+?([0-9]+).+$/)[1] : (template.height * 7 / 11);
        };
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
