var te=Object.defineProperty;var $=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var I=(e,i,t)=>i in e?te(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,F=(e,i)=>{for(var t in i||(i={}))ne.call(i,t)&&I(e,t,i[t]);if($)for(var t of $(i))re.call(i,t)&&I(e,t,i[t]);return e};var O=(e,i,t)=>new Promise((B,c)=>{var x=o=>{try{f(t.next(o))}catch(s){c(s)}},g=o=>{try{f(t.throw(o))}catch(s){c(s)}},f=o=>o.done?B(o.value):Promise.resolve(o.value).then(x,g);f((t=t.apply(e,i)).next())});import{S as ue}from"./sortable.esm-CkCitmyH.js";import{d as ie,a as h,$ as oe,ah as b,fE as ce,ae as se,an as R,p as M,i as a,a6 as de,F as H,B as A,A as D,e as u,h as S,u as K,ad as p,aE as fe,d2 as ve,y as he,Z as be}from"./index-DzWsiqob.js";import{u as ge}from"./epTheme-C1d6YzmH.js";import{E as me,R as pe,C as xe,D as ye,S as Ce}from"./collapse-CMNTxGte.js";function ke(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!fe(e)}const we={title:{type:String,default:"列表"},tableRef:{type:Object},columns:{type:Array,default:()=>[]},isExpandAll:{type:Boolean,default:!0},tableKey:{type:[String,Number],default:"0"}},Ee=ie({name:"PureTableBar",props:we,emits:["refresh"],setup(e,{emit:i,slots:t,attrs:B}){const c=h("default"),x=h(!1),g=h(!0),f=h(!1),o=oe(),s=h(e.isExpandAll),P=b(e==null?void 0:e.columns).filter(l=>ce(l==null?void 0:l.hide)?!l.hide:!(se(l==null?void 0:l.hide)&&(l!=null&&l.hide())));let m=R(b(e==null?void 0:e.columns),"label");const C=h(R(b(P),"label")),d=h(b(e==null?void 0:e.columns)),T=M(()=>l=>({background:l===c.value?ge().epThemeColor:"",color:l===c.value?"#fff":"var(--el-text-color-primary)"})),k=M(()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"]),G=M(()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]);function L(){x.value=!0,i("refresh"),ve(500).then(()=>x.value=!1)}function U(){s.value=!s.value,_(e.tableRef.data,s.value)}function _(l,r){l.forEach(n=>{e.tableRef.toggleRowExpansion(n,r),n.children!==void 0&&n.children!==null&&_(n.children,r)})}function W(l){C.value=l?m:[],f.value=!1,d.value.map(r=>l?r.hide=!1:r.hide=!0)}function Z(l){C.value=l;const r=l.length;g.value=r===m.length,f.value=r>0&&r<m.length}function q(l,r){d.value.filter(n=>p(n.label)===p(r))[0].hide=!l}function J(){return O(this,null,function*(){g.value=!0,f.value=!1,d.value=b(e==null?void 0:e.columns),m=[],m=yield R(b(e==null?void 0:e.columns),"label"),C.value=R(b(P),"label")})}const Q={dropdown:()=>a(u("el-dropdown-menu"),{class:"translation"},{default:()=>[a(u("el-dropdown-item"),{style:T.value("large"),onClick:()=>c.value="large"},{default:()=>[S("宽松")]}),a(u("el-dropdown-item"),{style:T.value("default"),onClick:()=>c.value="default"},{default:()=>[S("默认")]}),a(u("el-dropdown-item"),{style:T.value("small"),onClick:()=>c.value="small"},{default:()=>[S("紧凑")]})]})},X=l=>{l.preventDefault(),he(()=>{var n;const r=((n=o==null?void 0:o.proxy)==null?void 0:n.$refs[`GroupRef${K(e.tableKey)}`]).$el.firstElementChild;ue.create(r,{animation:300,handle:".drag-btn",onEnd:({newIndex:y,oldIndex:v,item:le})=>{const j=le,V=j.parentNode,z=d.value[v],N=d.value[y];if(z!=null&&z.fixed||N!=null&&N.fixed){const E=V.children[v];y>v?V.insertBefore(j,E):V.insertBefore(j,E&&E.nextElementSibling);return}const ae=d.value.splice(v,1)[0];d.value.splice(y,0,ae)}})})},Y=l=>!!d.value.filter(r=>p(r.label)===p(l))[0].fixed,w=l=>({content:l,offset:[0,18],duration:[300,0],followCursor:!0,hideOnClick:"toggle"}),ee={reference:()=>A(a(Ce,{class:["w-[16px]",k.value]},null),[[D("tippy"),w("列设置")]])};return()=>{var r;let l;return a(H,null,[a("div",de(B,{class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"}),[a("div",{class:"flex justify-between w-full h-[60px] p-4"},[t!=null&&t.title?t.title():a("p",{class:"font-bold truncate"},[e.title]),a("div",{class:"flex items-center justify-around"},[t!=null&&t.buttons?a("div",{class:"flex mr-4"},[t.buttons()]):null,(r=e.tableRef)!=null&&r.size?a(H,null,[A(a(me,{class:["w-[16px]",k.value],style:{transform:s.value?"none":"rotate(-90deg)"},onClick:()=>U()},null),[[D("tippy"),w(s.value?"折叠":"展开")]]),a(u("el-divider"),{direction:"vertical"},null)]):null,A(a(pe,{class:["w-[16px]",k.value,x.value?"animate-spin":""],onClick:()=>L()},null),[[D("tippy"),w("刷新")]]),a(u("el-divider"),{direction:"vertical"},null),A(a(u("el-dropdown"),{trigger:"click"},F({default:()=>[a(xe,{class:["w-[16px]",k.value]},null)]},Q)),[[D("tippy"),w("密度")]]),a(u("el-divider"),{direction:"vertical"},null),a(u("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"200",trigger:"click"},F({default:()=>[a("div",{class:[G.value]},[a(u("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:g.value,"onUpdate:modelValue":n=>g.value=n,indeterminate:f.value,onChange:n=>W(n)},null),a(u("el-button"),{type:"primary",link:!0,onClick:()=>J()},{default:()=>[S("重置")]})]),a("div",{class:"pt-[6px] pl-[11px]"},[a(u("el-scrollbar"),{"max-height":"36vh"},{default:()=>[a(u("el-checkbox-group"),{ref:`GroupRef${K(e.tableKey)}`,modelValue:C.value,onChange:n=>Z(n)},{default:()=>[a(u("el-space"),{direction:"vertical",alignment:"flex-start",size:0},ke(l=m.map((n,y)=>a("div",{class:"flex items-center"},[a(ye,{class:["drag-btn w-[16px] mr-2",Y(n)?"!cursor-no-drop":"!cursor-grab"],onMouseenter:v=>X(v)},null),a(u("el-checkbox"),{key:y,label:n,value:n,onChange:v=>q(v,n)},{default:()=>[a("span",{title:p(n),class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[p(n)])]})])))?l:{default:()=>[l]})]})]})])]},ee))])]),t.default({size:c.value,dynamicColumns:d.value})])])}}}),je=be(Ee),Re={width:1024,height:1024,body:'<path fill="currentColor" d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"/>'},Ve=Re;export{je as P,Ve as R};
