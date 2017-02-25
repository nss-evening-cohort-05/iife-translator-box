var Translator = ()()
var userInput = document.getElementById("inputLang");
// var translateButton = document.getElementById("translate");
var translatedText = document.getElementById("translation");


function getRadioValue()
{
	var languageSelect = "";
    for (var i = 0; i < document.getElementsByName('language').length; i++)
    {
        if (document.getElementsByName('language')[i].checked)
        {
           languageSelect = document.getElementsByName('language')[i].value;
           // console.log(document.getElementsByName('language')[i].value);

        }
    }

    switch (languageSelect) {
    case 'french'
        translatedText.innerHTML = Translator.transalteToFrench(userInput)
        break;
    case 'german'
        translatedText.innerHTML = Translator.transalteToGerman(userInput)
        break;
    default:
        translatedText.innerHTML = "need to select a language";
}


document.getElementById("translate").addEventListener("click", getRadioValue);

 