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

    var words = userInput.split (" ");

    for (var i=0; i<words.length; i++)
    {
        translateWord(languageSelect, words[i]);
    }

    function  translateWord (languageSelect , userWord) {
    switch (languageSelect) {
    case "spanish":
        translatedText.innerHTML += Translator.translateToSpanish(userWord) + " ";
        break;
    case "french":
        translatedText.innerHTML += Translator.translateToFrench(userWord) + " ";

        

        break;
    case "vietnamese":
        translatedText.innerHTML += Translator.translateToVietnamese(userWord) + " ";
        break;
    case "german":
        translatedText.innerHTML += Translator.translateToGerman(userWord) + " ";
        break;
    default:
        translatedText.innerHTML += "Please select a language for translation";
    }
}
    
}

document.getElementById("translate").addEventListener("click", getRadioValue);