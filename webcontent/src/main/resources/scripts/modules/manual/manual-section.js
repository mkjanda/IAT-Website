define(['knockout', 'text!json/svg-headers.json'], function (ko, headersJson) {

    class ManualSection {
        constructor(params) {
            var self = this;
            self.display = params.display;
            self.navigate = self._navigate.bind(self);
            self.headerTemplate = JSON.parse(headersJson).sectionHeader;
            self.smallHeaderTemplate = JSON.parse(headersJson).smallSectionHeader;
            self.subHeaderTemplate = JSON.parse(headersJson).subHeader;
        }
        _navigate(page, section) {
            let self = this;
            self.display({ page: page, section: section });
        }
    }

    return ManualSection;
});