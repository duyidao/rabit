import{_ as P,a4 as T,M as C,a5 as A,G as $,r as j,o as h,c as u,a as t,d as s,F as z,b as D,g as n,w as d,N as G,e as p,t as c,a6 as M,Q,p as q,h as H,a7 as J}from"./index-5c486a8c.js";import{E as K}from"./empty-1b65249e.js";import{E as O}from"./input-number-b81ef7e5.js";const a=_=>(q("data-v-61673f19"),_=_(),H(),_),U={class:"xtx-cart-page"},W={class:"container m-top-20"},X={class:"cart"},Y={width:"120"},Z=a(()=>t("th",{width:"400"},"商品信息",-1)),tt=a(()=>t("th",{width:"220"},"单价",-1)),et=a(()=>t("th",{width:"180"},"数量",-1)),ot=a(()=>t("th",{width:"180"},"小计",-1)),st=a(()=>t("th",{width:"140"},"操作",-1)),nt={class:"goods"},ct=["src"],at={class:"name ellipsis"},lt={class:"tc"},dt={class:"tc"},_t={class:"tc"},rt={class:"f16 red"},it={class:"tc"},ht=a(()=>t("a",{href:"javascript:;"},"删除",-1)),ut={key:0},pt={colspan:"6"},mt={class:"cart-none"},vt={class:"action"},Ct={class:"batch"},ft={class:"red"},gt={class:"total"},kt={__name:"index",setup(_){const{cartList:l,cartChoseCount:f,cartChosePrice:g}=T(C()),{delCart:k,updateCheck:x,updateAllCheck:y,updateCount:b}=C(),w=A(),E=(o,r)=>{x(o,r)},F=$(()=>l.value.length&&l.value.every(o=>o.selected)),I=o=>{y(o)},N=(o,r)=>{b(o,r)},S=()=>{w.push({path:"/checkout"})};return(o,r)=>{const m=M,B=j("RouterLink"),L=O,R=J,v=Q,V=K;return h(),u("div",U,[t("div",W,[t("div",X,[t("table",null,[t("thead",null,[t("tr",null,[t("th",Y,[s(m,{"model-value":F.value,onChange:I},null,8,["model-value"])]),Z,tt,et,ot,st])]),t("tbody",null,[(h(!0),u(z,null,D(n(l),e=>(h(),u("tr",{key:e.id},[t("td",null,[s(m,{"model-value":e.selected,onChange:i=>E(i,e)},null,8,["model-value","onChange"])]),t("td",null,[t("div",nt,[s(B,{to:`/detail/${e.id}`},{default:d(()=>[t("img",{src:e.picture,alt:""},null,8,ct)]),_:2},1032,["to"]),t("div",null,[t("p",at,c(e.name),1)])])]),t("td",lt,[t("p",null,"¥"+c(e.price),1)]),t("td",dt,[s(L,{min:1,"model-value":e.count,onChange:i=>N(i,e)},null,8,["model-value","onChange"])]),t("td",_t,[t("p",rt,"¥"+c((e.price*e.count).toFixed(2)),1)]),t("td",it,[t("p",null,[s(R,{title:"确认删除吗?","confirm-button-text":"确认","cancel-button-text":"取消",onConfirm:i=>n(k)(e.skuId)},{reference:d(()=>[ht]),_:2},1032,["onConfirm"])])])]))),128)),n(l).length===0?(h(),u("tr",ut,[t("td",pt,[t("div",mt,[s(V,{description:"购物车列表为空"},{default:d(()=>[s(v,{type:"primary"},{default:d(()=>[p("随便逛逛")]),_:1})]),_:1})])])])):G("",!0)])])]),t("div",vt,[t("div",Ct,[p(" 共 "+c(n(l).length)+" 件商品，已选择 "+c(n(f))+" 件，商品合计： ",1),t("span",ft,"¥ "+c(n(g)),1)]),t("div",gt,[s(v,{size:"large",type:"primary",onClick:S},{default:d(()=>[p("下单结算")]),_:1})])])])])}}},wt=P(kt,[["__scopeId","data-v-61673f19"]]);export{wt as default};
