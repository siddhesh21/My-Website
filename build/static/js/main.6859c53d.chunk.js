(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{168:function(e,c,t){},169:function(e,c,t){},170:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(4),a=t.n(n),i=t(87),r=t.n(i),o=(t(98),t(17)),l=t(88),j=t.n(l),d=(t(168),function(e){var c=e.data;if(c)var t=c.name,n=c.occupation,a=c.description,i=c.address.city,r=c.social.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.url,children:Object(s.jsx)("i",{className:e.className})})},e.name)}));return Object(s.jsxs)("header",{id:"home",children:[Object(s.jsxs)("nav",{id:"nav-wrap",children:[Object(s.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(s.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(s.jsxs)("ul",{id:"nav",className:"nav",children:[Object(s.jsx)("li",{className:"current",children:Object(s.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(s.jsx)("div",{className:"row banner",children:Object(s.jsxs)("div",{className:"banner-text",children:[Object(s.jsx)("h1",{className:"responsive-headline",children:Object(s.jsx)(j.a,{typing:.5,children:t?"I'm ".concat(t,"."):null})}),Object(s.jsxs)("h3",{children:["Based in ",i,". ",Object(s.jsx)("span",{children:n}),". ",a,"."]}),Object(s.jsx)("hr",{}),Object(s.jsx)("ul",{className:"social",children:r}),Object(s.jsx)("br",{})]})}),Object(s.jsx)("p",{className:"scrolldown",children:Object(s.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(s.jsx)("i",{className:"icon-down-circle"})})})]})}),h=function(e){var c=e.data;if(c)var t=c.social.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.url,children:Object(s.jsx)("i",{className:e.className})})},e.name)}));return Object(s.jsx)("footer",{children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"twelve columns",children:[Object(s.jsx)("ul",{className:"social-links",children:t}),Object(s.jsx)("ul",{className:"copyright",children:Object(s.jsxs)("li",{children:["Made by ",Object(s.jsx)("a",{title:"Siddhesh",href:"#",children:"SIDDHESH KANKEKAR"})]})})]}),Object(s.jsx)("div",{id:"go-top",children:Object(s.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(s.jsx)("i",{className:"icon-up-open"})})})]})})},b=function(e){var c=e.data;if(c)var t="images/"+c.resumedownload;return Object(s.jsx)("section",{id:"about",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"three columns"}),Object(s.jsx)("div",{className:"nine columns main-col",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"columns download",children:Object(s.jsx)("p",{children:Object(s.jsx)("a",{href:t,className:"button",children:"Download Resum\xe9"})})})})})]})})},m=function(e){var c=e.data,t=Object(n.useState)(""),a=Object(o.a)(t,2),i=a[0],r=a[1],l=Object(n.useState)(""),j=Object(o.a)(l,2),d=j[0],h=j[1],b=Object(n.useState)(""),m=Object(o.a)(b,2),u=m[0],O=m[1],x=Object(n.useState)(""),f=Object(o.a)(x,2),v=f[0],p=f[1];if(c)var N=c.name,g=c.address.street,w=c.address.city,y=c.address.state,k=c.address.zip,S=c.phone,C=c.email,E=c.contactmessage;var I=function(){window.open("mailto:".concat(C,"?subject=").concat(encodeURIComponent(u),"&body=").concat(encodeURIComponent(i)," (").concat(encodeURIComponent(d),"): ").concat(encodeURIComponent(v)))};return Object(s.jsxs)("section",{id:"contact",children:[Object(s.jsxs)("div",{className:"row section-head",children:[Object(s.jsx)("div",{className:"two columns header-col",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Get In Touch."})})}),Object(s.jsx)("div",{className:"ten columns",children:Object(s.jsx)("p",{className:"lead",children:E})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"eight columns",children:[Object(s.jsx)("form",{onSubmit:I,children:Object(s.jsxs)("fieldset",{children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(s.jsx)("span",{className:"required",children:"*"})]}),Object(s.jsx)("input",{type:"text",defaultValue:"",value:i,size:"35",id:"contactName",name:"contactName",onChange:function(e){return r(e.target.value)}})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(s.jsx)("span",{className:"required",children:"*"})]}),Object(s.jsx)("input",{type:"text",defaultValue:"",value:d,size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return h(e.target.value)}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(s.jsx)("input",{type:"text",defaultValue:"",value:u,size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return O(e.target.value)}})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(s.jsx)("span",{className:"required",children:"*"})]}),Object(s.jsx)("textarea",{cols:"50",rows:"15",value:v,onChange:function(e){return p(e.target.value)},id:"contactMessage",name:"contactMessage"})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:I,type:"submit",className:"submit",children:"Submit"})})]})}),Object(s.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(s.jsxs)("div",{id:"message-success",children:[Object(s.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(s.jsx)("br",{})]})]}),Object(s.jsx)("aside",{className:"four columns footer-widgets",children:Object(s.jsxs)("div",{className:"widget widget_contact",children:[Object(s.jsx)("h4",{children:"Address and Phone"}),Object(s.jsxs)("p",{className:"address",children:[N,Object(s.jsx)("br",{}),C,Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),g," ",Object(s.jsx)("br",{}),w,", ",y," ",k,Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:S})]})]})})]})]})},u=t(89),O=t(90),x=t(92),f=t(91),v=function(e){Object(x.a)(t,e);var c=Object(f.a)(t);function t(){return Object(u.a)(this,t),c.apply(this,arguments)}return Object(O.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var c="images/portfolio/"+e.image;return Object(s.jsx)("div",{className:"columns portfolio-item",children:Object(s.jsx)("div",{className:"item-wrap",children:Object(s.jsxs)("a",{href:e.url,title:e.title,children:[Object(s.jsx)("img",{alt:e.title,src:c}),Object(s.jsx)("div",{className:"overlay",children:Object(s.jsxs)("div",{className:"portfolio-item-meta",children:[Object(s.jsx)("h5",{children:e.title}),Object(s.jsx)("p",{children:e.category})]})}),Object(s.jsx)("div",{className:"link-icon",children:Object(s.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(s.jsx)("section",{id:"portfolio",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"twelve columns collapsed",children:[Object(s.jsx)("h1",{children:"Check Out Some of My Works."}),Object(s.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),t}(n.Component),p=(t(169),function(){var e=Object(n.useState)({}),c=Object(o.a)(e,2),t=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("/resumeData.json").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(d,{data:t.main}),Object(s.jsx)(b,{data:t.main}),Object(s.jsx)(v,{data:t.portfolio}),Object(s.jsx)(m,{data:t.main}),Object(s.jsx)(h,{data:t.main})]})}),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");N?function(e){fetch(e).then((function(c){404===c.status||-1===c.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):g(e)}))}}()},98:function(e,c,t){}},[[170,1,2]]]);
//# sourceMappingURL=main.6859c53d.chunk.js.map