import{u as h}from"./vue.f36acd1f.rFwN-Lak.js";import{r as s,u as y,g as w,c as x,o as b,j as k,a as e}from"./entry.199L3-wF.js";import{_ as v,a as _}from"./HeywhyLoader.hcpU6xdo.js";import{a as L}from"./axios.Bo0ATomq.js";import{u as R}from"./Setcookies.qt0fxFDS.js";import{E as S}from"./NotifyError.BwCYKEUV.js";import"./theme-sugar.ClI1-5tb.js";const C=e("section",{class:"relative py-6 bg-gray-50 overflow-hidden"},[e("img",{class:"absolute left-1/2 h-full bottom-0 transform -translate-x-1/2",src:v,alt:""}),e("div",{class:"relative z-10 container px-4 mx-auto"},[e("div",{class:"p-12 md:max-w-xl mx-auto text-center bg-white bg-opacity-80 rounded-4xl shadow-13xl"},[e("img",{class:"mx-auto transform hover:scale-105 transition ease-in-out duration-1000",src:_,alt:""}),e("p",{class:"mb-8 text-sm text-gray-400 text-center font-semibold uppercase tracking-px"}," Verifying your google acoount. please wait "),e("h3",{class:"mb-4 text-2xl font-bold font-heading leading-snug"}," Signing you in... "),e("p",{class:"mb-10 text-gray-600 font-medium leading-relaxed md:max-w-sm mx-auto"}," Kindly wait while we verify your account before signing in to your dashboard "),e("a",{class:"inline-flex flex-wrap justify-center items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal",href:"#"},[e("svg",{class:"mr-2.5",width:"16",height:"16",viewbox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004L14 8.00004",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),e("span",null,"Go Back")])])])],-1),G=[C],N={__name:"Verify-Google",setup(B){h({title:"Login Google || Heywhy",meta:[{name:"description",content:"Verify to Heywhy App"},{name:"keywords",content:"Blockchain"},{name:"og:title",content:"XRP || standard"},{name:"og:description",content:"Sign In to Heywhy App"},{name:"og:type",content:"website"},{name:"og:url",content:"https://heywhye.org"}]});const c=k();s(""),s("");const a=s(!1),m=R(),i=S();y();function d(){a.value=!0;let r=window.location.search.substring(1),n=new URLSearchParams(r);const u=n.get("code");console.log("code: ",n.get("code"));const g=c.public.baseURL;var f=JSON.stringify({code:u}),p={method:"post",baseURL:g,url:"/Login/Google-Callback",headers:{"Content-Type":"application/json"},data:f};L(p).then(o=>{if(!o.data.successful)i(o.data.message,5e3,"bottom"),a.value=!1,console.log("Data ",o.data);else{const t=o.data.data,l=t.Token;console.log("coming Data",t),l!=null?(m("HWA",l),setTimeout(()=>{window.location.href=t.Link,a.value=!1},4e3)):window.location.href=t.Link}}).catch(o=>{i(o,5e3,"bottom")}).finally(()=>{})}return w(async()=>{d()}),(r,n)=>(b(),x("div",null,G))}};export{N as default};
