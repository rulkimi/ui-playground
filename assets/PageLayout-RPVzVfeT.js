import{_ as p,r as h,D as m,G as f,i as v,o as e,e as n,d as t,t as r,u as g,k as d,F as b,f as k,p as S,g as y}from"./index-DbHrvn2c.js";const x=()=>{const o=[];return document.querySelectorAll(".sublink").forEach(s=>{s.addEventListener("click",()=>{s.scrollIntoView({behavior:"smooth"})}),o.push({element:s,title:s.innerText,position:s.getBoundingClientRect().top+window.scrollY})}),o},u=o=>(S("data-v-f0dbfac3"),o=o(),y(),o),w={class:"grid grid-cols-4"},I={class:"col-span-4 lg:col-span-3 custom-scroll overflow-y-auto h-[calc(100vh-3.5rem)]"},L={key:0,class:"p-6"},B={class:"text-primary font-semibold mb-2"},C={class:"text-2xl font-bold mb-2"},P={class:"text-lg mb-2"},V={key:1},$=u(()=>t("p",null,"Coming soon.",-1)),D=[$],F={class:"hidden lg:block p-6 sticky top-0 self-start"},M=u(()=>t("p",{class:"font-semibold mb-4"},"On this page",-1)),T={class:"flex flex-col gap-2"},q=["onClick"],A={__name:"PageLayout",setup(o){const l=h([]);m(()=>{l.value=x()});const s=f(),i=v(()=>s.currentSection),_=c=>{c.scrollIntoView({block:"start",behavior:"smooth"})};return(c,E)=>(e(),n("div",w,[t("div",I,[i.value?(e(),n("div",L,[t("p",B,r(i.value.name),1),t("h1",C,r(i.value.menus.find(a=>a.path===g(s).currentPath).name),1),t("p",P,[d(c.$slots,"subtitle",{},void 0,!0)]),d(c.$slots,"content",{},void 0,!0)])):(e(),n("div",V,D))]),t("div",F,[M,t("ul",T,[(e(!0),n(b,null,k(l.value,a=>(e(),n("li",{class:"cursor-pointer",onClick:G=>_(a.element)},r(a.title),9,q))),256))])])]))}},O=p(A,[["__scopeId","data-v-f0dbfac3"]]);export{O as P};
