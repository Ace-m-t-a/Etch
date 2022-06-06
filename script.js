const gridContainer = document.querySelector(".gridContainer");
const button = document.querySelector(".button");
const eraser = document.querySelector(".eraser");
const rgb = document.querySelector(".rgb");
const black = document.querySelector(".black");


button.addEventListener('click', () => {
   newGrid()
});

eraser.addEventListener('click', () => {
   gridContainer.removeEventListener('mouseover', () => {
      changeToBlack();
      RGB();
   })
   gridContainer.addEventListener('mouseover', changeToWhite);
})

black.addEventListener('click', () => {
   gridContainer.removeEventListener('mouseover', () => {
      RGB();
      changeToWhite();
   })
   gridContainer.addEventListener('mouseover', changeToBlack);
})

rgb.addEventListener('click', () => {
   gridContainer.removeEventListener('mouseover', () => {
      changeToBlack();
      changeToWhite();
   })
   gridContainer.addEventListener('mouseover', RGB);
})


function changeToBlack(e){
    e.target.style.backgroundColor = 'black';
 }

 function changeToWhite(e){
   e.target.style.backgroundColor = 'white';
}

function RGB(e){
    let o = Math.round, r = Math.random, s = 255;
    let rgb = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
   e.target.style.backgroundColor = `${rgb}`
}

function newGrid(){
   gridContainer.textContent = ' '
   let user = prompt("Enter the size of grid you want (max 100): ");
   gridContainer.setAttribute("style", `grid-template-columns:repeat(${user}, 1fr); grid-template-rows:repeat(${user};, 1fr)`)
   if (user > 100 || user <= 0) {
     return;
}
   for (let i= 0; i < (user * user); i++){
      gridContainer.innerHTML += '<div class="boxes"></div>'
   }
}


