let onBtn = document.querySelector('.onBtn')
let bulb = document.querySelector('.bulb')
function turnOnBulb(){
    bulb.src = './images/on.JPG'
}
onBtn.addEventListener('click', turnOnBulb)

let offBtn = document.querySelector('.offBtn')
function turnOffBulb(){
bulb.src= './images/off.JPG'
}
offBtn.addEventListener('click', turnOffBulb)