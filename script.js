const buttons = document.querySelectorAll('.btn');
const sounds = document.querySelectorAll('audio');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    sounds.forEach(sound => {
      sound.pause();
      sound.currentTime = 0;
    });

    if (btn.classList.contains('stop')) return;

    const sound = document.getElementById(btn.dataset.sound);
    sound.play();
  });
});
