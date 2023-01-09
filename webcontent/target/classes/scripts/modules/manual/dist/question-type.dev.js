/*
define(['knockout', 'text!templates/manual/question-typeof.html'], function(ko, htmlString) {

    function QuestionType(params) {
        QuestionType.Count++;
        var self = this;
        self.className = "question-response-type-" + QuestionType.Count.toString();
        self.layoutType = params.layout;
    }

    function layout() {
        var self = this;
        var enclosingDiv = document.getElementById("questionnaireResponses");
        var imgElem = document.querySelector("#questionnaireResponses div.question-type img");
        var paraElem = document.querySelector("#questionnaireType div.question-type p");
        if (document.querySelector("#questionnaireElement > div.question-type"))
        var lastLayout = document.querySelector('#questionnaireElement > div.question-type:nth-last-of-type(2)').getAttribute("lastLayout)");
        var lastImg =  document.querySelector('#questionnaireElement > div.question-type:nth-last-of-type(2) img');
        var lastImgY = lastImg.offsetTop + lastImg.offsetHeight;
        var lastPara = document.querySelector('#questionnaireElement > div.question-type:nth-last-of-type(2) p'); 
        var lastParaY = lastPara.offsetTop + lastPara.offsetHeight;
        switch (self.layoutType) {
            case "image-left":

        }
    }

    QuestionType.Count = 0;
});*/
"use strict";