require(["knockout"], function (ko) {
    ko.bindingHandlers.styles = {
        init: function (element, valueAccessor) {
            var styles = ko.unwrap(valueAccessor());
            styles.forEach(function (style) {
                var elems = Array.from(element
                    .getElementsByTagName(style.tagName));
                if (element.nodeName.toLowerCase() === style.tagName.toLowerCase())
                    elems.push(element);
                var styleValue = "";
                style.styleAttributes.forEach(function (attr) {
                    styleValue = styleValue.concat(attr.attribute + ":" + attr.value + ";");
                });
                elems.forEach(function (elem) {
                    if (elem.hasAttribute("style")) {
                        elem.setAttribute("style", elem.getAttribute("style").concat(styleValue));
                    } else {
                        elem.setAttribute("style", styleValue);
                    }
                });
            });
        }
    };
    require(['text!json/page-sections.json', 'domReady!'], function (sectionsJSON) {
        ko.components.register("page-body", { require: "modules/page-body" });
        ko.components.register("iat-header", { require: "modules/iat-header" });
        ko.components.register("menu-bar", { require: "modules/menu-bar" });
        ko.components.register("page-content", { require: "modules/page-content" });
        ko.components.register("inset-text", {require: "modules/inset-text"});
        ko.components.register("svg-header", {require: "modules/svg-header"});
        ko.components.register("menu-button", {require: "modules/menu-button"});
        ko.components.register("expanding-menu-button", {require: "modules/expanding-menu-button"});
        var sections = JSON.parse(sectionsJSON);
        sections.pageSections.forEach((s) => {
            if (s.module) {
                ko.components.register(s.componentName, { require : "modules/" + s.module });
            } else {
                ko.components.register(s.componentName, { template : { require : s.template }});
            }
        });

        require(['knockout', 'text!json/page-sections.json'], function(ko, sections) {
            JSON.parse(sections).manual.forEach(s => {
                if (!s.module)
                    ko.components.register(s.component, { template : { require : s.template },
                        viewModel : { require : 'modules/manual/manual-page'}});
                else
                    ko.components.register(s.component, { require : s.module});
            });
        });
    
        sections.components.forEach((c) => {
            ko.components.register(c.component, { require : "modules/" + c.module });
        });
        ko.applyBindings("page-body");
    });
});



