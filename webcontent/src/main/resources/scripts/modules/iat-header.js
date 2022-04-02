define(['knockout', 'text!templates/iat-header.html'], function (ko, htmlString) {
    function Header(params) {
        var self = this;
        self.headerImageAr = 1680 / 550;
        self.scrollWidth = self.getScrollBarWidth();
        self.logoImageHeight = params.logoImageHeight;
        self.descendantsLoaded = ko.observable(false);
        self.height = ko.observable("0px");
        self.headerWrapper = document.getElementById('headerWrapper');
        self.lastWidth = null;
        self.lastHeight = null;
        self.justResized = false;
        self.resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(e => {
                if (((e.contentRect.width === self.lastWidth) &&
                    (e.contentRect.height === self.lastHeight)) || self.justResized)
                    return;
                self.justResized = true;
                self.picture.style.width = e.contentRect.width.toString() + 'px';
                self.picture.style.height = (e.contentRect.width / self.headerImageAr).toString() + 'px';
                self.logoImageHeight(e.contentRect.width / self.headerImageAr);
                self.headerWidth = e.contentRect.width;
                self.headerHeight = e.contentRect.height;
                window.setTimeout(() => self.justResized = false, 100);
            });
        });
        self.resizeObserver.observe(document.body);
        self.picture = document.querySelector('div#headerWrapper div.highRes picture');
        window.scrollTo(0, 0);
        self.picture.style.width = window.outerWidth - self.getScrollBarWidth() + 'px';
        self.logoImageHeight((window.outerWidth - self.getScrollBarWidth()) / self.headerImageAr);
        self.height(self.logoImageHeight().toString() + "px");
    }
    /*
        Header.prototype._setHeaderImage = function() {
            var self = this;
            self.logoImageHeight(window.innerWidth / self.headerImageAr);
            self.height(self.logoImageHeight().toString() + "px");
            var headerImage;
            for (var ctr = 0; ctr < self.headerImages.length - 1; ctr++) {
                if (ctr === self.headerImages.length - 1) {
                    headerImage = self.headerImages[ctr];
                    break;
                }
                if (window.innerWidth <= self.headerImages[ctr].width) {
                    headerImage = self.headerImages[ctr];
                    break;
                }
            }
            if (headerImage.image === undefined) {
                headerImage.image = new Image();
                headerImage.image.onload = () => {
                    if (document.querySelector("div#headerWrapper div.highRes img") != null) {
                        document.querySelector("div#headerWrapper div.highRes").removeChild(document.querySelector("div#headerWrapper div.highRes img"));
                    }
                    document.querySelector("div#headerWrapper div.highRes").appendChild(headerImage.image);
                };
                headerImage.image.src = headerImage.src;
            } else {
                if (document.querySelector("div#headerWrapper div.highRes img") != null) {
                    document.querySelector("div#headerWrapper div.highRes").removeChild(document.querySelector("div#headerWrapper div.highRes img"));
                }
                document.querySelector("div#headerWrapper div.highRes").appendChild(headerImage.image);
            }
        };
    */
    Header.prototype.getScrollBarWidth = function () {
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
        viewModel: Header,
        template: htmlString
    };
});