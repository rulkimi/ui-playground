const n=()=>{const o=[];return document.querySelectorAll(".sublink").forEach(t=>{t.addEventListener("click",()=>{t.scrollIntoView({behavior:"smooth"})}),o.push({element:t,title:t.innerText,position:t.getBoundingClientRect().top+window.scrollY})}),o};export{n as g};
