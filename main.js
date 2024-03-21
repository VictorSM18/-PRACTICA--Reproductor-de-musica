const songInfo = document.querySelector(".info");
const songTitle = songInfo.children[0];
const songAuthor = songInfo.children[1];
const songPortrait = document.getElementById("portrait");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const playPauseButton = document.querySelector(".play-pause");
const playButton = playPauseButton.children[0];
const pauseButton = playPauseButton.children[1];

let audio = document.querySelector("audio");
const source = audio.children[0];

// Arreglo de objetos con la info de las canciones
const songs = [
    {
        title: "Lost in the City Lights",
        author: "Cosmo Sheldrake",
        image: "assets/cover-1.png",
        url: "assets/lost-in-city-lights-145038.mp3",
    },
    {
        title: "Forest Lullaby",
        author: "Lesfm",
        image: "assets/cover-2.png",
        url: "assets/forest-lullaby-110624.mp3",
    },
];

currentSong = 0;
let playing = false;

let getSongData = () => {
    if (playing === true) {
        playButton.classList.add("no-display");
        pauseButton.classList.remove("no-display");
    }

    songTitle.innerHTML = songs[currentSong].title;
    songAuthor.innerHTML = songs[currentSong].author;
    songPortrait.style.backgroundImage = `url("${songs[currentSong].image}")`;
    source.setAttribute("src", songs[currentSong].url);
    audio.load();
    audio.play();
};

getSongData();

previousButton.addEventListener("click", () => {
    if (currentSong === 0) {
        alert("There are no songs previous this one");
    } else {
        audio.pause();
        audio.currentTime = 0;
        currentSong--;
        playing = true;
        getSongData();
        return currentSong, playing;
    }
});

nextButton.addEventListener("click", () => {
    if (currentSong === songs.length - 1) {
        alert("There are no more songs");
    } else {
        audio.pause();
        audio.currentTime = 0;
        currentSong++;
        playing = true;
        getSongData();
        return currentSong, playing;
    }
});

playPauseButton.addEventListener("click", () => {
    if (playing === true) {
        audio.pause();
        playButton.classList.remove("no-display");
        pauseButton.classList.add("no-display");
        return (playing = false);
    } else {
        audio.play();
        playButton.classList.add("no-display");
        pauseButton.classList.remove("no-display");
        return (playing = true);
    }
});
