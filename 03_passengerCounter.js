const button1 = document.getElementById("increment-btn")
const button2 = document.getElementById("save-btn")
let counter = document.getElementById('count-el')
let paragraph = document.querySelector('p')
let count = 0;
button1.addEventListener('click', ()=>{
    count++;
    counter.textContent = count;
})

function save(){
    console.log(count);
    paragraph.innerText += " - " + counter.innerText;
}