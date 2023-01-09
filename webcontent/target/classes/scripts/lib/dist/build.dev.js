"use strict";

({
  appDir: "../../",
  baseUrl: "scripts/lib",
  mainConfigFile: "rconfig.js",
  optimize: "none",
  dir: "../../../optimized-resources",
  modules: [{
    name: "../main",
    include: ["modules/already-registered-form", "modules/download-form", "modules/download-notification", "modules/emailing-product-key-notification", "modules/expanding-menu-button", "modules/features", "modules/iat-header", "modules/inset-text", "modules/menu-bar", "modules/menu-button", "modules/page-body", "modules/page-content", "modules/sample-test", "modules/sample-tests", "modules/section-the-software", "modules/section-the-iat", "modules/section-commercial-use", "modules/section-contact", "modules/section-cors", "modules/section-download", "modules/section-oauth", "modules/slideshow-canvas", "modules/svg-header", "modules/manual/manual-oauth", "modules/manual/manual-page"],
    deps: ["text!templates/alternating-items.html"]
  }]
}); //

/*, 
        ]}*/