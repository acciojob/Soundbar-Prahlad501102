const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

let currentAudio = null;

sounds.forEach(sound => {
  const audio = new Audio(`sounds/${sound}.mp3`);

  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      if (button.innerText === sound) {
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
        currentAudio = audio;
        audio.play();
      }
    });
  });
});

document.querySelector('.stop').addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
