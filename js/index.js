// Your code goes here
const home = document.querySelector(".home");
document.addEventListener('mousemove', event => {
 
 home.style.color = `rgb(55,${event.clientX / 4},55)`;
});

const boat_background = document.querySelector(".content-destination");
boat_background.addEventListener('mouseover', event => {
 
  event.target.style.backgroundColor = "lightgrey";
  setTimeout(function() {
   event.target.style.backgroundColor = "";
 }, 500); 
});

document.addEventListener('keydown', event =>{
 if(event.code == 'ArrowUp'){
  home.style.display = 'none';
  
 }
 
});

document.addEventListener('keyup', event =>{
 if(event.code == 'ArrowUp'){
  home.style.display = 'block';
 }
 
});

const fun_img = document.querySelector('.intro img');

fun_img.addEventListener('dblclick', event => {
  fun_img.style.filter = 'invert(1)';
});

inv_holder = document.querySelector('.inverse-content');
inverse_image = document.querySelector('.inverse-content img');
let newContent = document.createElement("h2");

inverse_image.addEventListener('load', event => {
 inverse_image.style.display = 'none';
 
 newContent.textContent = "You are not worthy to view img"
 newContent.style.textAlign= "center"
 inv_holder.appendChild(newContent);
});


inc = 0;
function wheelPos(event) {
 event.preventDefault();
 if (event.deltaY < 0) {
 inc += 10;
 console.log(parseInt(inc));
 home.style.backgroundColor= `rgb(${inc},${inc},${inc})`;
 }
 else {
  inc -= 10;
 console.log(parseInt(inc));
 home.style.backgroundColor= `rgb(${inc},${inc},${inc})`;
 }
};
window.onwheel = wheelPos;

window.addEventListener('scroll', event => {
 newContent.textContent = "HEY, YOU SCROLLED!...don't do that.";
});

let text = document.createElement('textarea');
text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation';
text.style.width = '100%';
text.style.height = '80px';
home.appendChild(text);
function select(event) {
 
 const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
 newContent.textContent = `${selection}`;
};
text.addEventListener('select', select);

let mid = document.querySelector('.content-section');

document.addEventListener('keydown', event =>{
 if(event.code == 'ArrowLeft'){
  mid.style.color = 'white';
 }
 });
 document.addEventListener('keyup', event =>{
  if(event.code == 'ArrowLeft'){
   mid.style.color = '';
  }
});
let nav = document.querySelectorAll('.nav-link');
nav.forEach(element => {
 element.addEventListener('click', event => event.preventDefault());
});
let midDv = document.querySelector('.content-section .text-content');
let midp = document.querySelector('.content-section .text-content p');
midDv.addEventListener('click', event => {
 midDv.textContent = 'I have been clicked';

});
midp.addEventListener('click', event => {
 event.stopPropagation();
 midp.textContent = 'I (p) have been clicked';
 
});