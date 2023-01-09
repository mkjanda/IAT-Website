define(['knockout', 'text!templates/page-content.html', 'text!json/page-sections.json'], function (ko, htmlString, sectionsJSON) {

    function PageContent(params) {
        var self = this;
        self.display = params.display;
        self.display.subscribe((val) => {
            if (!val.section)
                window.scrollTo(0, 0);
            else if (val.page === 'page') {
                window.scrollTo(0, document.getElementById(val.section).offsetTop -
                document.getElementById("headerWrapper").querySelector("div.highRes").offsetHeight + window.innerHeight);
            }
            else {
                window.scrollTo(0, 0);
            }
        });
        self.pageContent = ko.observableArray(JSON.parse(sectionsJSON).pageSections);
    }

    PageContent.prototype.koDescendantsComplete = function (node) {
        var self = this;
        if ((self.display().section === null) || (self.display().section === undefined))
            window.scrollTo(0, 0);
        else
            window.scrollTo(0, document.getElementById(self.display().section).offsetTop -
                    document.getElementById("mainMenuBarWrapper").offsetHeight);
        window.addEventListener("scroll", self.scrollHandler, false);
        self.display.subscribe(function (newVal) {
            if (newVal.page !== "page")
                window.removeEventListener("scroll", self.scrollHandler);
        });
    };

    return {viewModel: PageContent, template: htmlString};
});