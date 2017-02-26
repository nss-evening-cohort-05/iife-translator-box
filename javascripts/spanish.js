var Translator = (function(oldTranslator){

	var spanishLexicon = {
		"merry":"Feliz", 
		"christmas":"navidad", 
		"season's":"estación", 
		"greetings":"saludos", 
		"happy":"feliz", 
		"hannukah":"hannukah", 
		"tis":"tis", 
		"the":"día", 
		"holiday":"de fiesta", 
		"holidays":"días de fiesta", 
		"kwanzaa":"kwanzaa", 
		"peace":"paz", 
		"joy":"alegría", 
		"on":"en", 
		"earth":"tierra", 
		"world":"mundo", 
		"love":"amor", 
		"hope":"esperanza", 
		"wishing":"deseando", 
		"you":"usted", 
		"family":"familia"};

	oldTranslator.translateToSpanish = function(userInput) {
		return spanishLexicon[userInput];
	}	

	return oldTranslator;

})(Translator || {});
