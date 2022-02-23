define(['knockout', 'text!templates/section-the-iat.html', 'text!json/svg-headers.json'], function(ko, htmlString, headerTemplates) {
	function SectionTheIAT(params)
        {
            var self = this;
            self.templates = JSON.parse(headerTemplates);
            self.display = params.display;
            self.headerTemplate = self.templates.sectionHeader;
            self.subHeaderTemplate = self.templates.subHeader;
        }
	
	return { viewModel : SectionTheIAT, template : htmlString };
});