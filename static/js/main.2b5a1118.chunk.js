(this["webpackJsonpskinlab-app"]=this["webpackJsonpskinlab-app"]||[]).push([[0],{36:function(n,e,t){},37:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var i,o,a,c,s,r=t(0),l=t.n(r),d=t(21),j=t.n(d),b=t(14),p=t(8),h=t(9),x=t(2),u=t(7),m=u.a.div(i||(i=Object(p.a)(["\n    \n    width: 90%;\n    margin: 0 auto;\n\n    \n    @media (min-width: 768px){\n        max-width: 1000px;\n    }\n\n"]))),g=t(1),f=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"About Us"}),Object(g.jsx)(m,{children:Object(g.jsx)("iframe",{src:"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fskinlabtatuajesyperforaciones%2Fvideos%2F744816142884556%2F&show_text=false&width=560",width:350,height:314,style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:0,allowFullScreen:!1,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})})]})},O=t.p+"static/media/skinlab-baner.21bda431.png",w=u.a.header(o||(o=Object(p.a)(["\n\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    padding-top:35px;    \n    padding-bottom:20px;\n    background-color: #191919;\n\n    a{\n        width: 30%;\n    }\n    img{\n        width: 100%;\n        // height: 10%;\n    }\n\n    .box{\n        width: 20px;\n        height: 2px;\n        background-color: white;\n        margin: 3px 0;\n        transition: all .3s ease;\n    }\n    .box:first-child{\n        transform: ",";\n    }\n    .box:nth-child(2){\n        transform: ","\n    }\n    .box:nth-child(3){\n        transform: ","\n    }\n\n\n    \n\n    @media (min-width: 768px ){\n        .menu{\n            display: none;\n        }\n        a{\n            width:20%;\n        }\n    }\n"])),(function(n){return n.open?"rotate(135deg)":"rotate(0deg)"}),(function(n){return n.open?"rotate(45deg);":"rotate(0deg);"}),(function(n){return n.open?"rotate(-45deg);":"rotate(0deg);"})),v=function(n){var e=n.open,t=n.handleMenu;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(w,{open:e,children:[Object(g.jsx)(h.b,{to:"/",children:Object(g.jsx)("img",{src:O})}),Object(g.jsxs)("div",{className:"menu",onClick:t,children:[Object(g.jsx)("div",{className:"box box1"}),Object(g.jsx)("div",{className:"box"}),Object(g.jsx)("div",{className:"box"})]})]})})},k=u.a.nav(a||(a=Object(p.a)(["\n    transform: ","\n    transition: all 0.5s ease;\n    background-color: white;\n    position: absolute;\n    z-index:200;\n\n    \n    ul{\n        display: block; \n    }\n    li{\n        list-style: none;\n    }\n\n    li a {\n        color: black;\n        display: block;\n        padding: 20px 0 20px 5px;\n        text-decoration: none;\n        font-weigth: bold;\n        font-size: 30px;\n    }\n    width: 70%;\n\n    @media (min-width: 768px){\n        transform: translateX(0);\n        position: relative;\n        width: 100%;\n        ul{\n            display: flex;\n            justify-content: space-around;\n        }\n        // li a {\n        //     display: inline; \n        // }\n    }\n\n"])),(function(n){return n.open?"translateX(0);":"translateX(-200%);"})),y=function(n){var e=n.open,t=n.handleMenu;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(k,{open:e,children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/",onClick:t,children:"Inicio"})}),Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/aboutUs",onClick:function(){t()},children:"Sobre nosotros"})}),Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/",children:"Sobre nosotros"})})]})})})},F=(t(36),[{image:t.p+"static/media/1.cf122238.jpg"},{image:t.p+"static/media/2.303eb412.jpg"},{image:t.p+"static/media/3.4be0b27e.jpg"},{image:t.p+"static/media/4.316e903f.jpg"},{image:t.p+"static/media/5.e4086d24.jpg"}]),N=t(19),z=u.a.section(c||(c=Object(p.a)(["\n\nposition: relative;\nheight: 500px;\nwidth:100%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-top:20px;\n\n\n.image {\n    border-radius: 20px;\n    height:500px;\n}\n\n.right-arrow{\n    position: absolute;\n    top:50%;\n    right:5px;\n    font-size:2rem;\n    color:#fff;\n    z-index:10;\n    cursor:pointer;\n    user-select:none;\n}\n.left-arrow{\n    position: absolute;\n    top:50%;\n    left:5px;\n    font-size:2rem;\n    color:#fff;\n    z-index:10;\n    cursor:pointer;\n}\n\n"]))),S=function(){var n=Object(r.useState)(0),e=Object(b.a)(n,2),t=e[0],i=e[1],o=F.length;return console.log(t),Object(g.jsxs)(z,{className:"slidder",children:[Object(g.jsx)(N.a,{className:"left-arrow",onClick:function(){i(0===t?o-1:t-1)}}),Object(g.jsx)(N.b,{className:"right-arrow",onClick:function(){i(t===o-1?0:t+1)}}),F.map((function(n,e){return Object(g.jsx)("div",{className:e===t?"slice ":"slide",children:e===t&&Object(g.jsx)("img",{src:n.image,alt:"travelin",className:"image"})},e)}))]})},C=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(m,{children:Object(g.jsxs)("main",{children:[Object(g.jsx)("h1",{children:"Tatto y Body Piercing."}),Object(g.jsx)("p",{style:{marginTop:"30px"},children:"Algunos de nuestros trabajos poderosos"}),Object(g.jsx)(S,{})]})})})},M=u.a.div(s||(s=Object(p.a)(["\n    margin-top: 1000px;\n"]))),A=function(){var n=Object(r.useState)(!1),e=Object(b.a)(n,2),t=e[0],i=e[1],o=function(){i(!t)};return Object(g.jsxs)(h.a,{children:[Object(g.jsx)(v,{open:t,handleMenu:o}),Object(g.jsx)(y,{open:t,handleMenu:o}),Object(g.jsxs)(x.d,{children:[Object(g.jsx)(x.b,{exact:!0,path:"/",component:C}),Object(g.jsx)(x.b,{exact:!0,path:"/aboutUs",component:f}),Object(g.jsx)(x.a,{to:"/"})]}),Object(g.jsx)(M,{children:Object(g.jsx)("h2",{children:"Footer"})})]})};t(37);j.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2b5a1118.chunk.js.map