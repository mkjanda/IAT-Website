define(['knockout', 'text!json/svg-headers.json'], function (ko, jsonText) {
    function FontFaceMap() {
        var json = JSON.parse(jsonText);
        if (!FontFaceMap.prototype.fontMap) {
            let map = new Map();
            Object.values(json).forEach((v) => {
                if (!map.has(v.font))
                    map.set(v.font, ko.observable(undefined));
            });
            FontFaceMap.prototype.fontMap = map;
        }
        this.fontMap = FontFaceMap.prototype.fontMap;
    }
    return new FontFaceMap().fontMap;
});