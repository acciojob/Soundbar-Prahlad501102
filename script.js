//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const btnContainer = document.getElementById('buttons');

sounds.forEach(sound => {
    const btn = document.querySelector(`.btn:nth-child(${sounds.indexOf(sound) + 1})`);

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
});

document.querySelector('.stop').addEventListener('click', () => {
    stopSongs();
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}