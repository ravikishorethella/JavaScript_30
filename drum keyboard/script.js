window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // return null if there is no audio
    // for some audios if the length is more then, it won't play unitl it is finsihed so, we set the current time to zero
    audio.currentTime = 0;
    audio.play();
    // adding class press to the key
    keys.classList.add('press');
}, false);

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('press');
}

// finding all the keys
const keys = document.querySelectorAll('.key');
// iterating over each key and adding the event listener to remove the tranistion
keys.forEach(key => key.addEventListener('transitionend', removeTransition));