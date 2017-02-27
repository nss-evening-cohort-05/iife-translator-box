var Translator = (function(oldTranslator){

	
	var newText = {"merry": "vui ve", "christmas": "Giang sinh", "seasons": "cac mua", 
	"greetings": "loi chao hoi", "happy": "vui mung", "Hanukkah": "Hanukkah", "tis": "tis", "the": "cac", "holiday": "ngay le", "holidays": "ngay le", "kwanzaa": "kwanzaa", "peace": "hoa binh", "joy": "vui suong", "on": "tren",
        "earth": "trai dat",
        "world": "the gioi",
        "love": "yeu",
        "hope": "mong",
        "wishing": "co nhu cau",
        "you": "ban" ,
        "family": "gia dinh",
        "and": "va"
    };
	
	oldTranslator.translateToVietnamese = function(text){
		if (typeof(newText[text]) == "undefined")
			return "Not matched for translation "
		else
			return newText[text];
	}

	return oldTranslator;
	
})(Translator || {})