define(['knockout', 'text!json/svg-headers.json'], function (ko, jsonText) {
    function FontFaceMap() {
        var json = JSON.parse(jsonText);
        var self = this;
        self.fontArray = [];
        Object.values(json).forEach((v) => {
            self.fontArray[v.font] = ko.observable(null);
        });
    }

    FontFaceMap.prototype.getMap = function() {
        return this.fontArray;
    };

    if (!FontFaceMap.prototype.fontMap) {
        FontFaceMap.prototype.fontMap = (new FontFaceMap()).getMap();
    }
    return FontFaceMap.prototype.fontMap;
});