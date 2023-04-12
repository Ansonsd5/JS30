const video = document.querySelector("video");
const playPause = document.querySelector(".play-pause");

const onPlayPause = () =>{
playPause.innerHTML= video.paused ? ">" : "||"
}


playPause.addEventListener("click", onPlayPause);



