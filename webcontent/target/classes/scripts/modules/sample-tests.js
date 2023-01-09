define(['knockout', 'text!templates/sample-tests.html', 'text!json/svg-headers.json', 'text!json/sample-tests.json'], function (ko, htmlString, headerTemplates, testsJson) {
    function SampleTests(params) {
        var self = this;
        self.display = params.display;
        self.sampleTestJson = JSON.parse(testsJson);
        self.headerTemplate = JSON.parse(headerTemplates).sectionHeader;
        self.sampleTestData = ko.observableArray([]);
        self.sampleTestJson.tests.forEach(function (elem) {
            require(["text!" + elem], function (json) {
                self.sampleTestData.push(JSON.parse(json));
            });
        });
        if (!ko.components.isRegistered("sample-test"))
            ko.components.register("sample-test", {
                require: "modules/sample-test"
            });
        self.resizeObserver = new ResizeObserver(elems => {
            if (elems.length > 0)
                self.calculateHeight();
        });
        const mutationObserver = new MutationObserver((mutationList) => {
            for (const mutation of mutationList) {
                if ((mutation.type == "subtree") || (mutation.type == "childList")) {
                    for (const node of addedNodes) {
                        resizeObserver.observe(node);
                    }
                }
            }
        });
        self.testLoaded = ((elem) => {
            self.calculateHeight();
            self.resizeObserver.observe(elem);
        }).bind(self);
    }

    SampleTests.prototype.calculateHeight = () => {
        let testNode = document.getElementById("sampleTests");
        if (testNode === null)
            return;
        let width = testNode.clientWidth;
        let tests = testNode.querySelectorAll("sample-test");
        if (tests.length === 0)
            return;
        let numTests = tests.length;
        let testWidth = tests[0].clientWidth;
        let nCols = Math.floor(width / testWidth);
        let nRows = Math.ceil(numTests / nCols);
        let height = 0;
        let ctr = 0;
        let colHeight = 0;
        while (ctr < tests.length) {
            colHeight = 0;
            do {
                colHeight += tests[ctr++].offsetHeight + 33;
            } while ((ctr % nRows !== 0) && (ctr < tests.length));
            if (colHeight > height)
                height = colHeight;
        }
        testNode.style.maxHeight = height.toString() + 'px';
        testNode.style.height = height.toString() + "px";
    };

    return {
        viewModel: SampleTests,
        template: htmlString
    };
});