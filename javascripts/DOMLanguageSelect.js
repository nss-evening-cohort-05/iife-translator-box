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
    case "spanish":
        translatedText.innerHTML = Translator.translateToSpanish(userInput);
        break;
    case "french":
        translatedText.innerHTML = Translator.setlexicon(userInput);
        break;
    case "vietnamese":
        translatedText.innerHTML = Translator.translateToVietnamese(userInput);
        break;
    case "german":
        translatedText.innerHTML = Translator.translateToGerman(userInput);
        break;
    default:
        translatedText.innerHTML = "Please select a language for translation";
    }
    
}

document.getElementById("translate").addEventListener("click", getRadioValue);