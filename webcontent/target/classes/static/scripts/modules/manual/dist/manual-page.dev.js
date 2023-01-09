"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['knockout'], function (ko) {
  var ManualPage = function ManualPage(params) {
    _classCallCheck(this, ManualPage);

    if (!params) return;
    var self = this;
    self.navigate = params.navigate;
    self.headerTemplate = params.svg.headerTemplate;
    self.smallSectionHeader = params.svg.smallSectionHeaderTemplate;
    self.subHeaderTemplate = params.svg.subHeaderTemplate;
    self.display = params.display;
  };

  return ManualPage;
});