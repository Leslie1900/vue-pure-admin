var i=Object.defineProperty;var u=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var c=(e,n,f)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:f}):e[n]=f,t=(e,n)=>{for(var f in n||(n={}))a.call(n,f)&&c(e,f,n[f]);if(u)for(var f of u(n))m.call(n,f)&&c(e,f,n[f]);return e};import{d as s,N as o,aB as p,aC as l,aD as y}from"./index-DzWsiqob.js";function g(e,n){const f=/^IF-/;if(f.test(e)){const r=e.split(f)[1],I=r.slice(0,r.indexOf(" ")==-1?r.length:r.indexOf(" ")),d=r.slice(r.indexOf(" ")+1,r.length);return s({name:"FontIcon",render(){return o(p,t({icon:I,iconType:d},n))}})}else return typeof e=="function"||typeof(e==null?void 0:e.render)=="function"?n?o(e,t({},n)):e:typeof e=="object"?s({name:"OfflineIcon",render(){return o(l,t({icon:e},n))}}):s({name:"Icon",render(){const r=e&&e.includes(":")?y:l;return o(r,t({icon:e},n))}})}export{g as u};
