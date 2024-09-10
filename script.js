/*
משתנים שמכילים את הדיבים מהHTML
*/
const mainContainer = document.getElementById('mainContainer');
const hInputContainer = document.getElementById('h_inputContainer');
const hContainer = document.getElementById('hContainer');
const inputButtonContainer = document.getElementById('input_ButtonContainer');
const inputContainer = document.getElementById('inputContainer');
const buttonContainer = document.getElementById('ButtonContainer');
const racesContainer = document.getElementById('racesContainer');/*בשימוש*/
const scoreContainer = document.getElementById('scoreContainer');
const startRaceButton = document.getElementById('startRaceButton');/*בשימוש*/
const input = document.getElementById('input');/*בשימוש*/
const stopRaceButton = document.getElementById('stopRace');
const endLine = document.getElementById('inputLength');
let positionInRace = 1;
// let timeCounter0 = 0;
// let timeCounter1 = 1;
// let timeCounter2 = 2;
// let timeCounter3 = 3;
/*
מערך של מכוניות במירוץ
*/
const cars =[
    {id: 0,
    imageSrc:"./images/car1.png",
    position:0
    },
    {id: 1,
    imageSrc:"./images/car2.png",
    position:0
    },
    {id: 2,
    imageSrc:"./images/car3.png",
    position:0
    },
    {id: 3,
    imageSrc:"./images/car4.png",
    position:0
    }
]

startRaceButton.addEventListener('click', ()=> race());

function race(){

    if (input.value > 4 || input.value < 2)
        {
            alert("מספר המכוניות צריך להיות בין 2 ל4");            
            racesContainer.innerHTML = '';
            return;
        }
        startRaceButton.disabled = true;
        racesContainer.innerHTML = '';
    for (let i=0; i<input.value; i++){
        creatRaceRoad(i);
        startRace(i);
    }
}
function creatRaceRoad(idCar){

    const newRaceRoad = document.createElement("div");
    newRaceRoad.classList.add("raceRoad");
    const endLineDiv = document.createElement("div");
    endLine.innerText = "|"
    endLineDiv.style.position = endLine;
    newRaceRoad.appendChild(endLineDiv);
    const icon = document.createElement("img");
    icon.src = cars[idCar].imageSrc;
    icon.classList.add("icon");
    icon.id = `car${idCar}`;
    newRaceRoad.appendChild(icon);
    racesContainer.appendChild(newRaceRoad);
    console.log(icon);

}

function startRace(idCar)
{    
    let timeCounter = 0;
    let position = 0  
    const car = document.getElementById(`car${idCar}`);
    const intervalId = setInterval(()=>{

        position += Math.floor(Math.random() * 10);
        car.style.left = position + "px";
        timeCounter += 0.025;
        cars[idCar] = car;
        console.log(position);
        if (position >= endLine.value)
        {
            console.log(`car ${car} has finished!`);
            const score = document.createElement("div");
            score.classList.add(`scoreLine${positionInRace}`);
            score.innerText = `${car.id} has finished in ${timeCounter} sec`;
            scoreContainer.appendChild(score);
            positionInRace++;
            clearInterval(intervalId);
        }
    },25)
}
 


stopRaceButton.addEventListener('click', ()=> stopRace());

function stopRace(){
    racesContainer.innerHTML = '';
    scoreContainer.innerHTML = '';
    startRaceButton.disabled = false;
    clearInterval(window.intervalId);
}

