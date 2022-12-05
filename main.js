const bild1 = "/personal-website/images/sand-scrolling-background"
const bild2 = "/personal-website/images/Background-1"
const bild3 = "";
var backGroundEffects = [

    bild1,

    bild2,

    bild3,
]
;

document.addEventListener("keydown" , (event) => {
    changeBackground(event.key);
});

function changeBackgroundBack(){
    for (let i = 0; i < backGroundEffects.length; i++)
        document.getElementsByTagName("BODY").style.background = backgroundEffects[i] + 1;
}

function changeBackgroundForward(){
for (let i = backGroundEffects.length; i > 1; i--)
    document.getElementsByTagName("BODY").style.background = backgroundEffects[i] - 1;
}

var currentBackground = backGroundEffects[1]

 function changeBackgroundBack(){
    document.getElementsByTagName("BODY").style.background = backgroundEffects[i] - 1;
     let currentBackground = backgroundEffects[i] - 1
 }

 function changeBackgroundForward() {
     document.getElementsByTagName("BODY").style.background = backgroundEffects[i] + 1;
     let currentBackground = backgroundEffects[i] + 1
 };

 function changeBackground(){
     if (event.key == "ArrowLeft"){
         document.getElementsByTagName("BODY").style.background = backgroundEffects[i] - 1;
     }
    else if (event.key == "ArrowRight"){
         document.getElementsByTagName("BODY").style.background = backgroundEffects[i] + 1;
     }
 }

function arrowPress(){
     switch (event.key) {
         case "ArrowLeft":
             changeBackgroundBack()
             break;
         case "ArrowRight":
             changeBackgroundForward()
            break;
     }
};



