import"./Transformation2D-CZv2Ie30.js";import{a1 as x}from"./ProjectionTransformation-DQWKC79l.js";import"./index-jfgqsXUF.js";import"./jsonConverter-Dxl82hUi.js";import{s as _}from"./SimpleGeometryCursor-B92kdZ15.js";import{fromGeometry as u,getSpatialReference as c,fromExtent as a,fromSpatialReference as p,toGeometry as s}from"./apiConverter-BYWqLAi0.js";const n=new x;function v(e,r,t){return n.execute(e,r,t,null)}function b(e,r,t){const o=n.executeMany(new _(e),r,t,null);return Array.from(o)}function M(){return n.supportsCurves()}function m(e,r){const t=c(e),o=a(r).asEnvelope2D();return s(v(u(e),o,p(t)),t)}function i(e,r){const t=e.map(u),o=c(e),f=a(r).asEnvelope2D();return b(t,f,p(o)).map(y=>s(y,o))}const l=M(),E=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:i,supportsCurves:l},Symbol.toStringTag,{value:"Module"})),w=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:i,supportsCurves:l},Symbol.toStringTag,{value:"Module"}));export{w as c,E as i};
