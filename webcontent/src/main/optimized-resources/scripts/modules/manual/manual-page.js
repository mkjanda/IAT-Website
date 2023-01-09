define(['knockout'], function(ko) {

    class ManualPage {
        constructor(params) {
            if (!params)
                return;
            let self = this;
            self.navigate = params.navigate;
            self.headerTemplate = params.svg.headerTemplate;
            self.smallHeaderTemplate = params.svg.smallHeaderTemplate;
            self.subHeaderTemplate = params.svg.subHeaderTemplate;
            self.display = params.display;
        }
    }
    
    return ManualPage;
});