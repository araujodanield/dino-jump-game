/* Game elements identification */
const background = document.querySelector (" .background");
const floor = document.querySelector (" .floor");
const stone = document.querySelector (".stone");
const dino = document.querySelector (" .dino");
const restart = document.querySelector (".restart");

/* Jump condition */
const jump = () => {
 dino.classList.add("jump");
 dino.src= "assets/images/dino-jump.gif"

 setTimeout(() => {
    dino.classList.remove("jump");
    dino.src= "assets/images/dino-run.gif"
 }, 500);
}

/* Gameplay conditions */
const loop = setInterval(() => {
    const stonePosition = stone.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace("px", "")

    if (stonePosition <= 80 && stonePosition > 0 && dinoPosition < 100) {
        background.style.animationPlayState = "paused";
        floor.style.animationPlayState = "paused";
        stone.style.animationPlayState = "paused";
        dino.style.animationPlayState = "paused";
        dino.src= "assets/images/dino-dead.gif";
 
        clearInterval (loop);
    }
}, 10);

/* Controls */
document.addEventListener ("keydown", jump);