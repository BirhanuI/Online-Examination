import{b as W,g as $,s as F,B as A,e as i,M as D,_ as G,d as H,a as J,l as K,f as Q}from"./ButtonBase-DCGXZmx7.js";import{r as T,j as x}from"./app-Ct_QzP-2.js";import{a as V}from"./useFormControl-BLBOf4Qy.js";function X(e){return W("PrivateSwitchBase",e)}$("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:t,checked:d,disabled:l,edge:a}=e,r={root:["root",d&&"checked",l&&"disabled",a&&`edge${K(a)}`],input:["input"]};return Q(r,X,t)},ee=F(A)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:D})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ne=T.forwardRef(function(t,d){const{autoFocus:l,checked:a,checkedIcon:r,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:R=!1,icon:P,id:S,inputProps:I,inputRef:v,name:j,onBlur:f,onChange:g,onFocus:m,readOnly:z,required:E=!1,tabIndex:N,type:c,value:b}=t,U=G(t,Y),[k,_]=H({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),o=V(),L=s=>{m&&m(s),o&&o.onFocus&&o.onFocus(s)},q=s=>{f&&f(s),o&&o.onBlur&&o.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;_(C),g&&g(s,C)};let n=y;o&&typeof n>"u"&&(n=o.disabled);const M=c==="checkbox"||c==="radio",u=i({},t,{checked:k,disabled:n,disableFocusRipple:p,edge:R}),B=Z(u);return x.jsxs(ee,i({component:"span",className:J(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:L,onBlur:q,ownerState:u,ref:d},U,{children:[x.jsx(se,i({autoFocus:l,checked:a,defaultChecked:h,className:B.input,disabled:n,id:M?S:void 0,name:j,onChange:O,readOnly:z,ref:v,required:E,ownerState:u,tabIndex:N,type:c},c==="checkbox"&&b===void 0?{}:{value:b},I)),k?r:P]}))});export{ne as S};