(this["webpackJsonpskinlab-app"]=this["webpackJsonpskinlab-app"]||[]).push([[0],{38:function(n,e,t){},39:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var i,a,c,r,s,o,l,d,j,b,p,x,h,m=t(1),u=t.n(m),g=t(23),O=t.n(g),f=t(15),w=t(10),y=t(3),v=t(5),k=t(4),N=k.a.div(i||(i=Object(v.a)(["\n    \n    width: 90%;\n    margin: 0 auto;\n\n    \n    @media (min-width: 768px){\n        max-width: 1000px;\n    }\n\n"]))),S=t(2),C=function(){return Object(S.jsx)("div",{children:Object(S.jsx)(N,{children:Object(S.jsx)("h1",{children:"About Us"})})})},z=k.a.footer(a||(a=Object(v.a)(["\n\n    background-color:white;\n    color:black;\n    padding:20px 0;\n    text-align:center;\n    margin-top:40px;\n\n"]))),M=function(){return Object(S.jsxs)(z,{children:[Object(S.jsx)("p",{children:"Skinlab footer"}),Object(S.jsx)("p",{children:"Aqui quiero poner un mapa "})]})},T=t.p+"static/media/skinlab-baner.21bda431.png",A=k.a.header(c||(c=Object(v.a)(["\n\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    padding-top:20px;    \n    padding-bottom:20px;\n    background-color: #191919;\n\n    a{\n        width: 30%;\n    }\n    img{\n        width: 100%;\n        // height: 10%;\n    }\n\n    .box{\n        width: 20px;\n        height: 2px;\n        background-color: white;\n        margin: 3px 0;\n        transition: all .3s ease;\n    }\n    .box:first-child{\n        transform: ",";\n    }\n    .box:nth-child(2){\n        transform: ","\n    }\n    .box:nth-child(3){\n        transform: ","\n    }\n\n\n    \n\n    @media (min-width: 768px ){\n        .menu{\n            display: none;\n        }\n        a{\n            width:20%;\n        }\n    }\n"])),(function(n){return n.open?"rotate(135deg)":"rotate(0deg)"}),(function(n){return n.open?"rotate(45deg);":"rotate(0deg);"}),(function(n){return n.open?"rotate(-45deg);":"rotate(0deg);"})),_=function(n){var e=n.open,t=n.handleMenu;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(A,{open:e,children:[Object(S.jsx)(w.b,{to:"/",children:Object(S.jsx)("img",{src:T})}),Object(S.jsxs)("div",{className:"menu",onClick:t,children:[Object(S.jsx)("div",{className:"box box1"}),Object(S.jsx)("div",{className:"box"}),Object(S.jsx)("div",{className:"box"})]})]})})},E=k.a.nav(r||(r=Object(v.a)(["\n    transform: ",";\n    transition: all 0.5s ease;\n    background-color: white;\n    position: absolute;\n    z-index:200;\n\n    \n    ul{\n        display: block; \n    }\n    li{\n        list-style: none;\n    }\n\n    li a {\n        color: black;\n        display: block;\n        padding: 20px 0 20px 5px;\n        text-decoration: none;\n        /* font-weigth: bold; */\n        font-size: 30px;\n    }\n    width: 70%;\n\n    @media (min-width: 768px){\n        transform: translateX(0);\n        position: relative;\n        width: 100%;\n        ul{\n            display: flex;\n            justify-content: space-around;\n        }\n        // li a {\n        //     display: inline; \n        // }\n    }\n\n"])),(function(n){return n.open?"translateX(0);":"translateX(-200%);"})),F=function(n){var e=n.open,t=n.handleMenu;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(E,{open:e,children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)(w.b,{to:"/",onClick:t,children:"Inicio"})}),Object(S.jsx)("li",{children:Object(S.jsx)(w.b,{to:"/aboutUs",onClick:function(){t()},children:"Sobre nosotros"})}),Object(S.jsx)("li",{children:Object(S.jsx)(w.b,{to:"/artist",onClick:t,children:"Artistas"})})]})})})},q=k.a.div(s||(s=Object(v.a)(["\n\n    \n"]))),J=function(){return Object(S.jsx)(q,{children:Object(S.jsx)(N,{children:Object(S.jsx)("h2",{children:"Nuestos artistas"})})})},U=(t(38),t(21)),X=k.a.section(o||(o=Object(v.a)(["\n\nposition: relative;\n\nheight: 400px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin: 0 auto;\n/* margin-top:10px; */\n\n\n\n.image {\n    // border-radius: 20px;\n    /* width: 100%; */\n    max-height: 300px;\n    user-select: none;\n}\n\n.right-arrow{\n    position: absolute;\n    top:50%;\n    right:5px;\n    font-size:2rem;\n    color:#fff;\n    z-index:10;\n    cursor:pointer;\n    user-select:none;\n}\n.left-arrow{\n    position: absolute;\n    top:50%;\n    left:5px;\n    font-size:2rem;\n    color:#fff;\n    z-index:10;\n    cursor:pointer;\n    user-select:none;\n\n}\n\n@media (min-width: 768px){\n    width: 50%;\n\n}\n"]))),B=function(n){var e=n.dataSlider,t=Object(m.useState)(0),i=Object(f.a)(t,2),a=i[0],c=i[1],r=e.length;return console.log(a),Object(S.jsxs)(X,{className:"slidder",children:[Object(S.jsx)(U.a,{className:"left-arrow",onClick:function(){c(0===a?r-1:a-1)}}),Object(S.jsx)(U.b,{className:"right-arrow",onClick:function(){c(a===r-1?0:a+1)}}),e.map((function(n,e){return Object(S.jsx)("div",{className:e===a?"slide ":"slide",children:e===a&&Object(S.jsx)("img",{src:n.image,alt:"tatoo",className:"image"})},e)}))]})},I=t(16),V=t.p+"static/media/logoCircular.bc83ebe5.png",Y=t.p+"static/media/tattooMachine.903dca3c.svg",D=t.p+"static/media/anchor.4fd3387e.svg",K=t.p+"static/media/triangulos.1d272f99.svg",L=(t.p,[{image:t.p+"static/media/1.15224d08.png"},{image:t.p+"static/media/2.78b85dbe.png"},{image:t.p+"static/media/3.43f509e9.png"},{image:t.p+"static/media/4.15c00dbd.png"},{image:t.p+"static/media/5.4aeaa3e0.png"}]),Q=[{image:t.p+"static/media/1.614e01e5.jpg"},{image:t.p+"static/media/2.092fab9d.jpg"},{image:t.p+"static/media/3.7c32d9e1.jpg"},{image:t.p+"static/media/4.e2228435.jpg"},{image:t.p+"static/media/5.3c7d932b.jpg"}],Z=k.a.a(l||(l=Object(v.a)(["\n    color: white;\n    font-size: 50px;\n    :first-child{\n        margin-right: 20px;\n    }\n    :nth-child(2){\n        margin-right: 20px;\n    }\n"]))),G=k.a.div(d||(d=Object(v.a)(["\n\n    display: flex;\n    justify-content: center;\n    margin-top: 30px;\n\n"]))),H=k.a.img(j||(j=Object(v.a)(["\n    margin: 0 auto;\n    width: 60%;\n    align-self: center;\n"]))),P=k.a.img(b||(b=Object(v.a)(["\n    margin: 0 auto;\n    width: 60%;\n"]))),R=k.a.img(p||(p=Object(v.a)(["\n    margin: 0 auto;\n    width: 30%;\n"]))),W=k.a.p(x||(x=Object(v.a)(["\n\n    margin-top: 40px;\n    text-align: center;\n    \n\n"]))),$=k.a.div(h||(h=Object(v.a)(["\n    margin: auto;\n    background: rgba(255,255,255, 0.5);\n    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 1 );\n    backdrop-filter: blur(2px);\n    border: 1px solid rgba(255,255,255, .5);\n    width: 320px;\n    height: 320px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),nn=function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(N,{children:Object(S.jsxs)("main",{children:[Object(S.jsx)("h1",{children:"El mejor estudio."}),Object(S.jsx)("div",{style:{display:"flex"},children:Object(S.jsx)(H,{alt:"logoSkinLab",src:V})}),Object(S.jsxs)(G,{children:[Object(S.jsx)(Z,{target:"_blank",href:"https://www.instagram.com/skinlabcoyoacan/?hl=es-la",children:Object(S.jsx)(I.b,{})}),Object(S.jsx)(Z,{target:"_blank",href:"https://www.facebook.com/skinlabtatuajesyperforaciones",children:Object(S.jsx)(I.a,{})}),Object(S.jsx)(Z,{target:"_blank",href:"https://www.instagram.com/skin_lab_estudio/?hl=es-la",children:Object(S.jsx)(I.b,{})})]}),Object(S.jsx)("p",{style:{marginTop:"30px"},children:"Tatuajes y perforaciones."}),Object(S.jsx)("div",{style:{display:"flex",marginTop:"20px"},children:Object(S.jsx)(P,{alt:"logoMagina",src:Y})}),Object(S.jsx)(W,{children:Object(S.jsx)("iframe",{className:"ytFrame",loading:"lazy",src:"https://www.youtube.com/embed/JZjQDYaKqOg",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),Object(S.jsx)("div",{className:"fondo",children:Object(S.jsx)($,{children:Object(S.jsx)(B,{dataSlider:L})})}),Object(S.jsxs)(N,{children:[Object(S.jsx)("p",{children:"Curabitur interdum erat auctor velit dictum ornare. Etiam ut orci nec massa bibendum ultricies. Vestibulum id mollis urna."}),Object(S.jsx)("div",{style:{display:"flex",marginTop:"20px"},children:Object(S.jsx)(R,{alt:"logoAnchor",src:D})})]}),Object(S.jsx)("div",{className:"fondo2",children:Object(S.jsx)($,{children:Object(S.jsx)(B,{dataSlider:Q})})}),Object(S.jsxs)(N,{children:[Object(S.jsx)("p",{children:"Curabitur interdum erat auctor velit dictum ornare. Etiam ut orci nec massa bibendum ultricies. Vestibulum id mollis urna."}),Object(S.jsx)("div",{style:{display:"flex",marginTop:"20px"},children:Object(S.jsx)(R,{alt:"logoAnchor",src:K})})]})]})},en=function(){var n=Object(m.useState)(!1),e=Object(f.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return Object(S.jsxs)(w.a,{children:[Object(S.jsx)(_,{open:t,handleMenu:a}),Object(S.jsx)(F,{open:t,handleMenu:a}),Object(S.jsxs)(y.d,{children:[Object(S.jsx)(y.b,{exact:!0,path:"/",component:nn}),Object(S.jsx)(y.b,{exact:!0,path:"/aboutUs",component:C}),Object(S.jsx)(y.b,{exact:!0,path:"/artist",component:J}),Object(S.jsx)(y.a,{to:"/"})]}),Object(S.jsx)(M,{})]})};t(39);O.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(en,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9fd2c8eb.chunk.js.map