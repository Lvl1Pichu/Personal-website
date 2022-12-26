const bild1 = "./backgrounds/sand-scrolling-background.avif";
const bild2 = "./backgrounds/pexels-photo-924824.jpeg";
const bild3 = "./backgrounds/Starry sand.jpeg";
const bild4 = "./backgrounds/triangle.webp";
const bild5 = "./backgrounds/Wood.jpeg";

let currentIndex = 0;
var backgroundEffects = [

    bild1,

    bild2,

    bild3,

    bild4,

    bild5
]
;

document.addEventListener("keydown" , (event) => {
    changeBackground(event.key);
});

 function changeBackground(key){
     if (key == "ArrowLeft"){
        currentIndex--
    }
    else if (event.key == "ArrowRight"){
        currentIndex++;
    }
    const nextImage = backgroundEffects[currentIndex]
    document.body.style.background = `url(${nextImage})`;
 }



