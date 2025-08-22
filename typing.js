// Simple typing effect (Hero)
const texts = ["Front-End Developer", "IT Enthusiast", "Creative Thinker"];
const el = document.getElementById("typing");
let t = 0, c = 0, typing = true;

function tick(){
  if(!el) return;
  const word = texts[t];
  if(typing){
    el.textContent = word.slice(0, c+1);
    c++;
    if(c === word.length){ typing = false; setTimeout(tick, 1400); return; }
  }else{
    el.textContent = word.slice(0, c-1);
    c--;
    if(c === 0){ typing = true; t = (t+1) % texts.length; }
  }
  setTimeout(tick, typing ? 80 : 40);
}
document.addEventListener("DOMContentLoaded", ()=> setTimeout(tick, 400));
