define(['knockout', 'text!templates/menu-button.html'], function (ko, htmlString) {

    function MenuButton(params) {
        MenuButton.Count++;
        var self = this;
        self.label = params.label;
        self.targetId = params.targetId;
        self.idPrefix = params.idPrefix;
        self.display = params.display;
        self.width = params.width;
        self.height = params.height;
        self.fontFamily = params.fontFamily || "myriad-pro";
        self.fontWeight = params.fontWeight || 600;
        self.id = "menu-button-" + MenuButton.Count.toString();
        self.backgroundGradientId = self.id + "-background-linear-gradient";
        self.backgroundGradientUrl = "url(#" + self.backgroundGradientId + ")";
        self.textGradientId = self.id + "-text-linear-gradient";
        self.textGradientUrl = "url(#" + self.textGradientId + ")";
        self.hilightedGradientId = self.id + "-hilighted-linear-gradient";
        self.hilightedGradientUrl = "url(#" + self.hilightedGradientId + ")";
        self.isMousedOver = ko.observable(false);
        self.pathString = [ (params.buttonNdx() === 0) ? "M1,0v" : "M0,0v", self.height.toString() + "h", 
            ((params.buttonNdx() === 0) ? (self.width - 1) : self.width).toString(),  "v-" + self.height.toString()].join('');
    }

    MenuButton.Count = 0;

    MenuButton.prototype.buttonClick = function () {
        var self = this;
        self.display({page : "page", section : self.targetId });
    };

    return {viewModel: MenuButton, template: htmlString};
});