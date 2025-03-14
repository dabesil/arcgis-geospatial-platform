import{k as F,L as O,e as d,P as Y,a as H,f as J,b as K}from"./Transformation2D-CZv2Ie30.js";import{o as Q,a0 as M,n as R,a1 as W,c as Z,G as ee,a2 as w,k as te,b as se,N as ne,a3 as oe}from"./ProjectionTransformation-DQWKC79l.js";function k(){return{m_pGcs:new d,m_xyz:new w,m_factor:Number.NaN,m_geoLength:Number.NaN,setValues:re,setLength:ae,assign:ie}}function re(i,e,t,n){this.m_factor=i,this.m_pGcs.assign(e),this.m_xyz.assign(n),this.m_geoLength=t}function ae(i){this.m_geoLength=i}function ie(i){this.m_pGcs.assign(i.m_pGcs),this.m_xyz.assign(i.m_xyz),this.m_factor=i.m_factor,this.m_geoLength=i.m_geoLength}class me{getOperatorType(){return 10315}supportsCurves(){return!0}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}_ExecuteShapePreservingLength(e,t,n,u,s){if(e.hasNonLinearSegments()&&(e=new Q().execute(e,0,t.getTolerance(0),0,s)),t.isPannable()){let m=90,r=-90;if(n.getUnit().getUnitToBaseFactor()===1&&(m*=Math.PI/180,r*=Math.PI/180),t.getCoordinateSystemType()===2){let _=null;const o=[0,0,0,0];_=t.getPECoordSys(),o[0]=0,o[1]=m,o[2]=0,o[3]=r,M.geogToProj(_,2,o),m=o[1],r=o[3]}const g=new R;e.queryEnvelope(g),g.ymin=r,g.ymax=m,e=new W().execute(e,g,t,s)}else{const m=t.getPCSHorizon();(e=new Z().execute(e,m,t,s))===m&&(e=e.clone())}return e.isEmpty()?0:this._ExecuteIterativeApproach(e,t,n,u,1,s)}_ExecuteIterativeApproach(e,t,n,u,s,m){const r=ee();n.querySpheroidData(r);const g=r.majorSemiAxis,_=r.e2,o=n.getUnit().getUnitToBaseFactor(),T=40,C=F(k,T),P=O(T,Number.NaN),f=k(),c=k();let l;const a=[0,0,0,0],A=t.getPECoordSys(),L=new d,E=new d,y=new d,p=new d,S=new d;let U=0;const v=e.querySegmentIterator();for(;v.nextPath();)for(;v.hasNextSegment();){const z=v.nextSegment();L.assign(z.getStartXY()),E.assign(z.getEndXY()),t.getCoordinateSystemType()===2?(a[0]=L.x,a[1]=L.y,a[2]=E.x,a[3]=E.y,M.projToGeog(A,2,a),y.x=a[0]*o,y.y=a[1]*o,p.x=a[2]*o,p.y=a[3]*o):(y.setCoordsPoint2D(L),p.setCoordsPoint2D(E),y.scale(o),p.scale(o));const D=new w,I=new w;q(g,_,y,D),q(g,_,p,I);let x=b(g,D,I);f.setValues(0,y,Number.NaN,D),c.setValues(1,p,x,I),l=s,C[0].assign(c),P[0]=s;let h=0;for(;;){h>128&&K("iterations exceeded");const V=.5*(f.m_factor+c.m_factor),j=z.getCoord2D(V);t.getCoordinateSystemType()===2?(a[0]=j.x,a[1]=j.y,M.projToGeog(A,1,a),S.x=a[0]*o,S.y=a[1]*o):(S.setCoordsPoint2D(j),S.scale(o)),y.setCoordsPoint2D(f.m_pGcs),p.setCoordsPoint2D(c.m_pGcs);const G=new w;q(g,_,S,G);const X=b(g,f.m_xyz,G),$=b(g,c.m_xyz,G);x=c.m_geoLength,Number.isNaN(x)&&(x=b(g,f.m_xyz,c.m_xyz));const N=X+$,B=l===s&&N>=20&&Math.abs(N-x)>1e-8*(x+N);if(h+2<T&&(B||Math.abs(N-x)>0&&l>0))c.setLength($),C[h].assign(c),c.setValues(V,S,X,G),C[++h].assign(c),B?(l=s,P[h]=s):(l--,P[h-1]=l,P[h]=l);else{if(U+=N,h===0)break;f.assign(c),c.assign(C[--h]),l=P[h]}}}return U}execute(e,t,n){if(t&&t.getCoordinateSystemType()!==0||Y(""),e.isEmpty()||e.getDimension()<1)return 0;let u=null;const s=t.getGCS();s!==t&&(u=te(t,s,null));const m=e.getGeometryType();if(m===H.enumEnvelope){const r=new se;return r.addEnvelope(e,!1),this._ExecuteShapePreservingLength(r,t,s,u,n)}if(J(m)){const r=new ne;return r.addSegment(e,!0),this._ExecuteShapePreservingLength(r,t,s,u,n)}return this._ExecuteShapePreservingLength(e,t,s,u,n)}}function q(i,e,t,n){n.assign(oe(i,e,t))}function b(i,e,t){const n=i,u=new w;u.setSub(e,t);const s=u.length();return 2*n*Math.asin(s/(2*n))}export{me as w};
