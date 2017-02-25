var Translator = (function (oldTranslator) {
	
	var lexicon = {merry: "joyeux", christmas: "Noël", seasons: "saisons", greetings: "salutations", happy: "content", hannukah: "Hanoucca", tis: "C'est", the: "la", holiday: "vacances", holidays: "vacances"
		// kwanzaa:
		// peace:
		// joy:
		// on:
		// earth:
		// world:
		// love:
		// hope:
		// wishing:
		// you:
		// family:
		// and:
	};

	
	return {
		oldTranslator.getlexicon: function(){
				return lexicon;
		},
	
	oldTranslator.translateToFrench: function(translation){
		return lexicon[translation];
	}

};

	return oldTranslator;
})(Translator.translateToFrench || {});