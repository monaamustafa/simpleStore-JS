var images = document.querySelector('#slider-img');
var imagesPath = ["images/slider/1.jpg", "images/slider/2.jpg", "images/slider/3.jpg"];
var postion = 1;
var movingInterval;
window.onload = (event) => {
    images.src = imagesPath[Math.abs(postion % imagesPath.length)];
    movingInterval = setInterval(() => {
        postion++;
        images.src = imagesPath[Math.abs(postion % imagesPath.length)];
    }, 2000);
    
};

function moveForward() {
    postion++;
    images.src = imagesPath[Math.abs(postion % imagesPath.length)];

}

function moveBackward() {
    postion--;
    images.src = imagesPath[Math.abs(postion % imagesPath.length)];
}