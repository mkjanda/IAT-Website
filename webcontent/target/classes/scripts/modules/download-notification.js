define(['knockout', 'text!templates/download-notification.html', 'text!json/svg-headers.json'], function (ko, htmlString, headerTemplates) {
    function DownloadNotification(params) {
        var self = this;
        self.state = params.state;
        self.display = params.display;
        var headerJson = JSON.parse(headerTemplates);
        self.headerTemplate = headerJson.sectionHeader;
        self.productKeyTemplate = headerJson.productKey;
        self.downloadLink = ko.pureComputed(function () {
            return self.state().downloadUrl + "?password=" + encodeURIComponent(self.state().downloadPassword) + "&clientId=" + self.state().clientId;
        });
        self.downloadInterval = window.setInterval(function () {
            var downloadFrame = document.getElementById("downloadFrame");
            if (downloadFrame) {
                window.clearInterval(self.downloadInterval);
                self.downloadTimeout = window.setTimeout(function () {
                    downloadFrame.src = self.downloadLink();
                }, 1000);
            }
        }, 100);
    }

    DownloadNotification.prototype.download = function() {
        var self = this;
        window.location.replace(self.downloadLink());
    }

    DownloadNotification.prototype.goToPrivacy = function () {
        var self = this;
        self.display({ page: "manual", section: "manual-privacy" });
    };

    DownloadNotification.prototype.retrieveProductKey = function () {
        var self = this;
        var formData = new FormData();
        formData.append("email", self.state().email);
        formData.append("needed", "productKey");
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.hasErrors) {
                    self.state({ action: "error" });
                } else {
                    self.state({
                        action: "emailing-product-key", downloadUrl: self.state().downloadUrl, firstName: self.state().firstName, lastName: self.state().lastName,
                        email: self.state().email, downloaded: true, productKeySent: true,
                        downloadPassword: self.state().downloadPassword, clientId: self.state().clientId
                    });
                }
            } else if (this.readyState === 4) {
                self.state({ action: "error", errorId: this.getResponseHeader("Error-Id") });
            }
        };
        ajax.open("POST", "/FormSubmissions/AlreadyRegistered", true);
        ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
        ajax.setRequestHeader("Accept", "text/json");
        ajax.send(formData);
    };

    DownloadNotification.prototype.copyProductKey = function () {
        var self = this;
        navigator.clipboard.writeText(self.state().productKey);
    };

    return { viewModel: DownloadNotification, template: htmlString };
});