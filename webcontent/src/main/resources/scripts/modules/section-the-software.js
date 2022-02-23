define(['knockout', 'text!templates/section-the-software.html', 'text!json/svg-headers.json'], function (ko, htmlString, headerTemplates) {
    function TheSoftware(params) {
        var self = this;
        self.headerTemplate = JSON.parse(headerTemplates).sectionHeader;
        self.display = params.display;
        if (!ko.components.isRegistered("slideshow-canvas"))
            ko.components.register("slideshow-canvas", {require: "modules/slideshow-canvas"});
        if (!ko.components.isRegistered("features"))
            ko.components.register("features", {require: "modules/features"});
    }

    return {viewModel: TheSoftware, template: htmlString};
});