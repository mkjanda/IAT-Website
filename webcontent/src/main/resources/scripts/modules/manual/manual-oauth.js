define(['knockout', 'text!templates/manual/manual-oauth.html', "modules/manual/manual-section", "text!json/oauth.json"],
    function(ko, htmlString, manualSection, oauthJSON) {
        function ManualOAuth(params) {
        manualSection.viewModel.call(this);
                var self = this;
                let oauthData = JSON.parse(oauthJSON);
                self.productKey = oauthData.product_key;
                self.testName = oauthData.test_name;
                self.password = oauthData.test_password;
                self.redirect = oauthData.redirect;
                self.clientId = oauthData.client_id;
                self.clientSecret = oauthData.client_secret;
                self.requestAuthFrameHeight = ko.observable(undefined);
                self.oauthGetLinkClicked = ko.observable(false);
                self.oauthSuccess = ko.observable(false);
                self.onOauthCodePageLoad = self._onOauthCodePageLoad.bind(self);
                self.onOauthSuccess = self._onOauthSuccess.bind(self);
                self.authUrl = window.location.origin + "/IAT/OAuth/RequestAuth?client_id=" + self.clientId + "&state=SOMEVALUE";
                document.body.addEventListener("oauthcodepageload", self.onOauthCodePageLoad);
                document.body.addEventListener("oauthsuccess", self.onOauthSuccess);
            }

            ManualOAuth.prototype = new manualSection.viewModel();
            
            ManualOAuth.prototype.oauthGetRequest = function() {
                var self = this;
                self.oauthGetLinkClicked(true);
            }
            ManualOAuth.prototypye.oauthIframeLoad = function() {
                self.requestAuthFrameHeight(evt.detail.height);
            }
            ManualOAuth.prototype._onOauthCodePageLoad(evt) = function(evt) {
                let self = this;
                self.requestAuthFrameHeight(evt.detail.height);
            }
            ManualOAuth.prototype._onOauthSuccess = function(evt) {
                let self = this;
                self.authResponseJSON = ko.observable(evt.detail.result);
                self.authResponseJSONString = JSON.stringify(evt.detail, null, 4);
                document.body.removeEventListener("oauthsuccess", self.onOauthSuccess);
                self.oauthSuccess(true);
            }
        return { viewModel: ManualOAuth, template: htmlString };
    });