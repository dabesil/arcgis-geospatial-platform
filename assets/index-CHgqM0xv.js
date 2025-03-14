import{e as f,j as o,h as l,x as g,i as b,S as v}from"./index-jfgqsXUF.js";import{n as r}from"./ref-nFEs-kXi.js";import{a as D,x as a,t as c}from"./dom-CkmhV1Zi.js";import{o as d,f as E,c as n,Y as y,l as O,X as x,s as p}from"./floating-ui-D0l-SqVY.js";import{i as I}from"./guid-ejniuQmw.js";import{m as C,p as k}from"./interactive-DY4L9JqZ.js";import{t as $}from"./key-CZcQa38B.js";import{r as P}from"./loadable-D4YuBPX0.js";import{b as h}from"./observers-CSz2mplH.js";import{s as S}from"./openCloseComponent-CgrYoGyc.js";import{r as H}from"./dynamicClasses-pKEMtFzB.js";import"./vendor-0HVaVRtn.js";import"./debounce-D0G5qrda.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const z={dropdownTrigger:"trigger"},m={content:"calcite-dropdown-content",wrapper:"calcite-dropdown-wrapper"},T=b`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}.calcite-dropdown-wrapper{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{left:5px}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-dropdown-content{max-height:45vh;width:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;height:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}.width-s{--calcite-dropdown-width: 12rem}.width-m{--calcite-dropdown-width: 14rem}.width-l{--calcite-dropdown-width: 16rem}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;class A extends f{constructor(){super(),this.focusLastDropdownItem=!1,this.groups=[],this.guid=`calcite-dropdown-${I()}`,this.items=[],this.mutationObserver=h("mutation",()=>this.updateItems()),this.onOpenEnd=()=>{this.focusOnFirstActiveOrDefaultItem(),this.el.removeEventListener("calciteDropdownOpen",this.onOpenEnd)},this.transitionProp="opacity",this.resizeObserver=h("resize",e=>this.resizeObserverCallback(e)),this.closeOnSelectDisabled=!1,this.disabled=!1,this.maxItems=0,this.open=!1,this.overlayPositioning="absolute",this.placement=d,this.scale="m",this.selectedItems=[],this.type="click",this.calciteDropdownBeforeClose=o({cancelable:!1}),this.calciteDropdownBeforeOpen=o({cancelable:!1}),this.calciteDropdownClose=o({cancelable:!1}),this.calciteDropdownOpen=o({cancelable:!1}),this.calciteDropdownSelect=o({cancelable:!1}),this.listenOn(window,"click",this.closeCalciteDropdownOnClick),this.listen("calciteInternalDropdownCloseRequest",this.closeCalciteDropdownOnEvent),this.listenOn(window,"calciteDropdownOpen",this.closeCalciteDropdownOnOpenEvent),this.listen("pointerenter",this.pointerEnterHandler),this.listen("pointerleave",this.pointerLeaveHandler),this.listen("calciteInternalDropdownItemKeyEvent",this.calciteInternalDropdownItemKeyEvent),this.listen("calciteInternalDropdownItemSelect",this.handleItemSelect)}static{this.properties={closeOnSelectDisabled:7,disabled:7,flipPlacements:0,maxItems:11,open:7,overlayPositioning:3,placement:3,scale:3,selectedItems:0,type:3,widthScale:3,width:3}}static{this.shadowRootOptions={mode:"open",delegatesFocus:!0}}static{this.styles=T}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:s,overlayPositioning:u,filteredFlipPlacements:w}=this;return E(this,{floatingEl:t,referenceEl:i,overlayPositioning:u,placement:s,flipPlacements:w,type:"menu"},e)}async setFocus(){await P(this),D(this.referenceEl)}connectedCallback(){super.connectedCallback(),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.updateItems(),n(this)}load(){}willUpdate(e){e.has("open")&&(this.hasUpdated||this.open!==!1)&&this.openHandler(),e.has("disabled")&&(this.hasUpdated||this.disabled!==!1)&&this.handleDisabledChange(this.disabled),e.has("flipPlacements")&&this.flipPlacementsHandler(),e.has("maxItems")&&this.hasUpdated&&this.setMaxScrollerHeight(),(e.has("overlayPositioning")&&(this.hasUpdated||this.overlayPositioning!=="absolute")||e.has("placement")&&(this.hasUpdated||this.placement!==d))&&this.reposition(!0),e.has("scale")&&(this.hasUpdated||this.scale!=="m")&&this.handlePropsChange()}updated(){C(this)}loaded(){this.updateSelectedItems(),n(this)}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),y(this)}openHandler(){S(this),!this.disabled&&this.reposition(!0)}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}handlePropsChange(){this.updateItems(),this.updateGroupScale()}closeCalciteDropdownOnClick(e){this.disabled||!this.open||e.composedPath().includes(this.el)||this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||this.type!=="hover"||this.toggleDropdown()}pointerLeaveHandler(){this.disabled||this.type!=="hover"||this.closeCalciteDropdown()}getTraversableItems(){return this.items.filter(e=>!e.disabled&&!e.hidden)}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target,s=this.getTraversableItems();switch(t.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(i);break;case"ArrowDown":a(s,i,"next");break;case"ArrowUp":a(s,i,"previous");break;case"Home":a(s,i,"first");break;case"End":a(s,i,"last");break}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),(!this.closeOnSelectDisabled||e.detail.requestedDropdownGroup.selectionMode==="none")&&this.closeCalciteDropdown(),e.stopPropagation()}setFilteredPlacements(){const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?O(t,e):null}updateTriggers(e){this.triggers=e.target.assignedElements({flatten:!0}),this.reposition(!0)}updateItems(){this.items=this.groups.map(e=>Array.from(e?.querySelectorAll("calcite-dropdown-item"))).reduce((e,t)=>[...e,...t],[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach(e=>e.scale=this.scale)}updateGroups(e){const t=e.target.assignedElements({flatten:!0}).filter(i=>i?.matches("calcite-dropdown-group"));this.groups=t,this.updateItems(),this.updateGroupScale()}updateGroupScale(){this.groups?.forEach(e=>e.scale=this.scale)}resizeObserverCallback(e){e.forEach(t=>{const{target:i}=t;this.hasUpdated&&(i===this.referenceEl?this.setDropdownWidth():i===this.scrollerEl&&this.setMaxScrollerHeight())})}setDropdownWidth(){const{referenceEl:e,scrollerEl:t}=this,i=e?.clientWidth;t.style.minWidth=`${i}px`}setMaxScrollerHeight(){const e=this.getMaxScrollerHeight();this.scrollerEl.style.maxBlockSize=e>0?`${e}px`:"",this.reposition(!0)}setScrollerAndTransitionEl(e){e&&this.resizeObserver?.observe(e),this.scrollerEl=e,this.transitionEl=e}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit(),x(this)}setReferenceEl(e){this.referenceEl=e,n(this),e&&this.resizeObserver?.observe(e)}setFloatingEl(e){this.floatingEl=e,n(this)}keyDownHandler(e){if(!e.composedPath().includes(this.referenceEl))return;const{defaultPrevented:t,key:i}=e;if(!t){if(i==="Escape"){this.closeCalciteDropdown(),e.preventDefault();return}if(this.open&&e.shiftKey&&i==="Tab"){this.closeCalciteDropdown(),e.preventDefault();return}$(i)?(this.toggleDropdown(),e.preventDefault()):(i==="ArrowDown"||i==="ArrowUp")&&(e.preventDefault(),this.focusLastDropdownItem=i==="ArrowUp",this.open=!0,this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd))}}updateSelectedItems(){this.selectedItems=this.items.filter(e=>e.selected)}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;return t.length>=e&&e>0?this.getYDistance(this.scrollerEl,t[e-1]):0}getYDistance(e,t){const i=e.getBoundingClientRect();return t.getBoundingClientRect().bottom-i.top}closeCalciteDropdown(e=!0){this.open=!1,e&&c(this.triggers[0])}focusOnFirstActiveOrDefaultItem(){const e=this.getTraversableItems().find(t=>t.selected)||(this.focusLastDropdownItem?this.items[this.items.length-1]:this.items[0]);this.focusLastDropdownItem=!1,e&&c(e)}toggleDropdown(){this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd)}updateTabIndexOfItems(e){this.items.forEach(t=>{t.tabIndex=e!==t?-1:0})}render(){const{open:e,guid:t}=this;return k({disabled:this.disabled,children:g`<div class="calcite-trigger-container" .id=${`${t}-menubutton`} @click=${this.toggleDropdown} @keydown=${this.keyDownHandler} ${r(this.setReferenceEl)}><slot aria-controls=${`${t}-menu`} .ariaExpanded=${e} aria-haspopup=menu name=${z.dropdownTrigger} @slotchange=${this.updateTriggers}></slot></div><div .ariaHidden=${!e} class=${l({[m.wrapper]:!0,[H("width",this.width,this.widthScale)]:!!(this.width||this.widthScale)})} ${r(this.setFloatingEl)}><div aria-labelledby=${`${t}-menubutton`} class=${l({[m.content]:!0,[p.animation]:!0,[p.animationActive]:e})} .id=${`${t}-menu`} role=menu ${r(this.setScrollerAndTransitionEl)}><slot @slotchange=${this.updateGroups}></slot></div></div>`})}}v("calcite-dropdown",A);export{A as Dropdown};
