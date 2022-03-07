define(['knockout', 'modules/font-face-map', 'text!templates/page-body.html', 'text!json/page-sections.json'],
    function (ko, fontMap, htmlString, sectionsJson) {
        function PageBody() {
            var self = this;
            self.fontMap = fontMap;
            self.sections = JSON.parse(sectionsJson);
            self.logoImageHeight = ko.observable(0);
            self.isPoppingState = false;
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
            self.manualSection = ko.pureComputed(function () {
                if (self.display().page !== "manual")
                    return null;
                var manualSection = null;
                self.sections.manual.forEach((sec)  => {
                    if (sec.component === self.display().section) {
                        manualSection = sec;
                    }
                });
                return manualSection;
            });
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
        }

        PageBody.prototype.koDescendantsComplete = function () {
            var self = this;
            require(['https://use.typekit.net/sra2zjj.js'], function () {
                Typekit.load({
                    async: true,
                    active: function () {
                        document.fonts.onloadingdone = () => {
                            Object.keys(self.fontMap).forEach((k) => {
                                var loopSelf = {};
                                loopSelf.k = k;
                                loopSelf.tk = k.replace(/^([0-9]+\s+[0-9]+[A-Za-z]+\s+)(.+)$/, "$1tk-$2");
                                loopSelf.kPromise = document.fonts.load(loopSelf.k);
                                loopSelf.tkPromise = document.fonts.load(loopSelf.tk);
                                loopSelf.myPromise = Promise.resolve(loopSelf).then(l => l.tkPromise.then(() => l)).then((l) => l.kPromise.then(() => l)).then((l) => {
                                    self.fontMap[l.k](l.k);
                                });
                            });
                        };
                        document.dispatchEvent(new Event("descendantsComplete"));
                    }
                })
            });
            self.descendantsComplete(true);
        };

        PageBody.prototype.getScrollBarWidth = function () {
            var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.overflow = "scroll";
            outer.style.msOverflowStyle = "scrollbar";
            document.body.appendChild(outer);

            var inner = document.createElement("div");
            outer.appendChild(inner);
            var scrollWidth = outer.offsetWidth - inner.offsetWidth;
            outer.parentNode.removeChild(outer);
            return scrollWidth;
        };


        return {
            viewModel: PageBody,
            template: htmlString
        };
    });