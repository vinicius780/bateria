document.body.addEventListener("keyup", (event) => {
playSound(event.code.toLowerCase())
});

const soundElements = document.querySelectorAll('[data-key]');

soundElements.forEach(element => {
    element.addEventListener("click", () => {
        playSound(element.getAttribute('data-key'));
    });
});

document.querySelector(".composer button").addEventListener("click", () => {
    let song = document.querySelector("#input").value

    if(song !== "") {
        let songArray = song.split("")
        playComposition(songArray)
    }
     document.querySelector("#input").value = ''
})


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play()
      }

      if(keyElement) {
        keyElement.classList.add("active")
      }

      setTimeout(()=> {
        keyElement.classList.remove("active")
      }, 300);
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        },wait)
        wait += 250;
    }
}