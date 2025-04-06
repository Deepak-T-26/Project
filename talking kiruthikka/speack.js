document.getElementById("speakButton").addEventListener("click", function() {
   recognition.start();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;


// sr on
recognition.onstart =function (){
console.log('Speech recognition service started');
}
recognition.onresult=function (event){

    let current =event.resultIndex;
    let transcript =event.results[current][0].transcript;
    transcript=transcript.toLowerCase();
    console.log(`my Words: ${transcript}`);
    readout(transcript);
    const responseElement = document.getElementById("response");
    responseElement.innerHTML = transcript;
}
function readout(msg){
    const speech= new SpeechSynthesisUtterance();
    // different voices 
    const allVoices=speechSynthesis.getVoices()
    speech.text=msg;
    speech.voice=allVoices[295];
    speech.pitch = 2; // Higher pitch
    speech.rate = 1.5;
    window.speechSynthesis.speak(speech);
    console.log("speaking...")
}
window.onload=function(){
    readout("")
}
