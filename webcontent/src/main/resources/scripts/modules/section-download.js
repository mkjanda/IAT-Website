define(['knockout', 'text!templates/section-download.html', 'text!json/svg-headers.json'], function (ko, htmlString, headerTemplates) {

    function SectionDownload(params) {
        var self = this;
        self.id = params.id;
        self.display = params.display;
        self.formStates = [];
        self.headerTemplate = JSON.parse(headerTemplates).sectionHeader;
        self.headerCaptions = ["Download", "Registered?", "Downloading...", "eMail Sent"];
        self.formStates["download-form"] = {caption: "Download", component: "download-form"};
        self.formStates["already-registered-form"] = {caption: "Registered?", component: "already-registered-form"};
        self.formStates["download-notification"] = {caption: "Downloading...", component: "download-notification"};
        self.formStates["emailing-product-key-notification"] = {caption: "eMail Sent", component: "emailing-product-key-notification"};
        self.formStates["error"] = {caption: "Server Error", component: "server-error-notification"};
        self.errorId = ko.observable(null);
        self.state = ko.observable({downloaded: false, productKeySent: false });
        self.form = ko.observable(self.formStates["download-form"]);
        self.form.subscribe(function () {
            self.display({ page : "page", section : self.id });
        });
        self.state.subscribe(function (newVal) {
            switch (newVal.action) {
                case "register" :
                    self.form(self.formStates["download-form"]);
                    break;
                case "client-exists" :
                    self.form(self.formStates["already-registered-form"]);
                    break;
                case "user-exists" :
                    self.form(self.formStates["already-registered-form"]);
                    break;
                case "already-registered" :
                    self.form(self.formStates["already-registered-form"]);
                    break;
                case "download" :
                    self.form(self.formStates["download-notification"]);
                    break;
                case "initial-download" :
                    self.form(self.formStates["download-notification"]);
                    break;
                case "emailing-product-key" :
                    self.form(self.formStates["emailing-product-key-notification"]);
                    break;
                case "organization-download" :
                    self.form(self.formStates["download-notification"]);
                    break;
                case "error" :
                    self.errorId(self.state().errorId);
                    self.form(self.formStates["error"]);
                    break;
            }
        });
        self.caption = ko.pureComputed(function () {
            return self.form().caption;
        });
        if (!ko.components.isRegistered("download-form"))
            ko.components.register("download-form", {require: "modules/download-form"});
        if (!ko.components.isRegistered("already-registered-form"))
            ko.components.register("already-registered-form", {require: "modules/already-registered-form"});
        if (!ko.components.isRegistered("download-notification"))
            ko.components.register("download-notification", {require: "modules/download-notification"});
        if (!ko.components.isRegistered("emailing-product-key-notification"))
            ko.components.register("emailing-product-key-notification", {require: "modules/emailing-product-key-notification"});
        if (!ko.components.isRegistered("server-error-notification")) {
            ko.components.register("server-error-notification", {require: "modules/server-error-notification"});
        }
    }

    return {viewModel: SectionDownload, template: htmlString};
});