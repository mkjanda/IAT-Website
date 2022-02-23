define(['knockout', 'text!templates/already-registered-form.html'], function (ko, htmlString) {
    function AlreadyRegisteredForm(params) {
        var self = this;
        self.needed = ko.observable("");
        self.errors = ko.observableArray([]);
        self.state = params.state;
        self.wasAutoRedirect = (self.state().email !== undefined);
        self.noSuchEmail = ko.pureComputed(() => ((self.state().action !== 'client-exists') &&
            (self.state().action !== 'user-exists') && !self.state().clientId));
        self.formId = params.formId;
        self.posting = ko.observable(false);
        self.waitDots = ko.observable(0);
        self.hasErrors = ko.observable(false);
        self.pleaseWaitText = ko.pureComputed(function () {
            var text = "Please wait";
            for (var ctr = 0; ctr < self.waitDots(); ctr++)
                text += ". ";
            return text;
        });
        self.email = ko.observable(null);
    }

    AlreadyRegisteredForm.prototype.showRegisterForm = function () {
        var self = this;
        var form = document.getElementById(self.formId);
        self.state({ action: "register", email: form.elements.namedItem("email").value, noSuchEmail: true });
    };

    AlreadyRegisteredForm.prototype.post = function () {
        var self = this;
        self.waitDotInterval = window.setInterval(function () {
            if (self.waitDots() < 3)
                self.waitDots(self.waitDots() + 1);
            else
                self.waitDots(0);
        }, 300);
        self.posting(true);
        var form = document.getElementById(self.formId);
        var formData = new FormData();
        formData.append("needed", form.elements.namedItem("needed").value);
        formData.append("email", form.elements.namedItem("email").value);
        self.email(form.elements.namedItem("email").value);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status !== 429)) {
                window.clearInterval(self.waitDotInterval);
                self.errors([]);
                self.posting(false);
                document.getElementById("already-registered-form-post").disabled = false;
            }
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(ajax.responseText);
                if (response.hasErrors) {
                    self.hasErrors(true);
                    response.globalErrors.forEach((ge) => self.errors.push({ field: 'global', message: ge }));
                    Object.keys(response.fieldErrors).forEach((k) => self.errors.push({ field: k, message: response.fieldErrors[k] }));
                    return;
                } else if (response.download) {
                    self.state({
                        action: "download", firstName: response.firstName, lastName: response.lastName, email: response.email,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent, downloadUrl: response.downloadUrl,
                        downloadPassword: response.downloadPassword, clientId: response.clientId
                    });
                } else if (response.productKeySent) {
                    self.state({
                        action: "emailing-product-key", firstName: response.firstName, lastName: response.lastName, email: response.email,
                        downloaded: self.state().downloaded, productKeySent: true, emailSentToClient: response.emailSentToClient,
                        clientId: response.clientId
                    });
                }
            } else if (this.readyState === 4) {
                self.state({ action: "error", errorId: this.getResponseHeader("Error-Id") });
            }
        };
        self.errors([]);
        self.hasErrors(false);
        window.setTimeout(function () {
            ajax.open("POST", "FormSubmissions/AlreadyRegistered", true);
            ajax.setRequestHeader("Accept", "text/json");
            ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
            ajax.send(formData);
        }, 100);
    };

    return { viewModel: AlreadyRegisteredForm, template: htmlString };
});