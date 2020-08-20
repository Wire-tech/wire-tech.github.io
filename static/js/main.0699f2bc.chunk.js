(this["webpackJsonpwire-web"]=this["webpackJsonpwire-web"]||[]).push([[0],{113:function(e,t,a){e.exports=a(148)},118:function(e,t,a){},119:function(e,t,a){},136:function(e,t){},137:function(e,t){},138:function(e,t){},140:function(e,t){},141:function(e,t){},142:function(e,t){},143:function(e,t){},144:function(e,t){},145:function(e,t){},148:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),o=a.n(c),i=(a(118),a(119),a(103)),l=a(69),s=a(194),u=Object(i.a)({palette:{type:"dark",primary:{main:l.a[800]},secondary:s.a}}),m=a(206),h=a(207),g=a(67),d=a(195),p=a(197),f=a(71),b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{variant:"h4"},"FaceSearch"))))},w=a(48),v=a.n(w),E=a(74),j=a(43),O=a(199),x=a(10),y=a(198),k=a(200),C=a(201),_=a(210),F=a(203),I=a(202),N=a(204),R=a(205),S=a(211),L=a(149),A=a(102),T=a(42),P=a(0),B=a(68),D=a(98),J=a(99),U=a(105),W=a(34),q=a(106),H=a(104),M=function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).value=e.value,n}return Object(J.a)(a,[{key:"computeOutputShape",value:function(e){return[e[0],e[1],e[2],e[3]]}},{key:"call",value:function(e,t){var a=e;return Array.isArray(a)&&(a=a[0]),this.invokeCallHook(e,t),P.Qb(a,P.pc(this.value))}},{key:"getConfig",value:function(){var e={value:this.value},t=Object(U.a)(Object(W.a)(a.prototype),"getConfig",this).call(this);return Object.assign(e,t),e}}],[{key:"className",get:function(){return"HyperScale"}}]),a}(B.a.Layer),Q=function(e,t,a){return e>=a.x&&e<=a.x+a.width&&t>=a.y&&t<=a.y+a.height},V=Object(O.a)((function(e){return{root:{marginTop:e.spacing(3),textAlign:"center",justifyContent:"center",justifyItems:"center"},imageArea:{marginTop:e.spacing(3),position:"relative",width:"60%"},imageContent:{width:"100%"},overlay:{position:"absolute",top:0,left:0,width:"100%"},resultArea:{marginTop:e.spacing(3)},resultPaper:{padding:e.spacing(3)},croppedImg:{border:"solid",borderWidth:"2px",marginLeft:"15px",margin:"60px"},resultList:{overflow:"auto",position:"relative",backgroundColor:Object(x.c)(e.palette.common.white,.15)},listIconText:{color:"white"}}})),X=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(j.a)(o,2),l=i[0],s=i[1],u=Object(n.useState)(null),m=Object(j.a)(u,2),h=m[0],g=m[1],d=Object(n.useState)(null),p=Object(j.a)(d,2),b=p[0],w=p[1],O=Object(n.useState)([]),x=Object(j.a)(O,2),D=x[0],J=x[1],U=V(),W=Object(n.useRef)(null),q=Object(n.useRef)(null),H="https://wiretechnology.net",X="https://www.wiretechnology.net";return Object(n.useEffect)((function(){T.d.ssdMobilenetv1.loadFromUri("./models").then((function(e){console.log("model loaded")}))}),[]),Object(n.useEffect)((function(){P.tc.registerClass(M),Object(B.b)("./tf-keras-facenet/model.json").then((function(e){w(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:U.root},r.a.createElement(k.a,null,r.a.createElement(A.a,{acceptedFiles:["image/jpeg","image/png","image/bmp"],filesLimit:1,onChange:function(e){if(e.length>0){var t=new FileReader;t.readAsDataURL(e[0]),t.onload=function(){c(t.result)}}else c(""),g("")}}),r.a.createElement("div",{className:U.imageArea},r.a.createElement("img",{src:a,className:U.imageContent,ref:W,onLoad:function(){var e,t=(e=W.current).height,n={width:e.width,height:t};q.current.height=t,T.c(q.current,n),(e=new Image).src=a,e.onload=Object(E.a)(v.a.mark((function t(){var a,r,c,o,i,l,u,m,h;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a(e);case 2:for(a=t.sent,r=T.e(a,n),console.log("detections",a,r),c={boxColor:"rgba(255, 255, 255, 1)",label:"Click",drawLabelOptions:{fontColor:"rgba(200, 200, 200, 1)"}},o=[],i=0;i<a.length;i++)l=a[i],u=r[i],m={x:u._box._x,y:u._box._y,width:u._box._width,height:u._box._height},h={x:l._box._x,y:l._box._y,width:l._box._width,height:l._box._height},o.push({box:m,org_box:h}),new T.b.DrawBox(m,c).draw(q.current);s(o);case 9:case"end":return t.stop()}}),t)})))}}),r.a.createElement("canvas",{className:U.overlay,ref:q,onClick:function(e){for(var t=e.target.getBoundingClientRect(),a=e.clientX-t.left,n=e.clientY-t.top,r=0;r<l.length;r++){var c=l[r];if(Q(a,n,c.box)){var o=W.current,i=c.org_box,s=document.createElement("canvas");s.height=i.height,s.width=i.width,s.getContext("2d").drawImage(o,i.x,i.y,i.width,i.height,0,0,i.width,i.height);var u=s.toDataURL();g(u);var m=new Image;m.src=u,m.width=160,m.height=160,m.onload=Object(E.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(P.gd),t=P.y.fromPixels(m),t=(t=P.ab(t,0)).sub(127.5).div(128),e.next=6,b.predict(t);case 6:return a=(a=e.sent).div(P.Vb(a)),e.next=10,a.array();case 10:a=e.sent,n={method:"POST",body:JSON.stringify({vector:a}),headers:{"Content-Type":"application/json; charset=utf-8"}},fetch(H+"/face",n).then((function(e){return e.json()})).then((function(e){console.log("res_json",e),J(e)}));case 13:case"end":return e.stop()}}),e)})))}}}})),h&&r.a.createElement("div",{className:U.resultArea},r.a.createElement(L.a,{className:U.resultPaper},r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{item:!0,xs:3},r.a.createElement("img",{width:80,height:80,className:U.croppedImg,src:h})),r.a.createElement(y.a,{item:!0,xs:9},r.a.createElement(C.a,{className:U.resultList},D.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{key:t,button:!0,component:"a",href:"https://www.wiretechnology.net/index.html?q=".concat(e[0])},r.a.createElement(I.a,null,r.a.createElement(f.a,{className:U.listIconText},t+1,".")),r.a.createElement(F.a,{primary:e[0]}),r.a.createElement(N.a,null,r.a.createElement(S.a,{alt:e[0],src:X+"/image/"+e[2]}))),r.a.createElement(R.a,null))}))))))))))},Y=a(78),$=a(35),z=a(208),G=a(101),K=a.n(G),Z=Object(O.a)((function(e){return{root:{marginTop:e.spacing(10),width:"100%"},search:Object(Y.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(x.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(x.c)(e.palette.common.white,.25)},marginLeft:"auto",marginRight:"auto",width:"100%"},e.breakpoints.up("sm"),{width:"60%",marginLeft:"auto",marginRight:"auto"}),searchIcon:{width:e.spacing(7),color:"#FFF",height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(Y.a)({padding:e.spacing(1,1,1,7),color:"#FFF",width:"100%"},e.breakpoints.up("sm"),{width:"100%"})}})),ee=Object($.c)()((function(e){e.dispatch;var t,a=Z();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(k.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:a.search},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.value;t.value="",document.location.href="https://www.wiretechnology.net/index.html?q="+a}},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(K.a,null)),r.a.createElement(z.a,{placeholder:"Search...",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},inputRef:function(e){t=e}})))))))}));var te=function(){return r.a.createElement(m.a,{theme:u},r.a.createElement(h.a,null),r.a.createElement(b,null),r.a.createElement(ee,null),r.a.createElement(g.c,null,r.a.createElement(g.a,null,r.a.createElement(X,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(26),ne=a(32),re=a(88),ce=a(36),oe=function(e){return Object(ne.c)({router:Object(ce.b)(e)})},ie=Object(ae.a)();var le=Object(ne.e)(oe(ie),Object(ne.d)(Object(ne.a)(Object(re.a)(ie))));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($.a,{store:le},r.a.createElement(ce.a,{history:ie},r.a.createElement(te,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[113,1,2]]]);
//# sourceMappingURL=main.0699f2bc.chunk.js.map