import{bx as a,bz as s,by as i,a0 as h,a2 as n}from"./index-jfgqsXUF.js";import{i as l}from"./AGraphicContainer-Pdc_pcZ4.js";let t=class extends l{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===a.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),s(e,!1,r=>{this._renderChildren(r,i.Highlight)}))}};t=h([n("esri.views.2d.layers.graphics.HighlightGraphicContainer")],t);const g=t;export{g as h};
