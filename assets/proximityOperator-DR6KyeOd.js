import"./Transformation2D-CZv2Ie30.js";import"./ProjectionTransformation-DQWKC79l.js";import{ge as y,gd as d}from"./index-jfgqsXUF.js";import"./jsonConverter-Dxl82hUi.js";import{m as N}from"./OperatorProximity-BZKKElwP.js";import{toPoint as S,getSpatialReference as c,fromGeometry as p,fromPoint as u}from"./apiConverter-BYWqLAi0.js";function g(e,i,r=!1){const s=S(e.m_coordinate,c(i)),o=e.m_distance,t=e.isEmpty(),n=e.m_bRightSide;return{coordinate:s,distance:o,isEmpty:t,...r&&{isRightSide:n},vertexIndex:e.m_vertexIndex}}const m=new N;function _(e,i,r={}){const{calculateLeftRightSide:s=!1,testPolygonInterior:o=!0,unit:t}=r,n=m.getNearestCoordinate(p(e),u(i).getXY(),o,s);if(t&&n.m_distance){const a=c(e);n.m_distance=d(n.m_distance,a,t)}return g(n,e,s)}function f(e,i,r={}){const{unit:s}=r,o=m.getNearestVertex(p(e),u(i).getXY());if(s&&o.m_distance){const t=c(e);o.m_distance=d(o.m_distance,t,s)}return g(o,e)}function l(e,i,r,s,o={}){const{unit:t}=o,n=c(e);return t&&r&&(r=y(r,t,n)),m.getNearestVertices(p(e),u(i).getXY(),r,s).map(a=>(t&&a.m_distance&&(a.m_distance=d(a.m_distance,n,t)),g(a,e)))}const x=m.supportsCurves(),j=Object.freeze(Object.defineProperty({__proto__:null,getNearestCoordinate:_,getNearestVertex:f,getNearestVertices:l,supportsCurves:x},Symbol.toStringTag,{value:"Module"})),I=Object.freeze(Object.defineProperty({__proto__:null,getNearestCoordinate:_,getNearestVertex:f,getNearestVertices:l,supportsCurves:x},Symbol.toStringTag,{value:"Module"}));export{j as g,I as p};
