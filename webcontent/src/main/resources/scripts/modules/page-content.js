define(['knockout', 'text!templates/page-content.html', 'text!json/page-sections.json'], function (ko, htmlString, sectionsJSON) {

    function PageContent(params) {
        var self = this;
        self.display = params.display;
        self.pageContent = ko.observableArray(JSON.parse(sectionsJSON).pageSections);
    }

    PageContent.prototype.koDescendantsComplete = function (node) {
        var self = this;
        if ((self.display().section === null) || (self.display().section === undefined))
            window.scrollTo(0, 0);
        else
            window.scrollTo(0, document.getElementById(self.display().section).offsetTop + document.getElementById("headerWrapper").offsetHeight -
                    document.getElementById("mainMenuBarWrapper").offsetHeight);
        self.scrollHandler = {
            handleEvent: function(event) {
                var testsSection = document.getElementById("sampleTests");
                if (testsSection === null)
                    return;
                var mainMenuButtonWrapper = document.getElementById("mainMenuButtonWrapper");
                var headerWrapper = document.getElementById("headerWrapper");
                if ((mainMenuButtonWrapper === null) || (headerWrapper === null))
                    return;
                var sampleTestTop = testsSection.offsetTop + headerWrapper.offsetHeight - mainMenuButtonWrapper.offsetTop;
                var sampleTestBottom = sampleTestTop + testsSection.offsetHeight;
                if (((sampleTestTop >= window.scrollY) && (sampleTestTop <= window.scrollY + window.innerHeight)) ||
                        ((sampleTestBottom >= window.scrollY) && (sampleTestBottom <= window.scrollY + window.innerHeight))) {
                    window.removeEventListener("scroll", self.scrollHandler);
                    document.body.dispatchEvent(new Event("loadSampleTestImages"));
                }
            }
        };
        window.addEventListener("scroll", self.scrollHandler, false);
        self.display.subscribe(function (newVal) {
            if (newVal.page !== "page")
                window.removeEventListener("scroll", self.scrollHandler);
        });
    };

    return {viewModel: PageContent, template: htmlString};
});