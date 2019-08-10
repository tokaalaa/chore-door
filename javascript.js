let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let numClosedDoors = 3;
let startButton = document.getElementById("start");
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
const closedDoorPath = "closed_door.svg";
let botDoorPath = "robot.svg";
let beachDoorPath = "beach.svg";
let spaceDoorPath = "space.svg";
startRound();
function playDoor(door){
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver();    
           }
}
function isBot(door){
  if(door.src === botDoorPath){
   return true; 
  }else{
   return false; 
  }
}
function isClicked(door){
  if(door.src.split("/").pop() === closedDoorPath){
    return false;
  }else{
    return true;
  }
}
function randomChoreDoorGenerator(){
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor == 0){
   openDoor1 = botDoorPath;
   openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if (choreDoor == 1){
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }else{
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}
doorImage1.onclick = () =>{ 
  if(!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);}
}
doorImage2.onclick = () =>{
  if(!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);}
}
doorImage3.onclick = () =>{
 if(!isClicked(doorImage3) && currentlyPlaying){
   doorImage3.src = openDoor3;
    playDoor(doorImage3);}
}
startButton.onclick = startRound;
function gameOver(str){
  if(str ==='win'){
     startButton.innerHTML = 'You win! Play again?';
     }else{
      startButton.innerHTML = 'Game over! Play again?'; 
     }
  currentlyPlaying = false;
}
function startRound(){
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  currentlyPlaying = true;
  startButton.innerHTML = "Good luck!";
  numClosedDoors = 3;
 
  randomChoreDoorGenerator();
}

