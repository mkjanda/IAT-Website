define(['knockout', 'text!templates/slideshow-canvas.html'], function (ko, htmlString) {
    var SLIDE_PAUSE_PERIOD = 5000;
    var SLIDE_MOVE_PERIOD = 500;
    var images = ["screenshot1.png", "screenshot2.png", "screenshot3.png", "screenshot4.png", "screenshot5.png", "screenshot6.png"];
    function SlideShowCanvas(params) {
        var self = this;
        self.activeImageNdx = 0;
        self.nextImageNdx = null;
        self.lastT = null;
        self.lastDisplayT = null;
        self.id = params.id;
        self.width = params.width;
        self.height = params.height;
        self.imageNames = [];
        images.forEach(i => self.imageNames.push("images/" + i));
        self.images = ko.observableArray();
        self.imageDataAry = [];
        self.nextImageNdx = 1;
        self.numImages = self.imageNames.length;
        self.loadImages = self._loadImages.bind(self);
        self.images.subscribe(() => self.imageLoaded());

        self.display = params.display;
        self.on = ko.pureComputed(() => params.display().page === 'page');
    }
    SlideShowCanvas.prototype._loadImages = function() {
        let self = this;
        self.imageNames.forEach((name) => {
            let img = new Image();
            img.onload = (evt) => {
                self.images.push(img);
            };
            img.src = name;
        });
    };
    SlideShowCanvas.prototype.sizeImage = function (img) {
        var self = this;
        if (!self.canvas) {
            self.canvas = document.getElementById(self.id);
            self.ctx = self.canvas.getContext("2d");
            self.background = self.ctx.getImageData(0, 0, self.width, self.height);
            self.offscreen = document.createElement("canvas");
            self.offscreen.width = self.width;
            self.offscreen.height = self.height;
            self.offscreenCtx = self.offscreen.getContext("2d");
        }
        var selfAr = self.width / self.height;
        var imgAr = img.width / img.height;
        self.offscreenCtx.putImageData(self.background, 0, 0);
        var finalImgWidth, finalImgHeight;
        if (selfAr > imgAr) {
            if (img.height > self.height) {
                finalImgHeight = self.height;
                finalImgWidth = img.width * self.height / img.height;
                self.offscreenCtx.drawImage(img, (self.width - finalImgWidth) / 2, 0, self.width - (self.width - finalImgWidth) / 2, self.height);
            } else {
                self.offscreenCtx.drawImage(img, (self.width - img.width) / 2, (self.height - img.height) / 2,
                        self.width - (self.width - img.width) / 2, self.height - (self.height - img.height) / 2);
            }
        } else {
            if (img.width > self.width) {
                finalImgWidth = self.width;
                finalImgHeight = img.height * self.width / img.width;
                self.offscreenCtx.drawImage(img, 0, (self.height - finalImgHeight) / 2, self.width, self.height - (self.height - finalImgHeight) / 2);
            } else {
                self.offscreenCtx.drawImage(img, (self.width - img.width) / 2, (self.height - img.height) / 2,
                        self.width - (self.width - img.width) / 2, self.height - (self.height - img.height) / 2);
            }
        }
        return self.offscreenCtx.getImageData(0, 0, self.width, self.height);
    };

    SlideShowCanvas.prototype.imageLoaded = function () {
        var self = this;
        var imgData = self.sizeImage(self.images()[self.images().length - 1]);
        self.imageDataAry.push(imgData);
        if (!self.lastT) {
            self.on.subscribe(newVal => {
                if (newVal) {
                    self.lastT = 0;
                    window.requestAnimationFrame(function (t) {
                        self.runShow(t);
                    });
                }
            });
            self.lastT = 0;
            window.requestAnimationFrame(function (t) {
                self.runShow(t);
            });
        }
    };

    SlideShowCanvas.prototype.runShow = function (t) {
        var self = this;
        if (!self.on())
            return;
        if ((self.lastT === 0) || (self.imageDataAry.length === 1)) {
            self.ctx.putImageData(self.imageDataAry[0], 0, 0);
            self.lastDisplayT = t;
        } else if (t - SLIDE_PAUSE_PERIOD < self.lastDisplayT) {
            self.lastT = t;
        } else if ((t > self.lastDisplayT + SLIDE_PAUSE_PERIOD + SLIDE_MOVE_PERIOD) && (self.nextImageNdx < self.imageDataAry.length)) {
            self.ctx.putImageData(self.imageDataAry[self.nextImageNdx], 0, 0);
            self.activeImageNdx = self.nextImageNdx;
            if (++self.nextImageNdx >= self.imageDataAry.length) {
                self.nextImageNdx = 0;
            }
            self.lastDisplayT = t;
        } else if (t > self.lastDisplayT + SLIDE_PAUSE_PERIOD) {
            var activeX = (t - (self.lastDisplayT + SLIDE_PAUSE_PERIOD)) * (t - (self.lastDisplayT + SLIDE_PAUSE_PERIOD)) / (SLIDE_MOVE_PERIOD * SLIDE_MOVE_PERIOD) * self.width;
            self.ctx.putImageData(self.imageDataAry[self.nextImageNdx], activeX - self.width, 0);
            self.ctx.putImageData(self.imageDataAry[self.activeImageNdx], activeX, 0);
        }
        self.lastT = t;
        window.requestAnimationFrame(function (t) {
            self.runShow(t);
        });
    };

    return {viewModel: SlideShowCanvas, template: htmlString};
});