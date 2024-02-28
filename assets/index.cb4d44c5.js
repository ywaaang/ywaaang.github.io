import{c as A,a as v,d as m,u as E,r as F,o as s,b as i,F as B,e as b,f as l,g as d,w as y,h as a,t as c,i as _,j,k,v as w,l as x,m as P}from"./vendor.d4115dc8.js";const I=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};I();var N="/headImg.jpeg";const S="modulepreload",f={},$="/",h=function(u,n){return!n||n.length===0?u():Promise.all(n.map(o=>{if(o=`${$}${o}`,o in f)return;f[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":S,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((D,C)=>{r.addEventListener("load",D),r.addEventListener("error",C)})})).then(()=>u())},g=[{path:"/",name:"home",exact:!0,component:()=>h(()=>import("./Home.d2d3c9ea.js"),["assets/Home.d2d3c9ea.js","assets/vendor.d4115dc8.js"]),meta:{breadcrumb:[{parent:"Intro",label:"Intro"}],auth:!0}},{path:"/about",name:"about",exact:!0,component:()=>h(()=>import("./About.3a9f19c0.js"),["assets/About.3a9f19c0.js","assets/vendor.d4115dc8.js"]),meta:{breadcrumb:[{parent:"Intro",label:"Intro"}],auth:!0}},{path:"/work",name:"work",exact:!0,component:()=>h(()=>import("./Work.2ec6765f.js"),["assets/Work.2ec6765f.js","assets/vendor.d4115dc8.js"]),meta:{breadcrumb:[{parent:"Intro",label:"Intro"}],auth:!0}}],L=A({history:v(),routes:g,scrollBehavior(){return{left:0,top:0}}}),M={class:"mt-8"},R=m({setup(p){const{t:u}=E();return(n,o)=>{const e=F("router-link");return s(),i("ul",M,[(s(!0),i(B,null,b(l(g),t=>(s(),i("li",{key:t.name,class:"mt-2"},[d(e,{class:"","active-class":"text-blue-600 font-bold underline",to:t.path},{default:y(()=>[a("span",null,c(l(u)(`menu.${t.name}`)),1)]),_:2},1032,["to"])]))),128))])}}}),W={class:"mt-48"},O=_("Made with "),T=a("span",{class:"text-red-400"},"\u2665",-1),V={class:"text-xs mt-8"},H=a("span",{class:"text-blue-400"},"Vue3, Typescripts, Tailwind CSS, and Vite",-1),q=_("."),G=m({setup(p){const{t:u}=E();return(n,o)=>(s(),i("div",W,[a("p",null,"\xA9 Copyright "+c(new Date().getFullYear())+" All rights reserved.",1),a("p",null,[O,T,_(" by "+c(l(u)("app.name"))+".",1)]),a("p",V,[_(c(l(u)("copyright.stack"))+" ",1),H,q])]))}}),J=a("option",{value:"en"},"En",-1),Q=a("option",{value:"cn"},"\u4E2D\u6587",-1),U=[J,Q],K=m({setup(p){const{locale:u}=E(),n=j("");n.value=u.value;const o=e=>{localStorage.setItem("lang",n.value),location.reload()};return(e,t)=>k((s(),i("select",{class:"px-4 py-0 font-semibold rounded-lg shadow-md mt-8 w-20 h-10","onUpdate:modelValue":t[0]||(t[0]=r=>n.value=r),onChange:o},U,544)),[[w,n.value]])}}),Y={class:"container bg-gray-50 h-full w-full sm:w-4/12 flex-none p-8"},z=a("img",{src:N,class:"w-44 h-44 rounded-full mx-auto",alt:"Image"},null,-1),X={class:"text-2xl antialiased font-semibold mt-8"},Z={class:"text-sm antialiased font-semibold mt-4"},ee={class:"text-blue-400"},te=m({setup(p){const{t:u}=E();return(n,o)=>(s(),i("div",Y,[z,a("div",X,c(l(u)("app.name")),1),a("div",Z,[a("span",ee,c(l(u)("app.title")),1),_(" "+c(l(u)("app.job")),1)]),d(R),d(G),d(K)]))}});const ue={class:"block sm:flex"},oe={class:"flex-1 pt-16 px-16"},ne=m({setup(p){return(u,n)=>{const o=F("router-view");return s(),i("div",ue,[d(te,{class:"flex-1"}),a("div",oe,[d(o)])])}}}),re={app:{name:"Ben",title:"Full Stack",job:"Engineer"},menu:{home:"Home",work:"Work",about:"About"},copyright:{stack:"This project is made with"},work:{title:"WHAT I DO",project1:"CRM Platform",project2:"Product Analysis Chrome Extension",project3:"H5 Animations",project4:"NFT marketplace",project5:"Calendar-Notes Desktop APP",project6:"Storytelling Mobile APP",project7:"Instant Messenger",project8:"Fintech Web and App"},home:{intro:"I am a Fullstack Development Engineer",proficient:"Proficient in",currentL:"Currently learning",willing:"Willing to work on ",work1:"Web, Mobile, Desktop, Server and Dapp Development",quote:"Atwood's Law: Any application that can be written in JavaScript,will eventually be written in JavaScript."},about:{title:"WHO I AM",hi:"Hi I am",textGraduate:"Graduated from McGill University with a Bachelor of Engineering.",frontD:" With over five years of experience in Fullstack Development",workedIn:" Worked in Supply Chain, Consulting, and Fintech industries. Capable of",vueR:"Vue.js, React.js, Next.js/Nuxt.js, Node.js, Python Flask, ReactNative, Electron, MySQL/MongoDB ",and:"and projects such as ",project:"NFT Platform, Web Animations, CRM, Social Network, Chatroom, Notes App and",soOn:" others.",bilingual:"English / Chinese bilingual, French intermediate. Proficient in",agile:"Agile",manage1:" Mangement and",waterfall:"Waterfall",manage2:" Management principles. Currently interested in Blockchain and Dapp development."}},ae={app:{name:"Ben",title:"\u5168\u6808",job:"\u5F00\u53D1"},menu:{home:"\u9996\u9875",work:"\u4F5C\u54C1",about:"\u5173\u4E8E"},copyright:{stack:"\u6B64\u9879\u76EE\u57FA\u4E8E"},work:{title:"\u6211\u7684\u4F5C\u54C1",project1:"CRM\u7BA1\u7406\u5E73\u53F0",project2:"\u4EA7\u54C1\u5206\u6790\u6D4F\u89C8\u5668\u63D2\u4EF6",project3:"\u8425\u9500\u6D3B\u52A8",project4:"NFT\u7F51\u7AD9",project5:"\u65E5\u5386\u7B14\u8BB0\u684C\u9762\u8F6F\u4EF6",project6:"\u8BB2\u6545\u4E8BAPP",project7:"\u5BA2\u670D\u804A\u5929\u7CFB\u7EDF",project8:"\u793E\u4EA4\u5E73\u53F0"},home:{intro:"\u4E00\u540D\u524D\u7AEF/\u5168\u6808\u5F00\u53D1\u5DE5\u7A0B\u5E08",proficient:"\u719F\u7EC3\u638C\u63E1:",currentL:"\u76EE\u524D\u5728\u7814\u7A76:",willing:"\u5DE5\u4F5C\u9886\u57DF:",work1:"PC\u548C\u79FB\u52A8\u7AEF\uFF0CDapp\u5F00\u53D1",quote:"\u963F\u7279\u4F0D\u5FB7\u5B9A\u5F8B: \u4EFB\u4F55\u53EF\u4EE5\u7528JavaScript\u6765\u5199\u7684\u5E94\u7528\uFF0C\u6700\u7EC8\u90FD\u5C06\u7528JavaScript\u6765\u5199"},about:{title:"\u81EA\u6211\u4ECB\u7ECD",hi:"\u6211\u662F",textGraduate:"\u6BD5\u4E1A\u4E8E\u9EA6\u5409\u5C14\u5927\u5B66\uFF0C\u5DE5\u5B66\u5B66\u58EB\u5B66\u4F4D.",frontD:" \u4E94\u5E74\u4EE5\u4E0A\u7684\u524D\u7AEF\u5F00\u53D1\u7ECF\u9A8C",workedIn:" \u8D1F\u8D23\u8FC7\u4F9B\u5E94\u94FE\uFF0C\u54A8\u8BE2\u548C\u91D1\u878D\u79D1\u6280\u884C\u4E1A\u4EA7\u54C1\u5F00\u53D1, \u638C\u63E1\u4E86",vueR:"Vue.js, React.js, Next.js/Nuxt.js, Node.js, Python Flask, ReactNative, Electron, MySQL/MongoDB ",and:"\u7B49\u6280\u672F\uFF0C\u8D1F\u8D23\u8FC7",project:"NFT\u5E73\u53F0, \u7F51\u9875\u52A8\u753B, \u7BA1\u7406\u7CFB\u7EDF, \u793E\u4EA4\u5E73\u53F0, \u804A\u5929\u5BA4, \u7B14\u8BB0APP",soOn:" \u7B49\u3002",bilingual:"\u719F\u7EC3\u638C\u63E1\u4E2D\u82F1\u53CC\u8BED, \u4E2D\u7EA7\u6CD5\u8BED, \u719F\u6089",agile:"\u654F\u6377",manage1:" \u7BA1\u7406\u548C",waterfall:"\u7011\u5E03\u7BA1\u7406",manage2:" \u65B9\u6CD5. \u76EE\u524D\u5BF9\u533A\u5757\u94FE\u548CDapp\u5F00\u53D1\u611F\u5174\u8DA3."}},se={en:re,cn:ae},ie=x({legacy:!1,locale:localStorage.getItem("lang")||"en",fallbackLocale:"en",messages:se});P(ne).use(L).use(ie).mount("#app");
