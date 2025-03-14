import{dq as S,fE as I,dr as w,ff as $,f4 as O,f5 as P,f6 as T,f3 as E,fh as L,fg as F,fF as M,bj as R,fr as g,fA as d,fG as b,fH as j,eY as J,P as f,b0 as _,cm as q,fI as N,fJ as U,s as v,cc as A,ds as V,a0 as a,a1 as o,fK as x,c9 as k,fD as z,fe as D,a2 as G,fL as H}from"./index-jfgqsXUF.js";import{m as K,f as Z,s as B}from"./SublayersOwner-oE49h8c_.js";import{t as C}from"./imageBitmapUtils-BF5-6NI8.js";import"./vendor-0HVaVRtn.js";import"./QueryTask-BCZThUR5.js";import"./executeForIds-BFiwR7qm.js";import"./query-CByzQ4UA.js";import"./pbfQueryUtils-CAQqX99W.js";import"./pbf-klGyIR1c.js";import"./memoryEstimations-BucWCUN2.js";import"./OptimizedGeometry-aBFBEGLw.js";import"./OptimizedFeature-CQnDPIV2.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./executeQueryJSON-CxYuQbD1.js";import"./featureConversionUtils-BAN7iPzO.js";let t=class extends S(I(w(K(Z($(O(P(T(E(L(F(V)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new M({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(R).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const p=r.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,p,i){if(!this.loaded||!e)return;const l=e.slice().reverse().flatten(({sublayers:s})=>s&&s.toArray().reverse()).toArray();let n=!1;const m=g(i.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers){if(m===d.PORTAL_ITEM){const s=this.createSublayersForOrigin("service").sublayers;n=b(l,s,d.SERVICE)}else if(m>d.PORTAL_ITEM){const s=this.createSublayersForOrigin("portal-item");n=b(l,s.sublayers,g(s.origin))}}const h=[],c={writeSublayerStructure:n,...i};let u=n||this.hasVisibleLayersForOrigin(m);l.forEach(s=>{const y=s.write({},c);h.push(y),u=u||s.originOf("visible")==="user"}),h.some(s=>Object.keys(s).length>1)&&(r.layers=h),u&&(r.visibleLayers=l.filter(s=>s.visible).map(s=>s.id))}createExportImageParameters(e,r,p,i){const l=i?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=i?.floors??null,this._exportImageParameters.scale=j({extent:e,width:r})*l;const n=this._exportImageParameters.toJSON(),m=!i?.rotation||this.version<10.3?{}:{rotation:-i.rotation},h=e?.spatialReference,c=J(h);n.dpi*=l;const u={};if(i?.timeExtent){const{start:s,end:y}=i.timeExtent.toJSON();u.time=s&&y&&s===y?""+s:`${s??"null"},${y??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:void 0,bboxSR:c,imageSR:c,size:r+","+p,...n,...m,...u}}async fetchImage(e,r,p,i){const{data:l}=await this._fetchImage("image",e,r,p,i);return l}async fetchImageBitmap(e,r,p,i){const{data:l,url:n}=await this._fetchImage("blob",e,r,p,i);return C(l,n,i?.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await f(this.url,r),{extent:i,fullExtent:l,timeExtent:n}=p,m=i||l;return{fullExtent:m&&q.fromJSON(m),timeExtent:n&&_.fromJSON({start:n[0],end:n[1]})}}loadAll(){return N(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return U(this,e)}async _fetchImage(e,r,p,i,l){const n={responseType:e,signal:l?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,p,i,l),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},m=this.parsedUrl.path+"/export";if(n.query?.dynamicLayers!=null&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new v("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:h}=await f(m,n);return{data:h,url:m}}catch(h){throw A(h)?h:new v("mapimagelayer:image-fetch-error",`Unable to load image: ${m}`,{error:h})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:p}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){return!(e==null||!this.sublayersSourceJSON[e]?.visibleLayers)}};a([o(x("dateFieldsTimeReference"))],t.prototype,"dateFieldsTimeZone",void 0),a([o({type:Boolean})],t.prototype,"datesInUnknownTimezone",void 0),a([o()],t.prototype,"dpi",void 0),a([o()],t.prototype,"gdbVersion",void 0),a([o()],t.prototype,"imageFormat",void 0),a([k("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null),a([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],t.prototype,"imageMaxHeight",void 0),a([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],t.prototype,"imageMaxWidth",void 0),a([o()],t.prototype,"imageTransparency",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0),a([o({json:{read:!1,write:!1}})],t.prototype,"labelsVisible",void 0),a([o({type:["ArcGISMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0),a([o({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),a([o(x("preferredTimeReference"))],t.prototype,"preferredTimeZone",void 0),a([o()],t.prototype,"sourceJSON",void 0),a([o({json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),a([z("sublayers",{layers:{type:[B]},visibleLayers:{type:[H]}})],t.prototype,"writeSublayers",null),a([o({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),a([o({json:{read:!1},readOnly:!0,value:"map-image"})],t.prototype,"type",void 0),a([o(D)],t.prototype,"url",void 0),t=a([G("esri.layers.MapImageLayer")],t);const he=t;export{he as default};
