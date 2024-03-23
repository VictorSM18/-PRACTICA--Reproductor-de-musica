const songInfo = document.querySelector(".info");
const songTitle = songInfo.children[0];
const songAuthor = songInfo.children[1];
const songPortrait = document.getElementById("portrait");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const playPauseButton = document.querySelector(".play-pause");
const playButton = playPauseButton.children[0];
const pauseButton = playPauseButton.children[1];
const currentTime = document.querySelector(".current-time");
const duration = document.querySelector(".duration");
const audio = document.querySelector("audio");
const source = audio.children[0];
const currentProgress = document.getElementById("current-progress");

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

let currentSong = 0;
let playing = false;

let getSongData = () => {
    audio.addEventListener("loadedmetadata", () => {
        let audioDuration = audio.duration;
        duration.innerHTML = secToMin(audioDuration);
    });

    if (playing === true) {
        playButton.classList.add("no-display");
        pauseButton.classList.remove("no-display");
    }

    songTitle.innerHTML = songs[currentSong].title;
    songAuthor.innerHTML = songs[currentSong].author;
    songPortrait.style.backgroundImage = `url("${songs[currentSong].image}")`;
    source.setAttribute("src", songs[currentSong].url);
    audio.load();
};

getSongData();

let updateTimer = () => {
    setInterval(() => {
        let currentTimer = secToMin(audio.currentTime);
        currentTime.innerHTML = currentTimer;

        let progress = (audio.currentTime * 100) / audio.duration;
        let progressPercentage = (currentProgress.style.width = progress + "%");

        if (progress >= 100) {
            currentSong++;
            playing = true;
            getSongData();
            audio.play();
            return currentSong, playing;
        }
    }, 1000);
};

let secToMin = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let extraSeconds = seconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds =
        extraSeconds < 10
            ? "0" + Math.floor(extraSeconds)
            : Math.floor(extraSeconds);

    return minutes + ":" + extraSeconds;
};

previousButton.addEventListener("click", () => {
    if (currentSong === 0) {
        alert("There are no songs previous this one");
    } else {
        audio.pause();
        audio.currentTime = 0;
        currentSong--;
        playing = true;
        getSongData();
        audio.play();
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
        audio.play();
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
        playing = true;
        playButton.classList.add("no-display");
        pauseButton.classList.remove("no-display");
        updateTimer();
        return playing;
    }
});
