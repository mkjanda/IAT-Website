define(['knockout', 'text!templates/section-contact.html', 'text!json/svg-headers.json'], function(ko, htmlString, svgHeadersJson) {
   function SectionContact(params) {
       var self = this;
       self.headerTemplate = JSON.parse(svgHeadersJson).sectionHeader;
       self.display = params.display;
   } 

    return { viewModel : SectionContact, template : htmlString };
});