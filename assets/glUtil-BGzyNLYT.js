import{bR as t}from"./index-jfgqsXUF.js";import{t as m}from"./VertexElementDescriptor-BLyltQyJ.js";function E(r,o=0){const f=r.stride;return Array.from(r.fields.keys()).map(e=>{const n=r.fields.get(e),i=n.constructor.ElementCount,s=p(n.constructor.ElementType),u=n.offset,c=n.optional?.glNormalized??!1;return new m(e,i,s,u,f,c,o)})}function p(r){const o=N[r];if(o)return o;throw new Error("BufferType not supported in WebGL")}const N={u8:t.UNSIGNED_BYTE,u16:t.UNSIGNED_SHORT,u32:t.UNSIGNED_INT,i8:t.BYTE,i16:t.SHORT,i32:t.INT,f32:t.FLOAT};export{E as t};
