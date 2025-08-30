let scorehome = document.getElementById("score_h")
let scoreguest = document.getElementById("score_g")

let score=0
function one(){
    score+=1
    scorehome.textContent=score
}
function two(){
    score+=2
    scorehome.textContent=score
}
function three(){
    score+=3
    scorehome.textContent=score
}

let scoreg=0
function oneg(){
    scoreg+=1
    scoreguest.textContent=scoreg
}
function twog(){
    scoreg+=2
    scoreguest.textContent=scoreg
}
function threeg(){
    scoreg+=3
    scoreguest.textContent=scoreg
}