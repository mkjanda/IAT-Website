"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

define(['knockout', 'text!templates/manual/manual-oauth.html', "modules/manual/manual-section", "text!json/oauth.json"], function (ko, htmlString, manualSection, oauthJSON) {
  var ManualOAuth =
  /*#__PURE__*/
  function (_manualSection) {
    _inherits(ManualOAuth, _manualSection);

    function ManualOAuth(params) {
      var _this;

      _classCallCheck(this, ManualOAuth);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ManualOAuth).call(this, params));

      var self = _assertThisInitialized(_this);

      var oauthData = JSON.parse(oauthJSON);
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
      return _this;
    }

    _createClass(ManualOAuth, [{
      key: "oauthGetRequest",
      value: function oauthGetRequest() {
        var self = this;
        self.oauthGetLinkClicked(true);
      }
    }, {
      key: "oauthIframeLoad",
      value: function oauthIframeLoad() {
        self.requestAuthFrameHeight(evt.detail.height);
      }
    }, {
      key: "_onOauthCodePageLoad",
      value: function _onOauthCodePageLoad(evt) {
        var self = this;
        self.requestAuthFrameHeight(evt.detail.height);
      }
    }, {
      key: "_onOauthSuccess",
      value: function _onOauthSuccess(evt) {
        var self = this;
        self.authResponseJSON = ko.observable(evt.detail.result);
        self.authResponseJSONString = JSON.stringify(evt.detail, null, 4);
        document.body.removeEventListener("oauthsuccess", self.onOauthSuccess);
        self.oauthSuccess(true);
      }
    }]);

    return ManualOAuth;
  }(manualSection);

  return {
    viewModel: ManualOAuth,
    template: htmlString
  };
});