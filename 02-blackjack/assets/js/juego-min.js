const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],l=["A","J","Q","K"],r=[],n=document.querySelector("#btnNuevo"),s=document.querySelector("#btnPedir"),d=document.querySelector("#btnDetener"),a=document.querySelectorAll(".divCartas"),i=document.querySelectorAll("small"),o=(t=2)=>{e=A(),r=[],i.forEach(e=>e.innerText=0),a.forEach(e=>e.innerHTML=""),s.disabled=!1,d.disabled=!1;for(let l=0;l<t;l++)r.push(0)},A=()=>{e=[];for(let r=2;r<=10;r++)for(let n of t)e.push(r+n);for(let s of t)for(let d of l)e.push(d+s);return _.shuffle(e)},c=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},u=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},$=(e,t)=>(r[t]=r[t]+u(e),i[t].innerText=r[t],r[t]),f=(e,t)=>{let l=document.createElement("img");l.classList.add("carta"),l.src=`./assets/cartas/${e}.png`,a[t].append(l)},D=()=>{let[e,t]=r;setTimeout(()=>{e>21&&t>21?alert("AMBOS HAN PERDIDO!!!"):e>21?alert("EL JUGADOR HA PERDIDO!!!"):t>21?alert("LA COMPUTADORA HA PERDIDO!!!"):t===e?alert("ES UN EMPATE!!!"):e>t?alert("EL JUGADOR HA GANADO!!!"):alert("LA COMPUTADORA HA GANADO!!!")},100)},E=e=>{let t=0;do{let l=c();if(t=$(l,r.length-1),f(l,r.length-1),21===t)break}while(e<=21&&t<=e);D()};return s.addEventListener("click",()=>{let e=c(),t=$(e,0);f(e,0),t>21?(s.disabled=!0,d.disabled=!0,E(t)):21===t&&(s.disabled=!0,d.disabled=!0,E(t))}),d.addEventListener("click",()=>{s.disabled=!0,d.disabled=!0,E(r[0])}),n.addEventListener("click",()=>{o()}),{nuevoJuego:o}})();