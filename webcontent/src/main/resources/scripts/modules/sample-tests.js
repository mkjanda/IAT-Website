define(['knockout', 'text!templates/sample-tests.html', 'text!json/svg-headers.json', 'text!json/sample-tests.json'], function (ko, htmlString, headerTemplates, testsJson) {
    function SampleTests(params) {
        var self = this;
        self.display = params.display;
        self.sampleTestJson = JSON.parse(testsJson);
        self.headerTemplate = JSON.parse(headerTemplates).sectionHeader;
        self.sampleTestData = ko.observableArray([]);
        self.columnTests = ko.pureComputed(function () {
            var nTests = self.sampleTestData().length;
            var cols = [[], []];
            for (var ctr1 = 0; ctr1 < Math.ceil(nTests) / 2; ctr1++) {
                cols[0].push(self.sampleTestData()[ctr1]);
            }
            for (var ctr2 = Math.ceil(nTests / 2); ctr2 < nTests; ctr2++) {
                cols[1].push(self.sampleTestData()[ctr2]);
            }
            return cols;
        });
        self.sampleTestJson.tests.forEach(function (elem) {
            require(["text!" + elem], function (json) {
                self.sampleTestData.push(JSON.parse(json));
            });
        });
        if (!ko.components.isRegistered("sample-test"))
            ko.components.register("sample-test", {require: "modules/sample-test"});
    }

    return {viewModel: SampleTests, template: htmlString};
});