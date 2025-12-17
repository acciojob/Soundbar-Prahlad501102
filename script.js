let audio = null;

// Play sound buttons
document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    audio = new Audio(`sounds/${button.innerText}.mp3`);
    audio.play();
  });
});

// Stop button
document.querySelector('.stop').addEventListener('click', () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
});
