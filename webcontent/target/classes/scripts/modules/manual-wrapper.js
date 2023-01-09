define(['knockout', 'text!templates/manual-wrapper.html', 'text!json/svg-headers.json', 'text!json/page-sections.json'], 
        function (ko, htmlString, headersJson, sectionsJSON) {


    function ManualSection(params) {
        if (!params)
            return;
        var self = this;
        self.display = params.display;
        self.sectionContent = ko.observable(undefined);
        self.sections = JSON.parse(sectionsJSON).manual;
        self.manualContent = ko.pureComputed(() => self.sections.find(s => s.component === self.display().manualSection).component);
        self.navigate = self._navigate.bind(self);
        self.svg = {};
        self.svg.headerTemplate = JSON.parse(headersJson).sectionHeader;
        self.svg.smallSectionHeader = JSON.parse(headersJson).smallSectionHeader;
        self.svg.subHeaderTemplate = JSON.parse(headersJson).subHeader;
    }

    ManualSection.prototype._navigate = function () {
        let self = this;
        self.display({
            page: 'page',
            section: self.display().section,
            manualSection: self.display().manualSection
        });
    };

    return { viewModel : ManualSection, template : htmlString };
});