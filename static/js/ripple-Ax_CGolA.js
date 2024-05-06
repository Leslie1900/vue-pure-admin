import{d as v,b as a,w as l,e as c,A as h,f as e,i,h as t,B as n,k as r,g as d}from"./index-DzWsiqob.js";const f=d("p",{class:"font-medium"},"波纹(Ripple)",-1),b=d("div",{class:"mb-5"},"组件中的波纹",-1),w=d("div",{class:"mb-5"}," 只要在组件或HTML元素上使用v-ripple指令，就可以启用基本的ripple功能 ",-1),y={class:"mb-5 text-center shadow-md rounded-md p-8 text-lg select-none"},g={class:"inline-block shadow-md rounded-md p-8 text-lg select-none"},x=d("div",{class:"my-5"}," 当使用v-ripple.center时，将始终从目标的中心处产生波纹 ",-1),k={class:"mb-5 text-center shadow-md rounded-md p-8 text-lg select-none"},B=d("div",{class:"mb-5"},` 使用v-ripple="{ class: '' }"添加类来自定义波纹颜色，支持tailwindcss `,-1),D={class:"my-5 text-center shadow-md rounded-md p-4 text-lg select-none"},H=v({name:"Ripple",__name:"ripple",setup(C){return(N,T)=>{const m=c("el-link"),p=c("el-alert"),o=c("el-button"),u=c("el-space"),_=c("el-card"),s=h("ripple");return e(),a(_,{shadow:"never"},{header:l(()=>[f,i(m,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/ripple.vue",target:"_blank"},{default:l(()=>[t(" 代码位置 src/views/able/ripple.vue ")]),_:1})]),default:l(()=>[b,i(p,{title:"v-ripple在某些组件中使用波纹特效会异常，这是因为v-ripple指令只能作用于当前元素，某些组件有多层元素嵌套，且目标元素没在顶层，所以会导致特效异常",type:"warning",closable:!1}),i(u,{wrap:"",class:"my-5"},{default:l(()=>[n((e(),a(o,null,{default:l(()=>[t("Default")]),_:1})),[[s]]),n((e(),a(o,{type:"primary"},{default:l(()=>[t("Primary")]),_:1})),[[s]]),n((e(),a(o,{type:"success"},{default:l(()=>[t("Success")]),_:1})),[[s]]),n((e(),a(o,{type:"info"},{default:l(()=>[t("Info")]),_:1})),[[s]]),n((e(),a(o,{type:"warning"},{default:l(()=>[t("Warning")]),_:1})),[[s]]),n((e(),a(o,{type:"danger"},{default:l(()=>[t("Danger")]),_:1})),[[s]])]),_:1}),n((e(),a(_,{class:"mb-5 w-[510px] select-none",shadow:"hover"},{default:l(()=>[t(" 卡片 ")]),_:1})),[[s]]),w,n((e(),r("div",y,[t(" HTML元素 ")])),[[s]]),n((e(),r("span",g,[t(" 行内元素需要添加display: block或display: inline-block才能生效 ")])),[[s]]),x,n((e(),r("div",k,[t(" 始终从中心触发波纹 ")])),[[s,void 0,void 0,{center:!0}]]),B,i(p,{title:"自定义样式生效为文字颜色，例如：color: 'red';",type:"warning",closable:!1}),n((e(),r("div",D,[t(" 自定义波纹颜色 ")])),[[s,{class:"text-red-500"}]])]),_:1})}}});export{H as default};
