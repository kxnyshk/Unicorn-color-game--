const max1 = 5
const max2 = 4
const min = 0

let red = document.querySelector('#red')
let pink = document.querySelector('#pink')
let yellow = document.querySelector('#yellow')
let green = document.querySelector('#green')
let cyan = document.querySelector('#cyan')
let violet = document.querySelector('#violet')

let getColor = (selectedElement) =>{
    return window.getComputedStyle(selectedElement).backgroundColor
}

function changeColor(idx1, idx2) {
    switch (idx1){
        case 0:
            switch (idx2){
                case 0:
                    let temp1 = getColor(red)
                    red.style.background = getColor(pink)
                    pink.style.background = temp1;
                    break;
                case 1:
                    let temp2 = getColor(red)
                    red.style.background = getColor(yellow)
                    yellow.style.background = temp2;
                    break;
                case 2:
                    let temp3 = getColor(red)
                    red.style.background = getColor(green)
                    green.style.background = temp3;
                    break;
                case 3:
                    let temp4 = getColor(red)
                    red.style.background = getColor(cyan)
                    cyan.style.background = temp4
                    break;
                case 4:
                    let temp5 = getColor(red)
                    red.style.background = getColor(violet)
                    violet.style.background = temp5
                    break;
                default:
                    
            }
            break;
        case 1:
            switch (idx2){
                case 0:
                    let temp1 = getColor(pink)
                    pink.style.background = getColor(red)
                    red.style.background = temp1;
                    break;
                case 1:
                    let temp2 = getColor(pink)
                    pink.style.background = getColor(yellow)
                    yellow.style.background = temp2;
                    break;
                case 2:
                    let temp3 = getColor(pink)
                    pink.style.background = getColor(green)
                    green.style.background = temp3;
                    break;
                case 3:
                    let temp4 = getColor(pink)
                    pink.style.background = getColor(cyan)
                    cyan.style.background = temp4
                    break;
                case 4:
                    let temp5 = getColor(pink)
                    pink.style.background = getColor(violet)
                    violet.style.background = temp5
                    break;
                default:
                    
            }
            break;
        case 2:
            switch (idx2){
                case 0:
                    let temp1 = getColor(yellow)
                    yellow.style.background = getColor(red)
                    red.style.background = temp1;
                    break;
                case 1:
                    let temp2 = getColor(yellow)
                    yellow.style.background = getColor(pink)
                    pink.style.background = temp2;
                    break;
                case 2:
                    let temp3 = getColor(yellow)
                    yellow.style.background = getColor(green)
                    green.style.background = temp3;
                    break;
                case 3:
                    let temp4 = getColor(yellow)
                    yellow.style.background = getColor(cyan)
                    cyan.style.background = temp4
                    break;
                case 4:
                    let temp5 = getColor(yellow)
                    yellow.style.background = getColor(violet)
                    violet.style.background = temp5
                    break;
                default:
                    
            }
            break;
        case 3:
            switch (idx2){
                case 0:
                    let temp1 = getColor(green)
                    green.style.background = getColor(red)
                    red.style.background = temp1;
                    break;
                case 1:
                    let temp2 = getColor(green)
                    green.style.background = getColor(pink)
                    pink.style.background = temp2;
                    break;
                case 2:
                    let temp3 = getColor(green)
                    green.style.background = getColor(yellow)
                    yellow.style.background = temp3;
                    break;
                case 3:
                    let temp4 = getColor(green)
                    green.style.background = getColor(cyan)
                    cyan.style.background = temp4
                    break;
                case 4:
                    let temp5 = getColor(green)
                    green.style.background = getColor(violet)
                    violet.style.background = temp5
                    break;
                default:
                    
            }
            break;
        case 4:
            switch (idx2){
                case 0:
                    let temp1 = getColor(cyan)
                    cyan.style.background = getColor(red)
                    red.style.background = temp1;
                    break;
                case 1:
                    let temp2 = getColor(cyan)
                    cyan.style.background = getColor(pink)
                    pink.style.background = temp2;
                    break;
                case 2:
                    let temp3 = getColor(cyan)
                    cyan.style.background = getColor(yellow)
                    yellow.style.background = temp3;
                    break;
                case 3:
                    let temp4 = getColor(cyan)
                    cyan.style.background = getColor(green)
                    green.style.background = temp4
                    break;
                case 4:
                    let temp5 = getColor(cyan)
                    cyan.style.background = getColor(violet)
                    violet.style.background = temp5
                    break;
                default:
                    
            }
            break;
        case 5:
            switch (idx2){
                case 0:
                    let temp1 = getColor(violet)
                    violet.style.background = getColor(red)
                    red.style.background = temp1;
                    break;
                case 1:
                    let temp2 = getColor(violet)
                    violet.style.background = getColor(pink)
                    pink.style.background = temp2;
                    break;
                case 2:
                    let temp3 = getColor(violet)
                    violet.style.background = getColor(yellow)
                    yellow.style.background = temp3;
                    break;
                case 3:
                    let temp4 = getColor(violet)
                    violet.style.background = getColor(green)
                    green.style.background = temp4
                    break;
                case 4:
                    let temp5 = getColor(violet)
                    violet.style.background = getColor(cyan)
                    cyan.style.background = temp5
                    break;
                    
            }
            break;
        default:

    }
}

function randGen(params) {
    let rand1 = Math.floor(Math.random()*(max1-min+1))
    let rand2 = Math.floor(Math.random()*(max2-min+1))
    // console.log(rand1);
    // console.log(rand2);
    changeColor(rand1, rand2)
}

red.addEventListener('click', () => {
    randGen()    
})
pink.addEventListener('click', () => {
    randGen()
})
yellow.addEventListener('click', () => {
    randGen()
})
green.addEventListener('click', () => {
    randGen()
})
cyan.addEventListener('click', () => {
    randGen()
})
violet.addEventListener('click', () => {
    randGen()
})