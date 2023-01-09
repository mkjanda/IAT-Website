define(['knockout', 'text!templates/section-oauth.html', 'text!json/svg-headers.json'], function (ko, htmlString, svgJson) {

    function OAuth(params) {
        var self = this;
        var svgTemplates = JSON.parse(svgJson);
        self.display = params.display;
        self.navigate = function (p, s) {
            self.display({ page : p, section : s });
        };
        self.errorId = ko.observable(null);
        self.sectionHeaderTemplate = svgTemplates.subHeader;
        self.errorCaptionTemplate = svgTemplates.errorCaption;
        self.oauthForm = ko.observable("oauthRegistration");
        self.errors = ko.observableArray([]);
        self.hasErrors = ko.observable(false);
        self.registrationResponse = ko.observable(null);
        self.redirect = ko.observable();
        self.redirectUpdateError = ko.observable();
        self.redirectStatus = { none : 0, editing : 1, updating : 2, complete : 3, errorState : 4 };
        self.redirectUpdatePhase = ko.observable(self.redirectStatus.none);
        self.posting = ko.observable(false);
        self.waitDots = ko.observable(0);
        self.pleaseWaitText = ko.pureComputed(function() {
           var text = "Please wait";
           for (var ctr = 0; ctr < self.waitDots(); ctr++)
               text += ". ";
           return text;
        });
        if (!ko.components.isRegistered("server-error-notification")) {
            ko.components.register("server-error-notification", { require : "modules/server-error-notification" });
        }
        return this;
    }

    OAuth.prototype.submitOAuthRequest = function() {
        var self = this;
        self.waitDotInterval = window.setInterval(function() {
            if (self.waitDots() < 3)
                self.waitDots(self.waitDots() + 1);
            else
                self.waitDots(0);
        }, 300);
        self.posting(true);
        var form = document.getElementById("oauthRegistration");
        var formData = new FormData(form);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status !== 429)) {
                window.clearInterval(self.waitDotInterval);
                self.posting(false);
                self.errors([]);
            }
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                self.hasErrors(response.hasErrors);
                if (response.hasErrors) {
                    self.hasErrors(true);
                    response.globalErrors.forEach((ge) => self.errors.push({ field : 'global', message : ge }));
                    Object.keys(response.fieldErrors).forEach((k) => self.errors.push({ field : k, message : response.fieldErrors[k] }));
                    return;
                }
                self.errors([]);
                self.hasErrors(false);
                self.registrationResponse(response);
                self.redirect(response.redirect);
                self.oauthForm("oauthConfirmation");
                self.navigate("page", "oauthConfirmation");
            } else if ((this.readyState === 4) && (this.status !== 429)) {
                self.errorId(this.getResponseHeader("Error-Id"));
                self.oauthForm("error");
            }
        };
        window.setTimeout(function() {
            ajax.open("POST", "/FormSubmissions/OauthRegistration", true);
            ajax.setRequestHeader("accept", "text/json");
            ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
            ajax.send(formData);
        }, 100);
    };

    OAuth.prototype.startRedirectUpdate = function(phase) {
        var self = this;
        self.redirectUpdatePhase(self.redirectStatus.editing);
    };

    OAuth.prototype.redirectInputClick = function() {
        var self = this;
        document.getElementById("oauthRedirectUpdateInput").className = "";
    };
    
    OAuth.prototype.submitRedirectUpdate = function() {
        var self = this;
        self.redirectUpdatePhase(self.redirectStatus.updating);
        var formData = new FormData(document.getElementById("oauthConfirmation"));
        self.redirect(formData.get("newRedirect"));
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if ((this.readyState === 4) && (this.status === 200)) {
                if (this.responseText === 'updated') 
                    self.redirectUpdatePhase(self.redirectStatus.complete);
                else  {
                    self.redirectUpdateError(this.responseText);
                    self.redirectUpdatePhase(self.redirectStatus.errorState);
                }
            } else if (this.readyState === 4) {
                self.form("error");
                self.errorId(this.getResponseHeader("Error-Id") );
            }
        };
        ajax.open("POST", "/FormSubmissions/UpdateOauthRedirect", true);
        ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
        ajax.setRequestHeader("accept", "text/plain");
        ajax.send(formData);
    };

    return { viewModel : OAuth, template : htmlString };
});