define(['knockout', 'modules/font-face-map', 'text!templates/page-body.html', 'text!json/page-sections.json'],
    function (ko, fontMap, htmlString, sectionsJson) {
        function PageBody() {
            var self = this;
            self.fontMap = fontMap;
            self.sections = JSON.parse(sectionsJson);
            self.logoImageHeight = ko.observable(0);
            self.isPoppingState = false;
            let search = new URLSearchParams(window.location.search);
            self.display = ko.observable({ page: "page", section: null });
            self.display.subscribe((newVal) => {
                if (!self.isPoppingState) {
                    window.history.pushState(newVal, document.title);
                } 
                self.isPoppingState = false;
            });
            window.onpopstate = (evt) => {
                self.isPoppingState = true;
                self.display(evt.state);
            };
            window.history.pushState({ page : 'page' }, document.title);
            self.scrollWidth = self.getScrollBarWidth();
            self.descendantsComplete = ko.observable(false);
            self.currentPage = self.display().currentPage;
            self.display.subscribe(function (newVal) {
                if (!newVal.section || (newVal.page === 'manual')) {
                    window.scrollTo(0, 0);
                }
                else if ((newVal.page === "page") && (self.currentPage === "page")) {
                    window.scrollTo(0, document.getElementById(newVal.section).offsetTop + document.getElementById("headerWrapper").offsetHeight - 2 *
                        document.getElementById("mainMenuBarWrapper").offsetHeight);
                } 
                self.currentPage = newVal.page;
            });
            self.currentPage = "page";
            if (search.has("page") && search.has("section")) {
                let page = search.get("page");
                let section = search.get("section");
                if ((page === 'page') || (page === 'manual')) {
                    let validSections = [];
                    self.sections.pageSections.forEach(s => validSections.push(s.id));
                    self.sections.manual.forEach(s => validSections.push(s.component));
                    if (validSections.find((s) => { return s === section; }))
                        self.display( { page : page, section : section });
                } else if ((page === 'page') && !section) 
                    self.display( { page : 'page', section : null });
            }
            self.onDescendantsComplete = self._onDescendantsComplete.bind(self);
        }


        PageBody.prototype._onDescendantsComplete = function () {
            let lastWidth = null;
            let resizeFunc = rect => {
                if (lastWidth === rect.width) 
                    return;
               if (screen.availWidth > screen.availHeight) {
                   document.body.style.width = (rect.width > 1200 ? 1200 : rect.width).toString() + 'px';
               } else {
                   document.body.style.width = rect.width.toString() + "px";
               }
               lastWidth = rect.width;
            };
            resizeFunc({ width : 1200 });
        };

        PageBody.prototype.getScrollBarWidth = function () {
            let outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.overflow = "scroll";
            outer.style.msOverflowStyle = "scrollbar";
            document.body.appendChild(outer);

            let inner = document.createElement("div");
            outer.appendChild(inner);
            let scrollWidth = outer.offsetWidth - inner.offsetWidth;
            outer.parentNode.removeChild(outer);
            return scrollWidth;
        };


        return {
            viewModel: PageBody,
            template: htmlString
        };
    });