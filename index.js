

 // geting all btns called drum

let btn = document.querySelectorAll(".drum");
 
 


 //adding event listener to each btns and then converting classlist into array using array.form()

btn.forEach((button) => button.addEventListener("click", () => {
  const classListArray = Array.from(button.classList);

 // then check button class and according to it plays audio()

  switch (true) {
    case classListArray.includes("w"):
      let audio1 = new Audio("/sounds/tom-1.mp3");
      audio1.play();
      break;
    case classListArray.includes("a"):
      let audio2 = new Audio("/sounds/tom-2.mp3");
      audio2.play();
      break;
    case classListArray.includes("s"):
      let audio3 = new Audio("/sounds/tom-3.mp3");
      audio3.play();
      break;
    case classListArray.includes("d"):
      let audio4 = new Audio("/sounds/tom-4.mp3");
      audio4.play();
      break;
    case classListArray.includes("j"):
      let audio5 = new Audio("/sounds/snare.mp3");
      audio5.play();
      break;
    case classListArray.includes("k"):
      let audio6 = new Audio("/sounds/crash.mp3");
      audio6.play();
      break;
    case classListArray.includes("l"):
      let audio7 = new Audio("/sounds/kick-bass.mp3");
      audio7.play();
      break;
    default:
      console.log("Unknown button");
  }
}));


// Define the key-audio mappings
const keyAudioMap = {
    'w': '/DrumGame/sounds/tom-1.mp3',
    'a': '/DrumGame/sounds/tom-2.mp3',
    's': '/DrumGame/sounds/tom-3.mp3',
    'd': '/DrumGame/sounds/tom-4.mp3',
    'j': '/DrumGame/sounds/snare.mp3',
    'k': '/DrumGame/sounds/crash.mp3',
    'l': '/DrumGame/sounds/kick-bass.mp3'
  };
  
  // Function to play audio based on key press
  function playAudio(key) {
    const audioFile = keyAudioMap[key];
    if (audioFile) {
      const audio = new Audio(audioFile);
      audio.play();
    }
  }
  
  // Event listener for keydown event
  document.addEventListener('keydown', (event) => {
    const keyPressed = event.key.toLowerCase();
    playAudio(keyPressed);
  });
  