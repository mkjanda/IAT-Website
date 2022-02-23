define(['knockout', 'text!templates/iat-header.html'], function (ko, htmlString) {
    function Header(params) {
        var self = this;
        self.headerImageAr = 1680 / 550;
        self.headerImages = [ { src : '../imagges/iat-website-header@0.25x.jpg', width : 1680, image : undefined },
            { src : '../images/iat-website-header@0.5x.jpg', width : 3360, image : undefined },
            { src : '../images/iat-website-header@0.75x.jpg', width : 5040, image : undefined },
            { src : '../images/iat-website-header@1.0x.jpg', width : 6720, image : undefined } ];
        self.scrollWidth = self.getScrollBarWidth();
        self.logoImageHeight = params.logoImageHeight;
        self.setHeaderImage = self._setHeaderImage.bind(self);
        self.descendantsLoaded = ko.observable(false);
        self.height = ko.observable("0px");
        self.onDescendantsComplete = (function () {
            self.descendantsLoaded(true);
            self.setHeaderImage();
            window.scrollTo(0, 0);
        }).bind(self); 
        document.addEventListener("descendantsComplete", self.onDescendantsComplete, false, true); 
        self.logoImageHeight((window.innerWidth - self.getScrollBarWidth()) / self.headerImageAr);
        self.height(self.logoImageHeight().toString() + "px");
        window.onresize = self.setHeaderImage;
    }

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
    }

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


    return { viewModel: Header, template: htmlString };
});
