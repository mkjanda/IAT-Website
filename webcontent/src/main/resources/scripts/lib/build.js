({
    appDir : "../../",
    baseUrl : "scripts/lib",
    mainConfigFile: "rconfig.js",
    optimize : "none",
    dir : "../../../optimized-resources",
    modules: [
        {name: "main/main", include : [ "modules/already-registered-form", "modules/download-form",
            "modules/download-notification", "modules/emailing-product-key-notification", "modules/expanding-menu-button",
            "modules/features", "modules/iat-header", "modules/inset-text", "modules/manual/manual-section", 
            "modules/menu-bar", "modules/menu-button", "modules/page-body", "modules/page-content", 
            "modules/sample-test", "modules/sample-tests", "modules/section-commercial-use", "modules/section-contact", 
            "modules/section-cors", "modules/section-download", "modules/section-oauth" ]},
        {name: "modules/section-the-iat", exclude: ["knockout", "require", "text",  "text!json/svg-headers.json"]},
        {name: "modules/section-the-software", exclude: ["knockout", "require", "text",  "text!json/svg-headers.json"]}, 
        {name: "modules/server-error-notification", exclude: ["knockout", "require", "text",  "text!json/svg-headers.json"]}, 
        {name: "modules/slideshow-canvas", exclude: ["knockout", "require", "text",  "text!json/svg-headers.json"]},
        {name: "modules/svg-header", exclude: ["knockout", "require", "text",  "text!json/svg-headers.json"]}
    ]
})
