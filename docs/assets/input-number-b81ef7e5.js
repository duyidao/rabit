import{A as Y,R as se,a8 as oe,a9 as p,aa as X,ab as k,ac as y,ad as V,T as Z,ae as ie,U as ce,i as de,af as me,ag as pe,G as h,ah as A,ai as be,aj as fe,I as ve,j as Ne,ak as Ie,o as v,c as z,q as $,g as t,K as L,al as P,d as O,w as j,f as F,am as he,an as Ve,a0 as q,N as H,ao as ye,ap as Ee,aq as T,ar as ge,W as we,B as _e,as as Se,at as J,a2 as Ae}from"./index-5c486a8c.js";const Pe=100,Fe=600,Q={beforeMount(l,N){const i=N.value,{interval:a=Pe,delay:E=Fe}=Y(i)?{}:i;let c,m;const u=()=>Y(i)?i():i.handler(),b=()=>{m&&(clearTimeout(m),m=void 0),c&&(clearInterval(c),c=void 0)};l.addEventListener("mousedown",g=>{g.button===0&&(b(),u(),document.addEventListener("mouseup",()=>b(),{once:!0}),m=setTimeout(()=>{c=setInterval(()=>{u()},a)},E))})}},Te=se({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:oe,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),ke={[X]:(l,N)=>N!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[k]:l=>p(l)||y(l),[V]:l=>p(l)||y(l)},xe=["aria-label","onKeydown"],Be=["aria-label","onKeydown"],Ce=Z({name:"ElInputNumber"}),De=Z({...Ce,props:Te,emits:ke,setup(l,{expose:N,emit:i}){const a=l,{t:E}=ie(),c=ce("input-number"),m=de(),u=me({currentValue:a.modelValue,userInput:null}),{formItem:b}=pe(),g=h(()=>p(a.modelValue)&&a.modelValue<=a.min),R=h(()=>p(a.modelValue)&&a.modelValue>=a.max),ee=h(()=>{const e=G(a.step);return A(a.precision)?Math.max(G(a.modelValue),e):(e>a.precision,a.precision)}),x=h(()=>a.controls&&a.controlsPosition==="right"),U=be(),I=fe(),B=h(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";A(a.precision)||(e=e.toFixed(a.precision))}return e}),C=(e,n)=>{if(A(n)&&(n=ee.value),n===0)return Math.round(e);let r=String(e);const s=r.indexOf(".");if(s===-1||!r.replace(".","").split("")[s+n])return e;const _=r.length;return r.charAt(_-1)==="5"&&(r=`${r.slice(0,Math.max(0,_-1))}6`),Number.parseFloat(Number(r).toFixed(n))},G=e=>{if(y(e))return 0;const n=e.toString(),r=n.indexOf(".");let s=0;return r!==-1&&(s=n.length-r-1),s},W=(e,n=1)=>p(e)?C(e+a.step*n):u.currentValue,D=()=>{if(a.readonly||I.value||R.value)return;const e=Number(B.value)||0,n=W(e);w(n),i(k,u.currentValue)},K=()=>{if(a.readonly||I.value||g.value)return;const e=Number(B.value)||0,n=W(e,-1);w(n),i(k,u.currentValue)},M=(e,n)=>{const{max:r,min:s,step:o,precision:f,stepStrictly:_,valueOnClear:S}=a;r<s&&_e("InputNumber","min should not be greater than max.");let d=Number(e);if(y(e)||Number.isNaN(d))return null;if(e===""){if(S===null)return null;d=Se(S)?{min:s,max:r}[S]:S}return _&&(d=C(Math.round(d/o)*o,f)),A(f)||(d=C(d,f)),(d>r||d<s)&&(d=d>r?r:s,n&&i(V,d)),d},w=(e,n=!0)=>{var r;const s=u.currentValue,o=M(e);if(!n){i(V,o);return}s!==o&&(u.userInput=null,i(V,o),i(X,o,s),a.validateEvent&&((r=b==null?void 0:b.validate)==null||r.call(b,"change").catch(f=>J())),u.currentValue=o)},ne=e=>{u.userInput=e;const n=e===""?null:Number(e);i(k,n),w(n,!1)},te=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&w(n),u.userInput=null},ae=()=>{var e,n;(n=(e=m.value)==null?void 0:e.focus)==null||n.call(e)},re=()=>{var e,n;(n=(e=m.value)==null?void 0:e.blur)==null||n.call(e)},le=e=>{i("focus",e)},ue=e=>{var n;i("blur",e),a.validateEvent&&((n=b==null?void 0:b.validate)==null||n.call(b,"blur").catch(r=>J()))};return ve(()=>a.modelValue,e=>{const n=M(u.userInput),r=M(e,!0);!p(n)&&(!n||n!==r)&&(u.currentValue=r,u.userInput=null)},{immediate:!0}),Ne(()=>{var e;const{min:n,max:r,modelValue:s}=a,o=(e=m.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(r)?o.setAttribute("aria-valuemax",String(r)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",String(u.currentValue)),o.setAttribute("aria-disabled",String(I.value)),!p(s)&&s!=null){let f=Number(s);Number.isNaN(f)&&(f=null),i(V,f)}}),Ie(()=>{var e;const n=(e=m.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${u.currentValue}`)}),N({focus:ae,blur:re}),(e,n)=>(v(),z("div",{class:L([t(c).b(),t(c).m(t(U)),t(c).is("disabled",t(I)),t(c).is("without-controls",!e.controls),t(c).is("controls-right",t(x))]),onDragstart:n[1]||(n[1]=T(()=>{},["prevent"]))},[e.controls?$((v(),z("span",{key:0,role:"button","aria-label":t(E)("el.inputNumber.decrease"),class:L([t(c).e("decrease"),t(c).is("disabled",t(g))]),onKeydown:P(K,["enter"])},[O(t(q),null,{default:j(()=>[t(x)?(v(),F(t(he),{key:0})):(v(),F(t(Ve),{key:1}))]),_:1})],42,xe)),[[t(Q),K]]):H("v-if",!0),e.controls?$((v(),z("span",{key:1,role:"button","aria-label":t(E)("el.inputNumber.increase"),class:L([t(c).e("increase"),t(c).is("disabled",t(R))]),onKeydown:P(D,["enter"])},[O(t(q),null,{default:j(()=>[t(x)?(v(),F(t(ye),{key:0})):(v(),F(t(Ee),{key:1}))]),_:1})],42,Be)),[[t(Q),D]]):H("v-if",!0),O(t(ge),{id:e.id,ref_key:"input",ref:m,type:"number",step:e.step,"model-value":t(B),placeholder:e.placeholder,readonly:e.readonly,disabled:t(I),size:t(U),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=T(()=>{},["prevent"])),onKeydown:[P(T(D,["prevent"]),["up"]),P(T(K,["prevent"]),["down"])],onBlur:ue,onFocus:le,onInput:ne,onChange:te},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Ke=we(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const ze=Ae(Ke);export{ze as E};