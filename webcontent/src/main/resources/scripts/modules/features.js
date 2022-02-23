define(['knockout', 'text!templates/features.html', 'text!json/features.json'], function (ko, htmlString, featureList) {

    function Features(params) {
        var self = this;
        self.features = JSON.parse(featureList).sections;
        self.buttonStyles = JSON.parse(featureList).buttonStyles;
        self.menuWidth = 200;
        self.buttons = ko.observableArray();
        self.activeComponent = ko.observable("iat-design");
        self.features.forEach(function(feature) {
            self.buttons.push({ label : feature.label, width : self.menuWidth, height : feature.height, xOffset : self.features.xOffset,
                component : feature.component, state : ko.observable("unselected") });
        });
        self.buttonClick = function() {
            if (this.state() === "selected")
                return;
            self.buttons().forEach(function(but) {
                but.state("unselected");
            });
            this.state("selected");
            self.activeComponent(this.component);
        };
        self.buttonMouseOver = function() {
            if (this.state() === "selected")
                return;
            this.state("hilighted");
        };
        self.buttonMouseOut = function() {
            if (this.state() === "selected")
                return;
            this.state("unselected");
        };
        self.features.forEach(function(val) {
            if (val.module) {
                if (!ko.components.isRegistered(val.component))
                    ko.components.register(val.component, { require : val.module });
            } else {
                if (!ko.components.isRegistered(val.component))
                    ko.components.register(val.component, { template : { require : val.template }});
            }
        });
    }

    return {viewModel: Features, template: htmlString};
});