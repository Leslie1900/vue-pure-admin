import{a as c,p as i,i as t,e as s,h as o,F as m,L as r}from"./index-DzWsiqob.js";import{t as p}from"./data-Dm-4IAkq.js";function g(){const l=c(""),n=i(()=>p.filter(e=>!l.value||e.name.toLowerCase().includes(l.value.toLowerCase()))),u=(e,a)=>{r(`您修改了第 ${e} 行，数据为：${JSON.stringify(a)}`,{type:"success"})},d=(e,a)=>{r(`您删除了第 ${e} 行，数据为：${JSON.stringify(a)}`)};return{columns:[{prop:"date",headerSlot:"nameHeader"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{align:"right",headerRenderer:()=>t(s("el-input"),{modelValue:l.value,"onUpdate:modelValue":e=>l.value=e,size:"small",clearable:!0,placeholder:"Type to search"},null),cellRenderer:({index:e,row:a})=>t(m,null,[t(s("el-button"),{size:"small",onClick:()=>u(e+1,a)},{default:()=>[o("Edit")]}),t(s("el-button"),{size:"small",type:"danger",onClick:()=>d(e+1,a)},{default:()=>[o("Delete")]})])}],filterTableData:n}}export{g as useColumns};
