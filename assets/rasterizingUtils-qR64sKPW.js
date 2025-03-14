import{o as R}from"./floatRGBA-Dairvywp.js";import{h8 as b,h9 as $,ab as A,ha as I}from"./index-jfgqsXUF.js";const z=15.5,x=4,U=64,V=1024,v=()=>A.getLogger("esri.symbols.cim.rasterizingUtils"),L=32,P=t=>t==="vertical"||t==="horizontal"||t==="cross"||t==="esriSFSCross"||t==="esriSFSVertical"||t==="esriSFSHorizontal";function O(t,i,a){const n=i.style,r=$(Math.ceil(a)),o=P(n)?8*r:16*r,e=2*r;t.width=o,t.height=o;const s=t.getContext("2d");s.strokeStyle="#ffffff",s.lineWidth=r,s.beginPath(),n!=="vertical"&&n!=="cross"&&n!=="esriSFSCross"&&n!=="esriSFSVertical"||(s.moveTo(o/2,-e),s.lineTo(o/2,o+e)),n!=="horizontal"&&n!=="cross"&&n!=="esriSFSCross"&&n!=="esriSFSHorizontal"||(s.moveTo(-e,o/2),s.lineTo(o+e,o/2)),n!=="backward-diagonal"&&n!=="diagonal-cross"&&n!=="esriSFSDiagonalCross"&&n!=="esriSFSBackwardDiagonal"||(s.moveTo(-e,-e),s.lineTo(o+e,o+e),s.moveTo(o-e,-e),s.lineTo(o+e,e),s.moveTo(-e,o-e),s.lineTo(e,o+e)),n!=="forward-diagonal"&&n!=="diagonal-cross"&&n!=="esriSFSForwardDiagonal"&&n!=="esriSFSDiagonalCross"||(s.moveTo(o+e,-e),s.lineTo(-e,o+e),s.moveTo(e,-e),s.lineTo(-e,e),s.moveTo(o+e,o-e),s.lineTo(o-e,o+e)),s.stroke();const h=s.getImageData(0,0,t.width,t.height),l=new Uint8Array(h.data);let f;for(let c=0;c<l.length;c+=4)f=l[c+3]/255,l[c]=l[c]*f,l[c+1]=l[c+1]*f,l[c+2]=l[c+2]*f;return[l,t.width,t.height,r]}function W(t){t.length%2==1&&(t=[...t,...t]);const i=t.reduce((c,m)=>c+m,0),a=Math.round(i*x),n=1,r=new Float32Array(a*n);let o=0,e=0,s=.5,h=!0;for(const c of t){for(o=e,e+=c*x;s<=e;){const m=s-.5,u=Math.min(Math.abs(s-o),Math.abs(s-e));r[m]=h?-u:u,s++}h=!h}const l=r.length,f=new Uint8Array(4*l);for(let c=0;c<l;++c){const m=r[c]/x;R(m/U*.5+.5,f,4*c)}return[f,a,n]}function j(t,i){t==null&&(t=[]);const a=i==="Butt",n=i==="Square",r=!a&&!n;t.length%2==1&&(t=[...t,...t]);const o=z,e=2*o;let s=0;for(const g of t)s+=g;const h=Math.round(s*o),l=new Float32Array(h*e),f=.5*o;let c=0,m=0,u=.5,M=!0;for(const g of t){for(c=m,m+=g*o;u<=m;){let C=.5;for(;C<e;){const D=(C-.5)*h+u-.5,d=r?(C-o)*(C-o):Math.abs(C-o);l[D]=M?a?Math.max(Math.max(c+f-u,d),Math.max(u-m+f,d)):d:r?Math.min((u-c)*(u-c)+d,(u-m)*(u-m)+d):n?Math.min(Math.max(u-c,d),Math.max(m-u,d)):Math.min(Math.max(u-c+f,d),Math.max(m+f-u,d)),C++}u++}M=!M}const F=l.length,T=new Uint8Array(4*F);for(let g=0;g<F;++g){const C=(r?Math.sqrt(l[g]):l[g])/o;R(C,T,4*g)}return[T,h,e]}function J(t,i){const{colorRamp:a,gradientType:n}=i,r=a.type==="CIMFixedColorRamp",o=i.interval||b.CIMGradientFill.interval;let e=w(a);return r&&(e=N(e,o)),n==="Discrete"||r?E(t,e,o):q(t,e)}let y;function K(t,i){const{colorRamp:a,gradientType:n}=i,r=w(a),o=a.type==="CIMFixedColorRamp";if(n==="Continuous"&&!o)return p(t,r);const e=i.interval??b.CIMGradientFill.interval;if(o)return p(t,N(r,e));const s=[];y??=document.createElement("canvas"),S(y,r,e,1,0);const h=y.getContext("2d").getImageData(0,0,e,1).data;for(let l=0,f=0;l<e;l++,f=4*l){const c=[h[f+0],h[f+1],h[f+2],h[f+3]];s.push({offset:l/e,color:c}),s.push({offset:(l+1)/e,color:c})}return p(t,s)}function w(t){const i=[];switch(t.type){case"CIMPolarContinuousColorRamp":case"CIMLinearContinuousColorRamp":{t.type==="CIMPolarContinuousColorRamp"&&v().warnOnce("CIMPolarContinuousColorRamp is currently unsupported. Falling back to CIMLinearContinuousColorRamp.");const a=t;i.push({offset:0,color:[a.fromColor[0],a.fromColor[1],a.fromColor[2],a.fromColor[3]/255]}),i.push({offset:1,color:[a.toColor[0],a.toColor[1],a.toColor[2],a.toColor[3]/255]});break}case"CIMFixedColorRamp":{const a=t,n=1/(a.colors.length-1);let r=0;for(const o of a.colors)i.push({offset:r,color:[o[0],o[1],o[2],o[3]/255]}),r+=n;break}case"CIMMultipartColorRamp":{const a=t,n=a.weights.reduce((o,e)=>o+e,0);let r=0;for(let o=0;o<a.colorRamps.length;o++){const e=a.colorRamps[o],s=a.weights[o],h=w(e);for(const l of h)i.push({offset:(r+l.offset*s)/n,color:l.color});r+=s}break}default:v().error(`Color ramp "${t.type}" currently unsupported.`)}return i}function N(t,i){const a=[],n=(t.length-1)/(i-1);for(let r=0;r<i;r++){const o=t[Math.round(r*n)].color;a.push({offset:r/i,color:o}),a.push({offset:(r+1)/i,color:o})}return a}function q(t,i){return S(t,i,L,1,I),k(t)}function E(t,i,a){return S(t,i,a,1,I),k(t)}function p(t,i,a=0){for(const{offset:n,color:r}of i)t.addColorStop(Math.min(Math.max(n,a),1-a),`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]})`)}function S(t,i,a,n,r){const o=a+2*r;t.width=o,t.height=n;const e=(r+1)/o,s=t.getContext("2d",{willReadFrequently:!0});if(i.length>0){const h=s.createLinearGradient(0,0,o,n);p(h,i,e),s.fillStyle=h}else s.fillStyle="rgba(128, 128, 128, 1)";s.fillRect(0,0,o,n)}function k(t){const{width:i,height:a}=t,n=t.getContext("2d").getImageData(0,0,i,a),r=new Uint8Array(n.data);for(let o=0;o<r.length;o+=4){const e=r[o+3]/255;r[o]*=e,r[o+1]*=e,r[o+2]*=e}return[r,i,a]}function G(t){const i=t[0]?.[0]?.[0]??0,a=t[0]?.[0]?.[1]??0,n={ymin:a,xmin:i,ymax:a,xmax:i,width:0,height:0};for(let r=0;r<t.length;r++){const o=t[r];for(let e=0;e<o.length;e++){const s=o[e][0],h=o[e][1];s<n.xmin&&(n.xmin=s),s>n.xmax&&(n.xmax=s),h<n.ymin&&(n.ymin=h),h>n.ymax&&(n.ymax=h)}}return n.width=Math.abs(n.xmax-n.xmin),n.height=Math.abs(n.ymax-n.ymin),n}function Q(t,i){const a=G(t),n=a.width===0?1:a.width,r=a.height===0?1:a.height,o=[];for(let e=0;e<t.length;e++){const s=t[e],h=[];for(let l=0;l<s.length;l++){let f=Math.round(s[l][0]-a.xmin),c=Math.round(s[l][1]-a.ymin);if(f=i.xmin+f*i.width/n,c=i.ymin+c*i.height/r,isNaN(f)||isNaN(c))throw new Error("Scaled shape has NaN values");h.push([f,c])}o.push(h)}return o}function X(t,i,a){const n=[];for(let r=0;r<t.length;r++){const o=t[r],e=[];for(let s=0;s<o.length;s++){const h=o[s][0]+i,l=o[s][1]+a;if(isNaN(h)||isNaN(l))throw new Error("Scaled shape has NaN values");e.push([h,l])}n.push(e)}return n}export{X as R,Q as T,U as c,V as e,O as f,J as g,W as m,K as p,x as t,j as u};
