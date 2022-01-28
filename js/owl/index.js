document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);


function mouseOver(){
    var img = document.createElement("img").className("img-play");
    img.src = "../Netflix/img/botao-play.png"
    img.
    document.getElementById("demo").appendChild(img);
    document.getElementById("demo").style.background = img;
    console.log("mouse aqui");
    document.getElementById("demo").style.padding = "50px";
    
}

function mouseOut() {
    //document.getElementById("demo").style.background = "blue"
    document.getElementById("demo").style.padding = "0px";

  }