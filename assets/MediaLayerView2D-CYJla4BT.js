const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MediaLayerInteraction-Dilb7Q5W.js","assets/index-jfgqsXUF.js","assets/vendor-0HVaVRtn.js","assets/index-CDFczaSZ.css"])))=>i.map(i=>d[i]);
import{gg as W,hi as Q,cK as p,cP as B,cL as R,gW as P,hj as V,ab as b,s as I,d0 as j,d4 as K,d5 as L,jf as N,c5 as S,dv as z,a0 as a,a1 as d,a2 as q,a6 as J,di as T,_ as X,cG as G,cA as Y,cB as Z,cC as ee,lf as te,cc as ie,b_ as re,cm as se,eU as ne,lg as oe}from"./index-jfgqsXUF.js";import{o as ae,j as le,m as U}from"./mediaLayerUtils-C-MXVoub.js";import"./floatRGBA-Dairvywp.js";import"./UpdateTracking2D-CfFEleC8.js";import"./GeometryUtils-CpMv2FgV.js";import"./CIMSymbolHelper-DaggyRNO.js";import"./OverrideHelper-D_n-9eva.js";import{e as he}from"./Container-DjdrwIF4.js";import"./WGLContainer-WFylH3LE.js";import"./Utils-DufyKz9p.js";import"./StyleDefinition-BTt3Vg0H.js";import"./enums-BRzLM11V.js";import"./GridShader-BpPJaV3Y.js";import"./pbf-klGyIR1c.js";import"./TechniqueType-uMFRS8dR.js";import"./FramebufferObject--4ZHTLY2.js";import"./FeatureCommandQueue-BWsQvzDU.js";import"./PieChartMeshWriter-CaM56M4M.js";import"./renderState-Bh2s62Hf.js";import"./glsl-BH37Aalp.js";import"./testSVGPremultipliedAlpha-Cro95-bc.js";import"./GraphicsView2D-Cj8RqP_7.js";import"./earcut-D9gy186-.js";import"./vec3f32-nZdmKIgz.js";import{e as de}from"./mat3f64-q3fE-ZOt.js";import{c as ce}from"./utils-JjqE2DfR.js";import{u as me}from"./OverlayContainer-CUxNv8JF.js";import{S as pe,y as ue}from"./LayerView-NqyHl1Bs.js";import"./vendor-0HVaVRtn.js";import"./normalizeUtilsSync-Xh-SG6DM.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-nqDekxUm.js";import"./OptimizedGeometry-aBFBEGLw.js";import"./memoryEstimations-BucWCUN2.js";import"./rasterizingUtils-qR64sKPW.js";import"./Rect-CUzevAry.js";import"./BoundingBox-izu4TMBJ.js";import"./quantizationUtils-Cx9cQSOo.js";import"./ProgramTemplate-YrOnZ5NE.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./VertexArrayObject-CLpjg57p.js";import"./config-BOD8--da.js";import"./featureConversionUtils-BAN7iPzO.js";import"./OptimizedFeature-CQnDPIV2.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./GraphShaderModule-BOY5wPZW.js";import"./ShaderBuilder-DfMB-k6o.js";import"./BindType-BBwFZqyN.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-DN-FiPBd.js";import"./queryUtils-BqV_MD1M.js";import"./json-Wa8cmqdu.js";import"./timeSupport-CbVV7g16.js";import"./TimeOnly-C39e4_MX.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-CI9vbH7V.js";import"./TurboLine-Z2S_iolx.js";import"./utils-B3JoBldI.js";import"./basicInterfaces-CZwQPxTp.js";import"./dehydratedFeatures-BQJBGVkH.js";import"./grouping-DpEeL6AQ.js";import"./utils-ehcGqGxa.js";import"./layerViewUtils-Lm2RRReK.js";const H=[1,1],y=de(),ye={none:S.None,loop:S.Loop,oscillate:S.Oscillate};function fe(e){return e?{type:"CIMAnimatedSymbolProperties",...e,playAnimation:e.playing,repeatType:e.repeatType?ye[e.repeatType]:void 0}:{type:"CIMAnimatedSymbolProperties"}}class _e extends he{constructor(t){super(),this.elementView=t,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=W(),this._handles=new Q,this._vertices=new Float32Array(8),this._indices=new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]),this._handles.add([p(()=>this.elementView.element.opacity,i=>this.opacity=i,R),p(()=>[this.elementView.coords],()=>{this.requestRender()},R),p(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{this._handles.remove("play"),this.texture=P(this.texture),this.requestRender()},R),B(()=>this.elementView.element.loaded,()=>{const i=this.elementView.element;this.ready(),ae(i)&&i.content!=null&&(this._handles.add([V(i.content,"play",()=>this.requestRender()),V(i.content,"loadeddata",()=>this.requestRender()),V(i.content,"loaded",()=>this.requestRender())]),"requestVideoFrameCallback"in i.content?i.content.requestVideoFrameCallback(()=>this.requestRender()):this._handles.add([V(i.content,"seeked",()=>this.requestRender())]),this.requestRender())},R)]),t.element.load().catch(i=>{b.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new I("element-load-error","Element cannot be displayed",{element:t,error:i}))})}getMesh(t){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=P(this.texture)}get textureSize(){return H}get dvsMat3(){return this.parent.dvsMat3}beforeRender(t){const{context:i}=t,r=this.elementView.element.content;if(r!=null){const n=r instanceof HTMLImageElement,o=r instanceof HTMLVideoElement,s=n?r.naturalWidth:o?r.videoWidth:r.width,c=n?r.naturalHeight:o?r.videoHeight:r.height;if(this._updatePerspectiveTransform(s,c),this.texture)o&&(this.texture.setData(r),this.texture.generateMipmap(),"requestVideoFrameCallback"in r?r.requestVideoFrameCallback(()=>this.requestRender()):r.paused||this.requestRender());else{const h=new j;if(h.wrapMode=K.CLAMP_TO_EDGE,h.preMultiplyAlpha=!0,h.width=s,h.height=c,"getFrame"in r){const v=u=>{this.texture?this.texture.setData(u):this.texture=new L(i,h,u),this.requestRender()};"animationOptions"in this.elementView.element&&this._handles.add(ce(r,fe(this.elementView.element.animationOptions),null,v),"play")}else this.texture=new L(i,h,r);this.texture.generateMipmap(),o&&("requestVideoFrameCallback"in r?r.requestVideoFrameCallback(()=>this.requestRender()):r.paused||this.requestRender())}}super.beforeRender(t)}_createTransforms(){return null}draw(t,i){this.isReady&&this.texture!=null?i.render(t,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:H,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._indices}):this.requestRender()}updateDrawCoords(t,i,r,n){const{coords:o,bounds:s}=this.elementView;if(o==null||s==null)return;const[c,h,v,u]=o.rings[0],D=this._vertices,{x:g,y:x}=t;D.set([h[0]-g,h[1]-x,c[0]-g,c[1]-x,v[0]-g,v[1]-x,u[0]-g,u[1]-x]);let E=i;if(n){const[C,,$]=s,{worldWidth:A,xBounds:F}=n,[M,O]=F;C<M&&$>M?E=A:$>O&&C<O&&(E=-A)}this.wrapAroundShift=E,this.isWrapAround=E!==0}_updatePerspectiveTransform(t,i){const r=this._vertices;le(y,[0,0,t,0,0,i,t,i],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),N(this.perspectiveTransform,y[6]/y[8]*t,y[7]/y[8]*i)}}let w=class extends z{constructor(e){super(e),this.editSourcePoints=!1}};a([d()],w.prototype,"editSourcePoints",void 0),w=a([q("esri.views.3d.layers.support.MediaLayerInteractionOptions.ReshapeOptions")],w);let m=class extends z{constructor(e){super(e),this.tool="transform",this.reshapeOptions=new w}};a([d()],m.prototype,"tool",void 0),a([d({type:w})],m.prototype,"reshapeOptions",void 0),m=a([q("esri.views.3d.layers.support.MediaLayerInteractionOptions")],m);const we=e=>{let t=class extends e{constructor(...i){super(...i),this.layer=null,this.interactive=!1,this.interactionOptions=new m,this.selectedElement=null}highlight(i,r){throw new Error("missing implementation")}};return a([d()],t.prototype,"layer",void 0),a([d()],t.prototype,"interactive",void 0),a([d({type:m})],t.prototype,"interactionOptions",void 0),a([d()],t.prototype,"selectedElement",void 0),t=a([q("esri.views.layers.MediaLayerView")],t),t};let _=class extends pe(we(ue)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this._interaction=null,this.layer=null,this.elements=new J}initialize(){this.addHandles([p(()=>[this.interactive,this.suspended],async()=>{if(this.interactive&&!this._interaction){const{MediaLayerInteraction:e}=await X(()=>import("./MediaLayerInteraction-Dilb7Q5W.js"),__vite__mapDeps([0,1,2,3]));this._interaction=new e({view:this.view,layer:this.layer}),this.selectedElement!==this._interaction.selectedElement&&(this._interaction.selectedElement=this.selectedElement),this.interactionOptions!==this._interaction.options&&(this._interaction.options=this.interactionOptions)}this._interaction&&(this._interaction.enabled=!this.suspended&&this.interactive)},T),p(()=>this.interactionOptions,e=>{this._interaction&&(this._interaction.options=e)},T),p(()=>this.selectedElement,e=>{this._interaction&&(this._interaction.selectedElement=e)},T)])}attach(){this.addAttachHandles([G(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(e=>this._updateTile(e)),this.requestUpdate()}),G(()=>this.layer.effectiveSource,"change",({element:e})=>this._elementUpdateHandler(e))]),this._overlayContainer=new me,this.container.addChild(this._overlayContainer),this._fetchQueue=new Y({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t),scheduler:this.scheduler,priority:Z.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new ee({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(e){return!0}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e)}async hitTest(e,t){const i=[],r=e.normalize(),n=[r.x,r.y];for(const{elementView:{normalizedCoords:o,element:s}}of this._elementReferences.values())o!=null&&te(o.rings,n)&&i.push({type:"media",element:s,layer:this.layer,mapPoint:e,sourcePoint:s.toSource(e)});return i.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updateTile(e))}_acquireTile(e){const t=new ve(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then(t=>{const[i,r]=e.setElements(t);this._referenceElements(e,i),this._dereferenceElements(e,r),this.requestUpdate()},t=>{ie(t)||b.getLogger(this).error(t)}))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const i=this.layer.effectiveSource;if(i==null)return[];this.view.featuresTilingScheme.getTileBounds(l,e,!0);const r=new se({xmin:l[0],ymin:l[1],xmax:l[2],ymax:l[3],spatialReference:this.view.spatialReference});return i.queryElements(r,t)}_referenceElements(e,t){if(this.layer.source!=null)for(const i of t)this._referenceElement(e,i)}_referenceElement(e,t){ne(this._elementReferences,t.uid,()=>{const i=new U({element:t,spatialReference:this.view.spatialReference}),r=new _e(i);return this._overlayContainer.addChild(r),this.elements.add(t),this._updatingHandles.addPromise(t.load().catch(n=>{b.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new I("element-load-error","Element cannot be displayed",{element:t,error:n}))})),{debugGraphic:null,elementView:i,overlay:r,tiles:new Set}}).tiles.add(e)}_dereferenceElements(e,t){for(const i of t)this._dereferenceElement(e,i)}_dereferenceElement(e,t){const i=this._elementReferences.get(t.uid);i.tiles.delete(e),i.tiles.size||(this._overlayContainer.removeChild(i.overlay),i.overlay.destroy(),i.elementView.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(i.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const r=t.elementView.normalizedCoords;if(r==null)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.elementView.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const n=[],o=[];for(const s of this._tileStrategy.tiles){const c=k(this.view.featuresTilingScheme,s,r);t.tiles.has(s)?c||o.push(s):c&&n.push(s)}for(const s of n)this._referenceElement(s,e);for(const s of o)this._dereferenceElement(s,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.elementView.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const i=new U({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(i!=null)for(const r of this._tileStrategy.tiles)k(this.view.featuresTilingScheme,r,i)&&this._referenceElement(r,e)}};a([d()],_.prototype,"layer",void 0),a([d({readOnly:!0})],_.prototype,"elements",void 0),_=a([q("esri.views.2d.layers.MediaLayerView2D")],_);const l=re(),f={xmin:0,ymin:0,xmax:0,ymax:0};function k(e,t,i){return e.getTileBounds(l,t.key,!0),f.xmin=l[0],f.ymin=l[1],f.xmax=l[2],f.ymax=l[3],oe(f,i)}class ve{constructor(t){this.key=t,this.elements=null,this.isReady=!1,this.visible=!0}setElements(t){const i=[],r=new Set(this.elements);this.elements=t;for(const n of t)r.has(n)?r.delete(n):i.push(n);return this.isReady=!0,[i,Array.from(r)]}destroy(){}}const Ct=_;export{Ct as default};
