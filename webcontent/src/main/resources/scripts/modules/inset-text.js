define(['knockout', 'text!templates/inset-text.html'], function (ko, htmlString) {
    function InsetText(params) {
        var self = this;
        self.button = params.button;
        self.buttonStyle = params.buttonStyle;
        self.textMaskId = "insetTextMask-" + self.button.component;
        self.innerShadowId = "insetTextShadow-" + self.button.component;
        self.textMaskUrl = "url(#" + self.textMaskId + ")";
        self.innerShadowUrl = "url(#" + self.innerShadowId + ")";
        self.rectFill = ko.observable(self.buttonStyle.unselected.rectFill);
        self.textFill = ko.observable(self.buttonStyle.unselected.textFill);
        self.button.state.subscribe(function (newVal) {
            switch (newVal) {
                case "selected" :
                    self.rectFill(self.buttonStyle.selected.rectFill);
                    self.textFill(self.buttonStyle.selected.textFill);
                    break;
                case "unselected" :
                    if (!self.button.state() !== "selected") {
                        self.rectFill(self.buttonStyle.unselected.rectFill);
                        self.textFill(self.buttonStyle.unselected.textFill);
                    }
                    break;
                case "hilighted" :
                    self.rectFill(self.buttonStyle.hilighted.rectFill);
                    self.textFill(self.buttonStyle.hilighted.textFill);
                    break;
            }
        });
        /*
         self.selectionArray = params.selectionArray;
         self.selectionArray.push(false);
         self.selectionArray.subscribe(function (newVal) {
         if ((self.state() === "unselected") && (newVal[self.ndx] === true))
         self.state("selected");
         else if ((self.state() === "selected") && (newVal[self.ndx] === false)) {
         self.state("unselected");
         self.selectionArray.splice(self.ndx, 1, false);
         }
         });/*
         self.state.subscribe(function (newVal) {
         switch (newVal) {
         case "unselected":
         self.cssClass("unselected");
         //                    self.bevelColor("rgb(0, 0, 0)");
         //                   self.textColor("rgb(152, 32, 39)");
         break;
         
         case "hilighted":
         self.cssClass("hilighted");
         //                    self.bevelColor("rgb(71, 36, 59)");
         //                    self.textColor("rgb(206, 49, 117)");
         break;
         
         case "selected":
         self.cssClass("selected");
         //                    self.bevelColor("rgb(71, 36, 59)");
         //                  self.textColor("rgb(151, 60, 108");
         break;
         }
         });*/
    }

    return {viewModel: InsetText, template: htmlString};
});