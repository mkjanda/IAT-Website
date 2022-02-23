define(['knockout', 'text!templates/emailing-product-key-notification.html'], function (ko, htmlString) {
    function EmailingProductKeyNotification(params) {
        var self = this;
        self.state = params.state;
        self.emailResent = ko.observable(false);
    }

    EmailingProductKeyNotification.prototype.postFormData = function (url, formData, onReadyStateChange) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = onReadyStateChange;
        ajax.open("POST", "/FormSubmissions/AlreadyRegistered", "true");
        ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
        ajax.setRequestHeader("accept", "text/json");
        ajax.send(formData);
    };

    EmailingProductKeyNotification.prototype.requestDownload = function () {
        var self = this;
        var formData = new FormData();
        formData.append("email", self.state().email);
        formData.append("needed", "download");
        var onReadyStateChange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.hasErrors) {
                    self.state({action: "error"});
                } else {
                    self.state({action: "download", downloadUrl: response.downloadUrl, firstName: response.firstName, lastName: response.lastName,
                        email: self.state().email, downloaded: true, productKeySent: true,
                        downloadPassword: response.downloadPassword, clientId: response.clientId
                    });
                }
            } else if (this.readyState === 4) {
                self.state({action: "error", errorId : this.getResponseHeader("Error-Id") });
            }
        };
        self.postFormData("FormSubmissions/AlreadyRegistered", formData, onReadyStateChange);
    };

    EmailingProductKeyNotification.prototype.resendEmail = function () {
        var self = this;
        self.emailResent(false);
        var formData = new FormData();
        formData.append("email", self.state().email);
        formData.append("needed", "productKey");
        var onReadyStateChange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.hasErrors) {
                    self.state({action: "error"});
                } else {
                    self.emailResent(true);
                }
            } else if (this.readyState === 4) {
                self.state({action: "error"});
            }
        };
        self.postFormData("FormSubmissions/AlreadyRegistered", formData, onReadyStateChange);
    };

    return {viewModel: EmailingProductKeyNotification, template: htmlString};
});