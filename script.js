let images = [
    "images/bird-wing-wildlife-portrait-jjgg.jpeg",
    "images/eyes-dog-siberian-husky-husky.jpeg",
    "images/landscape-nature-neural-network-johf.jpg",
    "images/landscape-sea-water-nature-nzrj.jpeg",
    "images/sea-bay-shore-sand-upjd.jpeg",
    "images/tree-branch-snow-cold-rdgf.jpeg",
    "images/landscape-nature-wilderness-mountain-ziwj.jpeg",
    "images/landscape-waterfall-rock-nature.jpeg"
];

let numCurrentImg = 0;
let photo = document.getElementById("photo")

function switchLeft(evt) {
    if (numCurrentImg == 0) {
        numCurrentImg = images.length - 1;
    } else {
        numCurrentImg--;
    }
    showPicture();
}

function switchRight(evt) {
    if (numCurrentImg == images.length - 1) {
        numCurrentImg = 0;
    } else {
        numCurrentImg++;
    }
    showPicture();
}

function showPicture() {
    console.log(photo);
    photo.src = images[numCurrentImg];
}

showPicture();