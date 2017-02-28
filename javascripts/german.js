var Translator = (function (oldTranslator){
	var lexicon = {
	"merry": "Fröhlich", 
	"christmas": "weihnachten", 
	"seasons": "jahresheit", 
	"greetings": "grüße", 
	"happy": "glücklich", 
	"hannukah": "chanukka", 
	"tis": "tis", 
	"the": "der", 
	"holiday": "feiertag", 
	"holidays": "feiertage", 
	"kwanzaa": "kwanzaa", 
	"peace": "frieden", 
	"joy": "freude", 
	"on": "auf", 
	"earth": "erde",
	"world": "welt", 
	"love": "liebe", 
	"hope": "hoffnung", 
	"wishing": "wünschen", 
	"you": "sie", 
	"family": "familie"};
 
 
 	oldTranslator.translateToGerman = function(translateToGerman){
        return lexicon[translateToGerman];
    };

	return oldTranslator;

 })(Translator || {});