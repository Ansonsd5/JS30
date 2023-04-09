const answer = document.querySelector(".answer")

let pressedKey = [];
const secretCode = "how";
window.addEventListener("keyup",keyHandler);

function keyHandler(e){
    pressedKey.push(e.key);
    console.log(pressedKey);
    if(pressedKey.length >= secretCode.length){

        if(pressedKey.join("").toLowerCase()===secretCode.toLowerCase()){
            onAnswerHandler()
        }
        pressedKey.shift()

    }
}

function onAnswerHandler() {
    answer.style.opacity = 1;
    answer.style.backgroundColor = "grey";
}

