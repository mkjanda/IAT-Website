"use strict";

define(['knockout', 'text!templates/svg-header.html', 'modules/font-face-map'], function (ko, htmlString, fontFaceMap) {
  function SvgHeader(params) {
    SvgHeader.Count++;
    var self = this;
    self.loaded = ko.observable(false);
    self.display = params.display;
    self.caption = params.caption;
    self.captionText = ko.pureComputed(function () {
      return ko.isObservable(self.caption) ? self.caption() : self.caption;
    });
    if (params.id) self.id = params.id;else self.id = "svgh-" + SvgHeader.Count.toString();
    self.template = params.template;
    self.textMaskId = self.id + "-text-mask";
    self.innerShadowId = self.id + "-inner-shadow";
    self.linearGradientId = self.id + "-linear-gradient";
    self.textMaskUrl = "url(#" + self.textMaskId + ")";
    self.innerShadowUrl = "url(#" + self.innerShadowId + ")";
    self.linearGradientUrl = "url(#" + self.linearGradientId + ")";
    self.captions = ko.observableArray([]);

    if (ko.isObservable(self.caption)) {
      self.captions.push(self.caption());
      self.caption.subscribe(function (newVal) {
        if (self.captions.indexOf(newVal) === -1) self.captions.push(newVal);
      });
    } else {
      self.captions.push(self.caption);
    }

    self.template.displayWidth = self.template.displayWidth || self.template.width;
    if (self.template.displayWidth > self.template.width) self.template.displayWidth = self.template.width;
    self.resolveFont();
  }

  SvgHeader.prototype.resolveFont = function () {
    var self = this;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    ctx.font = self.template.font;
    var textMetrics = ctx.measureText(self.captionText());
    var template = self.template;
    self.height = ko.pureComputed(function () {
      return 1.15 * (textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent);
    });
    self.width = ko.pureComputed(function () {
      return textMetrics.width * 1.15;
    });
    self.viewBox = ko.pureComputed(function () {
      return "0 0 " + self.width().toString() + " " + self.height().toString();
    });
    self.textX = ko.computed(function () {
      return template.textAnchor === "start" ? 0 : self.width() / 2;
    });
    self.textY = ko.pureComputed(function () {
      return template.textAnchor === "start" ? self.height() * 0.975 : textMetrics.actualBoundingBoxAscent;
    });

    self.filterX = function (template) {
      return "-" + ((template.blurSize - 100) / 2).toString() + "%";
    };

    self.filterY = function (template) {
      return "-" + ((template.blurSize - 100) / 2).toString() + "%";
    };

    self.filterWidth = function (template) {
      return template.blurSize.toString() + "%";
    };

    self.filterHeight = function (template) {
      return template.blurSize.toString() + "%";
    };

    self.loaded(true);
  };

  SvgHeader.Count = 0;
  return {
    viewModel: SvgHeader,
    template: htmlString
  };
});