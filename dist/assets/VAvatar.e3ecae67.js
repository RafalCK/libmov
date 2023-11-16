import{e as x,n as H,u as V,m as M,g as q,x as U,i as L,j as K,l as G,a as J,p as Q,y as X,V as Y,r as Z}from"./group.c8b7e584.js";import{p as $,h as p,C as ee,ae as te,g as I,t as n,b,af as j,r as S,K as z,H as ae,E as ne,A as N,B as re,W as se,e as ie,V as le,I as oe,s as ue,U as ce}from"./index.9c18b507.js";const ve=$({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,l)=>{let{slots:r}=l;const{transition:t,...c}=e,{component:s=te,...i}=typeof t=="object"?t:{};return p(s,ee(typeof t=="string"?{name:t}:i,c),r)};function de(e){return{aspectStyles:b(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const me=I()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...x()},setup(e,l){let{slots:r}=l;const{aspectStyles:t}=de(e),{dimensionStyles:c}=H(e);return V(()=>{var s;return n("div",{class:"v-responsive",style:c.value},[n("div",{class:"v-responsive__sizer",style:t.value},null),(s=r.additional)==null?void 0:s.call(r),r.default&&n("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}});function ge(e,l){if(!j)return;const r=l.modifiers||{},t=l.value,{handler:c,options:s}=typeof t=="object"?t:{handler:t,options:{}},i=new IntersectionObserver(function(){var m;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const o=(m=e._observe)==null?void 0:m[l.instance.$.uid];if(!o)return;const v=d.some(_=>_.isIntersecting);c&&(!r.quiet||o.init)&&(!r.once||v||o.init)&&c(v,d,g),v&&r.once?A(e,l):o.init=!0},s);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:i},i.observe(e)}function A(e,l){var t;const r=(t=e._observe)==null?void 0:t[l.instance.$.uid];!r||(r.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const fe={mounted:ge,unmounted:A},Se=fe,_e=I()({name:"VImg",directives:{intersect:Se},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ve()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:r,slots:t}=l;const c=S(""),s=S(),i=S(e.eager?"loading":"idle"),d=S(),g=S(),o=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=b(()=>o.value.aspect||d.value/g.value||0);z(()=>e.src,()=>{m(i.value!=="idle")}),z(v,(a,u)=>{!a&&u&&s.value&&y(s.value)}),ae(()=>m());function m(a){if(!(e.eager&&a)&&!(j&&!a&&!e.eager)){if(i.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,y(u,null)}!o.value.src||ne(()=>{var u,f;if(r("loadstart",((u=s.value)==null?void 0:u.currentSrc)||o.value.src),(f=s.value)!=null&&f.complete){if(s.value.naturalWidth||R(),i.value==="error")return;v.value||y(s.value,null),_()}else v.value||y(s.value),k()})}}function _(){var a;k(),i.value="loaded",r("load",((a=s.value)==null?void 0:a.currentSrc)||o.value.src)}function R(){var a;i.value="error",r("error",((a=s.value)==null?void 0:a.currentSrc)||o.value.src)}function k(){const a=s.value;a&&(c.value=a.currentSrc||a.src)}let P=-1;function y(a){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{clearTimeout(P);const{naturalHeight:w,naturalWidth:B}=a;w||B?(d.value=B,g.value=w):!a.complete&&i.value==="loading"&&u!=null?P=window.setTimeout(f,u):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};f()}const T=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),O=()=>{var f;if(!o.value.src||i.value==="idle")return null;const a=n("img",{class:["v-img__img",T.value],src:o.value.src,srcset:o.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:_,onError:R},null),u=(f=t.sources)==null?void 0:f.call(t);return n(h,{transition:e.transition,appear:!0},{default:()=>[N(u?n("picture",{class:"v-img__picture"},[u,a]):a,[[le,i.value==="loaded"]])]})},W=()=>n(h,{transition:e.transition},{default:()=>[o.value.lazySrc&&i.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",T.value],src:o.value.lazySrc,alt:e.alt},null)]}),D=()=>t.placeholder?n(h,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,E=()=>t.error?n(h,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,F=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,C=S(!1);{const a=z(v,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{C.value=!0})}),a())})}return V(()=>N(n(me,{class:["v-img",{"v-img--booting":!C.value}],style:{width:ie(e.width==="auto"?d.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>n(se,null,[n(O,null,null),n(W,null,null),n(F,null,null),n(D,null,null),n(E,null,null)]),default:t.default}),[[re("intersect"),{handler:m,options:e.options},null,{once:!0}]])),{currentSrc:c,image:s,state:i,naturalWidth:d,naturalHeight:g}}}),ye=$({start:Boolean,end:Boolean,icon:oe,image:String,...M(),...q(),...U(),...L(),...ue(),...K({variant:"flat"})},"v-avatar"),ze=I()({name:"VAvatar",props:ye(),setup(e,l){let{slots:r}=l;const{themeClasses:t}=ce(e),{colorClasses:c,colorStyles:s,variantClasses:i}=G(e),{densityClasses:d}=J(e),{roundedClasses:g}=Q(e),{sizeClasses:o,sizeStyles:v}=X(e);return V(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,c.value,d.value,g.value,o.value,i.value],style:[s.value,v.value]},{default:()=>{var m;return[e.image?n(_e,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Y,{key:"icon",icon:e.icon},null):(m=r.default)==null?void 0:m.call(r),Z(!1,"v-avatar")]}})),{}}});export{Se as I,h as M,ze as V,_e as a,ve as m};