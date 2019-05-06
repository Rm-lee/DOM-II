// Your code goes here
const home = document.querySelector(".home");
document.addEventListener('mousemove', event => {
 
 home.style.color = `rgb(55,${event.clientX/3},55)`;
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

inverse_image.addEventListener('load', event => {
 inverse_image.style.display = 'none';
 let newContent = document.createElement("h2");
 newContent.textContent = "You are not worthy to view img"
 newContent.style.textAlign= "center"
 inv_holder.appendChild(newContent);
});


inc = 0;
function wheelPos(event) {
 if (event.deltaY < 0) {
 inc += 10;
 console.log(parseInt(inc));
 home.style.backgroundColor= `rgb(${inc},55,55)`;
 }
 else {
  inc -= 10;
 console.log(parseInt(inc));
 home.style.backgroundColor= `rgb(${inc},55,55)`;
 }
};
home.onwheel = wheelPos;
