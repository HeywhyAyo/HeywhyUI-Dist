import{u as x}from"./vue.f36acd1f.rFwN-Lak.js";import{r as n,u as b,g as v,c,a as e,h as k,i as S,o as u,j as G}from"./entry.199L3-wF.js";import{_ as L,a as C}from"./HeywhyLoader.hcpU6xdo.js";import{a as R}from"./axios.Bo0ATomq.js";import{u as T}from"./Setcookies.qt0fxFDS.js";import{S as N,E as V}from"./NotifyError.BwCYKEUV.js";import"./theme-sugar.ClI1-5tb.js";const B={class:"relative py-20 bg-gray-50 overflow-hidden"},H=e("img",{class:"absolute left-1/2 h-full bottom-0 transform -translate-x-1/2",src:L,alt:""},null,-1),j={class:"relative z-10 container px-4 mx-auto"},E={class:"p-12 md:max-w-xl mx-auto text-center bg-white bg-opacity-80 rounded-4xl shadow-13xl"},M={key:0,class:"mx-auto transform hover:scale-105 transition ease-in-out duration-1000",src:C,alt:""},O=e("p",{class:"mb-8 text-sm text-gray-400 text-center font-semibold uppercase tracking-px"}," Verifying your google acoount. please wait ",-1),U=e("h3",{class:"mb-4 text-2xl font-bold font-heading leading-snug"}," Signing you up... ",-1),A=e("p",{class:"mb-10 text-gray-600 font-medium leading-relaxed md:max-w-sm mx-auto"}," Kindly wait while we verify your account before signing up with us ",-1),D=e("a",{class:"inline-flex flex-wrap justify-center items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal",href:"#"},[e("svg",{class:"mr-2.5",width:"16",height:"16",viewbox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004L14 8.00004",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),e("span",null,"Go Back")],-1),F={__name:"Verify-GoogleSignup",setup(I){x({title:"Verify Google || Heywhy",meta:[{name:"description",content:"Verify to Heywhy App"},{name:"keywords",content:"Blockchain"},{name:"og:title",content:"XRP || standard"},{name:"og:description",content:"Sign In to Heywhy App"},{name:"og:type",content:"website"},{name:"og:url",content:"https://heywhye.org"}]});const d=G();n(""),n("");const o=n(!1),m=T(),g=N(),i=V();b();function f(){o.value=!0;let r=window.location.search.substring(1),s=new URLSearchParams(r);const p=s.get("code");console.log("code: ",s.get("code"));const h=d.public.baseURL;var y=JSON.stringify({code:p}),w={method:"post",baseURL:h,url:"/Login/Google-CallbackSignup",headers:{"Content-Type":"application/json"},data:y};R(w).then(t=>{if(!t.data.successful)i(t.data.message,5e3,"bottom"),o.value=!1,console.log("Data ",t.data);else{const a=t.data.data,l=a.Token;if(console.log("coming Data",a),l!=null)m("HWA",l),setTimeout(()=>{window.location.href=a.link,o.value=!1},4e3);else{var _=JSON.stringify(a);localStorage.setItem("UserGData",_),setTimeout(()=>{window.location.href="/Onboard/OnboardGoogle",o.value=!1},4e3)}g(t.data.message,5e3,"bottom")}}).catch(t=>{i(t,5e3,"bottom")}).finally(()=>{})}return v(async()=>{f()}),(r,s)=>(u(),c("div",null,[e("section",B,[H,e("div",j,[e("div",E,[k(o)?(u(),c("img",M)):S("",!0),O,U,A,D])])])]))}};export{F as default};
