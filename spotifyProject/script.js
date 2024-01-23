async function getsongs() {
  let a = await fetch("http://127.0.0.1:3000/spotifyProject/songs");
  let response = await a.text();
  // console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  //   console.log(as)
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
  //   console.log(songs);
}
async function main() {
  // get the list of  all the songs
  let songs = await getsongs();
  console.log(songs);
  let songsul = document
    .querySelector(".songlist")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songsul.innerHTML =
      songsul.innerHTML +
      `<li> <img width="30" src="./music.svg" alt="" />
                <div class="mar">
                <div class="info">
                  <div class="song-n">${
                    song.replaceAll("%20", "").split("-")[1]
                  }</div>
                  <div>AFRIDE</div>
                </div>

                <div class="playnow">
                  <span>Play Now</span>
                  <img src="./play.svg" alt="" />
                </div></div>
    </li>`;
  }

  //   play the first songs
  let audio = new Audio(songs[0]);
  // audio.play();
}

main();
