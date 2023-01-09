define(['knockout', 'text!templates/download-form.html', 'text!json/svg-headers.json'], function (ko, htmlString, templates) {

    function RequestDownload(params) {
        var self = this;
        self.state = params.state;
        self.errors = ko.observableArray([]);
        self.hasErrors = ko.observable(false);
        self.formId = params.formId;
        self.alreadyRegisteredTemplate = JSON.parse(templates).attentionHeader;
        self.errorCaptionTemplate = JSON.parse(templates).errorCaption;
        self.headerTemplate = JSON.parse(templates).sectionHeader;
        self.display = params.display;
        self.posting = ko.observable(false);
        self.waitDots = ko.observable(0);
        self.waitDotInterval = null;
        self.pleaseWaitText = ko.pureComputed(function () {
            var text = "Please wait";
            for (var ctr = 0; ctr < self.waitDots(); ctr++)
                text += ". ";
            return text;
        });
    }

    RequestDownload.prototype.showAlreadyRegistered = function () {
        var self = this;
        self.state({
            action: "already-registered", firstName: self.state().firstName, lastName: self.state().lastName, email: self.state().email,
            downloaded: self.state().downloaded, productKeySent: self.state().productKeySent
        });
    };

    RequestDownload.prototype.post = function () {
        var self = this;
        if (self.waitDotInterveral !== null) {
            self.waitDotInterval = window.setInterval(function () {
                if (self.waitDots() < 3)
                    self.waitDots(self.waitDots() + 1);
                else
                    self.waitDots(0);
            }, 300);
        }
        self.posting(true);
        var form = document.getElementById(self.formId);
        var formData = new FormData();
        formData.append("firstName", form.elements.namedItem("firstName").value);
        formData.append("lastName", form.elements.namedItem("lastName").value);
        formData.append("email", form.elements.namedItem("email").value);
        formData.append("use", form.elements.namedItem("use").value);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status !== 429)) {
                window.clearInterval(self.waitDotInterval);
                self.posting(false);
                self.errors([]);
            }
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.hasErrors) {
                    self.hasErrors(response.hasErrors);
                    response.globalErrors.forEach(ge => self.errors.push({ field : 'global', message : ge }));
                    Object.keys(response.fieldErrors).forEach(k => self.errors.push({ field : k, message : response.fieldErrors[k] }));
                } else if (response.clientExists === true) {
                    self.state({
                        action: "client-exists", firstName: response.firstName, lastName: response.lastName, email: response.email,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent
                    });
                } else if (response.userExists === true) {
                    self.state({
                        action: "user-exists", firstName: response.firstName, lastName: response.lastName, email: response.email,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent
                    });
                } else if (response.organizationDownload) {
                    self.state({
                        action: 'organization-download', downloadUrl: response.downloadUrl, firstName: response.firstName, lastName: response.lastName,
                        clientId: response.clientId, downloadPassword: response.downloadPassword,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent, productKey: response.productKey
                    });
                } else {
                    self.state({
                        action: "initial-download", downloadUrl: response.downloadUrl, firstName: response.firstName, lastName: response.lastName,
                        clientId: response.clientId, downloadPassword: response.downloadPassword,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent, productKey: response.productKey
                    });
                }
            } else if ((this.readyState === 4) && (this.status === 429)) {
                return;
            } else if ((this.readyState === 4) && (this.status === 500)) {
                self.state({ action: "error", errorId: this.getResponseHeader("Error-Id") });
            }
        };
        window.setTimeout(function () {
            ajax.open("POST", "/FormSubmissions/RequestProduct", true);
            ajax.setRequestHeader("Accept", "text/json");
            ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
            ajax.send(formData);
        }, 100);
    };

    return { viewModel: RequestDownload, template: htmlString };
});