let homeTotal= document.getElementById("home-points")
let guestTotal= document.getElementById("guest-points")
let newgame = document.getElementById("home-points")
let endgame =document.getElementById("guest-points")

let count = 0

function zerOhome(){
    let zerOhome = count * 0
    newgame.textContent = zerOhome
}
function zerOguest(){
    let zerOguest = count * 0
    endgame.textContent = zerOguest
}

function addOnehome(){
    let addOnehome = count + 1
   homeTotal.textContent -= addOnehome 
      
}


function addTwohome(){
     let addTwohome = count + 2
     homeTotal.textContent -=  addTwohome 
      
}

function addThreehome(){
     let addThreehome = count + 3
     homeTotal.textContent -=  addThreehome
     
     
}

function addOneguest(){
    let addOneguest = count + 1
    guestTotal.textContent -= addOneguest
      
}


function addTwoguest(){
     let addTwoguest = count + 2
     guestTotal.textContent -= addTwoguest 
    
}

function addThreeguest(){
     let addThreeguest = count + 3
     guestTotal.textContent -= addThreeguest
     
}

