var Translator = (function(){
var userInput = document.getElementById("inputLang");
var translateButton = document.getElementById("translate");
var languageChoice = document.getElementsByName("language").value;

function selectedLanguage(){
	console.log("test",languageChoice);
	for (var i = 0; i < 4; i++) {
		
	}

} 





};
)(Translator || {});

translateButton.addEventListener("click", selectedLanguage);
// function selectedLanguage() {
// 	if (languageChoice === "spanish") {
// 		translateToSpanish();
// 	} else if (languageChoice === "french") {
// 		translateToFrench();
// 	} else if (languageChoice === "vietvaluese") {
// 		translateToVietnamese();
// 	} else if (languageChoice === "german") {
// 		translateToGerman();
// 	}
// }