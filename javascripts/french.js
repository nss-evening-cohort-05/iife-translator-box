var Translator = (function (oldTranslator) {
	
	var lexicon = {"merry": "joyeux", "christmas": "Noël", "seasons": "saisons", "greetings": "salutations", "happy": "content", "hannukah": "Hanoucca", "tis": "C'est", "the": "la", "holiday": "vacances", "holidays": "vacances", "kwanzaa": "kwanzaa", "peace": "paix", "joy": "joie", "on": "sur", "earth": "terre", "world": "monde", "love": "amour", "hope": "espérer", "wishing": "souhaitant", "you": "toi", "family": "famille", "and": "et"};

	
		// oldTranslator.getTranslation: function(){
		// 		return lexicon;
		// },
	
	oldTranslator.translateToFrench = function(translateToFrench){
		return lexicon[translateToFrench];
	}


	return oldTranslator;
})(Translator || {});