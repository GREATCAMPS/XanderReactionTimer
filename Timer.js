const btn = document . querySelector(".btn");
const timeDisplay = document.querySelector(".timeDisplay");

btn.addEventListener("mousedown", startTest)

let greenTime;

function startTest(){
    greenTime=0;

document.body.style.backgroundColor = "red";

btn.removeEventListener("mousedown", startTest);
timeDisplay.style.visibility = "hidden";

btn.innerHTML = "Wait for green";
btn.addEventListener("mousedown", endTest);

greenID = setTimeout(turnGreen, Math.random()*3000+3000);
}
function endTest(){
    if(greenTime == 0){
        //too  early
        clearTimeout(greenID);
        timeDisplay.innerHTML = "You clicked too soon!";

    }
    else{
        //good
        const time = Date.now() - greenTime;
        timeDisplay.innerHTML = time + " milliseconds";
    }
    timeDisplay.style.visibility = "visible";
    document.body.style.backgroundColor = "gray";
    btn.innerHTML = "Restart test";
    btn.addEventListener("mousedown", startTest);
    btn.removeEventListener("mousedown",endTest);
}

function turnGreen(){
document.body.style.backgroundColor = "green";
btn.innerHTML = "Click now!";
greenTime = Date.now();
}