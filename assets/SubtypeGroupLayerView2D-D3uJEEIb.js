import{cK as s,cL as n,M as d,a0 as u,a2 as l}from"./index-DZKbNDrL.js";import{d as g}from"./FeatureLayerView2D-BT7l-f71.js";import"./vendor-0HVaVRtn.js";import"./featureConversionUtils-BA1a396o.js";import"./OptimizedFeature-CCfycK9e.js";import"./memoryEstimations-ULKi3s2m.js";import"./OptimizedGeometry-B-8ZGm5_.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-DyQcfeJU.js";import"./AttributeBinsFeatureSet-BF9lLO6c.js";import"./AttributeBinsQuery-BUtKfxqt.js";import"./queryUtils-BNlzCAaQ.js";import"./json-Wa8cmqdu.js";import"./FixedIntervalBinParameters-Pwcu571l.js";import"./LayerView-D9yvypP5.js";import"./Container-B9xjPENy.js";import"./layerViewUtils-QcWzjUdO.js";import"./TechniqueInstance-cQWkdpwy.js";import"./UpdateTracking2D-8hKovWHP.js";import"./Utils-CyIAxrbv.js";import"./BoundingBox-BhY6ngIg.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./FramebufferObject-DiZqzhFd.js";import"./VertexArrayObject-DoVCN60J.js";import"./TileContainer-DYmStfIm.js";import"./WGLContainer-DLLIFM4R.js";import"./ProgramTemplate-DGIO6IiA.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-Dof2el9b.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./FeatureCommandQueue-hlB2SsWB.js";import"./CIMSymbolHelper-C_TXOkqN.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-CqD5F-8k.js";import"./GeometryUtils-BMKdnrSq.js";import"./rasterizingUtils-Djzg1OGQ.js";import"./floatRGBA-B19MpK0C.js";import"./Rect-CUzevAry.js";import"./TechniqueType-uMFRS8dR.js";import"./GraphShaderModule-DA3c8CT_.js";import"./ShaderBuilder-ozdbYX8n.js";import"./BindType-BBwFZqyN.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-B3avX-hx.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper--tf-TGpy.js";import"./constants-B4mRqufT.js";import"./parquet-C0h6BHwB.js";import"./popupUtils-B3ovlDZ7.js";import"./RefreshableLayerView-CsxfecOM.js";let i=class extends g{initialize(){this.addHandles([s(()=>this.view.scale,()=>this._update(),n)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return d("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=u([l("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const ui=i;export{ui as default};
