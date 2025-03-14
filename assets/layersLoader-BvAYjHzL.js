import{t as L,s as y,v as S,d as T,C as v}from"./index-jfgqsXUF.js";import{t as F,a as M}from"./fetchService-C-QeO-ge.js";import{c as $,n as P,l as f,a as G,o as x,u as h,e as g,i as C,t as m}from"./loadUtils-63yhLQqV.js";import{e as I}from"./jsonContext-IECY0PAb.js";import"./vendor-0HVaVRtn.js";import"./associatedFeatureServiceUtils-CT2novn9.js";async function X(t,a){const r=t.instance.portalItem;if(r?.id)return await r.load(a),D(t),t.validateItem&&t.validateItem(r),k(t,a)}function D(t){const a=t.instance.portalItem;if(!a?.type||!t.supportedTypes.includes(a.type))throw new y("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:t.supportedTypes.join(", ")})}async function k(t,a){const r=t.instance,e=r.portalItem;if(!e)return;const{url:o,title:n}=e,l=I(e,"portal-item");if(r.type==="group")return j(r,l,t);o&&r.type!=="media"&&r.read({url:o},l);const u=new g,s=await b(t,u,a);return s&&r.read(s,l),r.resourceReferences={portalItem:e,paths:l.readResourcePaths??[]},r.type!=="subtype-group"&&r.read({title:n},l),L(r,l)}async function j(t,a,r){const e=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:o,type:n}=e;if(n==="Group Layer"){if(!S(e,"Map"))throw new y("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return A(t,r)}return t.read({title:o},a),E(t,r)}async function A(t,a){const r=t.portalItem,e=await r.fetchData("json");if(!e)return;if(!a.populateGroupLayer)throw new y("portal:missing-populate-group-layer","Missing populate group layer");const o=I(r,"web-map");t.read(e,o),await a.populateGroupLayer(t,e,{context:o}),t.resourceReferences={portalItem:r,paths:o.readResourcePaths??[]}}async function E(t,a){let r;const{portalItem:e}=t;if(!e)return;const o=e.type,n=a.layerModuleTypeMap;if(!n)throw new y("portal:missing-layer-module-type-map","Layer module type map is required to construct sub layers");switch(o){case"Feature Service":case"Feature Collection":r=n.FeatureLayer;break;case"Stream Service":r=n.StreamLayer;break;case"Scene Service":r=n.SceneLayer;break;default:throw new y("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}const l=new g;let[u,s]=await Promise.all([r(),b(a,l)]),i=()=>u;if(o==="Feature Service"){const c=f(s)?.customParameters;s=e.url?await G(s,e.url,l):{},i=await B(s,n)||i;const p=await z(e.url,{customParameters:c,loadContext:l});return await d(t,i,i,s,n,p)}return o==="Scene Service"&&e.url&&(s=await x(e,s,l)),h(s)>0?await d(t,i,null,s,n):await O(t,i,n)}async function O(t,a,r){const{portalItem:e}=t;if(!e?.url)return;const o=await M(e.url);o&&d(t,a,null,{layers:o.layers?.map(m),tables:o.tables?.map(m)},r)}async function d(t,a,r,e,o,n){let l=e.layers||[];const u=e.tables||[];if(t.portalItem?.type==="Feature Collection"?(l.forEach((s,i)=>{s.id=i,s?.layerDefinition?.type==="Table"&&u.push(s)}),l=l.filter(s=>s?.layerDefinition?.type!=="Table")):(l.reverse(),u.reverse()),l.forEach(s=>{const i=n?.(s);if(i||!n){const c=w(t,a(s),e,s,i);t.add(c)}}),u.length){const s=r?null:await o.FeatureLayer();u.forEach(i=>{const c=n?.(i);if(c||!n){const p=w(t,r?r(i):s,e,i,c);t.tables.add(p)}})}}function w(t,a,r,e,o){const n=t.portalItem,l={portalItem:n.clone(),layerId:e.id};e.url!=null&&(l.url=e.url);const u=new a(l);if("sourceJSON"in u&&(u.sourceJSON=o),u.type!=="subtype-group"&&u.type!=="catalog"&&(u.sublayerTitleMode="service-name"),n.type==="Feature Collection"){const s={origin:"portal-item",portal:n.portal||v.getDefault()};u.read(e,s);const i=r.showLegend;i!=null&&u.read({showLegend:i},s)}return u}async function b(t,a,r){if(t.supportsData===!1)return;const e=t.instance,o=e.portalItem;if(!o)return;let n=null;try{n=await o.fetchData("json",r)}catch{}if(N(e)){let l=null;const u=await R(o,n,a);if((n?.layers||n?.tables)&&u>0){if(e.layerId==null){const s=$(e.type),i=s?.length?P(n,s)[0]:f(n);i&&(e.layerId=i.id)}l=J(n,e),l?.layerType==="OrientedImageryLayer"&&e.type==="oriented-imagery"&&e.supportedSourceTypes.add("Feature Layer"),l&&n.showLegend!=null&&(l.showLegend=n.showLegend)}return u>1&&"sublayerTitleMode"in e&&e.sublayerTitleMode!=="service-name"&&(e.sublayerTitleMode="item-title-and-service-name"),l}return n}async function R(t,a,r){if(a?.layers&&a?.tables)return h(a);const e=T(t.url);if(!e)return 1;const o=await r.fetchServiceMetadata(e.url.path,{customParameters:f(a)?.customParameters}).catch(()=>null);return(a?.layers?.length??o?.layers?.length??0)+(a?.tables?.length??o?.tables?.length??0)}function J(t,a){const{layerId:r}=a,e=t.layers?.find(o=>o.id===r)||t.tables?.find(o=>o.id===r);return e&&q(e,a)?e:null}function N(t){return t.type!=="stream"&&"layerId"in t}function q(t,a){const r="layerType"in t&&t.layerType,{type:e}=a;return!(e==="feature"&&r&&t.layerType!=="ArcGISFeatureLayer"||e==="catalog"&&!r||e==="oriented-imagery"&&!r||e==="subtype-group"&&!r)}async function z(t,a){const{layersJSON:r}=await F(t,a);if(!r)return null;const e=[...r.layers,...r.tables];return o=>e.find(n=>n.id===o.id)}async function B(t,a){const{layers:r,tables:e}=t,o=[...r??[],...e??[]];if(!o.length)return;const n=new Set,l=[];for(const{layerType:i}of o){const c=i??"ArcGISFeatureLayer";if(n.has(c))continue;n.add(c);const p=a[C(c)];l.push(p())}const u=await Promise.all(l),s=new Map;return Array.from(n).forEach((i,c)=>{s.set(i,u[c])}),({layerType:i})=>{const c=i??"ArcGISFeatureLayer";return s.get(c)}}export{X as load};
