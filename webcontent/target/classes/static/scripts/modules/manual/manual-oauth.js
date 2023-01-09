define(['knockout', 'text!templates/manual/manual-oauth.html', "modules/manual/manual-page",
    "text!json/formatted-html/request-auth.json", "text!json/oauth.json"], function (ko, htmlString, ManualPage,
        oauthPageJSON, oauthJSON) {
    class ManualOAuth extends ManualPage {
        constructor(params) {
            super(params);
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
            self.oauthLines = JSON.parse(oauthPageJSON);
            self.authUrl = window.location.protocol + "//" + window.location.hostname + "/IAT/OAuth/RequestAuth?client_id=" + self.clientId + "&state=SOMEVALUE";
            document.body.addEventListener("oauthcodepageload", self.onOauthCodePageLoad);
            document.body.addEventListener("oauthsuccess", self.onOauthSuccess);
        }

        oauthGetRequest() {
            this.oauthGetLinkClicked(true);
        }
        oauthIframeLoad() {
            this.requestAuthFrameHeight(evt.detail.height);
        }
        _onOauthCodePageLoad(evt) {
            this.requestAuthFrameHeight(evt.detail.height);
        }
        _onOauthSuccess(evt) {
            let self = this;
            self.authResponseJSON = ko.observable(evt.detail.result);
            self.authResponseJSONString = JSON.stringify(evt.detail, null, 4);
            document.body.removeEventListener("oauthsuccess", self.onOauthSuccess);
            self.oauthSuccess(true);
        }
    }

    return {
        viewModel: ManualOAuth,
        template: htmlString
    };
});