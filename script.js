let moon1= document.getElementById('moon1');
let moon3= document.getElementById('moon3');
let moon2= document.getElementById('moon2');
let text =document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll',function(){
    let value= window.scrollY;
    moon1.style.left = value *1 + 'px';
    Text.style.MarginBottom = value *1 + 'px';
    button.style.MarginBottom = value *1 + 'px';
    moon2.style.top = value *0.5 + 'px';
})