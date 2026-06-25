const songs = {
  song1: {
    title: "song one",
    lyrics: `put the lyrics for song one here.

line one
line two
line three`
  },
  song2: {
    title: "song two",
    lyrics: `put the lyrics for song two here.`
  },
  song3: {
    title: "song three",
    lyrics: `put the lyrics for song three here.`
  },
  song4: {
    title: "song four",
    lyrics: `put the lyrics for song four here.`
  },
  song5: {
    title: "song five",
    lyrics: `put the lyrics for song five here.`
  },
  song6: {
    title: "song six",
    lyrics: `put the lyrics for song six here.`
  }
};

const home = document.getElementById("home");
const lyricsView = document.getElementById("lyricsView");
const title = document.getElementById("lyrics-title");
const text = document.getElementById("lyrics-text");
const backButton = document.getElementById("backButton");
const buttons = document.querySelectorAll(".track");

function openSong(songKey) {
  const song = songs[songKey];
  title.textContent = song.title;
  text.textContent = song.lyrics;
  home.classList.add("hidden");
  lyricsView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  lyricsView.classList.add("hidden");
  home.classList.remove("hidden");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => openSong(button.dataset.song));
});

backButton.addEventListener("click", goBack);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lyricsView.classList.contains("hidden")) {
    goBack();
  }
});
