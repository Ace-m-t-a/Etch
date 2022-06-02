// const grid = document.getElementById('grid').addEventListener('click', () => {
//     makeBlocks()
// });

// const colourChange = document.getElementById('boxParent').addEventListener('mouseenter', changeColour)

// function makeBlocks() {
//     let number = prompt("How many rows and columns would you like?");
//     let n = parseInt(number)
//     for (let i = 0; i < n; i++) {
//         let row = document.createElement('div');
//         row.className = "row";
//         for (let j = 0; j < n; j++) {
//             let box = document.createElement('div');
//             box.className = "box";
//             row.appendChild(box);
//         }                
//         document.getElementById('boxParent').appendChild(row);
//     }
// }

// function changeColour(e){
//     if (e.target === 'boxParent'){
//         const grid = document.querySelectorAll('.box');
//         grid.forEach((gridElem) => gridElem.style.backgroundColor = 'red');
//     }
//     console.log(e.target)
// }

// let boxParent = document.querySelector('#boxParent')
// console.log(boxParent.parentNode.parentNode)

// function rgb(){
//     let o = Math.round, r = Math.random, s = 255;
//     return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
// }




const container = document.querySelector('#container');
const grid = document.querySelector('#container');

function makeGrid(){
    for (let i= 0; i < 256; i++){
       let grid = document.createElement('div');
       grid.classList.add('grid')
       grid.addEventListener('mouseenter', changeToBlack)
       container.appendChild(grid);
    }
}
makeGrid()

function changeToBlack(e){
    e.target.style.backgroundColor = 'black';
 }



//add eventlistener to grid divs with a mouseenter effect
// change the divs background color using JS


//Add button with prompt asking for number ofsquares per side
//must be 960px wide but max user input to 100


//change to a completelty random RGB value

//each pass add another 10%of black to it