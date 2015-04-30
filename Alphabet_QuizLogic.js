var alphabet = "abcdefghijklmnopqrstuvwxyz";
var signed = "";
var currentChar;
var counter = 0; 

var img = document.createElement("img");
var src = document.getElementById("answer");

function getRandomLetter() {

//out of 26 letters choose one

var randomNum = Math.floor((Math.random() * 25));


currentChar = randomNum;
    // document.getElementById("demo").innerHTML = currentChar;

    getLetters();


 
	   signed = alphabet.substring(currentChar, currentChar + 1);



}

function getHint(){


var code = alphabet.charCodeAt(currentChar);



	switch(code){
		//THESE IMAGES WILL BE ORIGINAL IMAGES
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
				document.getElementById("answer").innerHTML=("Congratulations, you've learned the Alphabet is ASL!"); break;
			}


		//	setTimeout(function(){alert('Hello')},3000);

		setTimeout(function(){document.getElementById('img').src = " ";
			document.getElementById('video').src = " ";}, 3000);

		
		getLetters();


			
}




function getLetters(){
	// find the letters in the name using the character codes


	var code = alphabet.charCodeAt(currentChar);
	     // document.getElementById("demo").innerHTML = signed;


	switch(code){
		//THESE IMAGES WILL BE ORIGINAL IMAGES
		
		case 97: img.src = "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=593952"; break;
		case 98: img.src = "hhttp://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-b-LET-B-2.jpg"; break;
		case 99: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-c-LET-C-2.jpg"; break;
		case 100: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-d-LET-D-2.jpg"; break;
		case 101: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-e-LET-E-2.jpg"; break;
		case 102: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-f-LET-F-2.jpg"; break;
		case 103: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-g-LET-G-2.jpg"; break;
		case 104: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-h-LET-H-2.jpg"; break;
		case 105: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-i-LET-I-2.jpg"; break;
		case 106: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-j-LET-J-2.jpg"; break;
		case 107: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-k-LET-K-2.jpg"; break;
		case 108: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-l-LET-L-2.jpg"; break;
		case 109: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-m-LET-M-2T.jpg"; break;
		case 110: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-n-LET-N-2.jpg"; break;
		case 111: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-o-LET-O-2.jpg"; break;
		case 112: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-p-LET-P-2.jpg"; break;
		case 113: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-q-LET-Q-2.jpg"; break;
		case 114: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-r-LET-R-2.jpg"; break;
		case 115: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-s-LET-S-2.jpg"; break;
		case 116: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-t-LET-T-2.jpg"; break;
		case 117: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-u-LET-U-2.jpg"; break;
		case 118: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-v-LET-V-2.jpg"; break;
		case 119: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/TWI-VWI-LET-W-2.jpg"; break;
		case 120: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-x-LET-X-2.jpg"; break;
		case 121: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-y-LET-Y-2.jpg"; break;
		case 122: img.src = "http://www.timelesswroughtiron.com/v/vspfiles/photos/ught-iron-house-letter-z-LET-Z-2T.jpg"; break;
		default: document.getElementById("answer").innerHTML=("not working"); break;
	}

	var src = document.getElementById("answer");
	src.appendChild(img);
	Check(code);
}

function confirmGesture(sign){
	// if the character code matches the sign recognized

			   document.getElementById("demo").innerHTML = "it goes in here";

	if (sign.charCodeAt(0) == alphabet.charCodeAt(currentChar)){
		  //  document.getElementById("demo").innerHTML = sign;


		// show that the answer is correct
		document.getElementById("answer").innerHTML=("correct");
    counter = counter +1;

		if (counter < 10){
		getRandomLetter();

		getLetters();

		    document.getElementById("demo").innerHTML = counter;



	}
else{

 	document.getElementById("heading").innerHTML = "You have signed 10 letters! Congratulations!";
 }
}
	else{
		// wrong sign recognized
		document.getElementById("answer").innerHTML=("Signed" + sign);
		getLetters();
		    //document.getElementById("demo").innerHTML = "this isn't really working but im in here!";

	}
}
