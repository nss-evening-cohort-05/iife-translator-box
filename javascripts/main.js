
	// var language = "";
	


	var userInput = document.getElementById("inputLang").value;
	var translatedText = document.getElementById("translation");

function getRadioValue()
{

	var languageSelect = "";
    for (var i = 0; i < document.getElementsByName('language').length; i++)
    {
        if (document.getElementsByName('language')[i].checked)
        {
           languageSelect = document.getElementsByName('language')[i].value;

        }
    }
console.log(Translator.translateToSpanish("merry", userInput));
    switch (languageSelect) {
    case "vietvaluese":
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

 