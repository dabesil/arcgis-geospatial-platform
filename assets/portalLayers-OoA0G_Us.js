import{y as w,s as N,r as m,v as y}from"./index-jfgqsXUF.js";import{s as S}from"./associatedFeatureServiceUtils-CT2novn9.js";import{i as h}from"./fetchService-C-QeO-ge.js";import{l as p,u as d,a as v,s as I,i as g,o as M,e as T}from"./loadUtils-63yhLQqV.js";import{a as C}from"./lazyLayerLoader-D2Lhe1t_.js";import"./vendor-0HVaVRtn.js";async function te(e){let{portalItem:a}=e;!a||a instanceof w||(a=new w(a));const r=await G(a);return new r.constructor({portalItem:a,...r.properties})}async function G(e){await e.load();const a=new T;return $(await P(e,a))}async function P(e,a){switch(e.type){case"3DTiles Service":return e.typeKeywords.includes("3DObject")?k():J();case"CSV":return x();case"Feature Collection":return W(e);case"Feature Service":return F(e,a);case"Feed":return B();case"GeoJson":return V();case"Group Layer":return H();case"Image Service":return j(e,a);case"KML":return U();case"Knowledge Graph Layer":return A();case"Map Service":return b(e,a);case"Media Layer":return Q();case"Scene Service":return K(e,a);case"Stream Service":return D();case"Vector Tile Service":return O();case"WCS":return R();case"WFS":return E();case"WMS":return q();case"WMTS":return z();default:throw new N("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function $(e){const a=e.className,r=C[a];return{constructor:await r(),properties:e.properties}}async function b(e,a){return await X(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function F(e,a){const r=await L(e,a);if(typeof r=="object"){const{sourceJSON:t,className:n}=r,c={sourceJSON:t};return r.id!=null&&(c.layerId=r.id),{className:n||"FeatureLayer",properties:c}}return{className:"GroupLayer"}}async function K(e,a){const r=await L(e,a,async()=>{try{if(!e.url)return[];const{serverUrl:t}=await S(e.url,{sceneLayerItem:e});return(await a.fetchServiceMetadata(t))?.tables??[]}catch{return[]}});if(typeof r=="object"){const t={};let n;if(r.id!=null?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length){for(const s of Object.keys(m))if(e.typeKeywords.includes(s))return{className:m[s]}}const c=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,s=>p(s)?.customParameters)});return{className:m[c?.layerType]||"SceneLayer",properties:t}}return r===!1&&(await a.fetchServiceMetadata(e.url))?.layerType==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}}async function W(e){await e.load();const a=y(e,"Map Notes"),r=y(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if(y(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return d(t)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function j(e,a){await e.load();const r=e.typeKeywords?.map(l=>l.toLowerCase())??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),n=t?.layerType;if(n==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(n==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),s=c.cacheType?.toLowerCase(),u=c.capabilities?.toLowerCase().includes("tilesonly"),i=c.tileInfo?.format?.toLowerCase()??"",o=s==null&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(i);return s==="map"||o||u?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function D(){return{className:"StreamLayer"}}function O(){return{className:"VectorTileLayer"}}function V(){return{className:"GeoJSONLayer"}}function J(){return{className:"IntegratedMesh3DTilesLayer"}}function k(){return{className:"UnsupportedLayer"}}function x(){return{className:"CSVLayer"}}function U(){return{className:"KMLLayer"}}function A(){return{className:"KnowledgeGraphLayer"}}function R(){return{className:"WCSLayer"}}function E(){return{className:"WFSLayer"}}function q(){return{className:"WMSLayer"}}function z(){return{className:"WMTSLayer"}}function B(){return{className:"StreamLayer"}}function H(){return{className:"GroupLayer"}}function Q(){return{className:"MediaLayer"}}async function X(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}async function L(e,a,r){const{url:t,type:n}=e,c=n==="Feature Service";if(!t)return{};if(/\/\d+$/.test(t)){if(c){const i=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,o=>p(o)?.customParameters)});return{id:i.id,className:h(i.type),sourceJSON:i}}return{}}await e.load();let s=await a.fetchItemData(e);if(c){const i=await v(s,t,a),o=f(i);if(typeof o=="object"){const l=I(i,o.id);o.className=g(l?.layerType)}return o}if(n==="Scene Service"&&(s=await M(e,s,a)),d(s)>0)return f(s);const u=await a.fetchServiceMetadata(t);return r&&(u.tables=await r()),f(u)}function f(e){return d(e)===1&&{id:p(e)?.id}}export{te as fromItem,P as selectLayerClassPath};
