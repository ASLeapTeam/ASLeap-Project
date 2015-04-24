var currentChar = 97;
var img = document.getElementById('img').appendChild(img);
var src = document.getElementById("answer");
getLetters();



function skip(){
	currentChar += 1;
	getLetters();
}

function getLetters(){
	// find the letters in the name using the character codes

	switch(currentChar){
		case 97: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEA.GIF"; break;
		case 98: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEB.GIF"; break;
		case 99: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEC.GIF"; break;
		case 100: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGED.GIF"; break;
		case 101: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEE.GIF"; break;
		case 102: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEF.GIF"; break;
		case 103: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEG.GIF"; break;
		case 104: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEH.GIF"; break;
		case 105: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEI.GIF"; break;
		case 106: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEJ.GIF"; break;
		case 107: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEK.GIF"; break;
		case 108: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEL.GIF"; break;
		case 109: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEM.GIF"; break;
		case 110: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEN.GIF"; break;
		case 111: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEO.GIF"; break;
		case 112: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEP.GIF"; break;
		case 113: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEQ.GIF"; break;
		case 114: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGER.GIF"; break;
		case 115: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGES.GIF"; break;
		case 116: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGET.GIF"; break;
		case 117: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEU.GIF"; break;
		case 118: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEV.GIF"; break;
		case 119: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEW.GIF"; break;
		case 120: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEX.GIF"; break;
		case 121: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEY.GIF"; break;
		case 122: img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEZ.GIF"; break;
		default: img.src = "http://www.terptopics.com/images/ManualAlphabet.gif"
				document.getElementById("answer").innerHTML=("Congratulations, you've learned the Alphabet is ASL!"); break;
	}

	src.appendChild(img);
	check(currentChar);
}

function confirmGesture(sign){
	// if the character code matches the sign recognized
	if (sign.charCodeAt(0) == currentChar){
		// show that the answer is correct
		document.getElementById("answer").innerHTML=("correct");
	        skip();
	}
	else{
		// wrong sign recognized
		document.getElementById("answer").innerHTML=("Signed " + sign);
		check(currentChar);
	}
}
