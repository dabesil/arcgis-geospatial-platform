import{t as f,y as d,a6 as M}from"./index-jfgqsXUF.js";import{e as A}from"./loadUtils-63yhLQqV.js";import{a as n}from"./lazyLayerLoader-D2Lhe1t_.js";import{selectLayerClassPath as b}from"./portalLayers-OoA0G_Us.js";import"./vendor-0HVaVRtn.js";import"./fetchService-C-QeO-ge.js";import"./associatedFeatureServiceUtils-CT2novn9.js";function w(e){return p(e,"notes")}function v(e){return p(e,"markup")}function C(e){return p(e,"route")}function p(e,a){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===a}async function h(e,a,t){if(!a)return;const r=a.map(y=>U(y,t)),i=await Promise.allSettled(r);for(const y of i)y.status==="rejected"||y.value&&e.add(y.value)}const W={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",Object3DTilesLayer:"UnsupportedLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},F={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},O={ArcGISFeatureLayer:"FeatureLayer"},V={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"UnsupportedLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},I={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"SubtypeGroupLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},k={...I,LinkChartLayer:"LinkChartLayer"},B={...g},D={...T};async function U(e,a){return x(await E(e,a),e,a)}async function x(e,a,t){const r=new e;return r.read(a,t.context),r.type==="group"&&(a.layerType==="GroupLayer"?await K(r,a,t):u(a)?N(r,a,t.context):m(a)&&await J(r,a,t.context)),await f(r,t.context),r}async function E(e,a){const t=a.context,r=R(t);let i=e.layerType||e.type;!i&&a?.defaultLayerType&&(i=a.defaultLayerType);const y=r[i];let L=y?n[y]:n.UnknownLayer;if(u(e)){const l=t?.portal;if(e.itemId){const o=new d({id:e.itemId,portal:l});await o.load();const s=(await b(o,new A)).className||"UnknownLayer";L=n[s]}}else i==="ArcGISFeatureLayer"?w(e)||v(e)?L=n.MapNotesLayer:C(e)?L=n.RouteLayer:m(e)&&(L=n.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?L=n.WMTSLayer:i==="WFS"&&e.wfsInfo?.version!=="2.0.0"&&(L=n.UnsupportedLayer);return L()}function m(e){return e.layerType!=="ArcGISFeatureLayer"||u(e)?!1:(e.featureCollection?.layers?.length??0)>1}function u(e){return e.type==="Feature Collection"}function R(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=V;break;case"ground":a=F;break;case"tables":a=O;break;default:a=W}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=D;break;case"tables":a=B;break;default:a=k}break;default:switch(e.layerContainerType){case"basemap":a=T;break;case"tables":a=g;break;default:a=I}}return a}async function K(e,a,t){const r=new M,i=h(r,Array.isArray(a.layers)?a.layers:[],t);try{try{if(await i,e.type==="group")return e.layers.addMany(r),e}catch(y){e.destroy();for(const L of r)L.destroy();throw y}}catch(y){throw y}}function N(e,a,t){a.itemId&&(e.portalItem=new d({id:a.itemId,portal:t?.portal}),e.when(()=>{const r=i=>{const y=i.layerId;G(i,e,a,y,t);const L=a.featureCollection?.layers?.[y];L&&i.read(L,t)};e.layers?.forEach(r),e.tables?.forEach(r)}))}async function J(e,a,t){const r=n.FeatureLayer,i=await r(),y=a.featureCollection,L=y?.showLegend,l=y?.layers?.map((o,s)=>{const c=new i;c.read(o,t);const S={...t,ignoreDefaults:!0};return G(c,e,a,s,S),L!=null&&c.read({showLegend:L},S),c});e.layers.addMany(l??[])}function G(e,a,t,r,i){e.read({id:`${a.id}-sublayer-${r}`,visibility:t.visibleLayers?.includes(r)??!0},i)}export{K as populateGroupLayer,h as populateOperationalLayers};
