var currentChar;
var n;

function getName() {
    // get the name from the html file
    n = document.getElementById("name").value;
    // set current char to 0
    currentChar=0;
    // get the letters in the name
    getLetters();
}

function getLetters(){
	// find the letters in the name using the character codes
	findLetter(n.charCodeAt(currentChar));
}

function skip(){
	currentChar += 1;
	getLetters();
}

function findLetter(code){
	// find the letters in the name using the character codes

	// if it is an upper case, change to lower case code for recognition
	switch(code){
		case 65: code = 97; break;
		case 66: code = 98; break;
		case 67: code = 99; break;
		case 68: code = 100; break;
		case 69: code = 101; break;
		case 70: code = 102; break;
		case 71: code = 103; break;
		case 72: code = 104; break;
		case 73: code = 105; break;
		case 74: code = 106; break;
		case 75: code = 107; break;
		case 76: code = 108; break;
		case 77: code = 109; break;
		case 78: code = 110; break;
		case 79: code = 111; break;
		case 80: code = 112; break;
		case 81: code = 113; break;
		case 82: code = 114; break;
		case 83: code = 115; break;		
		case 84: code = 116; break;	
		case 85: code = 117; break;
		case 86: code = 118; break;
		case 87: code = 119; break;
		case 88: code = 120; break;
		case 89: code = 121; break;
		case 90: code = 122; break;
	}

	// change the sign and video for the application
	switch(code){
		case 97: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEA.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/Y4d6GV9hYO4"; break;
		case 98: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEB.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/uU2_Hhrfg68"; break;
		case 99: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEC.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/0Bd14M7_HpA"; break;
		case 100: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGED.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/u51qN5z3Fyw"; break;
		case 101: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEE.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/Gvn3SHxw1ws"; break;
		case 102: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEF.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/CGLerC1lohw"; break;
		case 103: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEG.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/RcLVHaNlbtk"; break;
		case 104: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEH.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/JmYKGSaOL6U"; break;
		case 105: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEI.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/6cAmTVgYG2o"; break;
		case 106: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEJ.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/3p-tiMZX8gk"; break;
		case 107: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEK.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/watch?v=pRbk4o3haGE"; break;
		case 108: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEL.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/Q0B7ixJUwoo"; break;
		case 109: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEM.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/hjBQZmPDM_A"; break;
		case 110: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEN.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/CFyNHENUJmk"; break;
		case 111: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEO.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/LEZKaWZ0_8U"; break;
		case 112: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEP.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/BUDA97AMXgU"; break;
		case 113: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEQ.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/fXCBLFpfI44"; break;
		case 114: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGER.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/05LUcMzwg7Q"; break;
		case 115: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGES.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/Bsw-VyAaPhM"; break;
		case 116: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGET.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/cS_-s6On2sE"; break;
		case 117: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEU.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/watch?v=-mOuN4clERY"; break;
		case 118: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEV.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/xqWp5VjFoY0"; break;
		case 119: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEW.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/MsF0S97RYCI"; break;
		case 120: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEX.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/Hxq08NTsIsk"; break;
		case 121: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEY.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/mn7W50Gu-ZE"; break;
		case 122: document.getElementById('img').src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEZ.GIF";
				 document.getElementById('video').src = "https://www.youtube.com/embed/vav1me3wn98"; break;
		default: document.getElementById('img').src = "http://www.terptopics.com/images/ManualAlphabet.gif"
				document.getElementById("answer").innerHTML=("Congratulations, you've learned to Sign Your Name!"); break;
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
