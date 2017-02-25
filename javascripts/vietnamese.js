var Translator = (function(oldTranslator){

	
	var newText = {"cat": "xxx","dog": "yyy"}; 
	
	oldTranslator.transalteToVietnamese = function(text){
		return newText[text];
	}

	return oldTranslator;
	
})(Translator || {})