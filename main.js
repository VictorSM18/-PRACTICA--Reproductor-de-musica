const songInfo = document.querySelector(".info");
const songTitle = songInfo.children[0];
const songAuthor = songInfo.children[1];
const progressBar = document.querySelector(".progress-bar");

// Arreglo de objetos con la info de las canciones
const songs = [
    {
        title: "Lost in the City Lights",
        author: "Cosmo Sheldrake",
    },
    {
        title: "Forest Lullaby",
        author: "Lesfm",
    },
];

// Llenando los p tags con la info
songTitle.innerHTML = songs[0].title;
songAuthor.innerHTML = songs[0].author;

audio = progressBar.children[0];
