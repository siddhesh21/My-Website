(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{108:function(e,c,s){},178:function(e,c,s){},179:function(e,c,s){},185:function(e,c,s){},187:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s(1),n=s.n(a),i=s(36),r=s.n(i),l=(s(108),s(18)),o=s(93),j=s.n(o),d=(s(178),function(e){var c=e.data;if(c)var s=c.name,a=c.occupation,n=c.description,i=c.address.city,r=c.social.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:e.url,children:Object(t.jsx)("i",{className:e.className})})},e.name)}));return Object(t.jsxs)("header",{id:"home",children:[Object(t.jsxs)("nav",{id:"nav-wrap",children:[Object(t.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(t.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(t.jsxs)("ul",{id:"nav",className:"nav",children:[Object(t.jsx)("li",{className:"current",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(t.jsx)("div",{className:"row banner",children:Object(t.jsxs)("div",{className:"banner-text",children:[Object(t.jsx)("h1",{className:"responsive-headline",children:Object(t.jsx)(j.a,{typing:.5,children:s?"I'm ".concat(s,"."):null})}),Object(t.jsxs)("h3",{children:["Based in ",i,". ",Object(t.jsx)("span",{children:a}),". ",n,"."]}),Object(t.jsx)("hr",{}),Object(t.jsx)("ul",{className:"social",children:r}),Object(t.jsx)("br",{})]})}),Object(t.jsx)("p",{className:"scrolldown",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(t.jsx)("i",{className:"icon-down-circle"})})})]})}),h=function(e){var c=e.data;if(c)var s=c.social.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:e.url,children:Object(t.jsx)("i",{className:e.className})})},e.name)}));return Object(t.jsx)("footer",{children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"twelve columns",children:[Object(t.jsx)("ul",{className:"social-links",children:s}),Object(t.jsx)("ul",{className:"copyright",children:Object(t.jsxs)("li",{children:["Made by ",Object(t.jsx)("a",{title:"Siddhesh",href:"#",children:"SIDDHESH KANKEKAR"})]})})]}),Object(t.jsx)("div",{id:"go-top",children:Object(t.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(t.jsx)("i",{className:"icon-up-open"})})})]})})},b=function(e){var c=e.data;if(c){c.name,c.bio,c.address.street,c.address.city,c.address.state,c.address.zip,c.phone,c.email;var s="images/"+c.resumedownload}return Object(t.jsx)("section",{id:"about",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"three columns"}),Object(t.jsx)("div",{className:"nine columns main-col",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"columns download",children:Object(t.jsx)("p",{children:Object(t.jsxs)("a",{href:s,className:"button",children:[Object(t.jsx)("span",{}),Object(t.jsx)("span",{}),Object(t.jsx)("span",{}),Object(t.jsx)("span",{}),"Download Resum\xe9"]})})})})})]})})},m=function(e){var c=e.data,s=Object(a.useState)(""),n=Object(l.a)(s,2),i=n[0],r=n[1],o=Object(a.useState)(""),j=Object(l.a)(o,2),d=j[0],h=j[1],b=Object(a.useState)(""),m=Object(l.a)(b,2),O=m[0],x=m[1],u=Object(a.useState)(""),f=Object(l.a)(u,2),v=f[0],p=f[1];if(c)var N=c.name,w=c.address.street,g=c.address.city,y=c.address.state,k=c.address.zip,S=c.phone,C=c.email,M=c.contactmessage;var E=function(){window.open("mailto:".concat(C,"?subject=").concat(encodeURIComponent(O),"&body=").concat(encodeURIComponent(i)," (").concat(encodeURIComponent(d),"): ").concat(encodeURIComponent(v)))};return Object(t.jsxs)("section",{id:"contact",children:[Object(t.jsxs)("div",{className:"row section-head",children:[Object(t.jsx)("div",{className:"two columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Get In Touch."})})}),Object(t.jsx)("div",{className:"ten columns",children:Object(t.jsx)("p",{className:"lead",children:M})})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"eight columns",children:[Object(t.jsx)("form",{onSubmit:E,children:Object(t.jsxs)("fieldset",{children:[Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(t.jsx)("span",{className:"required",children:"*"})]}),Object(t.jsx)("input",{type:"text",defaultValue:"",value:i,size:"35",id:"contactName",name:"contactName",onChange:function(e){return r(e.target.value)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(t.jsx)("span",{className:"required",children:"*"})]}),Object(t.jsx)("input",{type:"text",defaultValue:"",value:d,size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return h(e.target.value)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(t.jsx)("input",{type:"text",defaultValue:"",value:O,size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return x(e.target.value)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(t.jsx)("span",{className:"required",children:"*"})]}),Object(t.jsx)("textarea",{cols:"50",rows:"15",value:v,onChange:function(e){return p(e.target.value)},id:"contactMessage",name:"contactMessage"})]}),Object(t.jsx)("div",{children:Object(t.jsx)("button",{onClick:E,type:"submit",className:"submit",children:"Submit"})})]})}),Object(t.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(t.jsxs)("div",{id:"message-success",children:[Object(t.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(t.jsx)("br",{})]})]}),Object(t.jsx)("aside",{className:"four columns footer-widgets",children:Object(t.jsxs)("div",{className:"widget widget_contact",children:[Object(t.jsx)("h4",{children:"Address and Phone"}),Object(t.jsxs)("p",{className:"address",children:[N,Object(t.jsx)("br",{}),C,Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),w," ",Object(t.jsx)("br",{}),g,", ",y," ",k,Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:S})]})]})})]})]})},O=s(94),x=s(95),u=s(101),f=s(100),v=function(e){Object(u.a)(s,e);var c=Object(f.a)(s);function s(){return Object(O.a)(this,s),c.apply(this,arguments)}return Object(x.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var c="images/portfolio/"+e.image;return Object(t.jsx)("div",{className:"columns portfolio-item",children:Object(t.jsx)("div",{className:"item-wrap",children:Object(t.jsxs)("a",{href:e.url,title:e.title,children:[Object(t.jsx)("img",{alt:e.title,src:c}),Object(t.jsx)("div",{className:"overlay",children:Object(t.jsxs)("div",{className:"portfolio-item-meta",children:[Object(t.jsx)("h5",{children:e.title}),Object(t.jsx)("p",{children:e.category})]})}),Object(t.jsx)("div",{className:"link-icon",children:Object(t.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(t.jsx)("section",{id:"portfolio",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("div",{className:"twelve columns collapsed",children:[Object(t.jsx)("h1",{children:"Check Out Some of My Works."}),Object(t.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),p=(s(179),s(96)),N=s.n(p),w=s(98),g=s.n(w),y=s(99),k=s.n(y);var S=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("div",{className:"cont__service--fadeBottom"}),Object(t.jsx)("div",{className:"cont__service",children:Object(t.jsx)("h2",{className:"col__text",children:"My Offerings"})}),Object(t.jsxs)("div",{className:"container__service",children:[Object(t.jsxs)("div",{className:"card",children:[Object(t.jsx)("div",{className:"face face1",children:Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)(N.a,{style:{fontSize:70}}),Object(t.jsx)("h3",{children:"Web Developing"})]})}),Object(t.jsx)("div",{className:"face face2",children:Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)("p",{children:"We develop your website, completely custom based on your requests. This will allow you to have the site of your dreams"}),Object(t.jsx)("a",{href:"#",children:"Read More"})]})})]}),Object(t.jsxs)("div",{className:"card",children:[Object(t.jsx)("div",{className:"face face1",children:Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)(g.a,{style:{fontSize:70}}),Object(t.jsx)("h3",{children:"Professional Modelling"})]})}),Object(t.jsx)("div",{className:"face face2",children:Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)("p",{children:"Check-out my self produced work here"}),Object(t.jsx)("a",{href:"#",children:"View to know More"})]})})]}),Object(t.jsxs)("div",{className:"card",children:[Object(t.jsx)("div",{className:"face face1",children:Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)(k.a,{style:{fontSize:70}}),Object(t.jsx)("h3",{children:"Website Restyling"})]})}),Object(t.jsx)("div",{className:"face face2",children:Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)("p",{children:"If you have a website that doesn't suit your tastes and you don't want to invest in a new site, I will restore your site and give it new life"}),Object(t.jsx)("a",{href:"#",children:"Read More"})]})})]})]}),Object(t.jsx)("div",{className:"cont__service--fadeBottom"})]})},C=(s(185),function(){var e=Object(a.useState)({}),c=Object(l.a)(e,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){fetch("/resumeData.json").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(d,{data:s.main}),Object(t.jsx)(b,{data:s.main}),Object(t.jsx)(S,{data:s.work}),Object(t.jsx)(v,{data:s.portfolio}),Object(t.jsx)(m,{data:s.main}),Object(t.jsx)(h,{data:s.main})]})}),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(C,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");M?function(e){fetch(e).then((function(c){404===c.status||-1===c.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):E(e)}))}}()}},[[187,1,2]]]);
//# sourceMappingURL=main.aca15efc.chunk.js.map