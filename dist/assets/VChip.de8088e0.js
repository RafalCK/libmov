import{A as o,e as u}from"./_plugin-vue_export-helper.47d10205.js";import{g as z,u as Z,s as E,U as w,x as ee,y as p,t as l,I as P,M as L,L as ae,v as le,b,A as V,B as R,V as te,W as G,C as ne}from"./index.f72bfa60.js";import{v as se,i as M,j as T,w as ie,u as ce,R as de,d as oe,m as ue,f as re,z as ve,g as fe,h as pe,x as me,k as ke,l as ye,a as he,o as ge,p as Ie,y as Ce,A as Pe,q as be,r as Ve,V as m,c as k}from"./group.d662c0ad.js";import{a as Ae}from"./index.95970109.js";import{V as K}from"./VAvatar.ededeab6.js";const r="/person",De={getPopular(e){return o().get(`${r}/popular${u.APIKey}&page=${e}`)},getPersonById(e){return o().get(`${r}/${e}${u.APIKey}`)},getMoviesByPersonId(e){return o().get(`${r}/${e}/movie_credits${u.APIKey}`)},getSeriesByPersonId(e){return o().get(`${r}/${e}/tv_credits${u.APIKey}`)},getSocialsByPersonId(e){return o().get(`${r}/${e}/external_ids${u.APIKey}`)}};const F=Symbol.for("vuetify:v-chip-group");z()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Z},...se({selectedClass:"v-chip--selected"}),...M(),...E(),...T({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,y){let{slots:c}=y;const{themeClasses:v}=w(e),{isSelected:t,select:h,next:g,prev:I,selected:C}=ie(e,F);return ee({VChip:{color:p(e,"color"),disabled:p(e,"disabled"),filter:p(e,"filter"),variant:p(e,"variant")}}),ce(()=>l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},v.value]},{default:()=>{var f;return[(f=c.default)==null?void 0:f.call(c,{isSelected:t,select:h,next:g,prev:I,selected:C.value})]}})),{}}});const Le=z()({name:"VChip",directives:{Ripple:de},props:{activeClass:String,appendAvatar:String,appendIcon:P,closable:Boolean,closeIcon:{type:P,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:P,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:L,onClickOnce:L,...oe(),...ue(),...re(),...ve(),...fe(),...pe(),...me(),...M({tag:"span"}),...E(),...T({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,y){let{attrs:c,emit:v,slots:t}=y;const{t:h}=ae(),{borderClasses:g}=ke(e),{colorClasses:I,colorStyles:C,variantClasses:f}=ye(e),{densityClasses:q}=he(e),{elevationClasses:O}=ge(e),{roundedClasses:j}=Ie(e),{sizeClasses:N}=Ce(e),{themeClasses:U}=w(e),A=le(e,"modelValue"),a=Pe(e,F,!1),s=be(e,c),W=b(()=>e.link!==!1&&s.isLink.value),i=b(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),X=b(()=>({"aria-label":h(e.closeLabel),onClick(n){A.value=!1,v("click:close",n)}}));function S(n){var d;v("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function H(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),S(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),J=!!(d||t.append),Q=!!(t.close||e.closable),$=!!(t.filter||e.filter)&&a,B=!!(e.prependIcon||e.prependAvatar),Y=!!(B||t.prepend),x=!a||a.isSelected.value;return A.value&&V(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":$,"v-chip--pill":e.pill},U.value,g.value,x?I.value:void 0,q.value,O.value,j.value,N.value,f.value,a==null?void 0:a.selectedClass.value],style:[x?C.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:S,onKeydown:i.value&&!W.value&&H},{default:()=>{var _,D;return[Ve(i.value,"v-chip"),$&&l(Ae,{key:"filter"},{default:()=>[V(l("div",{class:"v-chip__filter"},[t.filter?V(l(k,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[R("slot"),t.filter,"default"]]):l(m,{key:"filter-icon",icon:e.filterIcon},null)]),[[te,a.isSelected.value]])]}),Y&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(k,{key:"prepend-defaults",disabled:!B,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(G,null,[e.prependIcon&&l(m,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(K,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),(D=(_=t.default)==null?void 0:_.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))!=null?D:e.text,J&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(k,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(G,null,[e.appendIcon&&l(m,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(K,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),Q&&l("div",ne({key:"close",class:"v-chip__close"},X.value),[t.close?l(k,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(m,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[R("ripple"),i.value&&e.ripple,null]])}}});export{De as P,Le as V};
