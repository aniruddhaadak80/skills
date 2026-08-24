"use strict";(()=>{var e={};e.id=246,e.ids=[246],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1146:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>k,patchFetch:()=>x,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>m,staticGenerationAsyncStorage:()=>g});var i={};r.r(i),r.d(i,{GET:()=>p});var s=r(9303),l=r(8716),n=r(3131),a=r(554);let o="https://aniruddha-skills-directory.vercel.app";async function p(){let e=(0,a.XQ)().filter(e=>!e.isPlaybook).sort((e,t)=>e.slug.localeCompare(t.slug));return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Agent Skills Directory — new skills</title>
<link>${o}</link>
<description>The open directory of installable AI agent skills for every profession.</description>
<language>en</language>
${e.slice(-60).reverse().map(e=>`<item>
<title>${u(e.title)}</title>
<link>${o}/skills/${e.track}/${e.slug}</link>
<guid isPermaLink="true">${o}/skills/${e.track}/${e.slug}</guid>
<description>${u(e.summary)}</description>
<category>${u(e.trackLabel)}</category>
</item>`).join("\n")}
</channel></rss>`,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=3600"}})}function u(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}let c=new s.AppRouteRouteModule({definition:{kind:l.x.APP_ROUTE,page:"/feed.xml/route",pathname:"/feed.xml",filename:"route",bundlePath:"app/feed.xml/route"},resolvedPagePath:"C:\\Users\\ANIRUDDHA\\Desktop\\Projects\\skills\\src\\app\\feed.xml\\route.js",nextConfigOutput:"",userland:i}),{requestAsyncStorage:d,staticGenerationAsyncStorage:g,serverHooks:m}=c,k="/feed.xml/route";function x(){return(0,n.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:g})}},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,724,554],()=>r(1146));module.exports=i})();