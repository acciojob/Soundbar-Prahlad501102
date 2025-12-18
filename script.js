const buttons = document.querySelectorAll('.btn');
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('stop')) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const sound = button.getAttribute('data-sound');
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });
});
