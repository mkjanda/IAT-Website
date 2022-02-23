"use strict";

define(['knockout', 'text!templates/oauth-example.html'], ko, htmlString, function () {
  return {
    model: OauthExample,
    template: htmlString
  };
});