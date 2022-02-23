define(['knockout', 'text!templates/menu-bar.html', 'text!json/page-sections.json'], function (ko, htmlString, pageSectionsJSON) {
    function MenuBar(params) {
        var self = this;
        self.display = params.display;
        self.mainContent = JSON.parse(pageSectionsJSON);
        self.menuButtons = ko.observableArray();
        self.mainContent.pageSections.forEach(function (section) {
            if (section.label)
                self.menuButtons.push({ label: section.label, id: section.id, buttonWidth: section.labelWidth });
        });
        self.id = 'mainMenuBarWrapper';
        self.headerHeight = params.headerHeight;
        self.height = params.height;
        self.position = ko.observable("absolute");
        self.top = ko.observable("500px");
    }

    return { viewModel: MenuBar, template: htmlString };
});