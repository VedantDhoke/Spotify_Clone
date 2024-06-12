console.log("Welcome To Spotify");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('play');
let myProgressBar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem')); 
let masterSongName = document.getElementById('masterSongName'); 


let songs = [
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song 2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Song 3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Song 4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song 5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Song 6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

 

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>9){
        songIndex = 0;
    }else{
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex = songIndex - 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



//play pause handle
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        gif.style.opacity = 1;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//update seekbar
// audioElement.addEventListener('timeupdate', ()=> {
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
//     myProgressBar.value = progress;
    
// })

// myProgressBar.addEventListener('change' , ()=> {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })


