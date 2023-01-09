define(['knockout', 'text!templates/section-cors.html', 'text!json/svg-headers.json'], function(ko, htmlString, svgJson) {
   
    function Cors(params) {
        var self = this;
        var json = JSON.parse(svgJson);
        self.display = params.display;
        self.navigate = self._navigate.bind(self);
        self.sectionHeaderTemplate = json.subHeader;
        self.smallSectionHeader = json.smallHeader;
        self.errorCaptionTemplate = json.errorCaption;
        self.attentionTemplate = json.attentionHeader;
        self.registrationResponse = ko.observable(null);
        self.errorId = ko.observable(null);
        self.corsForm = ko.observable("corsRegistration");
        self.corsDomain = ko.observable();
        self.httpAllowed = ko.observable();
        self.posting = ko.observable(false);
        self.waitDots = ko.observable(0);
        self.errors = ko.observableArray([]);
        self.hasErrors = ko.observable(false);
        self.pleaseWaitText = ko.pureComputed(function() {
           var text = "Please wait";
           for (var ctr = 0; ctr < self.waitDots(); ctr++)
               text += ". ";
           return text;
        });
        return this;
    }
    
    Cors.prototype._navigate = function(p, s) {
        this.display({ page : p, section : s });
    }
    Cors.prototype.submitCorsRequest = function() {
        var self = this;
        self.waitDotInterval = window.setInterval(function() {
            if (self.waitDots() < 3)
                self.waitDots(self.waitDots() + 1);
            else
                self.waitDots(0);
        }, 300);
        self.posting(true);
        var formData = new FormData(document.getElementById("cors-registration"));
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState === 4) {
                self.errors([]);
                window.clearInterval(self.waitDotInterval);
                self.posting(false);
            }
            if ((this.readyState === 4) && (this.status !== 429)) {
                window.clearInterval(self.waitDotInterval);
                self.posting(false);
                self.errors([]);
            }
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                self.hasErrors(response.hasErrors);
                if (response.hasErrors) {
                    response.globalErrors.forEach((ge) => self.errors.push({ field : 'global', message : ge }));
                    Object.keys(response.fieldErrors).forEach((k) => self.errors.push({ field : k, message : response.fieldErrors[k] }));
                    return;
                }
                self.corsForm("corsConfirmation");
                self.corsDomain(formData.get("domain"));
                self.httpAllowed(formData.has("http"));
            } else if (this.readyState === 4) {
                self.errorId(this.getResponseHeader("Error-Id"));
            }
        };
        window.setTimeout(function() {
            ajax.open("POST", "/FormSubmissions/CorsRegistration", true);
            ajax.setRequestHeader("accept", "text/json");
            ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
            ajax.send(formData);
        }, 100);
    };

    Cors.prototype.scrollToCorsConfirmation = () => {
        window.scrollTo(0, document.getElementById("corsConfirmation").offsetTop);
    };
    
    return { viewModel : Cors, template : htmlString };
});