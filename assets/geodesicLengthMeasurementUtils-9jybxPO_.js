import{a as s}from"./quantityUtils-AG1xhowq.js";import{aj as i,ah as m,U as u}from"./index-jfgqsXUF.js";import{geodesicLength as f}from"./geometryEngine-DamuwEXU.js";import{y as c,q as l,b as y,R}from"./geodesicUtils-BJF8eY80.js";function w(e){return c(e)||i(e)}function p(e,n,r,...o){return c(e)?n.apply(void 0,o):i(e)?r.apply(void 0,o):null}function L(e){const{spatialReference:n}=e;return p(n,x,$,e)}function O(e,n){if(!m(e.spatialReference,n.spatialReference))return null;const{spatialReference:r}=e;return t[0]=e.x,t[1]=e.y,t[2]=e.hasZ?e.z:0,a[0]=n.x,a[1]=n.y,a[2]=n.hasZ?n.z:0,d(t,a,r)}function d(e,n,r){return p(r,h,g,e,n,r)}function h(e,n,r){return s(l(v,e,n,r).distance,"meters")}function g(e,n,r){return s(f(j(e,n,r),"meters"),"meters")}function x(e){return s(R([e],"meters")[0],"meters")}function $(e){return s(f(e,"meters"),"meters")}function j(e,n,r){return{type:"polyline",spatialReference:r,paths:[[[...e],[...n]]]}}const v=new y,t=u(),a=u();export{w as e,O as f,L as m,p as r,d as u};
