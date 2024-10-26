
const responses = [
    "Why didn't you reply faster? Are you talking to someone else?",
    "Who’s this new friend you just mentioned?",
    "Oh, no, it’s totally fine. I don’t mind being ignored.",
    "You don’t get to have other friends. I’m all you need.",
    "I saw you liked a post. Who’s that boy?",
    "You think you can just leave me on read? Cute.",
    "Do I need to remind you how much I care?",
    "I can’t believe you did that. Just tell me the truth.",
    "I was just about to text you! What took you so long?",
    "Whatever, I'm not even mad. Just... disappointed.",
    "DO you still keep in touch with your ex.",
    "I guess I am not enough for you.",
];

let selectedVoice = null;

// Function to load voices
function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    selectedVoice = voices.find(voice => voice.name.includes('en-US-Standard-H')) || // Change 'Samantha' to a voice you like
                     voices.find(voice => voice.name.includes('Google US English')); // Fallback option
}

// Function to handle speech synthesis
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US'; // You can change this to any supported language
    speech.pitch = 25; // Adjust pitch for a more "annoying" tone
    speech.rate = 0.7; // Adjust rate if desired
    speech.voice = selectedVoice; // Use the selected voice
    window.speechSynthesis.speak(speech);
}

function getResponse() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const chatbox = document.getElementById('chatbox');
    
    // Display user input
    chatbox.innerHTML += `<div>You: ${userInput}</div>`;
    
    let response = "";

    // Determine the appropriate response based on user input
    if (userInput.includes("like")) {
        response = "Of course I do! But why are you even asking that? Are you trying to say something?";
    } else if (userInput.includes("friends")) {
        response = "Oh really? Must be nice to spend time with people who aren't me. Who was there?";
    } else if (userInput.includes("sorry")) {
        response = "You think an 'oops' is enough? I deserve a royal apology! ";
    } else if (userInput.includes("busy")) {
        response = "Oh, so you’re too busy for me? Guess I’m just not that important to you anymore.";
    } else if (userInput.includes("new boy")) {
        response = "Oh, a new boy? So what, you want to replace me now? ";
    } else if (userInput.includes("advice")) {
        response = "Well, obviously you need better advice if you’re coming to me. But fine, I guess I’ll share my wisdom.";
    } else if (userInput.includes("talk later")) {
        response = "Sure, but if I’m not the first thing on your mind, we’re going to have a problem.";
    } else if (userInput.includes("long day")) {
        response = "Must be nice to have a break. I mean, some of us just sit around waiting for your text all day.";
    } else if(userInput.includes("mom")){
        response = "What does she have to say now, so annoying.";
    } else if(userInput.includes("outside"))  {
        response= "Where were you, can't you pick up the phone,I guess you dont care about me now";
    } else if(userInput.includes("love")) {
        response = "You say you love me......but if you did.... stop doing things that annoy me, Its like you dont even consider my feelings,.....If you cant make me happy, maybe I should find someone who will";
    } else if (userInput.includes("dedcision")){
        response = "What made u think u can do it without asking me first.";
    } else if(userInput.includes("hello")) {
        response = "Why do u always keep disturbing me";
    } else if(userInput.includes("hi")){
        response = "Why do u keep disturbing me";
    } else if(userInput.includes("dress")){
        response = "Who told u to wear these kind of short dress.....Are u trying to cheat on me with another guy";
    } else if(userInput.includes("don't know")){
        response ="You dont know anything ";
    } else if (userInput.includes(" with girls")){
        response = "Don't be insecure.";
    } else if(userInput.includes("food")){
        response = "Why do you even care";
    }
        else {
        // Default random response
        response = responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Display the toxic girlfriend response
    chatbox.innerHTML += `<div>Toxic BF: ${response}</div>`;
    
    // Speak the response
    speak(response);
    
    // Clear input field
    document.getElementById('userInput').value = '';
    
    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Load voices when the page is loaded
window.onload = function() {
    loadVoices();
};
