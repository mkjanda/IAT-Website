define(['knockout', 'text!templates/expanding-menu-button.html'], function (ko, htmlString) {

    function ExpandingMenuButton(params) {
        var n = ExpandingMenuButton.Count++;
        var self = this;
        self.isMousedOver = ko.observable(false);
        self.selections = params.selections;
        self.width = params.width;
        self.display = params.display;
        self.height = params.height;
        self.label = params.label;
        self.fontFamily = params.fontFamily || "myriad-pro";
        self.fontWeight = params.fontWeight || 600;
        self.expandedWidth = params.width + 200;
        self.id = "expanding-menu-button-" + n.toString();
        self.backgroundGradientId = self.id + "-background-gradient";
        self.textGradientId = self.id + "-text-gradient";
        self.hilightedGradientId = self.id + "-highlighted-gradient";
        self.backgroundGradientUrl = "url(#" + self.backgroundGradientId + ")";
        self.textGradientUrl = "url(#" + self.textGradientId + ")";
        self.hilightedGradientUrl = "url(#" + self.hilightedGradientId + ")";
        self.cornerRadius = 40;
        self.choiceHeight = 30;
        self.expandedHeight = self.height + (self.choiceHeight * 0.5) + self.choiceHeight * (self.selections.length) + 
            (0.67 * self.cornerRadius);
        self.expandedPath = "M " + (self.expandedWidth - self.width).toString() + " 0 v " + (self.height - 1).toString() + " h -" +
                (self.expandedWidth - self.width).toString() + " v " + (self.expandedHeight - self.height - self.cornerRadius).toString() + " c 0 " +
                self.cornerRadius.toString() + " 0 " + self.cornerRadius.toString() + " " + self.cornerRadius.toString() + " " +
                self.cornerRadius.toString() + " h " + (self.expandedWidth - 2 * self.cornerRadius).toString() + " c " +
                self.cornerRadius.toString() + " 0 " + self.cornerRadius.toString() + " 0 " + self.cornerRadius.toString() + " -" +
                self.cornerRadius.toString() + " v -" + (self.expandedHeight - self.cornerRadius - 1).toString();
        self.expanded = ko.observable(false);
        self.selected = [];
        self.selections.forEach(function () {
            self.selected.push(ko.observable(false));
        });
    }

    ExpandingMenuButton.prototype.expand = function () {
        var self = this;
        self.expanded(true);
    };
    ExpandingMenuButton.prototype.contract = function () {
        var self = this;
        self.expanded(false);
    };

    ExpandingMenuButton.prototype.onMouseMove = function (data, evt) {
        var self = this;
        var y = evt.offsetY - self.height;
        var x = evt.offsetX;
        if ((x > self.expandedWidth - self.width) && (y < self.height))
            self.isMousedOver(true);
        else
            self.isMousedOver(false);
        var hilightNdx = Math.floor((y - self.choiceHeight * 0.5) / self.choiceHeight);
        for (var ctr = 0; ctr < self.selected.length; ctr++) {
            if (ctr === hilightNdx)
                self.selected[ctr](true);
            else
                self.selected[ctr](false);
        }
    };

    ExpandingMenuButton.prototype.onMouseClick = function (data, evt) {
        var self = this;
        var y = evt.offsetY - self.height;
        var selectionNdx = Math.floor((y - 0.5 * self.choiceHeight) / self.choiceHeight);
        if ((selectionNdx < self.selections.length) && (selectionNdx >= 0)) {
            self.display({page: 'manual', manualSection : self.selections[selectionNdx].component });
        }
    };

    ExpandingMenuButton.Count = 0;

    return {viewModel: ExpandingMenuButton, template: htmlString};
});