import{dz as U,dA as q,dB as A,dC as j,dx as x,dy as B,dD as H,dE as I,s as N,dF as D,dG as V,dH as W,dI as C}from"./index-jfgqsXUF.js";import{c as G}from"./fontUtils-nqDekxUm.js";import{U as J,k as K}from"./quantizationUtils-Cx9cQSOo.js";import"./vendor-0HVaVRtn.js";const O="picture-fill",Q="picture-marker",X="simple-fill",Y="simple-line",_="simple-marker",$="text",tt="Aa",et=B.size,z=B.maxSize,at=B.maxOutlineSize,E=B.lineWidth,F=225,nt=document.createElement("canvas");function Z(e,t,s){if(e.type==="polygon"){const n=e.extent,m=n.width===0?1:n.width,r=n.height===0?1:n.height;e=J({originPosition:"upperLeft",scale:[m/t,r/s],translate:[n.xmin,n.ymax]},{},e);let c="";for(let l=0;l<e.rings.length;l++){const i=e.rings[l];for(let h=0;h<i.length;h++){const d=i[h][0],p=i[h][1];let a="";h===0?(a=`M${d.toString()} ${p.toString()}`,c!==""&&(a=` ${a}`),c+=a):h===i.length-1?(a=`l${d.toString()} ${p.toString()} Z`,c!==""&&(a=` ${a}`),c+=a):(a=`l${d.toString()} ${p.toString()}`,c!==""&&(a=` ${a}`),c+=a)}}return c}if(e.type==="polyline"){const n=e.extent,m=n.width===0?1:n.width,r=n.height===0?1:n.height;e=K({originPosition:"upperLeft",scale:[m/t,r/s],translate:[n.xmin,n.ymax]},{},e);let c="";for(let l=0;l<e.paths.length;l++){const i=e.paths[l];for(let h=0;h<i.length;h++){const d=i[h][0],p=i[h][1];let a="";h===0?(a=`M${d.toString()} ${p.toString()}`,c!==""&&(a=` ${a}`),c+=a):(a=`l${d.toString()} ${p.toString()}`,c!==""&&(a=` ${a}`),c+=a)}}return c}return""}function R(e,t){const s=nt.getContext("2d"),n=[];t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),s.font=n.join(" ");const{width:m,actualBoundingBoxLeft:r,actualBoundingBoxRight:c,actualBoundingBoxAscent:l,actualBoundingBoxDescent:i}=s.measureText(e);return{width:Math.ceil(Math.max(m,r+c)),height:Math.ceil(l+i),x:Math.floor(r),y:Math.floor((l-i)/2)}}function k(e){const t=e?.size;return{width:t!=null&&typeof t=="object"&&"width"in t?x(t.width):null,height:t!=null&&typeof t=="object"&&"height"in t?x(t.height):null}}async function it(e,t){const s=t.fill,n=e.color;if(s?.type==="pattern"&&n&&e.type!==O){const m=await W(s.src,n.toCss(!0));s.src=m,t.fill=s}}async function ot(e,t,s,n){if(!("font"in e)||!e.font||t.shape.type!=="text")return;try{await G(e.font)}catch{}const{width:m,height:r}=k(n);if(!/[\uE600-\uE6FF]/.test(t.shape.text)){const{width:c,height:l,x:i,y:h}=R(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family});s[0]=m??c,s[1]=r??l,t.shape.x=i,t.shape.y=h;let d="angle"in e?e.angle:null;if(n?.rotation!=null&&(d=(d??0)+n.rotation),d){const p=d*(Math.PI/180),a=Math.abs(Math.sin(p)),o=Math.abs(Math.cos(p));s[1]=s[0]*a+s[1]*o}}}function lt(e,t,s,n,m){if(e.haloColor!=null&&e.haloSize!=null){m.masking??=s.map(()=>[]);const r=x(e.haloSize);n[0]+=r,n[1]+=r,s.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*r,join:"round",cap:"round"}}]),m.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*C,height:n[1]+2*C},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}])}e.backgroundColor==null&&e.borderLineColor==null||(n[0]+=2*C,n[1]+=2*C,s.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:x(e.borderLineSize)}}]),m.masking?.unshift([]))}function T(e,t){return e>t?"dark":"light"}function st(e,t){const s=typeof t?.size=="number"?t?.size:null,n=s!=null?x(s):null,m=t?.maxSize!=null?x(t.maxSize):null;let r="angle"in e?e.angle:null;t?.rotation!=null&&(r=(r??0)+t.rotation);const c=U(e);let l=q(e);rt(e,245)!=="dark"||t?.ignoreWhiteSymbols||(l={width:.75,...l,color:"#bdc3c7"});let i=null;const h={shape:null,fill:c,stroke:l,offset:[0,0]};l?.width&&(l.width=Math.min(l.width,at));const d=l?.width||0;let p=t?.size!=null&&(t?.scale==null||t?.scale),a=0,o=0,S=!1;switch(e.type){case _:{const f=e.style,{width:g,height:u}=k(t);let b=g===u&&g!=null?g:n??Math.min(x(e.size),m||z);if(t?.useMarkerSymbolSize===!0&&g!==null&&u!==null){const y=Math.min(x(e.size),m||z);b=y>g&&y>u?Math.min(g,u):y}switch(a=b,o=b,f){case"circle":h.shape={type:"circle",cx:0,cy:0,r:.5*b},p||(a+=d,o+=d);break;case"cross":h.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[a,.5*o]},{command:"M",values:[.5*a,0]},{command:"L",values:[.5*a,o]}]};break;case"diamond":h.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[.5*a,0]},{command:"L",values:[a,.5*o]},{command:"L",values:[.5*a,o]},{command:"Z",values:[]}]},p||(a+=d,o+=d);break;case"square":h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[a,0]},{command:"L",values:[a,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},p||(a+=d,o+=d),r&&(S=!0);break;case"triangle":h.shape={type:"path",path:[{command:"M",values:[.5*a,0]},{command:"L",values:[a,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},p||(a+=d,o+=d),r&&(S=!0);break;case"x":h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[a,o]},{command:"M",values:[a,0]},{command:"L",values:[0,o]}]},r&&(S=!0);break;case"path":h.shape={type:"path",path:e.path||""},p||(a+=d,o+=d),r&&(S=!0),p=!0}break}case Y:{const{width:f,height:g}=k(t),u=I(l).reduce((v,M)=>v+M,0),b=u&&Math.ceil(E/u),y=g??n??d,w=f??(u*b||E);if(p=!0,t?.geometry?.type==="polyline"&&t?.geometry?.extent){a=w,o=g??a;const v=1e3,M=.15*v;i=[a,o],o=i[0]>i[1]?v*i[1]/i[0]:v,a=i[0]>i[1]?v:v*i[0]/i[1],l?.width&&(l.width=l.width*v/(i[1]>i[0]?i[1]:i[0]),l.width>M&&(l.width=M)),h.shape={type:"path",path:Z(t.geometry,a,o)}}else a=t?.maxSize!=null?Math.min(w,t.maxSize):w,o=y,l&&(l.width=y),h.shape={type:"path",path:[{command:"M",values:[y/2,o/2]},{command:"L",values:[a-y/2,o/2]}]};break}case O:case X:{const f=typeof t?.symbolConfig=="object"&&!!t?.symbolConfig?.isSquareFill,{width:g,height:u}=k(t);a=!f&&g!==u||g==null?n??et:g,o=!f&&g!==u||u==null?a:u,p||(a+=d,o+=d),p=!0,t?.geometry?.extent&&t?.geometry?.type==="polygon"?(i=[a,o],o=i[0]>i[1]?1e3*i[1]/i[0]:1e3,a=i[0]>i[1]?1e3:1e3*i[0]/i[1],h.shape={type:"path",path:Z(t.geometry,a,o)}):h.shape=f?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[a,0]},{command:"L",values:[a,o]},{command:"L",values:[0,o]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:H.fill[0];break}case Q:{const f=Math.min(x(e.width),m||z),g=Math.min(x(e.height),m||z),{width:u,height:b}=k(t),y=u===b&&u!=null?u:n??Math.max(f,g),w=e.width/e.height;a=w<=1?Math.ceil(y*w):y,o=w<=1?y:Math.ceil(y/w),h.shape={type:"image",x:-Math.round(a/2),y:-Math.round(o/2),width:a,height:o,src:e.url||""},r&&(S=!0);break}case $:{const f=e,g=t?.overrideText||f.text||tt,u=f.font,{width:b,height:y}=k(t),w=y??n??Math.min(x(u.size),m||z),{width:v,height:M}=R(g,{weight:u.weight,size:w,family:u.family}),L=/[\uE600-\uE6FF]/.test(g);a=b??(L?w:v),o=L?w:M;let P=.5*(L?w:M);L&&(P+=5),h.shape={type:"text",text:g,x:f.xoffset||0,y:f.yoffset||P,align:"middle",alignBaseline:f.verticalAlignment,decoration:u&&u.decoration,rotated:f.rotated,kerning:f.kerning},h.font=u&&{size:w,style:u.style,decoration:u.decoration,weight:u.weight,family:u.family};break}}return{shapeDescriptor:h,size:[a,o],outputSize:i,renderOptions:{node:t?.node,scale:p,opacity:t?.opacity,rotations:[r],useRotationSize:S,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}async function dt(e,t){const{shapeDescriptor:s,size:n,renderOptions:m,outputSize:r}=st(e,t);if(!s.shape)throw new N("symbolPreview: renderPreviewHTML2D","symbol not supported.");await it(e,s),await ot(e,s,n,t);const c=[[s]];if(typeof t?.symbolConfig=="object"&&t?.symbolConfig?.applyColorModulation){const i=.6*n[0];c.unshift([{...s,offset:[-i,0],fill:D(s.fill,-.3)}]),c.push([{...s,offset:[i,0],fill:D(s.fill,.3)}]),n[0]+=2*i,m.scale=!1}e.type==="text"&&lt(e,s,c,n,m);const l=V(c,n,m);if(r&&l){const i=l.nodeName.toLowerCase()==="img"?l:l.firstChild;i.nodeName.toLowerCase()==="svg"&&i.setAttribute("viewBox",`0 0 ${n[0].toString()} ${n[1].toString()}`),i.setAttribute("width",r[0].toString()),i.setAttribute("height",r[1].toString()),r.length>2&&(i.style.setProperty("padding-left",r[2]?.toString()+"px"),i.style.setProperty("padding-right",r[2]?.toString()+"px"),i.style.setProperty("padding-top",r[3]?.toString()+"px"),i.style.setProperty("padding-bottom",r[3]?.toString()+"px"),i.style.setProperty("box-sizing","border-box"))}return l}function rt(e,t=F){const s=U(e),n=q(e),m=!s||"type"in s?null:new A(s),r=n?.color?new A(n?.color):null,c=m?T(j(m),t):null,l=r?T(j(r),t):null;return l?c?c===l?c:t>=F?"light":"dark":l:c}export{rt as getContrastingBackgroundTheme,st as getRenderSymbolParameters,dt as previewSymbol2D};
