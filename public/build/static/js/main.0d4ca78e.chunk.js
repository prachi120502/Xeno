(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),m=a(6),o=a(2);var s=function(){return l.a.createElement("div",{className:"home-screen"},l.a.createElement("div",{className:"home-content"},l.a.createElement("h1",{className:"home-title"},"Welcome to CRM for Campaign Management"),l.a.createElement("p",{className:"home-description"},"Drive sales with a CRM campaign management solution that helps you manage campaigns effectively and nurture customer relationships."),l.a.createElement("button",{className:"btn-primary"},"Try it Free")))};a(27);var i=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Previous campaigns displayed here..."))};var u=function(){const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)([]);return l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Customer Name"}),l.a.createElement("button",{onClick:()=>{if(e.trim()){const n=`Message to ${e}: This is a log entry.`;c([...a,n]),t("")}else alert("Please enter a customer name.")}},"Add Log Entry"),l.a.createElement("h4",null,"Communication Log:"),l.a.createElement("ul",null,a.map((e,t)=>l.a.createElement("li",{key:t},e))))};var E=function(){const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)(0),[r,m]=Object(n.useState)([]);return l.a.createElement("div",{className:"crm-dashboard"},l.a.createElement("h2",{className:"crm-title"},"Simple Audience Builder"),l.a.createElement("div",{className:"audience-builder"},l.a.createElement("label",null,l.a.createElement("select",null,l.a.createElement("option",null,"Total Spends"),l.a.createElement("option",null,"Age"),l.a.createElement("option",null,"Location")),l.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Enter Criteria"}),l.a.createElement("select",null,l.a.createElement("option",null,"AND"),l.a.createElement("option",null,"OR")),l.a.createElement("button",{onClick:()=>{e.trim()?(m([...r,e]),t("")):alert("Please enter a criteria.")}},"Add Rule"))),l.a.createElement("div",{className:"audience-actions"},l.a.createElement("button",{onClick:()=>{c(Math.floor(1e3*Math.random()))}},"Check Audience Size"),l.a.createElement("button",{onClick:()=>{alert("Audience Saved!")}},"Save Audience"),l.a.createElement("p",null,"Audience Size: ",l.a.createElement("strong",null,a))),l.a.createElement("div",{className:"crm-section"},l.a.createElement("h3",null,"Created Segments:"),l.a.createElement("ul",null,r.map((e,t)=>l.a.createElement("li",{key:t},e)))),l.a.createElement("div",{className:"crm-section"},l.a.createElement("h3",null,"Past Campaigns"),l.a.createElement(i,null)),l.a.createElement("div",{className:"crm-section"},l.a.createElement("h3",null,"Communication Log"),l.a.createElement(u,null)))};var d=function(){return l.a.createElement("div",{className:"about-page"},l.a.createElement("h1",{className:"about-title"},"About Us"),l.a.createElement("p",{className:"about-description"},"Welcome to our CRM system. Our mission is to provide top-quality customer relationship management tools that empower businesses to connect with their clients and manage campaigns effectively. We believe in innovation, reliability, and customer satisfaction."))};var p=function(){return l.a.createElement("div",{className:"contact-page"},l.a.createElement("h1",{className:"contact-title"},"  Contact Us"),l.a.createElement("p",{className:"contact-description"},"abc@companyname.com"))};a(13);var h=function(){return l.a.createElement(m.a,null,l.a.createElement("header",{className:"navbar"},l.a.createElement("div",{className:"logo"},"Xeno"),l.a.createElement("nav",{className:"main-menu"},l.a.createElement(m.b,{to:"/",className:"menu-item"},"Home"),l.a.createElement(m.b,{to:"/crm",className:"menu-item"},"CRM Dashboard"),l.a.createElement(m.b,{to:"/about",className:"menu-item"},"About Us"),l.a.createElement(m.b,{to:"/contact",className:"menu-item"},"Contact Us"),l.a.createElement("button",{className:"btn-primary"},"Try It Free"))),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",element:l.a.createElement(s,null)}),l.a.createElement(o.a,{path:"/crm",element:l.a.createElement(E,null)}),l.a.createElement(o.a,{path:"/about",element:l.a.createElement(d,null)}),l.a.createElement(o.a,{path:"/contact",element:l.a.createElement(p,null)})))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)))}},[[15,1,2]]]);
//# sourceMappingURL=main.0d4ca78e.chunk.js.map