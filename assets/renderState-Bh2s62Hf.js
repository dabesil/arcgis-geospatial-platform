import{e as o}from"./basicInterfaces-CZwQPxTp.js";import{bE as c,bF as d,bG as h,bH as s}from"./index-jfgqsXUF.js";function u(t,e,i=h.ADD,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function w(t,e,i,n,_=h.ADD,O=h.ADD,a=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:_,opAlpha:O,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}const J=u(s.ZERO,s.ONE_MINUS_SRC_ALPHA);u(s.ONE,s.ZERO);u(s.ONE,s.ONE);const Q=u(s.ONE,s.ONE_MINUS_SRC_ALPHA),V=w(s.SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA),A={face:d.BACK,mode:c.CCW},B={face:d.FRONT,mode:c.CCW},X=t=>t===o.Back?A:t===o.Front?B:null,Y={zNear:0,zFar:1},tt={r:!0,g:!0,b:!0,a:!0};function D(t){return z.intern(t)}function C(t){return F.intern(t)}function R(t){return H.intern(t)}function y(t){return L.intern(t)}function N(t){return M.intern(t)}function m(t){return U.intern(t)}function E(t){return K.intern(t)}function P(t){return $.intern(t)}function k(t){return Z.intern(t)}function et(t){return j.intern(t)}class l{constructor(e,i){this._makeKey=e,this._makeRef=i,this._interns=new Map}intern(e){if(!e)return null;const i=this._makeKey(e),n=this._interns;return n.has(i)||n.set(i,this._makeRef(e)),n.get(i)??null}}function r(t){return"["+t.join(",")+"]"}const z=new l(f,t=>({__tag:"Blending",...t}));function f(t){return t?r([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const F=new l(p,t=>({__tag:"Culling",...t}));function p(t){return t?r([t.face,t.mode]):null}const H=new l(g,t=>({__tag:"PolygonOffset",...t}));function g(t){return t?r([t.factor,t.units]):null}const L=new l(v,t=>({__tag:"DepthTest",...t}));function v(t){return t?r([t.func]):null}const M=new l(I,t=>({__tag:"StencilTest",...t}));function I(t){return t?r([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const U=new l(S,t=>({__tag:"DepthWrite",...t}));function S(t){return t?r([t.zNear,t.zFar]):null}const K=new l(W,t=>({__tag:"ColorWrite",...t}));function W(t){return t?r([t.r,t.g,t.b,t.a]):null}const $=new l(b,t=>({__tag:"StencilWrite",...t}));function b(t){return t?r([t.mask]):null}const Z=new l(T,t=>({__tag:"DrawBuffers",...t}));function T(t){return t?r(t.buffers):null}const j=new l(x,t=>({blending:D(t.blending),culling:C(t.culling),polygonOffset:R(t.polygonOffset),depthTest:y(t.depthTest),stencilTest:N(t.stencilTest),depthWrite:m(t.depthWrite),colorWrite:E(t.colorWrite),stencilWrite:P(t.stencilWrite),drawBuffers:k(t.drawBuffers)}));function x(t){return t?r([f(t.blending),p(t.culling),g(t.polygonOffset),v(t.depthTest),I(t.stencilTest),S(t.depthWrite),W(t.colorWrite),b(t.stencilWrite),T(t.drawBuffers)]):null}class it{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,i,n,_){return(n||e!==i)&&(_(e),this._pipelineInvalid=!0),e}}export{et as B,it as Q,J as a,V as c,X as f,tt as g,Q as o,Y as p,w as r,B as u};
