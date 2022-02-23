define(['knockout', 'text!templates/server-error-notification.html', "text!json/svg-headers.json"], function(ko, htmlString, headers) {
    function ServerErrorNotification(params) {
        var self = this;
        self.display = params.display;
        self.errorId = params.errorId;
        self.reported = ko.observable(false);
        self.errorReportedTemplate = JSON.parse(headers).attentionHeader;
        self.error = ko.observable(null);
        self.clusterFuck = ko.observable(false);
        if (!ko.components.isRegistered("server-failure"))
            ko.components.register("server-failure", {template: {require: "text!templates/server-failure.html"}});
    }
    
    ServerErrorNotification.prototype.report = function() {
        var self = this;
        var formData = new FormData();
        formData.append("email", document.getElementById("errorReportEmail").value);
        formData.append("errorId", self.errorId());
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if ((this.readyState === 4) && (this.status === 200)) {
                if (this.responseText === "reported") {
                    self.reported(true);
                    self.error(null);
                } else
                    self.error(this.responseText);
            } else if (this.readyState === 4) {
                self.clusterFuck(true);
            }
        };
        ajax.open("POST", "/FormSubmissions/ErrorReport", true);
        ajax.setRequestHeader("accept", "text/plain");
        ajax.send(formData);
    };
    
    return { viewModel : ServerErrorNotification, template : htmlString };
});