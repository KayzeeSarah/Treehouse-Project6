
const video = document.querySelector("video");
const tscript = document.querySelectorAll(".tscript");

video.addEventListener("timeupdate",function update() {

  for(let i=0; i<tscript.length; i+=1){
    let start = tscript[i].getAttribute("data-start");
    let end = tscript[i].getAttribute("data-end");
    if ( start<=video.currentTime && video.currentTime<end) {
        tscript[i].style.color = "#3A8753";
    }else{
        tscript[i].style.color = "#402E24";
    }

    tscript[i].addEventListener("click", function(e) {
      let start = e.target.getAttribute("data-start");
      video.currentTime = start;
      video.play();
    }, false);

  }
});
