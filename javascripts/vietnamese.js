var Translator = (function(oldTranslator){

	
	var newText = {"cat": "xxx","dog": "yyy"}; 
	var newText = {"merry": "joyeux", "christmas": "Noël", "seasons": "saisons", "greetings": "salutations", "happy": "content", "hannukah": "Hanoucca", "tis": "C'est", "the": "la", "holiday": "vacances", "holidays": "vacances", "kwanzaa": "kwanzaa", "peace": "paix", "joy": "joie", "on": ""
        // earth:
        // world:
        // love:
        // hope:
        // wishing:
        // you:
        // family:
        // and:
    };
	
	oldTranslator.transalteToVietnamese = function(text){
		return newText[text];
	}

	return oldTranslator;
	
})(Translator || {})