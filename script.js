const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),900));

document.getElementById("openBtn").addEventListener("click",()=>{
  document.querySelector(".intro").scrollIntoView({behavior:"smooth"});
});

const weddingDate = new Date("2026-11-15T11:00:00+05:30").getTime();
function updateCountdown(){
  const now=Date.now(), diff=Math.max(0,weddingDate-now);
  const s=Math.floor(diff/1000);
  document.getElementById("days").textContent=Math.floor(s/86400);
  document.getElementById("hours").textContent=Math.floor((s%86400)/3600);
  document.getElementById("minutes").textContent=Math.floor((s%3600)/60);
  document.getElementById("seconds").textContent=s%60;
}
updateCountdown();
setInterval(updateCountdown,1000);
