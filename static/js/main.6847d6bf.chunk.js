(this.webpackJsonpecard=this.webpackJsonpecard||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(4),s=n.n(i),r=(n(9),n(2)),l=(n(10),n.p+"static/media/greetingCardImg.73fa394b.jpg"),o=n(0);var d=function(e){var t=e.setDisplay;return Object(o.jsx)("header",{children:Object(o.jsx)("div",{onClick:function(){t("landing")},className:"container",children:"E-Card"})})};var j=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"contianer",children:["Built by ",Object(o.jsx)("a",{href:"https://github.com/SmiJa",children:"Jason Smith"})]})})};var b=function(e){var t=e.setDisplay,n=e.GreetingImage;return Object(o.jsxs)("div",{id:"LandingPage",children:[Object(o.jsx)("div",{className:"img-wrap",children:Object(o.jsx)("img",{src:n,alt:""})}),Object(o.jsx)("div",{className:"instruction-wrap",children:Object(o.jsx)("p",{children:"If you like the card above and would like to send it to a friend or family member, please click the button below."})}),Object(o.jsx)("div",{className:"btn-wrap",children:Object(o.jsx)("button",{className:"btn",onClick:function(){t("create")},children:"Create E-Card"})})]})};var g=function(e){var t=e.setDisplay,n=e.GreetingImage,a=e.Email,c=e.SetEmail,i=e.Greeting,s=e.SetGreeting,r=e.Body,l=e.SetBody,d=e.Closing,j=e.SetClosing;return Object(o.jsxs)("div",{id:"CreateCard",children:[Object(o.jsx)("div",{className:"img-wrap",children:Object(o.jsx)("img",{src:n,alt:""})}),Object(o.jsx)("div",{id:"form-wrap",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-row",children:[Object(o.jsx)("label",{htmlFor:"",children:"Who would you like to send this to:"}),Object(o.jsx)("input",{type:"email",placeholder:"recipient email",id:"email",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-row",children:[Object(o.jsx)("label",{htmlFor:"",children:"Greeting:"}),Object(o.jsx)("input",{type:"text",placeholder:"Greeting",value:i,onChange:function(e){return s(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-row",children:[Object(o.jsx)("label",{htmlFor:"",children:"Body:"}),Object(o.jsx)("textarea",{name:"",id:"",rows:"5",placeholder:"Your message...",value:r,onChange:function(e){return l(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-row",children:[Object(o.jsx)("label",{htmlFor:"",children:"Closing:"}),Object(o.jsx)("input",{type:"text",placeholder:"Closing",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(o.jsx)("div",{className:"btn-wrap",children:Object(o.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),t("preview")},children:"Preview Card"})})]})})]})};var m=function(e){var t=e.setDisplay,n=e.GreetingImage,a=e.Email,c=e.Greeting,i=e.Body,s=e.Closing;return Object(o.jsxs)("div",{id:"PreviewCard",children:[Object(o.jsx)("div",{className:"img-wrap",children:Object(o.jsx)("img",{src:n,alt:""})}),Object(o.jsxs)("div",{className:"message-wrap",children:[Object(o.jsxs)("p",{className:"greeting-wrap",children:[c," ",Object(o.jsx)("span",{className:"comma",children:","})]}),Object(o.jsx)("p",{className:"body-wrap",children:i}),Object(o.jsx)("p",{className:"closing-wrap",children:s})]}),Object(o.jsxs)("div",{id:"button-row",children:[Object(o.jsx)("div",{className:"btn-wrap",children:Object(o.jsx)("button",{onClick:function(){t("create")},children:"Back to Create"})}),Object(o.jsx)("div",{className:"btn-wrap",children:Object(o.jsx)("button",{onClick:function(){var e="mailto: ".concat(a);e+="?subject=E-Card",e+="&body=You have received an e-card.",e+="%0D%0A%0D%0A",e+="Go to E-Card",e+="%0D%0A";var t="https://https://smija.github.io/ecard/";t+="?greeting=".concat(encodeURIComponent(c)),t+="&body=".concat(encodeURIComponent(i)),t+="&closing=".concat(encodeURIComponent(s)),e+=encodeURIComponent(t),window.open(e)},children:"Send E-Card"})})]})]})};var h=function(e){var t=e.Greeting,n=e.Body,a=e.Closing,c=e.GreetingImage,i=e.setDisplay;return Object(o.jsxs)("div",{id:"RecievedCard",children:[Object(o.jsx)("div",{className:"img-wrap",children:Object(o.jsx)("img",{src:c,alt:""})}),Object(o.jsxs)("div",{className:"message-wrap",children:[Object(o.jsxs)("p",{className:"greeting-wrap",children:[t," ",Object(o.jsx)("span",{className:"comma",children:","})]}),Object(o.jsx)("p",{className:"body-wrap",children:n}),Object(o.jsx)("p",{className:"closing-wrap",children:a})]}),Object(o.jsx)("div",{className:"btn-wrap",children:Object(o.jsx)("button",{onClick:function(){i("landing")},children:"Like this card? Send one to someone."})})]})};var u=function(){var e=new URLSearchParams(window.location.search),t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(e.get("greeting")||"Dear friend"),u=Object(r.a)(s,2),p=u[0],O=u[1],x=Object(a.useState)(e.get("body")||"I hope you have wonderful holiday!"),v=Object(r.a)(x,2),w=v[0],f=v[1],C=Object(a.useState)(e.get("closing")||"Your friend, person"),y=Object(r.a)(C,2),N=y[0],S=y[1],G=Object(a.useState)("landing"),I=Object(r.a)(G,2),D=I[0],k=I[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{setDisplay:k}),Object(o.jsxs)("main",{id:"content-wrap",onLoad:function(){e.has("greeting")?(console.log(e.has("greeting")),k("card")):e.has("")&&k("landing")},children:["card"===D&&Object(o.jsx)(h,{Greeting:p,Body:w,Closing:N,GreetingImage:l,setDisplay:k}),"landing"===D&&Object(o.jsx)(b,{setDisplay:k,GreetingImage:l}),"create"===D&&Object(o.jsx)(g,{setDisplay:k,GreetingImage:l,Email:c,SetEmail:i,Greeting:p,SetGreeting:O,Body:w,SetBody:f,Closing:N,SetClosing:S}),"preview"===D&&Object(o.jsx)(m,{setDisplay:k,GreetingImage:l,Email:c,Greeting:p,Body:w,Closing:N})]}),Object(o.jsx)(j,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),p()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.6847d6bf.chunk.js.map