import{l as p}from"./index.CGwCSIWv.js";import{r as s,c as x,a as e,d as a,t as o,h as n,o as _}from"./entry.fS3424I2.js";const u={class:"flex justify-center items-center min-h-screen"},w={class:"max-w-4xl mx-auto"},m=e("div",{class:"block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]"},[e("span",{class:"block w-full px-4 py-2 text-3xl text-center text-slate-700 transition-all"},[a(" Counter and "),e("b",null,"Weather"),a(". ")])],-1),f={class:"relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-pink-900 to-purple-900 text-white shadow-xl w-full max-w-3xl p-8"},b={class:"relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10"},g=e("p",{class:"block font-sans text-sm antialiased font-normal leading-normal text-white uppercase"}," Counter ",-1),k={class:"flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl"},v=e("span",{class:"mt-2 text-4xl"},null,-1),y=e("span",{class:"self-end text-4xl"},null,-1),C={class:"p-0"},B={class:"flex flex-col gap-4"},j={class:"flex items-center gap-4"},M=e("span",{class:"p-1 border rounded-full border-white/20 bg-white/20"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-3 h-3"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1),W={class:"block font-sans text-base antialiased font-normal leading-relaxed text-inherit"},N={class:"flex items-center gap-4"},S=e("span",{class:"p-1 border rounded-full border-white/20 bg-white/20"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-3 h-3"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1),T={class:"block font-sans text-base antialiased font-normal leading-relaxed text-inherit"},H={class:"flex items-center gap-4"},V=e("span",{class:"p-1 border rounded-full border-white/20 bg-white/20"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-3 h-3"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1),E={class:"block font-sans text-base antialiased font-normal leading-relaxed text-inherit"},q={class:"flex items-center gap-4"},z=e("span",{class:"p-1 border rounded-full border-white/20 bg-white/20"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-3 h-3"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1),A={class:"block font-sans text-base antialiased font-normal leading-relaxed text-inherit"},K={__name:"tester2",setup(F){const l=p("http://localhost:3024"),r=s();s({});const i=s(""),c=s(""),d=s(""),h=s("");return l.on("connect",t=>{console.log("Socket response: ",t)}),l.on("message",t=>{r.value=t}),l.on("weatherData",t=>{i.value=t.name,c.value=t.main.temp,d.value=t.weather[0].description,h.value=t.main.humidity}),(t,G)=>(_(),x("div",u,[e("div",w,[m,e("div",f,[e("div",b,[g,e("h1",k,[v,a(o(n(r))+" ",1),y])]),e("div",C,[e("ul",B,[e("li",j,[M,e("p",W," Main Weather for "+o(n(i)),1)]),e("li",N,[S,e("p",T," Temperature: "+o(n(c))+"°C ",1)]),e("li",H,[V,e("p",E," Weather: "+o(n(d)),1)]),e("li",q,[z,e("p",A," Humidity: "+o(n(h))+"% ",1)])])])])])]))}};export{K as default};
