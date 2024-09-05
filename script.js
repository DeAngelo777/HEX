const body = document.querySelector('body');
const hex = document.querySelector('.hex');
const btn = document.querySelector('button');


// button.addEventListener("click", myFunction);


// function myFunction(){
//     alert("Hello world");
// }

function generateColor(){

}

btn.addEventListener("click", ()=> {
    const randomColor = Math.random().toString(16).slice(2,8)


hex.innerHTML = '#' + randomColor
body.style.backgroundColor = '#' + randomColor;

})