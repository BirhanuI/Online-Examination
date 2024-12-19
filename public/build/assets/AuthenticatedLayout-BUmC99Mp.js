import{r as V,j as d,a as Re,R as g,e as Er}from"./app-4AVB-xW9.js";import{z as Pr}from"./transition-UbmxnPUr.js";import{C as Nr,l as Rr,N as Ar,c as $r,J as Mr,O as Dr,F as Ir,K as Lr,t as Tr,E as Wr,p as Br,d as zr,q as Fr,w as Hr,D as Vr,s as qn,e as Pe,v as _r,u as qr,_ as Ur,a as Xr,f as Gr,i as rt}from"./ButtonBase-CKr4Mqe7.js";import{g as Yr}from"./dividerClasses-v2qh6TOH.js";import{Q as Kr,I as Qr}from"./react-toastify.esm-DiskrPYb.js";const Wt=V.createContext(),Ne=({children:e})=>{const[t,n]=V.useState(!1),r=()=>{n(o=>!o)};return d.jsx(Wt.Provider,{value:{open:t,setOpen:n,toggleOpen:r},children:d.jsx("div",{className:"relative",children:e})})},Zr=({children:e})=>{const{open:t,setOpen:n,toggleOpen:r}=V.useContext(Wt);return d.jsxs(d.Fragment,{children:[d.jsx("div",{onClick:r,children:e}),t&&d.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},Jr=({align:e="right",width:t="48",contentClasses:n="py-1 bg-white",children:r})=>{const{open:o,setOpen:i}=V.useContext(Wt);let a="origin-top";e==="left"?a="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(a="ltr:origin-top-right rtl:origin-top-left end-0");let s="";return t==="48"&&(s="w-48"),d.jsx(d.Fragment,{children:d.jsx(Pr,{show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:d.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${a} ${s}`,onClick:()=>i(!1),children:d.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:r})})})})},eo=({className:e="",children:t,...n})=>d.jsx(Re,{...n,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+e,children:t});Ne.Trigger=Zr;Ne.Content=Jr;Ne.Link=eo;function Et({active:e=!1,className:t="",children:n,...r}){return d.jsx(Re,{...r,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-amber-400 text-white focus:border-amber-600-700":"border-transparent text-gray-500 hover:text-gray-400 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+t,children:n})}function Pt({active:e=!1,className:t="",children:n,...r}){return d.jsx(Re,{...r,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${e?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:n})}const Un="/build/assets/online-test-BS6LWH7b.png";function to(e,t){return()=>null}function no(e,t){return()=>null}function ro(e,t,n,r,o){return null}const oo={configure:e=>{Nr.configure(e)}},io=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Rr,createChainedFunction:Ar,createSvgIcon:$r,debounce:Mr,deprecatedPropType:to,isMuiElement:Dr,ownerDocument:Ir,ownerWindow:Lr,requirePropFactory:no,setRef:Tr,unstable_ClassNameGenerator:oo,unstable_useEnhancedEffect:Wr,unstable_useId:Br,unsupportedProp:ro,useControlled:zr,useEventCallback:Fr,useForkRef:Hr,useIsFocusVisible:Vr},Symbol.toStringTag,{value:"Module"})),ao=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],so=e=>{const{absolute:t,children:n,classes:r,flexItem:o,light:i,orientation:a,textAlign:s,variant:c}=e;return Gr({root:["root",t&&"absolute",c,i&&"light",a==="vertical"&&"vertical",o&&"flexItem",n&&"withChildren",n&&a==="vertical"&&"withChildrenVertical",s==="right"&&a!=="vertical"&&"textAlignRight",s==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},Yr,r)},co=qn("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,n.orientation==="vertical"&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&n.orientation==="vertical"&&t.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&t.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>Pe({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:_r(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>Pe({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>Pe({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}),({theme:e,ownerState:t})=>Pe({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}),({ownerState:e})=>Pe({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),lo=qn("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,n.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>Pe({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),Xn=V.forwardRef(function(t,n){const r=qr({props:t,name:"MuiDivider"}),{absolute:o=!1,children:i,className:a,component:s=i?"div":"hr",flexItem:c=!1,light:u=!1,orientation:l="horizontal",role:m=s!=="hr"?"separator":void 0,textAlign:O="center",variant:b="fullWidth"}=r,y=Ur(r,ao),p=Pe({},r,{absolute:o,component:s,flexItem:c,light:u,orientation:l,role:m,textAlign:O,variant:b}),w=so(p);return d.jsx(co,Pe({as:s,className:Xr(w.root,a),role:m,ref:n,ownerState:p},y,{children:i?d.jsx(lo,{className:w.wrapper,ownerState:p,children:i}):null}))});Xn.muiSkipListHighlight=!0;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var J=function(){return J=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},J.apply(this,arguments)};function Te(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function G(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function At(){return At=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},At.apply(this,arguments)}function Bt(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var uo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,fo=Bt(function(e){return uo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function po(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function vo(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ho=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vo(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=po(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),X="-ms-",gt="-moz-",A="-webkit-",Gn="comm",zt="rule",Ft="decl",mo="@import",Yn="@keyframes",go=Math.abs,wt=String.fromCharCode,bo=Object.assign;function xo(e,t){return U(e,0)^45?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}function Kn(e){return e.trim()}function yo(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function $t(e,t){return e.indexOf(t)}function U(e,t){return e.charCodeAt(t)|0}function Ze(e,t,n){return e.slice(t,n)}function me(e){return e.length}function Ht(e){return e.length}function ut(e,t){return t.push(e),e}function wo(e,t){return e.map(t).join("")}var kt=1,Fe=1,Qn=0,Q=0,H=0,Ue="";function St(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:kt,column:Fe,length:a,return:""}}function Xe(e,t){return bo(St("",null,null,"",null,null,0),e,{length:-e.length},t)}function ko(){return H}function So(){return H=Q>0?U(Ue,--Q):0,Fe--,H===10&&(Fe=1,kt--),H}function ee(){return H=Q<Qn?U(Ue,Q++):0,Fe++,H===10&&(Fe=1,kt++),H}function be(){return U(Ue,Q)}function ft(){return Q}function ot(e,t){return Ze(Ue,e,t)}function Je(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zn(e){return kt=Fe=1,Qn=me(Ue=e),Q=0,[]}function Jn(e){return Ue="",e}function pt(e){return Kn(ot(Q-1,Mt(e===91?e+2:e===40?e+1:e)))}function Co(e){for(;(H=be())&&H<33;)ee();return Je(e)>2||Je(H)>3?"":" "}function Oo(e,t){for(;--t&&ee()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return ot(e,ft()+(t<6&&be()==32&&ee()==32))}function Mt(e){for(;ee();)switch(H){case e:return Q;case 34:case 39:e!==34&&e!==39&&Mt(H);break;case 40:e===41&&Mt(e);break;case 92:ee();break}return Q}function jo(e,t){for(;ee()&&e+H!==57;)if(e+H===84&&be()===47)break;return"/*"+ot(t,Q-1)+"*"+wt(e===47?e:ee())}function Eo(e){for(;!Je(be());)ee();return ot(e,Q)}function an(e){return Jn(vt("",null,null,null,[""],e=Zn(e),0,[0],e))}function vt(e,t,n,r,o,i,a,s,c){for(var u=0,l=0,m=a,O=0,b=0,y=0,p=1,w=1,C=1,k=0,S="",v=o,h=i,f=r,x=S;w;)switch(y=k,k=ee()){case 40:if(y!=108&&U(x,m-1)==58){$t(x+=M(pt(k),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:x+=pt(k);break;case 9:case 10:case 13:case 32:x+=Co(y);break;case 92:x+=Oo(ft()-1,7);continue;case 47:switch(be()){case 42:case 47:ut(Po(jo(ee(),ft()),t,n),c);break;default:x+="/"}break;case 123*p:s[u++]=me(x)*C;case 125*p:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+l:b>0&&me(x)-m&&ut(b>32?cn(x+";",r,n,m-1):cn(M(x," ","")+";",r,n,m-2),c);break;case 59:x+=";";default:if(ut(f=sn(x,t,n,u,l,o,s,S,v=[],h=[],m),i),k===123)if(l===0)vt(x,t,f,f,v,i,m,s,h);else switch(O===99&&U(x,3)===110?100:O){case 100:case 109:case 115:vt(e,f,f,r&&ut(sn(e,f,f,0,0,o,s,S,o,v=[],m),h),o,h,m,s,r?v:h);break;default:vt(x,f,f,f,[""],h,0,s,h)}}u=l=b=0,p=C=1,S=x="",m=a;break;case 58:m=1+me(x),b=y;default:if(p<1){if(k==123)--p;else if(k==125&&p++==0&&So()==125)continue}switch(x+=wt(k),k*p){case 38:C=l>0?1:(x+="\f",-1);break;case 44:s[u++]=(me(x)-1)*C,C=1;break;case 64:be()===45&&(x+=pt(ee())),O=be(),l=m=me(S=x+=Eo(ft())),k++;break;case 45:y===45&&me(x)==2&&(p=0)}}return i}function sn(e,t,n,r,o,i,a,s,c,u,l){for(var m=o-1,O=o===0?i:[""],b=Ht(O),y=0,p=0,w=0;y<r;++y)for(var C=0,k=Ze(e,m+1,m=go(p=a[y])),S=e;C<b;++C)(S=Kn(p>0?O[C]+" "+k:M(k,/&\f/g,O[C])))&&(c[w++]=S);return St(e,t,n,o===0?zt:s,c,u,l)}function Po(e,t,n){return St(e,t,n,Gn,wt(ko()),Ze(e,2,-2),0)}function cn(e,t,n,r){return St(e,t,n,Ft,Ze(e,0,r),Ze(e,r+1,-1),r)}function Ie(e,t){for(var n="",r=Ht(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function ln(e,t,n,r){switch(e.type){case mo:case Ft:return e.return=e.return||e.value;case Gn:return"";case Yn:return e.return=e.value+"{"+Ie(e.children,r)+"}";case zt:e.value=e.props.join(",")}return me(n=Ie(e.children,r))?e.return=e.value+"{"+n+"}":""}function un(e){var t=Ht(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function No(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ro=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}},Ao=function(t,n,r){for(var o=0,i=0;o=i,i=be(),o===38&&i===12&&(n[r]=1),!Je(i);)ee();return ot(t,Q)},$o=function(t,n){var r=-1,o=44;do switch(Je(o)){case 0:o===38&&be()===12&&(n[r]=1),t[r]+=Ao(Q-1,n,r);break;case 2:t[r]+=pt(o);break;case 4:if(o===44){t[++r]=be()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=wt(o)}while(o=ee());return t},Mo=function(t,n){return Jn($o(Zn(t),n))},dn=new WeakMap,Do=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!dn.get(r))&&!o){dn.set(t,!0);for(var i=[],a=Mo(n,i),s=r.props,c=0,u=0;c<a.length;c++)for(var l=0;l<s.length;l++,u++)t.props[u]=i[c]?a[c].replace(/&\f/g,s[l]):s[l]+" "+a[c]}}},Io=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function er(e,t){switch(xo(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+gt+e+X+e+e;case 6828:case 4268:return A+e+X+e+e;case 6165:return A+e+X+"flex-"+e+e;case 5187:return A+e+M(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return A+e+X+"flex-item-"+M(e,/flex-|-self/,"")+e;case 4675:return A+e+X+"flex-line-pack"+M(e,/align-content|flex-|-self/,"")+e;case 5548:return A+e+X+M(e,"shrink","negative")+e;case 5292:return A+e+X+M(e,"basis","preferred-size")+e;case 6060:return A+"box-"+M(e,"-grow","")+A+e+X+M(e,"grow","positive")+e;case 4554:return A+M(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(me(e)-1-t>6)switch(U(e,t+1)){case 109:if(U(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+gt+(U(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$t(e,"stretch")?er(M(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(U(e,t+1)!==115)break;case 6444:switch(U(e,me(e)-3-(~$t(e,"!important")&&10))){case 107:return M(e,":",":"+A)+e;case 101:return M(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(U(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+X+"$2box$3")+e}break;case 5936:switch(U(e,t+11)){case 114:return A+e+X+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+X+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+X+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return A+e+X+e+e}return e}var Lo=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Ft:t.return=er(t.value,t.length);break;case Yn:return Ie([Xe(t,{value:M(t.value,"@","@"+A)})],o);case zt:if(t.length)return wo(t.props,function(i){switch(yo(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ie([Xe(t,{props:[M(i,/:(read-\w+)/,":"+gt+"$1")]})],o);case"::placeholder":return Ie([Xe(t,{props:[M(i,/:(plac\w+)/,":"+A+"input-$1")]}),Xe(t,{props:[M(i,/:(plac\w+)/,":"+gt+"$1")]}),Xe(t,{props:[M(i,/:(plac\w+)/,X+"input-$1")]})],o)}return""})}},ht=typeof document<"u",To=ht?void 0:Ro(function(){return Bt(function(){var e={};return function(t){return e[t]}})}),Wo=[Lo],tr=function(t){var n=t.key;if(ht&&n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var h=v.getAttribute("data-emotion");h.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||Wo,i={},a,s=[];ht&&(a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var h=v.getAttribute("data-emotion").split(" "),f=1;f<h.length;f++)i[h[f]]=!0;s.push(v)}));var c,u=[Do,Io];if(ht){var l,m=[ln,No(function(v){l.insert(v)})],O=un(u.concat(o,m)),b=function(h){return Ie(an(h),O)};c=function(h,f,x,j){l=x,b(h?h+"{"+f.styles+"}":f.styles),j&&(S.inserted[f.name]=!0)}}else{var y=[ln],p=un(u.concat(o,y)),w=function(h){return Ie(an(h),p)},C=To(o)(n),k=function(h,f){var x=f.name;return C[x]===void 0&&(C[x]=w(h?h+"{"+f.styles+"}":f.styles)),C[x]};c=function(h,f,x,j){var N=f.name,E=k(h,f);if(S.compat===void 0)return j&&(S.inserted[N]=!0),E;if(j)S.inserted[N]=E;else return E}}var S={key:n,sheet:new ho({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return S.sheet.hydrate(s),S},Bo=typeof document<"u",fn=function(t){return t()},zo=V.useInsertionEffect?V.useInsertionEffect:!1,Fo=Bo&&zo||fn,Ho=typeof document<"u",bt=V.createContext(typeof HTMLElement<"u"?tr({key:"css"}):null);bt.Provider;var nr=function(t){return V.forwardRef(function(n,r){var o=V.useContext(bt);return t(n,o,r)})};Ho||(nr=function(t){return function(n){var r=V.useContext(bt);return r===null?(r=tr({key:"css"}),V.createElement(bt.Provider,{value:r},t(n,r))):t(n,r)}});var Vo=V.createContext({}),Dt=typeof document<"u";function _o(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var rr=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Dt===!1&&t.compat!==void 0)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},qo=function(t,n,r){rr(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i="",a=n;do{var s=t.insert(n===a?"."+o:"",a,t.sheet,!0);!Dt&&s!==void 0&&(i+=s),a=a.next}while(a!==void 0);if(!Dt&&i.length!==0)return i}};function Uo(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Xo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Go=/[A-Z]|^ms/g,Yo=/_EMO_([^_]+?)_([^]*?)_EMO_/g,or=function(t){return t.charCodeAt(1)===45},pn=function(t){return t!=null&&typeof t!="boolean"},Nt=Bt(function(e){return or(e)?e:e.replace(Go,"-$&").toLowerCase()}),vn=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Yo,function(r,o,i){return ge={name:o,styles:i,next:ge},o})}return Xo[t]!==1&&!or(t)&&typeof n=="number"&&n!==0?n+"px":n};function et(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ge={name:n.name,styles:n.styles,next:ge},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ge={name:r.name,styles:r.styles,next:ge},r=r.next;var o=n.styles+";";return o}return Ko(e,t,n)}case"function":{if(e!==void 0){var i=ge,a=n(e);return ge=i,et(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Ko(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=et(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":pn(a)&&(r+=Nt(i)+":"+vn(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)pn(a[s])&&(r+=Nt(i)+":"+vn(i,a[s])+";");else{var c=et(e,t,a);switch(i){case"animation":case"animationName":{r+=Nt(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var hn=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ge,Qo=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";ge=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=et(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=et(r,n,t[s]),o&&(i+=a[s]);hn.lastIndex=0;for(var c="",u;(u=hn.exec(i))!==null;)c+="-"+u[1];var l=Uo(i)+c;return{name:l,styles:i,next:ge}},Zo=fo,Jo=function(t){return t!=="theme"},mn=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Zo:Jo},gn=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},ei=typeof document<"u",ti=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;rr(n,r,o);var i=Fo(function(){return qo(n,r,o)});if(!ei&&i!==void 0){for(var a,s=r.name,c=r.next;c!==void 0;)s+=" "+c.name,c=c.next;return V.createElement("style",(a={},a["data-emotion"]=n.key+" "+s,a.dangerouslySetInnerHTML={__html:i},a.nonce=n.sheet.nonce,a))}return null},ni=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=gn(t,n,r),c=s||mn(o),u=!c("as");return function(){var l=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&m.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)m.push.apply(m,l);else{m.push(l[0][0]);for(var O=l.length,b=1;b<O;b++)m.push(l[b],l[0][b])}var y=nr(function(p,w,C){var k=u&&p.as||o,S="",v=[],h=p;if(p.theme==null){h={};for(var f in p)h[f]=p[f];h.theme=V.useContext(Vo)}typeof p.className=="string"?S=_o(w.registered,v,p.className):p.className!=null&&(S=p.className+" ");var x=Qo(m.concat(v),w.registered,h);S+=w.key+"-"+x.name,a!==void 0&&(S+=" "+a);var j=u&&s===void 0?mn(k):c,N={};for(var E in p)u&&E==="as"||j(E)&&(N[E]=p[E]);return N.className=S,N.ref=C,V.createElement(V.Fragment,null,V.createElement(ti,{cache:w,serialized:x,isStringTag:typeof k=="string"}),V.createElement(k,N))});return y.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=o,y.__emotion_styles=m,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+a}}),y.withComponent=function(p,w){return e(p,At({},n,w,{shouldForwardProp:gn(y,w,!0)})).apply(void 0,m)},y}},ri=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],q=ni.bind();ri.forEach(function(e){q[e]=q(e)});var ir={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(ir);var _=ir.exports,oi=g.createContext(void 0),ii=function(){var e=g.useContext(oi);return e},ai=function(e){var t=g.useState(!!e&&typeof window<"u"&&window.matchMedia(e).matches),n=t[0],r=t[1];return g.useEffect(function(){if(e){var o=window.matchMedia(e),i=function(){o.matches!==n&&r(o.matches)};return i(),o.addEventListener("change",i),function(){return o.removeEventListener("change",i)}}},[n,e]),n},B={root:"ps-sidebar-root",container:"ps-sidebar-container",image:"ps-sidebar-image",backdrop:"ps-sidebar-backdrop",collapsed:"ps-collapsed",toggled:"ps-toggled",rtl:"ps-rtl",broken:"ps-broken"},$={root:"ps-menu-root",menuItemRoot:"ps-menuitem-root",subMenuRoot:"ps-submenu-root",button:"ps-menu-button",prefix:"ps-menu-prefix",suffix:"ps-menu-suffix",label:"ps-menu-label",icon:"ps-menu-icon",subMenuContent:"ps-submenu-content",SubMenuExpandIcon:"ps-submenu-expand-icon",disabled:"ps-disabled",active:"ps-active",open:"ps-open"},si=q.div(bn||(bn=G([`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);
`],[`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);
`]))),bn,ci={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px",always:"always",all:"all"},li=q.aside(xn||(xn=G([`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: `,`;

  width: `,`;
  min-width: `,`;

  &.`,` {
    width: `,`;
    min-width: `,`;
  }

  &.`,` {
    direction: rtl;
    border-right-width: none;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
  }

  &.`,` {
    position: fixed;
    height: 100%;
    top: 0px;
    z-index: 100;

    `,`

    &.`,` {
      `,`
    }

    &.`,` {
      `,`
    }

    &.`,` {
      right: -`,`;

      &.`,` {
        right: -`,`;
      }

      &.`,` {
        right: 0;
      }
    }
  }

  `,`
`],[`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: `,`;

  width: `,`;
  min-width: `,`;

  &.`,` {
    width: `,`;
    min-width: `,`;
  }

  &.`,` {
    direction: rtl;
    border-right-width: none;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
  }

  &.`,` {
    position: fixed;
    height: 100%;
    top: 0px;
    z-index: 100;

    `,`

    &.`,` {
      `,`
    }

    &.`,` {
      `,`
    }

    &.`,` {
      right: -`,`;

      &.`,` {
        right: -`,`;
      }

      &.`,` {
        right: 0;
      }
    }
  }

  `,`
`])),function(e){var t=e.transitionDuration;return"width, left, right, ".concat(t,"ms")},function(e){var t=e.width;return t},function(e){var t=e.width;return t},B.collapsed,function(e){var t=e.collapsedWidth;return t},function(e){var t=e.collapsedWidth;return t},B.rtl,B.broken,function(e){var t=e.rtl,n=e.width;return t?"":"left: -".concat(n,";")},B.collapsed,function(e){var t=e.rtl,n=e.collapsedWidth;return t?"":"left: -".concat(n,"; ")},B.toggled,function(e){var t=e.rtl;return t?"":"left: 0;"},B.rtl,function(e){var t=e.width;return t},B.collapsed,function(e){var t=e.collapsedWidth;return t},B.toggled,function(e){var t=e.rootStyles;return t}),ui=q.div(yn||(yn=G([`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  `,`
`],[`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  `,`
`])),function(e){var t=e.backgroundColor;return t?"background-color:".concat(t,";"):""}),di=q.img(wn||(wn=G([`
  &.`,` {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
`],[`
  &.`,` {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
`])),B.image),Ct=g.createContext({collapsed:!1,toggled:!1,rtl:!1,transitionDuration:300}),fi=g.forwardRef(function(e,t){var n,r=e.collapsed,o=e.toggled,i=e.onBackdropClick,a=e.onBreakPoint,s=e.width,c=s===void 0?"250px":s,u=e.collapsedWidth,l=u===void 0?"80px":u,m=e.defaultCollapsed,O=e.className,b=e.children,y=e.breakPoint,p=e.customBreakPoint,w=e.backgroundColor,C=w===void 0?"rgb(249, 249, 249, 0.7)":w,k=e.transitionDuration,S=k===void 0?300:k,v=e.image,h=e.rtl,f=e.rootStyles,x=Te(e,["collapsed","toggled","onBackdropClick","onBreakPoint","width","collapsedWidth","defaultCollapsed","className","children","breakPoint","customBreakPoint","backgroundColor","transitionDuration","image","rtl","rootStyles"]),j=function(){if(p)return"(max-width: ".concat(p,")");if(y)return["xs","sm","md","lg","xl","xxl"].includes(y)?"(max-width: ".concat(ci[y],")"):y==="always"||y==="all"?(y==="always"&&console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'),"screen"):"(max-width: ".concat(y,")")},N=g.useRef();N.current=function(te){a==null||a(te)};var E=ai(j()),D=g.useState(!1),T=D[0],I=D[1],P=ii(),Z=r??(!T&&m?!0:P==null?void 0:P.collapsed),z=o??(P==null?void 0:P.toggled),L=function(){i==null||i(),P==null||P.updateSidebarState({toggled:!1})};return g.useEffect(function(){var te;(te=N.current)===null||te===void 0||te.call(N,E)},[E]),g.useEffect(function(){P==null||P.updateSidebarState({broken:E,rtl:h,transitionDuration:S})},[E,P==null?void 0:P.updateSidebarState,h,S]),g.useEffect(function(){T||(P==null||P.updateSidebarState({collapsed:m}),I(!0))},[m,T,P==null?void 0:P.updateSidebarState]),g.createElement(Ct.Provider,{value:{collapsed:Z,toggled:z,rtl:h,transitionDuration:S}},g.createElement(li,J({ref:t,"data-testid":"".concat(B.root,"-test-id"),rtl:h,rootStyles:f,width:c,collapsedWidth:l,transitionDuration:S,className:_(B.root,(n={},n[B.collapsed]=Z,n[B.toggled]=z,n[B.broken]=E,n[B.rtl]=h,n),O)},x),g.createElement(ui,{"data-testid":"".concat(B.container,"-test-id"),className:B.container,backgroundColor:C},b),v&&g.createElement(di,{"data-testid":"".concat(B.image,"-test-id"),src:v,alt:"sidebar background",className:B.image}),E&&z&&g.createElement(si,{"data-testid":"".concat(B.backdrop,"-test-id"),role:"button",tabIndex:0,"aria-label":"backdrop",onClick:L,onKeyPress:L,className:B.backdrop})))}),xn,yn,wn,ar=q.ul(kn||(kn=G([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`],[`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))),kn,pi=q.nav(Sn||(Sn=G([`
  &.`,` {
    `,`
  }
`],[`
  &.`,` {
    `,`
  }
`])),$.root,function(e){var t=e.rootStyles;return t}),sr=g.createContext(void 0),xt=g.createContext(0),vi=function(e,t){var n=e.children,r=e.className,o=e.transitionDuration,i=o===void 0?300:o,a=e.closeOnClick,s=a===void 0?!1:a,c=e.rootStyles,u=e.menuItemStyles,l=e.renderExpandIcon,m=Te(e,["children","className","transitionDuration","closeOnClick","rootStyles","menuItemStyles","renderExpandIcon"]),O=g.useMemo(function(){return{transitionDuration:i,closeOnClick:s,menuItemStyles:u,renderExpandIcon:l}},[i,s,u,l]);return g.createElement(sr.Provider,{value:O},g.createElement(xt.Provider,{value:0},g.createElement(pi,J({ref:t,className:_($.root,r),rootStyles:c},m),g.createElement(ar,null,n))))},hi=g.forwardRef(vi),Sn,Vt=function(){var e=g.useContext(sr);if(e===void 0)throw new Error("Menu Component is required!");return e},mi=q.div(Cn||(Cn=G([`
  height: 0px;
  overflow: hidden;
  z-index: 999;
  transition: height `,`ms;
  box-sizing: border-box;
  background-color: white;

  `,`

  `,`

  `,`;

  `,`;
`],[`
  height: 0px;
  overflow: hidden;
  z-index: 999;
  transition: height `,`ms;
  box-sizing: border-box;
  background-color: white;

  `,`

  `,`

  `,`;

  `,`;
`])),function(e){var t=e.transitionDuration;return t},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n&&`
     background-color: white;
     box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     `},function(e){var t=e.defaultOpen;return t&&"height: auto;display: block;"},function(e){var t=e.collapsed,n=e.firstLevel,r=e.openWhenCollapsed;return t&&n?`
      position: fixed;
      padding-left: 0px;
      width: 200px;
      border-radius: 4px;
      height: auto!important;
      display: block!important;     
      transition: none!important;     
      visibility: `.concat(r?"visible":"hidden",`;
     `):`
      position: static!important;
      transform: none!important;
      `},function(e){var t=e.rootStyles;return t}),gi=function(e,t){var n=e.children,r=e.open,o=e.openWhenCollapsed,i=e.firstLevel,a=e.collapsed,s=e.defaultOpen,c=Te(e,["children","open","openWhenCollapsed","firstLevel","collapsed","defaultOpen"]),u=Vt().transitionDuration,l=g.useState(s)[0];return g.createElement(mi,J({"data-testid":"".concat($.subMenuContent,"-test-id"),ref:t,firstLevel:i,collapsed:a,open:r,openWhenCollapsed:o,transitionDuration:u,defaultOpen:l},c),g.createElement(ar,null,n))},bi=g.forwardRef(gi),Cn,cr=q.span(On||(On=G([`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  `,`;
`],[`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  `,`;
`])),function(e){var t=e.rootStyles;return t}),On,lr=q.span(jn||(jn=G([`
  width: 35px;
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  `,`

  `,`;
`],[`
  width: 35px;
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  `,`

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 10px;":"margin-right: 10px;"},function(e){var t=e.rootStyles;return t}),jn,ur=q.span(En||(En=G([`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 5px;":"margin-right: 5px;"},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),En,dr=q.span(Pn||(Pn=G([`
  margin-right: 5px;
  margin-left: 5px;
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  margin-right: 5px;
  margin-left: 5px;
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Pn,xi=q.span(Nn||(Nn=G([`
  `,`

  `,`;
`],[`
  `,`

  `,`;
`])),function(e){var t=e.collapsed,n=e.level,r=e.rtl;return t&&n===0&&`
    position: absolute;
    `.concat(r?"left: 10px;":"right: 10px;",`
    top: 50%;
    transform: translateY(-50%);
    
    `)},function(e){var t=e.rootStyles;return t}),yi=q.span(Rn||(Rn=G([`
  display: inline-block;
  transition: transform 0.3s;
  `,`

  width: 5px;
  height: 5px;
  transform: rotate(`,`);
`],[`
  display: inline-block;
  transition: transform 0.3s;
  `,`

  width: 5px;
  height: 5px;
  transform: rotate(`,`);
`])),function(e){var t=e.rtl;return t?`
          border-left: 2px solid currentcolor;
          border-top: 2px solid currentcolor;
        `:` border-right: 2px solid currentcolor;
          border-bottom: 2px solid currentcolor;
        `},function(e){var t=e.open,n=e.rtl;return t?n?"-135deg":"45deg":"-45deg"}),wi=q.span(An||(An=G([`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`],[`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`]))),Nn,Rn,An,Y="top",se="bottom",ce="right",K="left",_t="auto",it=[Y,se,ce,K],He="start",tt="end",ki="clippingParents",fr="viewport",Ge="popper",Si="reference",$n=it.reduce(function(e,t){return e.concat([t+"-"+He,t+"-"+tt])},[]),pr=[].concat(it,[_t]).reduce(function(e,t){return e.concat([t,t+"-"+He,t+"-"+tt])},[]),Ci="beforeRead",Oi="read",ji="afterRead",Ei="beforeMain",Pi="main",Ni="afterMain",Ri="beforeWrite",Ai="write",$i="afterWrite",Mi=[Ci,Oi,ji,Ei,Pi,Ni,Ri,Ai,$i];function ye(e){return e?(e.nodeName||"").toLowerCase():null}function le(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function We(e){var t=le(e).Element;return e instanceof t||e instanceof Element}function ae(e){var t=le(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function qt(e){if(typeof ShadowRoot>"u")return!1;var t=le(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Di(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!ae(i)||!ye(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function Ii(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(c,u){return c[u]="",c},{});!ae(o)||!ye(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}var Li={name:"applyStyles",enabled:!0,phase:"write",fn:Di,effect:Ii,requires:["computeStyles"]};function xe(e){return e.split("-")[0]}var Le=Math.max,yt=Math.min,Ve=Math.round;function It(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function vr(){return!/^((?!chrome|android).)*safari/i.test(It())}function _e(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&ae(e)&&(o=e.offsetWidth>0&&Ve(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ve(r.height)/e.offsetHeight||1);var a=We(e)?le(e):window,s=a.visualViewport,c=!vr()&&n,u=(r.left+(c&&s?s.offsetLeft:0))/o,l=(r.top+(c&&s?s.offsetTop:0))/i,m=r.width/o,O=r.height/i;return{width:m,height:O,top:l,right:u+m,bottom:l+O,left:u,x:u,y:l}}function Ut(e){var t=_e(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function hr(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&qt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ke(e){return le(e).getComputedStyle(e)}function Ti(e){return["table","td","th"].indexOf(ye(e))>=0}function Ae(e){return((We(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ot(e){return ye(e)==="html"?e:e.assignedSlot||e.parentNode||(qt(e)?e.host:null)||Ae(e)}function Mn(e){return!ae(e)||ke(e).position==="fixed"?null:e.offsetParent}function Wi(e){var t=/firefox/i.test(It()),n=/Trident/i.test(It());if(n&&ae(e)){var r=ke(e);if(r.position==="fixed")return null}var o=Ot(e);for(qt(o)&&(o=o.host);ae(o)&&["html","body"].indexOf(ye(o))<0;){var i=ke(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function at(e){for(var t=le(e),n=Mn(e);n&&Ti(n)&&ke(n).position==="static";)n=Mn(n);return n&&(ye(n)==="html"||ye(n)==="body"&&ke(n).position==="static")?t:n||Wi(e)||t}function Xt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ke(e,t,n){return Le(e,yt(t,n))}function Bi(e,t,n){var r=Ke(e,t,n);return r>n?n:r}function mr(){return{top:0,right:0,bottom:0,left:0}}function gr(e){return Object.assign({},mr(),e)}function br(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var zi=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,gr(typeof t!="number"?t:br(t,it))};function Fi(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=xe(n.placement),c=Xt(s),u=[K,ce].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!a)){var m=zi(o.padding,n),O=Ut(i),b=c==="y"?Y:K,y=c==="y"?se:ce,p=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],w=a[c]-n.rects.reference[c],C=at(i),k=C?c==="y"?C.clientHeight||0:C.clientWidth||0:0,S=p/2-w/2,v=m[b],h=k-O[l]-m[y],f=k/2-O[l]/2+S,x=Ke(v,f,h),j=c;n.modifiersData[r]=(t={},t[j]=x,t.centerOffset=x-f,t)}}function Hi(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||hr(t.elements.popper,o)&&(t.elements.arrow=o))}var Vi={name:"arrow",enabled:!0,phase:"main",fn:Fi,effect:Hi,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function qe(e){return e.split("-")[1]}var _i={top:"auto",right:"auto",bottom:"auto",left:"auto"};function qi(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:Ve(t*o)/o||0,y:Ve(n*o)/o||0}}function Dn(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,m=e.isFixed,O=a.x,b=O===void 0?0:O,y=a.y,p=y===void 0?0:y,w=typeof l=="function"?l({x:b,y:p}):{x:b,y:p};b=w.x,p=w.y;var C=a.hasOwnProperty("x"),k=a.hasOwnProperty("y"),S=K,v=Y,h=window;if(u){var f=at(n),x="clientHeight",j="clientWidth";if(f===le(n)&&(f=Ae(n),ke(f).position!=="static"&&s==="absolute"&&(x="scrollHeight",j="scrollWidth")),f=f,o===Y||(o===K||o===ce)&&i===tt){v=se;var N=m&&f===h&&h.visualViewport?h.visualViewport.height:f[x];p-=N-r.height,p*=c?1:-1}if(o===K||(o===Y||o===se)&&i===tt){S=ce;var E=m&&f===h&&h.visualViewport?h.visualViewport.width:f[j];b-=E-r.width,b*=c?1:-1}}var D=Object.assign({position:s},u&&_i),T=l===!0?qi({x:b,y:p}):{x:b,y:p};if(b=T.x,p=T.y,c){var I;return Object.assign({},D,(I={},I[v]=k?"0":"",I[S]=C?"0":"",I.transform=(h.devicePixelRatio||1)<=1?"translate("+b+"px, "+p+"px)":"translate3d("+b+"px, "+p+"px, 0)",I))}return Object.assign({},D,(t={},t[v]=k?p+"px":"",t[S]=C?b+"px":"",t.transform="",t))}function Ui(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,c=s===void 0?!0:s,u={placement:xe(t.placement),variation:qe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Dn(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Dn(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Xi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ui,data:{}},dt={passive:!0};function Gi(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,c=le(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",n.update,dt)}),s&&c.addEventListener("resize",n.update,dt),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",n.update,dt)}),s&&c.removeEventListener("resize",n.update,dt)}}var Yi={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Gi,data:{}},Ki={left:"right",right:"left",bottom:"top",top:"bottom"};function mt(e){return e.replace(/left|right|bottom|top/g,function(t){return Ki[t]})}var Qi={start:"end",end:"start"};function In(e){return e.replace(/start|end/g,function(t){return Qi[t]})}function Gt(e){var t=le(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Yt(e){return _e(Ae(e)).left+Gt(e).scrollLeft}function Zi(e,t){var n=le(e),r=Ae(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=vr();(u||!u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+Yt(e),y:c}}function Ji(e){var t,n=Ae(e),r=Gt(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=Le(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Le(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Yt(e),c=-r.scrollTop;return ke(o||n).direction==="rtl"&&(s+=Le(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function Kt(e){var t=ke(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function xr(e){return["html","body","#document"].indexOf(ye(e))>=0?e.ownerDocument.body:ae(e)&&Kt(e)?e:xr(Ot(e))}function Qe(e,t){var n;t===void 0&&(t=[]);var r=xr(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=le(r),a=o?[i].concat(i.visualViewport||[],Kt(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Qe(Ot(a)))}function Lt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ea(e,t){var n=_e(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ln(e,t,n){return t===fr?Lt(Zi(e,n)):We(t)?ea(t,n):Lt(Ji(Ae(e)))}function ta(e){var t=Qe(Ot(e)),n=["absolute","fixed"].indexOf(ke(e).position)>=0,r=n&&ae(e)?at(e):e;return We(r)?t.filter(function(o){return We(o)&&hr(o,r)&&ye(o)!=="body"}):[]}function na(e,t,n,r){var o=t==="clippingParents"?ta(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(c,u){var l=Ln(e,u,r);return c.top=Le(l.top,c.top),c.right=yt(l.right,c.right),c.bottom=yt(l.bottom,c.bottom),c.left=Le(l.left,c.left),c},Ln(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function yr(e){var t=e.reference,n=e.element,r=e.placement,o=r?xe(r):null,i=r?qe(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(o){case Y:c={x:a,y:t.y-n.height};break;case se:c={x:a,y:t.y+t.height};break;case ce:c={x:t.x+t.width,y:s};break;case K:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var u=o?Xt(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case He:c[u]=c[u]-(t[l]/2-n[l]/2);break;case tt:c[u]=c[u]+(t[l]/2-n[l]/2);break}}return c}function nt(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,c=s===void 0?ki:s,u=n.rootBoundary,l=u===void 0?fr:u,m=n.elementContext,O=m===void 0?Ge:m,b=n.altBoundary,y=b===void 0?!1:b,p=n.padding,w=p===void 0?0:p,C=gr(typeof w!="number"?w:br(w,it)),k=O===Ge?Si:Ge,S=e.rects.popper,v=e.elements[y?k:O],h=na(We(v)?v:v.contextElement||Ae(e.elements.popper),c,l,a),f=_e(e.elements.reference),x=yr({reference:f,element:S,strategy:"absolute",placement:o}),j=Lt(Object.assign({},S,x)),N=O===Ge?j:f,E={top:h.top-N.top+C.top,bottom:N.bottom-h.bottom+C.bottom,left:h.left-N.left+C.left,right:N.right-h.right+C.right},D=e.modifiersData.offset;if(O===Ge&&D){var T=D[o];Object.keys(E).forEach(function(I){var P=[ce,se].indexOf(I)>=0?1:-1,Z=[Y,se].indexOf(I)>=0?"y":"x";E[I]+=T[Z]*P})}return E}function ra(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?pr:c,l=qe(r),m=l?s?$n:$n.filter(function(y){return qe(y)===l}):it,O=m.filter(function(y){return u.indexOf(y)>=0});O.length===0&&(O=m);var b=O.reduce(function(y,p){return y[p]=nt(e,{placement:p,boundary:o,rootBoundary:i,padding:a})[xe(p)],y},{});return Object.keys(b).sort(function(y,p){return b[y]-b[p]})}function oa(e){if(xe(e)===_t)return[];var t=mt(e);return[In(e),t,In(t)]}function ia(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,m=n.rootBoundary,O=n.altBoundary,b=n.flipVariations,y=b===void 0?!0:b,p=n.allowedAutoPlacements,w=t.options.placement,C=xe(w),k=C===w,S=c||(k||!y?[mt(w)]:oa(w)),v=[w].concat(S).reduce(function(Oe,ne){return Oe.concat(xe(ne)===_t?ra(t,{placement:ne,boundary:l,rootBoundary:m,padding:u,flipVariations:y,allowedAutoPlacements:p}):ne)},[]),h=t.rects.reference,f=t.rects.popper,x=new Map,j=!0,N=v[0],E=0;E<v.length;E++){var D=v[E],T=xe(D),I=qe(D)===He,P=[Y,se].indexOf(T)>=0,Z=P?"width":"height",z=nt(t,{placement:D,boundary:l,rootBoundary:m,altBoundary:O,padding:u}),L=P?I?ce:K:I?se:Y;h[Z]>f[Z]&&(L=mt(L));var te=mt(L),de=[];if(i&&de.push(z[T]<=0),s&&de.push(z[L]<=0,z[te]<=0),de.every(function(Oe){return Oe})){N=D,j=!1;break}x.set(D,de)}if(j)for(var we=y?3:1,Se=function(ne){var ue=v.find(function(je){var re=x.get(je);if(re)return re.slice(0,ne).every(function(Me){return Me})});if(ue)return N=ue,"break"},Ce=we;Ce>0;Ce--){var $e=Se(Ce);if($e==="break")break}t.placement!==N&&(t.modifiersData[r]._skip=!0,t.placement=N,t.reset=!0)}}var aa={name:"flip",enabled:!0,phase:"main",fn:ia,requiresIfExists:["offset"],data:{_skip:!1}};function Tn(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Wn(e){return[Y,ce,se,K].some(function(t){return e[t]>=0})}function sa(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=nt(t,{elementContext:"reference"}),s=nt(t,{altBoundary:!0}),c=Tn(a,r),u=Tn(s,o,i),l=Wn(c),m=Wn(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}var ca={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:sa};function la(e,t,n){var r=xe(e),o=[K,Y].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[K,ce].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function ua(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=pr.reduce(function(l,m){return l[m]=la(m,t.rects,i),l},{}),s=a[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}var da={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ua};function fa(e){var t=e.state,n=e.name;t.modifiersData[n]=yr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var pa={name:"popperOffsets",enabled:!0,phase:"read",fn:fa,data:{}};function va(e){return e==="x"?"y":"x"}function ha(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,m=n.padding,O=n.tether,b=O===void 0?!0:O,y=n.tetherOffset,p=y===void 0?0:y,w=nt(t,{boundary:c,rootBoundary:u,padding:m,altBoundary:l}),C=xe(t.placement),k=qe(t.placement),S=!k,v=Xt(C),h=va(v),f=t.modifiersData.popperOffsets,x=t.rects.reference,j=t.rects.popper,N=typeof p=="function"?p(Object.assign({},t.rects,{placement:t.placement})):p,E=typeof N=="number"?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(f){if(i){var I,P=v==="y"?Y:K,Z=v==="y"?se:ce,z=v==="y"?"height":"width",L=f[v],te=L+w[P],de=L-w[Z],we=b?-j[z]/2:0,Se=k===He?x[z]:j[z],Ce=k===He?-j[z]:-x[z],$e=t.elements.arrow,Oe=b&&$e?Ut($e):{width:0,height:0},ne=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:mr(),ue=ne[P],je=ne[Z],re=Ke(0,x[z],Oe[z]),Me=S?x[z]/2-we-re-ue-E.mainAxis:Se-re-ue-E.mainAxis,ct=S?-x[z]/2+we+re+je+E.mainAxis:Ce+re+je+E.mainAxis,Be=t.elements.arrow&&at(t.elements.arrow),jt=Be?v==="y"?Be.clientTop||0:Be.clientLeft||0:0,lt=(I=D==null?void 0:D[v])!=null?I:0,fe=L+Me-lt-jt,pe=L+ct-lt,F=Ke(b?yt(te,fe):te,L,b?Le(de,pe):de);f[v]=F,T[v]=F-L}if(s){var R,oe=v==="x"?Y:K,Ee=v==="x"?se:ce,W=f[h],ie=h==="y"?"height":"width",ve=W+w[oe],he=W-w[Ee],De=[Y,K].indexOf(C)!==-1,ze=(R=D==null?void 0:D[h])!=null?R:0,nn=De?ve:W-x[ie]-j[ie]-ze+E.altAxis,rn=De?W+x[ie]+j[ie]-ze-E.altAxis:he,on=b&&De?Bi(nn,W,rn):Ke(b?nn:ve,W,b?rn:he);f[h]=on,T[h]=on-W}t.modifiersData[r]=T}}var ma={name:"preventOverflow",enabled:!0,phase:"main",fn:ha,requiresIfExists:["offset"]};function ga(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function ba(e){return e===le(e)||!ae(e)?Gt(e):ga(e)}function xa(e){var t=e.getBoundingClientRect(),n=Ve(t.width)/e.offsetWidth||1,r=Ve(t.height)/e.offsetHeight||1;return n!==1||r!==1}function ya(e,t,n){n===void 0&&(n=!1);var r=ae(t),o=ae(t)&&xa(t),i=Ae(t),a=_e(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((ye(t)!=="body"||Kt(i))&&(s=ba(t)),ae(t)?(c=_e(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Yt(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function wa(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&o(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function ka(e){var t=wa(e);return Mi.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Sa(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Ca(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Bn={placement:"bottom",modifiers:[],strategy:"absolute"};function zn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Oa(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?Bn:o;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bn,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},m=[],O=!1,b={state:l,setOptions:function(C){var k=typeof C=="function"?C(l.options):C;p(),l.options=Object.assign({},i,l.options,k),l.scrollParents={reference:We(s)?Qe(s):s.contextElement?Qe(s.contextElement):[],popper:Qe(c)};var S=ka(Ca([].concat(r,l.options.modifiers)));return l.orderedModifiers=S.filter(function(v){return v.enabled}),y(),b.update()},forceUpdate:function(){if(!O){var C=l.elements,k=C.reference,S=C.popper;if(zn(k,S)){l.rects={reference:ya(k,at(S),l.options.strategy==="fixed"),popper:Ut(S)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(E){return l.modifiersData[E.name]=Object.assign({},E.data)});for(var v=0;v<l.orderedModifiers.length;v++){if(l.reset===!0){l.reset=!1,v=-1;continue}var h=l.orderedModifiers[v],f=h.fn,x=h.options,j=x===void 0?{}:x,N=h.name;typeof f=="function"&&(l=f({state:l,options:j,name:N,instance:b})||l)}}}},update:Sa(function(){return new Promise(function(w){b.forceUpdate(),w(l)})}),destroy:function(){p(),O=!0}};if(!zn(s,c))return b;b.setOptions(u).then(function(w){!O&&u.onFirstUpdate&&u.onFirstUpdate(w)});function y(){l.orderedModifiers.forEach(function(w){var C=w.name,k=w.options,S=k===void 0?{}:k,v=w.effect;if(typeof v=="function"){var h=v({state:l,name:C,instance:b,options:S}),f=function(){};m.push(h||f)}})}function p(){m.forEach(function(w){return w()}),m=[]}return b}}var ja=[Yi,pa,Xi,Li,da,aa,ma,Vi,ca],Ea=Oa({defaultModifiers:ja}),Pa=function(e){var t=e.level,n=e.buttonRef,r=e.contentRef,o=g.useContext(Ct),i=o.collapsed,a=o.toggled,s=o.transitionDuration,c=g.useRef();return g.useEffect(function(){return t===0&&i&&r.current&&n.current&&(c.current=Ea(n.current,r.current,{placement:"right",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})),function(){var u;return(u=c.current)===null||u===void 0?void 0:u.destroy()}},[t,i,r,n]),g.useEffect(function(){if(r.current&&n.current){var u=new ResizeObserver(function(){var l;(l=c.current)===null||l===void 0||l.update()});u.observe(r.current),u.observe(n.current)}setTimeout(function(){var l;(l=c.current)===null||l===void 0||l.update()},s)},[s,a,r,n]),{popperInstance:c.current}},wr=function(e){var t=e.rtl,n=e.level,r=e.collapsed,o=e.disabled,i=e.active;return`
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;

    `.concat(t?`padding-left: 20px;
           padding-right: `.concat(n===0?20:(r?n:n+1)*20,`px;
            `):`padding-right: 20px;
           padding-left: `.concat(n===0?20:(r?n:n+1)*20,`px;
           `),`

    &:hover {
      background-color: #f3f3f3;
    }

    `).concat(o&&` 
      pointer-events: none;
      cursor: default;
      color:#adadad;
        `,`

    `).concat(i&&"background-color: #e2eef9;",`
  
  `)},Na=function(e,t){var n=e.className,r=e.component,o=e.children,i=Te(e,["className","component","children"]);if(r){if(typeof r=="string")return g.createElement(r,J(J({className:_(n)},i),{ref:t}),o);var a=r.props,s=a.className,c=Te(a,["className"]);return g.cloneElement(r,J(J(J({className:_(n,s)},i),c),{ref:t}),o)}else return g.createElement("a",J({ref:t,className:_(n)},i),o)},kr=g.forwardRef(Na),Ra=q.li(Fn||(Fn=G([`
  position: relative;
  width: 100%;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`],[`
  position: relative;
  width: 100%;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},$.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return wr({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Aa=function(e,t){var n,r=e.children,o=e.className,i=e.label,a=e.icon,s=e.title,c=e.prefix,u=e.suffix,l=e.open,m=e.defaultOpen,O=e.active,b=O===void 0?!1:O,y=e.disabled,p=y===void 0?!1:y,w=e.rootStyles,C=e.component,k=e.onOpenChange,S=e.onClick,v=e.onKeyUp,h=Te(e,["children","className","label","icon","title","prefix","suffix","open","defaultOpen","active","disabled","rootStyles","component","onOpenChange","onClick","onKeyUp"]),f=g.useContext(xt),x=g.useContext(Ct),j=x.collapsed,N=x.rtl,E=x.transitionDuration,D=Vt(),T=D.renderExpandIcon,I=D.closeOnClick,P=D.menuItemStyles,Z=D.transitionDuration,z=g.useState(!!m),L=z[0],te=z[1],de=g.useState(!1),we=de[0],Se=de[1],Ce=g.useState(!1),$e=Ce[0],Oe=Ce[1],ne=g.useRef(null),ue=g.useRef(null),je=g.useRef(),re=Pa({level:f,buttonRef:ne,contentRef:ue}).popperInstance,Me=g.useCallback(function(){var F,R=ue.current;if(R){var oe=(F=R==null?void 0:R.querySelector(".".concat($.subMenuContent," > ul")))===null||F===void 0?void 0:F.clientHeight;R.style.overflow="hidden",R.style.height="".concat(oe,"px"),je.current=setTimeout(function(){R.style.overflow="auto",R.style.height="auto"},Z)}},[Z]),ct=function(){var F,R=ue.current;if(R){var oe=(F=R==null?void 0:R.querySelector(".".concat($.subMenuContent," > ul")))===null||F===void 0?void 0:F.clientHeight;R.style.overflow="hidden",R.style.height="".concat(oe,"px"),R.offsetHeight,R.style.height="0px"}},Be=function(){f===0&&j||(typeof l>"u"?(clearTimeout(Number(je.current)),L?ct():Me(),k==null||k(!L),te(!L)):k==null||k(!l))};g.useEffect(function(){!(f===0&&j)&&typeof l<"u"&&$e&&(clearTimeout(Number(je.current)),l?Me():ct())},[j,Me,i,f,k,l]);var jt=function(F){S==null||S(F),Be()},lt=function(F){v==null||v(F),F.key==="Enter"&&Be()},fe=function(F){if(P){var R={level:f,disabled:p,active:b,isSubmenu:!0,open:l??L},oe=P.root,Ee=P.button,W=P.label,ie=P.icon,ve=P.prefix,he=P.suffix,De=P.subMenuContent,ze=P.SubMenuExpandIcon;switch(F){case"root":return typeof oe=="function"?oe(R):oe;case"button":return typeof Ee=="function"?Ee(R):Ee;case"label":return typeof W=="function"?W(R):W;case"icon":return typeof ie=="function"?ie(R):ie;case"prefix":return typeof ve=="function"?ve(R):ve;case"suffix":return typeof he=="function"?he(R):he;case"SubMenuExpandIcon":return typeof ze=="function"?ze(R):ze;case"subMenuContent":return typeof De=="function"?De(R):De;default:return}}};g.useEffect(function(){setTimeout(function(){return re==null?void 0:re.update()},E),j&&f===0&&Se(!1)},[j,f,N,E,re]),g.useEffect(function(){var F=function(W){var ie,ve,he;!we&&(!((ie=ne.current)===null||ie===void 0)&&ie.contains(W))?Se(!0):(I&&!(!((ve=W.closest(".".concat($.menuItemRoot)))===null||ve===void 0)&&ve.classList.contains($.subMenuRoot))||!(!((he=ue.current)===null||he===void 0)&&he.contains(W))&&we)&&Se(!1)},R=function(W){F(W.target)},oe=function(W){W.key==="Enter"?F(W.target):W.key==="Escape"&&Se(!1)},Ee=function(){document.removeEventListener("click",R),document.removeEventListener("keyup",oe)};return Ee(),j&&f===0&&(document.addEventListener("click",R,!1),document.addEventListener("keyup",oe,!1)),function(){Ee()}},[j,f,I,we]),g.useEffect(function(){Oe(!0)},[]);var pe=(n={},n[$.active]=b,n[$.disabled]=p,n[$.open]=l??L,n);return g.createElement(Ra,{ref:t,className:_($.menuItemRoot,$.subMenuRoot,pe,o),menuItemStyles:fe("root"),level:f,collapsed:j,rtl:N,disabled:p,active:b,buttonStyles:fe("button"),rootStyles:w},g.createElement(kr,J({"data-testid":"".concat($.button,"-test-id"),ref:ne,title:s,className:_($.button,pe),onClick:jt,onKeyUp:lt,component:C,tabIndex:0},h),a&&g.createElement(lr,{rtl:N,className:_($.icon,pe),rootStyles:fe("icon")},a),c&&g.createElement(ur,{collapsed:j,transitionDuration:E,firstLevel:f===0,className:_($.prefix,pe),rtl:N,rootStyles:fe("prefix")},c),g.createElement(cr,{className:_($.label,pe),rootStyles:fe("label")},i),u&&g.createElement(dr,{collapsed:j,transitionDuration:E,firstLevel:f===0,className:_($.suffix,pe),rootStyles:fe("suffix")},u),g.createElement(xi,{rtl:N,className:_($.SubMenuExpandIcon,pe),collapsed:j,level:f,rootStyles:fe("SubMenuExpandIcon")},T?T({level:f,disabled:p,active:b,open:l??L}):j&&f===0?g.createElement(wi,null):g.createElement(yi,{rtl:N,open:l??L}))),g.createElement(bi,{ref:ue,openWhenCollapsed:we,open:l??L,firstLevel:f===0,collapsed:j,defaultOpen:l&&!$e||m,className:_($.subMenuContent,pe),rootStyles:fe("subMenuContent")},g.createElement(xt.Provider,{value:f+1},r)))};g.forwardRef(Aa);var Fn,$a=q.li(Hn||(Hn=G([`
  width: 100%;
  position: relative;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`],[`
  width: 100%;
  position: relative;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},$.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return wr({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Ma=function(e,t){var n,r=e.children,o=e.icon,i=e.className,a=e.prefix,s=e.suffix,c=e.active,u=c===void 0?!1:c,l=e.disabled,m=l===void 0?!1:l,O=e.component,b=e.rootStyles,y=Te(e,["children","icon","className","prefix","suffix","active","disabled","component","rootStyles"]),p=g.useContext(xt),w=g.useContext(Ct),C=w.collapsed,k=w.rtl,S=w.transitionDuration,v=Vt().menuItemStyles,h=function(x){if(v){var j={level:p,disabled:m,active:u,isSubmenu:!1},N=v.root,E=v.button,D=v.label,T=v.icon,I=v.prefix,P=v.suffix;switch(x){case"root":return typeof N=="function"?N(j):N;case"button":return typeof E=="function"?E(j):E;case"label":return typeof D=="function"?D(j):D;case"icon":return typeof T=="function"?T(j):T;case"prefix":return typeof I=="function"?I(j):I;case"suffix":return typeof P=="function"?P(j):P;default:return}}},f=(n={},n[$.active]=u,n[$.disabled]=m,n);return g.createElement($a,{ref:t,className:_($.menuItemRoot,f,i),menuItemStyles:h("root"),level:p,collapsed:C,rtl:k,disabled:m,active:u,buttonStyles:h("button"),rootStyles:b},g.createElement(kr,J({className:_($.button,f),"data-testid":"".concat($.button,"-test-id"),component:O,tabIndex:0},y),o&&g.createElement(lr,{rtl:k,className:_($.icon,f),rootStyles:h("icon")},o),a&&g.createElement(ur,{collapsed:C,transitionDuration:S,firstLevel:p===0,className:_($.prefix,f),rtl:k,rootStyles:h("prefix")},a),g.createElement(cr,{className:_($.label,f),rootStyles:h("label")},r),s&&g.createElement(dr,{collapsed:C,transitionDuration:S,firstLevel:p===0,className:_($.suffix,f),rootStyles:h("suffix")},s)))},Ye=g.forwardRef(Ma),Hn,Qt={},Rt={};const Da=Er(io);var Vn;function st(){return Vn||(Vn=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Da}(Rt)),Rt}var Ia=rt;Object.defineProperty(Qt,"__esModule",{value:!0});var Sr=Qt.default=void 0,La=Ia(st()),_n=d;Sr=Qt.default=(0,La.default)([(0,_n.jsx)("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z"},"0"),(0,_n.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5.99 13c-.59 0-1.05-.47-1.05-1.05 0-.59.47-1.04 1.05-1.04.59 0 1.04.45 1.04 1.04-.01.58-.45 1.05-1.04 1.05m2.5-6.17c-.63.93-1.23 1.21-1.56 1.81-.13.24-.18.4-.18 1.18h-1.52c0-.41-.06-1.08.26-1.65.41-.73 1.18-1.16 1.63-1.8.48-.68.21-1.94-1.14-1.94-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26.37.61.58 1.73.01 2.57"},"1")],"Quiz");var Zt={},Ta=rt;Object.defineProperty(Zt,"__esModule",{value:!0});var Tt=Zt.default=void 0,Wa=Ta(st()),Ba=d;Tt=Zt.default=(0,Wa.default)((0,Ba.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"Group");var Jt={},za=rt;Object.defineProperty(Jt,"__esModule",{value:!0});var Cr=Jt.default=void 0,Fa=za(st()),Ha=d;Cr=Jt.default=(0,Fa.default)((0,Ha.jsx)("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard");var en={},Va=rt;Object.defineProperty(en,"__esModule",{value:!0});var Or=en.default=void 0,_a=Va(st()),qa=d;Or=en.default=(0,_a.default)((0,qa.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"}),"Assessment");const Ua=({user:e})=>d.jsx(fi,{className:"-mt-0. font-space h-screen ",backgroundColor:"#1f2937",style:{position:"sticky",top:0},children:d.jsxs(hi,{menuItemStyles:{button:({level:t,active:n,disabled:r})=>{if(t===0)return{backgroundColor:"#1f2937",color:"#ffffff",":hover":{backgroundColor:"#fb923c",color:"#ffffff"},backgroundColor:n?"#ffffff":void 0}}},children:[d.jsxs("div",{className:"h-40 bg-gray-800 flex items-center flex-col justify-center",children:[d.jsx("img",{className:"h-16",src:Un}),d.jsx("p",{className:"text-orange-400 pt-1 font-bold",children:"Online Examination System"})]}),d.jsx(Xn,{}),d.jsx(Ye,{icon:d.jsx(Cr,{}),component:d.jsx(Re,{href:route("dashboard")}),style:{backgroundColor:route().current("dashboard")?" #fb923c ":"  ",Color:route().current("dashboard")?" #ffffff ":" #fb923c "},children:"Dashboard"}),d.jsx(Ye,{icon:d.jsx(Sr,{}),component:d.jsx(Re,{href:route("exam.index")}),style:{backgroundColor:route().current("exam")?" #fb923c ":"  ",Color:(route().current("exam")," white ")},children:"Exam"}),d.jsx(Ye,{icon:d.jsx(Tt,{}),component:d.jsx(Re,{href:route("student.index")}),style:{backgroundColor:route().current("student.index")?" #1f2937 ":"  "},children:"Students"}),d.jsx(Ye,{icon:d.jsx(Tt,{}),component:d.jsx(Re,{href:route("teacher.index")}),style:{backgroundColor:route().current("teacher")?" #1f2937 ":"  ",display:e.role=="teacher"?"none":""},children:"Teachers"}),d.jsx(Ye,{icon:d.jsx(Or,{}),style:{backgroundColor:route().current("teachers")?" #1f2937 ":"  "},children:"Reports"})]})});var tn={},Xa=rt;Object.defineProperty(tn,"__esModule",{value:!0});var jr=tn.default=void 0,Ga=Xa(st()),Ya=d;jr=tn.default=(0,Ga.default)((0,Ya.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");function ts({user:e,header:t,children:n}){const[r,o]=V.useState(!1);return d.jsxs("div",{className:"flex ",children:[d.jsx(Kr,{}),e.role!=="student"&&d.jsx(Ua,{user:e}),d.jsxs("div",{className:"min-h-screen bg-gray-100 w-full",children:[d.jsxs("nav",{className:`${e.role!=="student"?"bg-white":"bg-gray-800 sticky top-0 "} bg-gray-800 border-b border-gray-100`,children:[d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex justify-between h-20",children:[d.jsxs("div",{className:"flex items-center",children:[e.role!=="student"?d.jsx(Qr,{children:d.jsx(jr,{fontSize:"large"})}):d.jsx(Re,{href:"/",children:d.jsxs("div",{className:"shrink-0 flex items-center gap-5",children:[d.jsx("img",{src:Un,className:"block h-12 w-auto"}),d.jsx("p",{className:"w-40 text-orange-400",children:"Online Examination System"})]})}),e.role!=="student"?d.jsx("div",{}):d.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex font-space",children:[d.jsx(Et,{href:route("examination.index"),active:route().current("examination.index"),className:"text-white",children:"Examination"}),d.jsx(Et,{href:route("result.index"),active:route().current("result.index"),className:"text-white",children:"Previous Exams"}),d.jsx(Et,{href:route("dashboard"),active:route().current("profile"),className:"text-white",children:"Profile"})]})]}),d.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:d.jsx("div",{className:"ms-3 relative",children:d.jsxs(Ne,{children:[d.jsx(Ne.Trigger,{children:d.jsx("span",{className:"inline-flex rounded-md",children:d.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[e.name,d.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:d.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),d.jsxs(Ne.Content,{children:[d.jsx(Ne.Link,{href:route("profile.edit"),children:"Profile"}),d.jsx(Ne.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),d.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:d.jsx("button",{onClick:()=>o(i=>!i),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:d.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("path",{className:r?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),d.jsx("path",{className:r?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),d.jsxs("div",{className:(r?"block":"hidden")+" sm:hidden",children:[d.jsx("div",{className:"pt-2 pb-3 space-y-1",children:d.jsx(Pt,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),d.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[d.jsxs("div",{className:"px-4",children:[d.jsx("div",{className:"font-medium text-base text-gray-800",children:e.name}),d.jsx("div",{className:"font-medium text-sm text-gray-500",children:e.email})]}),d.jsxs("div",{className:"mt-3 space-y-1",children:[d.jsx(Pt,{href:route("profile.edit"),children:"Profile"}),d.jsx(Pt,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&d.jsx("header",{className:"bg-white shadow",children:d.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),d.jsx("main",{className:"bg-stone-100",children:n})]})]})}export{ts as A,Xn as D,st as r};
