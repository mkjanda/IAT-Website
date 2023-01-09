define(['knockout', 'text!templates/sample-test.html', 'text!json/svg-headers.json'], function (ko, htmlString, headerJson) {

    function SampleTest(params) {
        SampleTest.Count++;
        var self = this;
        self.display = params.display;
        self.id = "sample-test-" + SampleTest.Count.toString();
        self.testData = params.testData;
        self.slideWidth = params.slideWidth;
        self.slideHeight = self.testData.height * self.slideWidth / self.testData.width;
        self.images = [];
        self.presentationNum = -1;
        self.isMouseOver = false;
        self.slide = new Image();
        self.headerTemplate = JSON.parse(headerJson).sampleTestHeader;
        self.playPresentation = self._playPresentation.bind(self);
        self.onMouseOver = self._onMouseOver.bind(self);
        self.onMouseOut = self._onMouseOut.bind(self);
        self.canvasId = self.id + "-canvas";
        self.tLastPresentation = -1;
        self.loadImages = self._loadImages.bind(self);
        self.childrenComplete = self._childrenComplete.bind(self);
        self.testLoaded = params.testLoaded;
    }

    SampleTest.Count = 0;

    SampleTest.prototype._childrenComplete = function() {
        let self = this;
        self.canvas = document.getElementById(self.canvasId);
        self.ctx = self.canvas.getContext("2d");
        self.slide.onload = () => {
            self.ctx.drawImage(self.slide, 0, 0, self.canvas.width, self.canvas.height);
        };
        self.slide.src = self.testData.slideSrc;
        self.elem = document.getElementById(self.id);
        self.elem.addEventListener("mouseout", self.onMouseOut);
        self.elem.addEventListener("mouseover", self.onMouseOver);
        self.elem.addEventListener("mouseover", self.loadImages);
        self.testLoaded(document.getElementById(self.id));
    };

    SampleTest.prototype._loadImages = function () {
        var self = this;
        self.elem.removeEventListener("mouseover", self.loadImages);
        self.testData.images.forEach(function (imgData) {
            var img = new Image();
            img = new Image();
            img.src = "images/tests/" + self.testData.name + "/" + imgData.filename;
            self.images.push(img);
        });
        window.requestAnimationFrame((t) => self.playPresentation(t));
    };

    SampleTest.prototype._descendantsComplete = function (node) {
        var self = this;
        self.elem = node;
    };

    SampleTest.prototype._onMouseOver = function () {
        var self = this;
        self.isMouseOver = true;
        window.requestAnimationFrame(function (t) {
            self.playPresentation(t);
        });
    };

    SampleTest.prototype._onMouseOut = function () {
        var self = this;
        self.isMouseOver = false;
        if (self.ctx !== undefined)
            self.ctx.drawImage(self.slide, 0, 0, self.canvas.width, self.canvas.height);
    };

    SampleTest.prototype._playPresentation = function (t) {
        var self = this;
        if (!self.isMouseOver) {
            self.tLastPresentation = -1;
            return;
        }
        if (t - self.tLastPresentation > 250) {
            var currBlock = 0;
            var presNum = Math.floor(Math.random() * 90);
            if (presNum < 10)
                currBlock = 0;
            else if (presNum < 20)
                currBlock = 1;
            else if (presNum < 30)
                currBlock = 2;
            else if (presNum < 50)
                currBlock = 3;
            else if (presNum < 60)
                currBlock = 4;
            else if (presNum < 70)
                currBlock = 5;
            else if (presNum < 90)
                currBlock = 6;
            else {
                currBlock = 0;
                self.presentationNum = 0;
            }
            var imageIds = [self.testData.blocks[currBlock].leftKey, self.testData.blocks[currBlock].rightKey, self.testData.blocks[currBlock].instructions,
            self.testData.blocks[currBlock].stimuli[Math.floor(Math.random() * self.testData.blocks[currBlock].stimuli.length)]];
            if (imageIds.every(function (id) {
                if (self.images[id] === undefined)
                    return false;
                return self.images[id].complete;
            })) {
                var offscreenCanvas = document.createElement("canvas");
                offscreenCanvas.width = self.testData.width;
                offscreenCanvas.height = self.testData.height;
                var offscreenCtx = offscreenCanvas.getContext("2d");
                offscreenCtx.fillStyle = self.testData.backColor;
                offscreenCtx.fillRect(0, 0, self.testData.width, self.testData.height);
                imageIds.forEach(function (id) {
                    var imageData = self.testData.images[id];
                    offscreenCtx.drawImage(self.images[id], imageData.x, imageData.y, imageData.width, imageData.height);
                });
                self.ctx.drawImage(offscreenCanvas, 0, 0, self.testData.width, self.testData.height, 0, 0, self.slideWidth, self.slideHeight);
                self.presentationNum = presNum + 1;
            } else if ((self.presentationNum === -1) && (self.slideImage)) {
                self.ctx.drawImage(self.slideImage, 0, 0, self.slideImage.width, self.slideImage.height, 0, 0, self.slideWidth, self.slideHeight);
            }
            self.tLastPresentation = t;
        }
        window.requestAnimationFrame(function (t) {
            self.playPresentation(t);
        });
    };

    return { viewModel: SampleTest, template: htmlString };
});