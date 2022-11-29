// let allBtns = document.querySelectorAll('button');

// function getRandColor(){
//     let r = Math.round(Math.random()* 255)
//     let g = Math.round(Math.random()* 255)
//     let b = Math.round(Math.random()* 255)
//     let rgb = `rgb(${r}, ${g}, ${b})`;
//     return rgb
// }

// allBtns.forEach(btn =>{
//     btn.style.backgroundColor = getRandColor();
//     btn.innerHTML = btn.style.backgroundColor
// })


// let allBtns = document.querySelectorAll('button');

// allBtns.forEach(btn => {
//     btn.innerHTML = Math.round(Math.random()* 1000);
//     if(btn.innerHTML % 2 == 0){
//         btn.style.backgroundColor = 'blue'
//     }
//     else{
//         btn.style.backgroundColor = 'red'
//     }
// })

// let allBtns = document.querySelectorAll('.btn');

// let singleBtn = document.querySelector('.render-btn');


// function getRandColor(){
//     let r = Math.round(Math.random()* 255)
//     let g = Math.round(Math.random()* 255)
//     let b = Math.round(Math.random()* 255)
//     let rgb = `rgb(${r}, ${g}, ${b})`;
//     return rgb
// }

// singleBtn.addEventListener('click', function(){
//     allBtns.forEach(btn => btn.style.backgroundColor = getRandColor());
// })

// let btn = document.querySelector('button');
// let div = document.querySelector('div');

// btn.addEventListener('click',function(){
//     div.style.display = 'block'
// })        code to expand stuff when a button is pressed

function getRandColor(){
    let r = Math.round(Math.random()* 255)
    let g = Math.round(Math.random()* 255)
    let b = Math.round(Math.random()* 255)
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb
}


let btn = document.querySelector('button');
let div = document.querySelectorAll('.first, .second, .third');
let h3 = document.querySelector('h3');

btn.addEventListener('click',function(){
    div.forEach(div => div.style.backgroundColor = getRandColor());
    h3.innerText = getRandColor();
})

div.addEventListener('click',function(){
    
})