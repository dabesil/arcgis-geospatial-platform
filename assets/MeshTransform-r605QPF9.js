import{T as u,U as p,V as h,W as c,X as e,Y as m,Z as x,$ as y,a0 as r,a1 as a,a2 as A}from"./index-jfgqsXUF.js";import{e as i}from"./mat4f64-Dk4dwAN8.js";import{b as g}from"./quat-4Sj-KpO-.js";import{e as b}from"./quatf64-aQ5IuZRd.js";import{q as N,y as M,z as v,w as n,B as d}from"./axisAngleDegrees-DBKvQhgc.js";var s;let o=s=class extends u{constructor(t){super(t),this.translation=p(),this.rotationAxis=h(d),this.rotationAngle=0,this.scale=c(1,1,1)}get rotation(){return N(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=e(n(t)),this.rotationAngle=M(t)}get localMatrix(){const t=i();return g(l,n(this.rotation),v(this.rotation)),m(t,l,this.translation,this.scale),t}get localMatrixInverse(){return x(i(),this.localMatrix)}equals(t){return this===t||t!=null&&y(this.localMatrix,t.localMatrix)}clone(){const t={translation:e(this.translation),rotationAxis:e(this.rotationAxis),rotationAngle:this.rotationAngle,scale:e(this.scale)};return new s(t)}};r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"translation",void 0),r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAxis",void 0),r([a({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAngle",void 0),r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"scale",void 0),r([a()],o.prototype,"rotation",null),r([a()],o.prototype,"localMatrix",null),r([a()],o.prototype,"localMatrixInverse",null),o=s=r([A("esri.geometry.support.MeshTransform")],o);const l=b(),q=o;export{q as N};
