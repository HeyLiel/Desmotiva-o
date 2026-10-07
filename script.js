const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("show"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("show")));

const resultTitle=document.getElementById("resultTitle");
const resultText=document.getElementById("resultText");
document.querySelectorAll(".path-card").forEach(card=>{
  card.addEventListener("click",()=>{
    resultTitle.textContent=card.dataset.title;
    resultText.textContent=card.dataset.text;
    document.getElementById("resultBox").scrollIntoView({behavior:"smooth",block:"center"});
  });
});

const modal=document.getElementById("modal");
document.getElementById("closeModal").onclick=()=>modal.classList.remove("open");
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
