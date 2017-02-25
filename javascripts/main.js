// var Translator = (function(){
// var userInput = document.getElementById("inputLang");
// var translateButton = document.getElementById("translate");

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

    if languageSelect == 'french'
    	call french
    
}

document.getElementById("translate").addEventListener("click", getRadioValue);

