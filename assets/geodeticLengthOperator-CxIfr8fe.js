const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OperatorGeodeticLength-f8NoaRCJ.js","assets/index-jfgqsXUF.js","assets/vendor-0HVaVRtn.js","assets/index-CDFczaSZ.css","assets/Transformation2D-CZv2Ie30.js","assets/OperatorShapePreservingLength-ClAogsAb.js","assets/ProjectionTransformation-DQWKC79l.js","assets/SimpleGeometryCursor-B92kdZ15.js","assets/apiConverter-BYWqLAi0.js","assets/jsonConverter-Dxl82hUi.js"])))=>i.map(i=>d[i]);
import{_ as i,em as g,en as v,eo as O,bI as P}from"./index-jfgqsXUF.js";import{e as y}from"./geodeticCurveType-CirnHLSB.js";let n;function _(){return!!n&&O()}async function b(){if(!_()){const[e,r]=await Promise.all([i(()=>import("./OperatorGeodeticLength-f8NoaRCJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),i(()=>import("./ProjectionTransformation-DQWKC79l.js").then(t=>t.aW),__vite__mapDeps([6,4,7,1,2,3])).then(t=>t.aG).then(({injectPe:t})=>t),g()]);n=new e.OperatorGeodeticLength,r(v)}}function L(e,r,t){return n.execute(e,r,t,null)}function E(){return n.supportsCurves()}let u,l,p,a;function c(){return!!u&&_()}async function f(){if(!c()){const[e]=await Promise.all([i(()=>import("./apiConverter-BYWqLAi0.js"),__vite__mapDeps([8,4,6,7,1,2,3,9])),b()]);u=e.fromGeometry,l=e.fromSpatialReference,p=e.getSpatialReference,a=E()}}function m(e,r={}){const{curveType:t="geodesic",unit:s}=r,d=p(e);let o=L(u(e),l(d),y[t]);return o&&s&&(o=P(o,"meters",s)),o}const h=Object.freeze(Object.defineProperty({__proto__:null,execute:m,isLoaded:c,load:f,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null,execute:m,isLoaded:c,load:f,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"}));export{h as f,j as g,f as m};
