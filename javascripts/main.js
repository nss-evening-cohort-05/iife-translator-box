var Translator = (function(){
	var language = "";


function getRadioValue()
{

	var userInput = document.getElementById("inputLang").value;
	var translatedText = document.getElementById("translation");

	var languageSelect = "";


    for (var i = 0; i < document.getElementsByName('language').length; i++)
    {
        if (document.getElementsByName('language')[i].checked)
        {
           languageSelect = document.getElementsByName('language')[i].value;

        }
    }
    switch (languageSelect) {
    case 'french':
        translatedText.innerHTML = Translator.setlexicon(userInput);
        break;
    case "vietnamese":
        translatedText.innerHTML = Translator.transalteToVietnamese(userInput);
        break;
    case "german":
        translatedText.innerHTML = Translator.transalteToGerman(userInput);

        break;
    case "spanish":
        translatedText.innerHTML = Translator.translateToSpanish(userInput); 
        break;   
    default:
        translatedText.innerHTML = "need to select a language";
    }
    
}


document.getElementById("translate").addEventListener("click", getRadioValue);

