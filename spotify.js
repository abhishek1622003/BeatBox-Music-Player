
let audioElement1=new Audio('1.mp3');
let audioElement2=new Audio('2.mp3');
let audioElement3=new Audio('3.mp3');
let audioElement4=new Audio('4.mp3');
let audioElement5=new Audio('5.mp3');
let audioElement6=new Audio('6.mp3');
let seekBar=document.getElementById('seek');
let Play1=document.getElementById('play1')
let Play2=document.getElementById('play2')
let Play3=document.getElementById('play3')
let Play4=document.getElementById('play4')
let Play5=document.getElementById('play5')
let Play6=document.getElementById('play6')


//song1-------------------------------------------------------------------------------------------------------
Play1.addEventListener('click',()=>{
    if(audioElement1.paused){
        audioElement1.play();
        Play1.classList.remove('fa-play');
        Play1.classList.add('fa-pause');
        
    }else{
        audioElement1.pause();
        Play1.classList.remove('fa-pause');
        Play1.classList.add('fa-play');
}})

audioElement1.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement1.currentTime/audioElement1.duration)*100)
    seekBar.value=progress;
})
seekBar.addEventListener('change',()=>{
    audioElement1.currentTime=seekBar.value * audioElement1.duration/100
})

function ChangeB1(){
    document.getElementById("photo").style.backgroundImage = "url('1.jpeg')";
    document.body.style.backgroundImage = "url('1.jpeg')";
}

//song2-----------------------------------------------------------------------------------------------------
Play2.addEventListener('click',()=>{
    if(audioElement2.paused){
        audioElement2.play();
        Play2.classList.remove('fa-play');
        Play2.classList.add('fa-pause');
        
    }else{
        audioElement2.pause();
        Play2.classList.remove('fa-pause');
        Play2.classList.add('fa-play');
}})
audioElement2.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
    progress2=parseInt((audioElement2.currentTime/audioElement2.duration)*100)
    seekBar.value=progress2;
})
seekBar.addEventListener('change',()=>{
    audioElement2.currentTime=seekBar.value*audioElement2.duration/100
})
function ChangeB2(){
    document.getElementById("photo").style.backgroundImage = "url('2.jpg')";
    document.body.style.backgroundImage = "url('2.jpg')";
}


//song3-----------------------------------------------------------------------------------------------
Play3.addEventListener('click',()=>{
    if(audioElement3.paused){
        audioElement3.play();
        Play3.classList.remove('fa-play');
        Play3.classList.add('fa-pause');
        
    }else{
        audioElement3.pause();
        Play3.classList.remove('fa-pause');
        Play3.classList.add('fa-play');
}})
audioElement3.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
    progress3=parseInt((audioElement3.currentTime/audioElement3.duration)*100)
    seekBar.value=progress3;
})
seekBar.addEventListener('change',()=>{
    audioElement3.currentTime=seekBar.value*audioElement3.duration/100
})
function ChangeB3(){
    document.getElementById("photo").style.backgroundImage = "url('3.webp')";
    document.body.style.backgroundImage = "url('3.webp')";
}

//song4-------------------------------------------------------------------------------------------------
Play4.addEventListener('click',()=>{
    if(audioElement4.paused){
        audioElement4.play();
        Play4.classList.remove('fa-play');
        Play4.classList.add('fa-pause');
        
    }else{
        audioElement4.pause();
        Play4.classList.remove('fa-pause');
        Play4.classList.add('fa-play');
}})
audioElement4.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
    progress4=parseInt((audioElement4.currentTime/audioElement4.duration)*100)
    seekBar.value=progress4;
})
seekBar.addEventListener('change',()=>{
    audioElement4.currentTime=seekBar.value*audioElement4.duration/100
})
function ChangeB4(){
    document.getElementById("photo").style.backgroundImage = "url('4.jpeg')";
    document.body.style.backgroundImage = "url('4.jpeg')";
}


//song5--------------------------------------------------------------------------------------------------

Play5.addEventListener('click',()=>{
    if(audioElement5.paused){
        audioElement5.play();
        Play5.classList.remove('fa-play');
        Play5.classList.add('fa-pause');
        
    }else{
        audioElement5.pause();
        Play5.classList.remove('fa-pause');
        Play5.classList.add('fa-play');
}})
audioElement5.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
    progress5=parseInt((audioElement5.currentTime/audioElement5.duration)*100)
    seekBar.value=progress5;
})
seekBar.addEventListener('change',()=>{
    audioElement5.currentTime=seekBar.value*audioElement5.duration/100
})
function ChangeB5(){
    document.getElementById("photo").style.backgroundImage = "url('5.jpg')";
    document.body.style.backgroundImage = "url('5.jpg')";
}

//song6-----------------------------------------------------------------------------------------------------

Play6.addEventListener('click',()=>{
    if(audioElement6.paused){
        audioElement6.play();
        Play6.classList.remove('fa-play');
        Play6.classList.add('fa-pause');
        
    }else{
        audioElement6.pause();
        Play6.classList.remove('fa-pause');
        Play6.classList.add('fa-play');
}})
audioElement6.addEventListener('timeupdate',()=>{
    progress6=parseInt((audioElement6.currentTime/audioElement6.duration)*100)
    seekBar.value=progress6;
})
seekBar.addEventListener('change',()=>{
    audioElement6.currentTime=seekBar.value*audioElement6.duration/100
})
function ChangeB6(){
    document.getElementById("photo").style.backgroundImage = "url('6.jpg')";
    document.body.style.backgroundImage = "url('6.jpg')";
}
