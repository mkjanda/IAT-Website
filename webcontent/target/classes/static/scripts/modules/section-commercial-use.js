define(['knockout', 'text!templates/section-commercial-use.html', 'text!json/svg-headers.json'], function(ko, htmlString, headerTemplates) {
    function CommercialUse(params) {
        var self = this;
        var svgJSON = JSON.parse(headerTemplates);
        self.display = params.display;
        self.headerTemplate = svgJSON.sectionHeader;
        return this;
    }
    
    CommercialUse.prototype.submitCorsRequest = function() {
        var self = this;
        var form = document.getElementById("corsRegistration");
        self.corsDomain(form.namedItem("domain").value);
        self.corsAllowHttp(form.namedItem("allowHttp").value);
        var formData = new FormData(form);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if ((this.readystate === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.submissionErrors.length > 0) {
                    self.corsSubmissionErrors(response.submissionErrors);
                    return;
                }
                self.corsForm("corsConfirmation");
            } else if (this.status === 200) {
                self.corsErrorId(this.getResponseHeader("Error-Id"));
                self.corsForm("error");
            }
        };
        ajax.open("POST", "/FormSubmissions/CorsRegistration", true);
        ajax.setRequestHeader("accept", "text/json");
        ajax.send(formData);
    };

    return { viewModel : CommercialUse, template : htmlString };
});