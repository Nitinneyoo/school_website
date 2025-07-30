import{_ as e,$ as t,a0 as i,a1 as r,a2 as n,a3 as o,a4 as s,a5 as a,a6 as l,a7 as d,a8 as c,a9 as u,aa as f,ab as p,ac as h,ad as g,ae as v,af as m,X as x,ag as b,ah as y,ai as $,aj as k,ak as S}from"./vendor-ATMdhrVz.js";const w=new WeakMap,C=new WeakMap,F={current:[]};let M=!1,E=0;const O=new Set,D=new Map;function z(e){const t=Array.from(e).sort((e,t)=>e instanceof P&&e.options.deps.includes(t)?1:t instanceof P&&t.options.deps.includes(e)?-1:0);for(const i of t){if(F.current.includes(i))continue;F.current.push(i),i.recompute();const e=C.get(i);if(e)for(const t of e){const e=w.get(t);e&&z(e)}}}function B(e){e.listeners.forEach(t=>t({prevVal:e.prevState,currentVal:e.state}))}function U(e){e.listeners.forEach(t=>t({prevVal:e.prevState,currentVal:e.state}))}function I(e){if(E>0&&!D.has(e)&&D.set(e,e.prevState),O.add(e),!(E>0||M))try{for(M=!0;O.size>0;){const e=Array.from(O);O.clear();for(const t of e){const e=D.get(t)??t.prevState;t.prevState=e,B(t)}for(const t of e){const e=w.get(t);e&&(F.current.push(t),z(e))}for(const t of e){const e=w.get(t);if(e)for(const t of e)U(t)}}}finally{M=!1,F.current=[],D.clear()}}function A(e){E++;try{e()}finally{if(E--,0===E){const e=Array.from(O)[0];e&&I(e)}}}class G{constructor(e,t){this.listeners=new Set,this.subscribe=e=>{var t,i;this.listeners.add(e);const r=null==(i=null==(t=this.options)?void 0:t.onSubscribe)?void 0:i.call(t,e,this);return()=>{this.listeners.delete(e),null==r||r()}},this.prevState=e,this.state=e,this.options=t}setState(e){var t,i,r;this.prevState=this.state,(null==(t=this.options)?void 0:t.updateFn)?this.state=this.options.updateFn(this.prevState)(e):!function(e){return"function"==typeof e}(e)?this.state=e:this.state=e(this.prevState),null==(r=null==(i=this.options)?void 0:i.onUpdate)||r.call(i),I(this)}}class P{constructor(e){this.listeners=new Set,this._subscriptions=[],this.lastSeenDepValues=[],this.getDepVals=()=>{const e=[],t=[];for(const i of this.options.deps)e.push(i.prevState),t.push(i.state);return this.lastSeenDepValues=t,{prevDepVals:e,currDepVals:t,prevVal:this.prevState??void 0}},this.recompute=()=>{var e,t;this.prevState=this.state;const{prevDepVals:i,currDepVals:r,prevVal:n}=this.getDepVals();this.state=this.options.fn({prevDepVals:i,currDepVals:r,prevVal:n}),null==(t=(e=this.options).onUpdate)||t.call(e)},this.checkIfRecalculationNeededDeeply=()=>{for(const r of this.options.deps)r instanceof P&&r.checkIfRecalculationNeededDeeply();let e=!1;const t=this.lastSeenDepValues,{currDepVals:i}=this.getDepVals();for(let r=0;r<i.length;r++)if(i[r]!==t[r]){e=!0;break}e&&this.recompute()},this.mount=()=>(this.registerOnGraph(),this.checkIfRecalculationNeededDeeply(),()=>{this.unregisterFromGraph();for(const e of this._subscriptions)e()}),this.subscribe=e=>{var t,i;this.listeners.add(e);const r=null==(i=(t=this.options).onSubscribe)?void 0:i.call(t,e,this);return()=>{this.listeners.delete(e),null==r||r()}},this.options=e,this.state=e.fn({prevDepVals:void 0,prevVal:void 0,currDepVals:this.getDepVals().currDepVals})}registerOnGraph(e=this.options.deps){for(const t of e)if(t instanceof P)t.registerOnGraph(),this.registerOnGraph(t.options.deps);else if(t instanceof G){let e=w.get(t);e||(e=new Set,w.set(t,e)),e.add(this);let i=C.get(this);i||(i=new Set,C.set(this,i)),i.add(t)}}unregisterFromGraph(e=this.options.deps){for(const t of e)if(t instanceof P)this.unregisterFromGraph(t.options.deps);else if(t instanceof G){const e=w.get(t);e&&e.delete(this);const i=C.get(this);i&&i.delete(t)}}}const T="__TSR_index",R="popstate",L="beforeunload";function _(e){let t=e.getLocation();const i=new Set,r=r=>{t=e.getLocation(),i.forEach(e=>e({location:t,action:r}))},n=i=>{e.notifyOnIndexChange??1?r(i):t=e.getLocation()},o=async({task:i,navigateOpts:r,...n})=>{var o,s;if((null==r?void 0:r.ignoreBlocker)??!1)return void i();const a=(null==(o=e.getBlockers)?void 0:o.call(e))??[],l="PUSH"===n.type||"REPLACE"===n.type;if("undefined"!=typeof document&&a.length&&l)for(const d of a){const i=W(n.path,n.state);if(await d.blockerFn({currentLocation:t,nextLocation:i,action:n.type}))return void(null==(s=e.onBlocked)||s.call(e))}i()};return{get location(){return t},get length(){return e.getLength()},subscribers:i,subscribe:e=>(i.add(e),()=>{i.delete(e)}),push:(i,n,s)=>{const a=t.state[T];n=j(a+1,n),o({task:()=>{e.pushState(i,n),r({type:"PUSH"})},navigateOpts:s,type:"PUSH",path:i,state:n})},replace:(i,n,s)=>{const a=t.state[T];n=j(a,n),o({task:()=>{e.replaceState(i,n),r({type:"REPLACE"})},navigateOpts:s,type:"REPLACE",path:i,state:n})},go:(t,i)=>{o({task:()=>{e.go(t),n({type:"GO",index:t})},navigateOpts:i,type:"GO"})},back:t=>{o({task:()=>{e.back((null==t?void 0:t.ignoreBlocker)??!1),n({type:"BACK"})},navigateOpts:t,type:"BACK"})},forward:t=>{o({task:()=>{e.forward((null==t?void 0:t.ignoreBlocker)??!1),n({type:"FORWARD"})},navigateOpts:t,type:"FORWARD"})},canGoBack:()=>0!==t.state[T],createHref:t=>e.createHref(t),block:t=>{var i;if(!e.setBlockers)return()=>{};const r=(null==(i=e.getBlockers)?void 0:i.call(e))??[];return e.setBlockers([...r,t]),()=>{var i,r;const n=(null==(i=e.getBlockers)?void 0:i.call(e))??[];null==(r=e.setBlockers)||r.call(e,n.filter(e=>e!==t))}},flush:()=>{var t;return null==(t=e.flush)?void 0:t.call(e)},destroy:()=>{var t;return null==(t=e.destroy)?void 0:t.call(e)},notify:r}}function j(e,t){t||(t={});const i=N();return{...t,key:i,__TSR_key:i,[T]:e}}function H(e){var t,i;const r="undefined"!=typeof document?window:void 0,n=r.history.pushState,o=r.history.replaceState;let s=[];const a=()=>s,l=()=>W(`${r.location.pathname}${r.location.search}${r.location.hash}`,r.history.state);if(!(null==(t=r.history.state)?void 0:t.__TSR_key)&&!(null==(i=r.history.state)?void 0:i.key)){const e=N();r.history.replaceState({[T]:0,key:e,__TSR_key:e},"")}let d,c=l(),u=!1,f=!1,p=!1,h=!1;let g,v;const m=()=>{g&&(k._ignoreSubscribers=!0,(g.isPush?r.history.pushState:r.history.replaceState)(g.state,"",g.href),k._ignoreSubscribers=!1,g=void 0,v=void 0,d=void 0)},x=(e,t,i)=>{const r=t;v||(d=c),c=W(t,i),g={href:r,state:i,isPush:(null==g?void 0:g.isPush)||"push"===e},v||(v=Promise.resolve().then(()=>m()))},b=e=>{c=l(),k.notify({type:e})},y=async()=>{if(f)return void(f=!1);const e=l(),t=e.state[T]-c.state[T],i=-1===t,n=!(1===t)&&!i||u;u=!1;const o=n?"GO":i?"BACK":"FORWARD",s=n?{type:"GO",index:t}:{type:i?"BACK":"FORWARD"};if(p)p=!1;else{const t=a();if("undefined"!=typeof document&&t.length)for(const i of t){if(await i.blockerFn({currentLocation:c,nextLocation:e,action:o}))return f=!0,r.history.go(1),void k.notify(s)}}c=l(),k.notify(s)},$=e=>{if(h)return void(h=!1);let t=!1;const i=a();if("undefined"!=typeof document&&i.length)for(const r of i){const e=r.enableBeforeUnload??!0;if(!0===e){t=!0;break}if("function"==typeof e&&!0===e()){t=!0;break}}return t?(e.preventDefault(),e.returnValue=""):void 0},k=_({getLocation:()=>c,getLength:()=>r.history.length,pushState:(e,t)=>x("push",e,t),replaceState:(e,t)=>x("replace",e,t),back:e=>(e&&(p=!0),h=!0,r.history.back()),forward:e=>{e&&(p=!0),h=!0,r.history.forward()},go:e=>{u=!0,r.history.go(e)},createHref:e=>e,flush:m,destroy:()=>{r.history.pushState=n,r.history.replaceState=o,r.removeEventListener(L,$,{capture:!0}),r.removeEventListener(R,y)},onBlocked:()=>{d&&c!==d&&(c=d)},getBlockers:a,setBlockers:e=>s=e,notifyOnIndexChange:!1});return r.addEventListener(L,$,{capture:!0}),r.addEventListener(R,y),r.history.pushState=function(...e){const t=n.apply(r.history,e);return k._ignoreSubscribers||b("PUSH"),t},r.history.replaceState=function(...e){const t=o.apply(r.history,e);return k._ignoreSubscribers||b("REPLACE"),t},k}function V(e={initialEntries:["/"]}){const t=e.initialEntries;let i=e.initialIndex?Math.min(Math.max(e.initialIndex,0),t.length-1):t.length-1;const r=t.map((e,t)=>j(t,void 0));return _({getLocation:()=>W(t[i],r[i]),getLength:()=>t.length,pushState:(e,n)=>{i<t.length-1&&(t.splice(i+1),r.splice(i+1)),r.push(n),t.push(e),i=Math.max(t.length-1,0)},replaceState:(e,n)=>{r[i]=n,t[i]=e},back:()=>{i=Math.max(i-1,0)},forward:()=>{i=Math.min(i+1,t.length-1)},go:e=>{i=Math.min(Math.max(i+e,0),t.length-1)},createHref:e=>e})}function W(e,t){const i=e.indexOf("#"),r=e.indexOf("?"),n=N();return{href:e,pathname:e.substring(0,i>0?r>0?Math.min(i,r):i:r>0?r:e.length),hash:i>-1?e.substring(i):"",search:r>-1?e.slice(r,-1===i?void 0:i):"",state:t||{[T]:0,key:n,__TSR_key:n}}}function N(){return(Math.random()+1).toString(36).substring(7)}const K={},J=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),n=i?.nonce||i?.getAttribute("nonce");r=e(t.map(e=>{if((e=function(e){return"/"+e}(e))in K)return;K[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script"),r.crossOrigin="",r.href=e,n&&r.setAttribute("nonce",n),document.head.appendChild(r),t?new Promise((t,i)=>{r.addEventListener("load",t),r.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)})},q=e(void 0),Y=e(void 0);var Z,X,Q,ee,te,ie,re,ne,oe,se,ae,le,de=e=>{throw TypeError(e)},ce=(e,t,i)=>t.has(e)||de("Cannot "+i),ue=(e,t,i)=>(ce(e,t,"read from private field"),t.get(e)),fe=(e,t,i)=>t.has(e)?de("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),pe=(e,t,i,r)=>(ce(e,t,"write to private field"),t.set(e,i),i);class he{constructor(e){fe(this,Z),fe(this,X),fe(this,Q),fe(this,ee),fe(this,te),fe(this,ie),fe(this,re),fe(this,ne),fe(this,oe),fe(this,se,!1),fe(this,ae),fe(this,le),pe(this,Z,i(e.router)),pe(this,X,i(e.routerState)),pe(this,Q,e.position??"bottom-left"),pe(this,ee,e.initialIsOpen??!1),pe(this,te,e.shadowDOMTarget),pe(this,ie,e.panelProps),pe(this,re,e.closeButtonProps),pe(this,ne,e.toggleButtonProps),pe(this,oe,e.containerElement)}mount(e){if(ue(this,se))throw new Error("Devtools is already mounted");const t=r(()=>{const[e]=ue(this,Z),[t]=ue(this,X),i=ue(this,Q),r=ue(this,ee),s=ue(this,te),a=ue(this,ie),l=ue(this,re),d=ue(this,ne),c=ue(this,oe);let u;return ue(this,ae)?u=ue(this,ae):(u=n(()=>J(()=>Promise.resolve().then(()=>pt),void 0)),pe(this,ae,u)),o(q.Provider,{value:s,get children(){return o(u,{position:i,initialIsOpen:r,router:e,routerState:t,shadowDOMTarget:s,panelProps:a,closeButtonProps:l,toggleButtonProps:d,containerElement:c})}})},e);pe(this,se,!0),pe(this,le,t)}unmount(){var e;if(!ue(this,se))throw new Error("Devtools is not mounted");null==(e=ue(this,le))||e.call(this),pe(this,se,!1)}setRouter(e){ue(this,Z)[1](e)}setRouterState(e){ue(this,X)[1](e)}setOptions(e){void 0!==e.position&&pe(this,Q,e.position),void 0!==e.initialIsOpen&&pe(this,ee,e.initialIsOpen),void 0!==e.shadowDOMTarget&&pe(this,te,e.shadowDOMTarget),void 0!==e.containerElement&&pe(this,oe,e.containerElement)}}Z=new WeakMap,X=new WeakMap,Q=new WeakMap,ee=new WeakMap,te=new WeakMap,ie=new WeakMap,re=new WeakMap,ne=new WeakMap,oe=new WeakMap,se=new WeakMap,ae=new WeakMap,le=new WeakMap,console.warn("[@tanstack/router-devtools] This package has moved to @tanstack/react-router-devtools. Please switch to the new package at your earliest convenience, as this package will be dropped in the next major version release.");const ge="undefined"==typeof window;function ve(e){return e.isFetching&&"success"===e.status?"beforeLoad"===e.isFetching?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[e.status]}function me(e){return e.replace(/\/{2,}/g,"/")}function xe(e){return function(e){return"/"===e?e:e.replace(/\/{1,}$/,"")}(function(e){return"/"===e?e:e.replace(/^\/{1,}/,"")}(e))}const be=(e,t)=>{if(!e)return[];const i=null==t?void 0:t.get(e);if(i)return i;const r=function(e){e=me(e);const t=[];"/"===e.slice(0,1)&&(e=e.substring(1),t.push({type:0,value:"/"}));if(!e)return t;const i=e.split("/").filter(Boolean);t.push(...i.map(e=>{const t=e.match(we);if(t){return{type:2,value:"$",prefixSegment:t[1]||void 0,suffixSegment:t[2]||void 0}}const i=e.match(ke);if(i){const e=i[1];return{type:3,value:i[2],prefixSegment:e||void 0,suffixSegment:i[3]||void 0}}const r=e.match($e);if(r){const e=r[1];return{type:1,value:""+r[2],prefixSegment:e||void 0,suffixSegment:r[3]||void 0}}if(ye.test(e)){return{type:1,value:"$"+e.substring(1),prefixSegment:void 0,suffixSegment:void 0}}return Se.test(e)?{type:2,value:"$",prefixSegment:void 0,suffixSegment:void 0}:{type:0,value:e.includes("%25")?e.split("%25").map(e=>decodeURI(e)).join("%25"):decodeURI(e)}})),"/"===e.slice(-1)&&(e=e.substring(1),t.push({type:0,value:"/"}));return t}(e);return null==t||t.set(e,r),r},ye=/^\$.{1,}$/,$e=/^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,ke=/^(.*?)\{-(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,Se=/^\$$/,we=/^(.*?)\{\$\}(.*)$/;function Ce({path:e,params:t,leaveWildcards:i,leaveParams:r,decodeCharMap:n,parseCache:o}){const s=be(e,o);function a(e){const i=t[e],r="string"==typeof i;return"*"===e||"_splat"===e?r?encodeURI(i):i:r?function(e,t){let i=encodeURIComponent(e);if(t)for(const[r,n]of t)i=i.replaceAll(r,n);return i}(i,n):i}let l=!1;const d={},c=me(s.map(e=>{if(0===e.type)return e.value;if(2===e.type){d._splat=t._splat;const i=e.prefixSegment||"",r=e.suffixSegment||"";return"_splat"in t?`${i}${a("_splat")}${r}`:(l=!0,i||r?`${i}${r}`:void 0)}if(1===e.type){const i=e.value.substring(1);l||i in t||(l=!0),d[i]=t[i];const r=e.prefixSegment||"",n=e.suffixSegment||"";return`${r}${a(i)??"undefined"}${n}`}if(3===e.type){const i=e.value.substring(1),r=e.prefixSegment||"",n=e.suffixSegment||"";return i in t&&null!=t[i]?(d[i]=t[i],`${r}${a(i)??""}${n}`):r||n?`${r}${n}`:void 0}return e.value}).filter(e=>void 0!==e).join("/"));return{usedParams:d,interpolatedPath:c,isMissingParams:l}}const Fe="__root__",Me={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",70:"b3",20:"33"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)"},weight:{normal:"400",medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",full:"9999px"}},size:{0:"0px",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",5:"calc(var(--tsrd-font-size) * 1.25)",8:"calc(var(--tsrd-font-size) * 2)"}};function Ee(){const e=t(q),[r]=i((e=>{const{colors:t,font:i,size:r,alpha:n,border:o}=Me,{fontFamily:s,lineHeight:a,size:d}=i,c=e?l.bind({target:e}):l;return{devtoolsPanelContainer:c`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>c`
        visibility: ${e?"visible":"hidden"};
      `,devtoolsPanelContainerResizing:e=>e()?c`
          transition: none;
        `:c`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?c`
          pointer-events: auto;
          transform: translateY(0);
        `:c`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:c`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${s.sans};
      gap: ${Me.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:c`
      font-size: ${i.size.md};
      font-weight: ${i.weight.bold};
      line-height: ${i.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:c`
      font-weight: ${i.weight.semibold};
      font-size: ${i.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:c`
      display: flex;
      font-size: ${d.sm};
      font-family: ${s.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${d.xs};
      }
    `,dragHandle:c`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${n[90]};
      }
    `,firstContainer:c`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:c`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:c`
      padding: ${Me.size[2]};
    `,row:c`
      display: flex;
      align-items: center;
      padding: ${Me.size[2]} ${Me.size[2.5]};
      gap: ${Me.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:c`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${Me.size[2]};
      font-weight: ${i.weight.medium};
      font-size: ${i.size.xs};
      min-height: ${Me.size[8]};
      line-height: ${i.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:c`
      background: ${t.yellow[900]}${n[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${Me.size[0]} ${Me.size[2.5]};
      border-radius: ${o.radius.full};
      font-size: ${i.size.xs};
      font-weight: ${i.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:c`
      color: ${t.yellow[300]};
    `,detailsContent:c`
      padding: ${Me.size[1.5]} ${Me.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${i.size.xs};
    `,routeMatchesToggle:c`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${o.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{const o=[c`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${s.sans};
        font-weight: ${i.weight.medium};
      `];if(e){const e=c`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;o.push(e)}else{const e=c`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${n[20]};
        `;o.push(e)}return r&&o.push(c`
          border-right: 1px solid ${Me.colors.gray[500]};
        `),o},detailsHeaderInfo:c`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${i.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{const i=[c`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${d.xs};
        color: ${t.gray[300]};
      `];if(e){const e=c`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},matchIndicator:e=>{const i=[c`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${o.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if("gray"===e){const e=c`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;i.push(e)}return i},matchID:c`
      flex: 1;
      line-height: ${a.xs};
    `,ageTicker:e=>{const i=[c`
        display: flex;
        gap: ${r[1]};
        font-size: ${d.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${a.xs};
      `];if(e){const e=c`
          color: ${t.yellow[400]};
        `;i.push(e)}return i},secondContainer:c`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:c`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:c`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:c`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,i)=>{const n=[c`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${d.xs};
        color: ${t.gray[300]};
        cursor: ${i?"pointer":"default"};
        line-height: ${a.xs};
      `];if(e){const e=c`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},routesRow:e=>{const i=[c`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${d.xs};
        line-height: ${a.xs};
      `];if(!e){const e=c`
          color: ${t.gray[400]};
        `;i.push(e)}return i},routesRowInner:c`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:c`
      color: ${t.gray[400]};
      font-size: ${d.xs};
      line-height: ${a.xs};
    `,nestedRouteRow:e=>c`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?"":`solid 1px ${t.gray[700]}`};
      `,code:c`
      font-size: ${d.xs};
      line-height: ${a.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:c`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:c`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,maskedBadgeContainer:c`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:c`
      display: flex;
      flex-direction: column;
      padding: ${Me.size[2]};
      font-size: ${Me.font.size.xs};
      color: ${Me.colors.gray[300]};
      line-height: ${Me.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{const i=t&&"success"===e?"beforeLoad"===t?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[e];return c`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${Me.border.radius.sm};
        font-weight: ${Me.font.weight.normal};
        background-color: ${Me.colors[i][900]}${Me.alpha[90]};
        color: ${Me.colors[i][300]};
        border: 1px solid ${Me.colors[i][600]};
        margin-bottom: ${Me.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:c`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:c`
      display: flex;
    `,mainCloseBtn:c`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${o.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${i.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>c`
        ${"top-left"===e?`top: ${r[2]}; left: ${r[2]};`:""}
        ${"top-right"===e?`top: ${r[2]}; right: ${r[2]};`:""}
        ${"bottom-left"===e?`bottom: ${r[2]}; left: ${r[2]};`:""}
        ${"bottom-right"===e?`bottom: ${r[2]}; right: ${r[2]};`:""}
      `,mainCloseBtnAnimation:e=>e?c`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:c`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:c`
      font-weight: ${i.weight.semibold};
      font-size: ${i.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:c`
      width: 1px;
      background: ${Me.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:c`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:c`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:c`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:c`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${o.radius.sm} ${o.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:c`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:c`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${d.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}})(e));return r}function Oe(e,t){const[r,n]=i();s(()=>{const i=(e=>{try{const t=localStorage.getItem(e);return"string"==typeof t?JSON.parse(t):void 0}catch{return}})(e);n(null==i?"function"==typeof t?t():t:i)});return[r,t=>{n(i=>{let r=t;"function"==typeof t&&(r=t(i));try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})}]}var De=c('<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">'),ze=c("<div>"),Be=c("<button><span> "),Ue=c("<div><div><button> [<!> ... <!>]"),Ie=c("<button><span></span> 🔄 "),Ae=c("<span>:"),Ge=c("<span>");const Pe=({expanded:e,style:t={}})=>{const i=Le();return r=De(),n=r.firstChild,a(t=>{var o=i().expander,s=h(i().expanderIcon(e));return o!==t.e&&p(r,t.e=o),s!==t.t&&g(n,"class",t.t=s),t},{e:void 0,t:void 0}),r;var r,n};function Te({value:e,defaultExpanded:t,pageSize:r=100,filterSubEntries:n,...s}){const[l,c]=i(Boolean(t)),g=d(()=>typeof e()),v=d(()=>{let i=[];const r=e=>{const i=!0===t?{[e.label]:!0}:null==t?void 0:t[e.label];return{...e,value:()=>e.value,defaultExpanded:i}};var o;return Array.isArray(e())?i=e().map((e,t)=>r({label:t.toString(),value:e})):null!==e()&&"object"==typeof e()&&(o=e(),Symbol.iterator in o)&&"function"==typeof e()[Symbol.iterator]?i=Array.from(e(),(e,t)=>r({label:t.toString(),value:e})):"object"==typeof e()&&null!==e()&&(i=Object.entries(e()).map(([e,t])=>r({label:e,value:t}))),n?n(i):i}),x=d(()=>function(e,t){if(t<1)return[];let i=0;const r=[];for(;i<e.length;)r.push(e.slice(i,i+t)),i+=t;return r}(v(),r)),[b,y]=i([]),[$,k]=i(void 0),S=Le(),w=()=>{k(e()())},C=t=>o(Te,m({value:e,filterSubEntries:n},s,t));return M=ze(),u(M,(F=f(()=>!!x().length),()=>{return F()?[(i=Be(),n=i.firstChild,d=n.firstChild,i.$$click=()=>c(e=>!e),u(i,o(Pe,{get expanded(){return l()??!1}}),n),u(i,()=>s.label,n),u(n,()=>"iterable"===String(g).toLowerCase()?"(Iterable) ":"",d),u(n,()=>v().length,d),u(n,()=>v().length>1?"items":"item",null),a(e=>{var t=S().expandButton,r=S().info;return t!==e.e&&p(i,e.e=t),r!==e.t&&p(n,e.t=r),e},{e:void 0,t:void 0}),i),f(()=>{return f(()=>!!l())()?f(()=>1===x().length)()?(t=ze(),u(t,()=>v().map((e,t)=>C(e))),a(()=>p(t,S().subEntries)),t):(e=ze(),u(e,()=>x().map((e,t)=>{return n=Ue(),s=n.firstChild,l=s.firstChild,d=l.firstChild,c=d.nextSibling,(g=c.nextSibling.nextSibling).nextSibling,l.$$click=()=>y(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),u(l,o(Pe,{get expanded(){return b().includes(t)}}),d),u(l,t*r,c),u(l,t*r+r-1,g),u(s,(i=f(()=>!!b().includes(t)),()=>{return i()?(t=ze(),u(t,()=>e.map(e=>C(e))),a(()=>p(t,S().subEntries)),t):null;var t}),null),a(e=>{var t=S().entry,i=h(S().labelButton,"labelButton");return t!==e.e&&p(s,e.e=t),i!==e.t&&p(l,e.t=i),e},{e:void 0,t:void 0}),n;var i,n,s,l,d,c,g})),a(()=>p(e,S().subEntries)),e):null;var e,t})]:(t=f(()=>"function"===g()),()=>{return t()?o(Te,{get label(){return e=Ie(),t=e.firstChild,e.$$click=w,u(t,()=>s.label),a(()=>p(e,S().refreshValueBtn)),e;var e,t},value:$,defaultExpanded:{}}):[(r=Ae(),n=r.firstChild,u(r,()=>s.label,n),r)," ",(i=Ge(),u(i,()=>(e=>{const t=Object.getOwnPropertyNames(Object(e)),i="bigint"==typeof e?`${e.toString()}n`:e;try{return JSON.stringify(i,t)}catch(r){return"unable to stringify"}})(e())),a(()=>p(i,S().value)),i)];var i,r,n});var t,i,n,d})),a(()=>p(M,S().entry)),M;var F,M}const Re=e=>{const{colors:t,font:i,size:r}=Me,{fontFamily:n,lineHeight:o,size:s}=i,a=e?l.bind({target:e}):l;return{entry:a`
      font-family: ${n.mono};
      font-size: ${s.xs};
      line-height: ${o.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:a`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:a`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?a`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:a`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:a`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:a`
      color: ${t.purple[400]};
    `,subEntries:a`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:a`
      color: ${t.gray[500]};
      font-size: ${s["2xs"]};
      padding-left: ${r[1]};
    `,refreshValueBtn:a`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${n.mono};
      font-size: ${s.xs};
    `}};function Le(){const e=t(q),[r]=i(Re(e));return r}v(["click"]);var _e=c("<div><div></div><div>/</div><div></div><div>/</div><div>");function je(e){const t=[e/1e3,e/6e4,e/36e5,e/864e5];let i=0;for(let r=1;r<t.length&&!(t[r]<1);r++)i=r;return new Intl.NumberFormat(navigator.language,{compactDisplay:"short",notation:"compact",maximumFractionDigits:0}).format(t[i])+["s","min","h","d"][i]}function He({match:e,router:t}){const i=Ee();if(!e)return null;const r=t().looseRoutesById[e.routeId];if(!r.options.loader)return null;const n=Date.now()-e.updatedAt,o=r.options.staleTime??t().options.defaultStaleTime??0,s=r.options.gcTime??t().options.defaultGcTime??18e5;return l=_e(),d=l.firstChild,c=d.nextSibling.nextSibling,f=c.nextSibling.nextSibling,u(d,()=>je(n)),u(c,()=>je(o)),u(f,()=>je(s)),a(()=>p(l,h(i().ageTicker(n>o)))),l;var l,d,c,f}var Ve=c("<button type=button>➔");function We({to:e,params:t,search:i,router:r}){const n=Ee();return(o=Ve()).$$click=n=>{n.stopPropagation(),r().navigate({to:e,params:t,search:i})},g(o,"title",`Navigate to ${e}`),a(()=>p(o,n().navigateButton)),o;var o}v(["click"]);var Ne=c("<button><div>TANSTACK</div><div>TanStack Router v1"),Ke=c("<div><div>"),Je=c("<code> "),qe=c("<code>"),Ye=c("<div><div role=button><div>"),Ze=c("<div>"),Xe=c('<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button></div><div><div>age / staleTime / gcTime</div></div></div><div>'),Qe=c("<div><span>masked"),et=c("<div role=button><div>"),tt=c("<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>"),it=c("<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>"),rt=c("<div>Loader Data"),nt=c("<div><div>Search Params</div><div>");function ot(e){const{className:t,...i}=e,r=Ee();return n=Ne(),o=n.firstChild,s=o.nextSibling,b(n,m(i,{get class(){return h(r().logo,t?t():"")}}),!1,!0),a(e=>{var t=r().tanstackLogo,i=r().routerLogo;return t!==e.e&&p(o,e.e=t),i!==e.t&&p(s,e.t=i),e},{e:void 0,t:void 0}),n;var n,o,s}function st(e){return t=Ke(),i=t.firstChild,t.style.setProperty("display","flex"),t.style.setProperty("align-items","center"),t.style.setProperty("width","100%"),u(t,()=>e.left,i),i.style.setProperty("flex-grow","1"),i.style.setProperty("min-width","0"),u(i,()=>e.children),u(t,()=>e.right,null),a(()=>p(t,e.class)),t;var t,i}function at({routerState:e,router:t,route:i,isRoot:r,activeId:n,setActiveId:s}){const l=Ee(),c=d(()=>e().pendingMatches||e().matches),v=d(()=>e().matches.find(e=>e.routeId===i.id)),m=d(()=>{var e,t;try{if(null==(e=v())?void 0:e.params){const e=null==(t=v())?void 0:t.params,r=i.path||xe(i.id);if(r.startsWith("$")){const t=r.slice(1);if(e[t])return`(${e[t]})`}}return""}catch(r){return""}}),x=d(()=>{if(r)return;if(!i.path)return;const e=Object.assign({},...c().map(e=>e.params)),n=Ce({path:i.fullPath,params:e,leaveWildcards:!1,leaveParams:!1,decodeCharMap:t().pathParamsDecodeCharMap});return n.isMissingParams?void 0:n.interpolatedPath});return y=Ye(),k=y.firstChild,S=k.firstChild,k.$$click=()=>{v()&&s(n()===i.id?"":i.id)},u(k,o(st,{get class(){return h(l().routesRow(!!v()))},get left(){return o($,{get when(){return x()},children:e=>o(We,{get to(){return e()},router:t})})},get right(){return o(He,{get match(){return v()},router:t})},get children(){return[(t=Je(),n=t.firstChild,u(t,()=>r?Fe:i.path||xe(i.id),n),a(()=>p(t,l().code)),t),(e=qe(),u(e,m),a(()=>p(e,l().routeParamInfo)),e)];var e,t,n}}),null),u(y,(b=f(()=>{var e;return!!(null==(e=i.children)?void 0:e.length)}),()=>{return b()?(d=Ze(),u(d,()=>[...i.children].sort((e,t)=>e.rank-t.rank).map(i=>o(at,{routerState:e,router:t,route:i,activeId:n,setActiveId:s}))),a(()=>p(d,l().nestedRouteRow(!!r))),d):null;var d}),null),a(e=>{var t=`Open match details for ${i.id}`,r=h(l().routesRowContainer(i.id===n(),!!v())),o=h(l().matchIndicator(function(e,t){const i=e.find(e=>e.routeId===t.id);return i?ve(i):"gray"}(c(),i)));return t!==e.e&&g(k,"aria-label",e.e=t),r!==e.t&&p(k,e.t=r),o!==e.a&&p(S,e.a=o),e},{e:void 0,t:void 0,a:void 0}),y;var b,y,k,S}const lt=function({...e}){const{isOpen:i=!0,setIsOpen:r,handleDragStart:n,router:s,routerState:l,shadowDOMTarget:c,...v}=e,{onCloseClick:$}=(()=>{const e=t(Y);if(!e)throw new Error("useDevtoolsOnClose must be used within a TanStackRouterDevtools component");return e})(),k=Ee(),{className:S,style:w,...C}=v;x(s);const[F,M]=Oe("tanstackRouterDevtoolsShowMatches",!0),[E,O]=Oe("tanstackRouterDevtoolsActiveRouteId",""),D=d(()=>[...l().pendingMatches??[],...l().matches,...l().cachedMatches].find(e=>e.routeId===E()||e.id===E())),z=d(()=>Object.keys(l().location.search).length),B=d(()=>({...s(),state:l()})),U=d(()=>Object.fromEntries(function(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,i],[r,n])=>{for(const o of t){const t=o(e),i=o(r);if(void 0===t){if(void 0===i)continue;return 1}if(t!==i)return t>i?1:-1}return i-n}).map(([e])=>e)}(Object.keys(B()),["state","routesById","routesByPath","flatRoutes","options","manifest"].map(e=>t=>t!==e)).map(e=>[e,B()[e]]).filter(e=>"function"!=typeof e[1]&&!["__store","basepath","injectedHtml","subscribers","latestLoadPromise","navigateTimeout","resetNextScroll","tempLocationKey","latestLocation","routeTree","history"].includes(e[0])))),I=d(()=>{var e;return null==(e=D())?void 0:e.loaderData}),A=d(()=>D()),G=d(()=>l().location.search);return(()=>{var e=Xe(),t=e.firstChild,i=t.firstChild,d=t.nextSibling,c=d.firstChild,v=c.nextSibling,x=v.firstChild,B=d.nextSibling,P=B.firstChild,T=P.firstChild;T.firstChild;var R,L,_,j,H,V,W,N=T.nextSibling,K=N.firstChild,J=N.nextSibling,q=J.firstChild,Y=q.firstChild,Z=Y.nextSibling,X=q.nextSibling,Q=J.nextSibling;return b(e,m({get class(){return h(k().devtoolsPanel,"TanStackRouterDevtoolsPanel",S?S():"")},get style(){return w?w():""}},C),!1,!0),u(e,n?(R=Ze(),y(R,"mousedown",n,!0),a(()=>p(R,k().dragHandle)),R):null,t),t.$$click=e=>{r&&r(!1),$(e)},u(c,o(ot,{"aria-hidden":!0,onClick:e=>{r&&r(!1),$(e)}})),u(x,o(Te,{label:"Router",value:U,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>"function"!=typeof e.value())})),u(T,(L=f(()=>!!l().location.maskedLocation),()=>{return L()?(e=Qe(),t=e.firstChild,a(i=>{var r=k().maskedBadgeContainer,n=k().maskedBadge;return r!==i.e&&p(e,i.e=r),n!==i.t&&p(t,i.t=n),i},{e:void 0,t:void 0}),e):null;var e,t}),null),u(K,()=>l().location.pathname),u(N,(_=f(()=>!!l().location.maskedLocation),()=>{return _()?(e=qe(),u(e,()=>{var e;return null==(e=l().location.maskedLocation)?void 0:e.pathname}),a(()=>p(e,k().maskedLocation)),e):null;var e}),null),Y.$$click=()=>{M(!1)},Z.$$click=()=>{M(!0)},u(Q,(j=f(()=>!F()),()=>{return j()?o(at,{routerState:l,router:s,get route(){return s().routeTree},isRoot:!0,activeId:E,setActiveId:O}):(e=Ze(),u(e,()=>{var e,t;return null==(t=(null==(e=l().pendingMatches)?void 0:e.length)?l().pendingMatches:l().matches)?void 0:t.map((e,t)=>{return i=et(),r=i.firstChild,i.$$click=()=>O(E()===e.id?"":e.id),u(i,o(st,{get left(){return o(We,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:s})},get right(){return o(He,{match:e,router:s})},get children(){var t=qe();return u(t,()=>`${e.routeId===Fe?Fe:e.pathname}`),a(()=>p(t,k().matchID)),t}}),null),a(t=>{var n=`Open match details for ${e.id}`,o=h(k().matchRow(e===D())),s=h(k().matchIndicator(ve(e)));return n!==t.e&&g(i,"aria-label",t.e=n),o!==t.t&&p(i,t.t=o),s!==t.a&&p(r,t.a=s),t},{e:void 0,t:void 0,a:void 0}),i;var i,r})}),e);var e})),u(B,(H=f(()=>!!l().cachedMatches.length),()=>{return H()?(e=tt(),t=e.firstChild,i=t.firstChild.nextSibling,r=t.nextSibling,u(r,()=>l().cachedMatches.map(e=>{return t=et(),i=t.firstChild,t.$$click=()=>O(E()===e.id?"":e.id),u(t,o(st,{get left(){return o(We,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:s})},get right(){return o(He,{match:e,router:s})},get children(){var t=qe();return u(t,()=>`${e.id}`),a(()=>p(t,k().matchID)),t}}),null),a(r=>{var n=`Open match details for ${e.id}`,o=h(k().matchRow(e===D())),s=h(k().matchIndicator(ve(e)));return n!==r.e&&g(t,"aria-label",r.e=n),o!==r.t&&p(t,r.t=o),s!==r.a&&p(i,r.a=s),r},{e:void 0,t:void 0,a:void 0}),t;var t,i})),a(r=>{var n=k().cachedMatchesContainer,o=k().detailsHeader,s=k().detailsHeaderInfo;return n!==r.e&&p(e,r.e=n),o!==r.t&&p(t,r.t=o),s!==r.a&&p(i,r.a=s),r},{e:void 0,t:void 0,a:void 0}),e):null;var e,t,i,r}),null),u(e,(V=f(()=>{var e;return!(!D()||!(null==(e=D())?void 0:e.status))}),()=>{return V()?(n=it(),s=n.firstChild,d=s.nextSibling,c=d.firstChild,h=c.firstChild,g=h.firstChild,v=h.nextSibling,m=v.firstChild.nextSibling,x=m.firstChild,b=v.nextSibling,y=b.firstChild.nextSibling,$=b.nextSibling,S=$.firstChild.nextSibling,w=d.nextSibling,C=w.nextSibling,u(g,(e=f(()=>{var e,t;return!("success"!==(null==(e=D())?void 0:e.status)||!(null==(t=D())?void 0:t.isFetching))}),()=>{var t;return e()?"fetching":null==(t=D())?void 0:t.status})),u(x,()=>{var e;return null==(e=D())?void 0:e.id}),u(y,(t=f(()=>{var e;return!!(null==(e=l().pendingMatches)?void 0:e.find(e=>{var t;return e.id===(null==(t=D())?void 0:t.id)}))}),()=>t()?"Pending":l().matches.find(e=>{var t;return e.id===(null==(t=D())?void 0:t.id)})?"Active":"Cached")),u(S,(i=f(()=>{var e;return!!(null==(e=D())?void 0:e.updatedAt)}),()=>{var e;return i()?new Date(null==(e=D())?void 0:e.updatedAt).toLocaleTimeString():"N/A"})),u(n,(r=f(()=>!!I()),()=>{return r()?[(t=rt(),a(()=>p(t,k().detailsHeader)),t),(e=Ze(),u(e,o(Te,{label:"loaderData",value:I,defaultExpanded:{}})),a(()=>p(e,k().detailsContent)),e)]:null;var e,t}),w),u(C,o(Te,{label:"Match",value:A,defaultExpanded:{}})),a(e=>{var t,i,r=k().thirdContainer,o=k().detailsHeader,a=k().matchDetails,l=k().matchStatus(null==(t=D())?void 0:t.status,null==(i=D())?void 0:i.isFetching),d=k().matchDetailsInfoLabel,u=k().matchDetailsInfo,f=k().matchDetailsInfoLabel,g=k().matchDetailsInfo,x=k().matchDetailsInfoLabel,F=k().matchDetailsInfo,M=k().detailsHeader,E=k().detailsContent;return r!==e.e&&p(n,e.e=r),o!==e.t&&p(s,e.t=o),a!==e.a&&p(c,e.a=a),l!==e.o&&p(h,e.o=l),d!==e.i&&p(v,e.i=d),u!==e.n&&p(m,e.n=u),f!==e.s&&p(b,e.s=f),g!==e.h&&p(y,e.h=g),x!==e.r&&p($,e.r=x),F!==e.d&&p(S,e.d=F),M!==e.l&&p(w,e.l=M),E!==e.u&&p(C,e.u=E),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),n):null;var e,t,i,r,n,s,d,c,h,g,v,m,x,b,y,$,S,w,C}),null),u(e,(W=f(()=>!!z()),()=>{return W()?(e=nt(),t=e.firstChild,i=t.nextSibling,u(i,o(Te,{value:G,get defaultExpanded(){return Object.keys(l().location.search).reduce((e,t)=>(e[t]={},e),{})}})),a(r=>{var n=k().fourthContainer,o=k().detailsHeader,s=k().detailsContent;return n!==r.e&&p(e,r.e=n),o!==r.t&&p(t,r.t=o),s!==r.a&&p(i,r.a=s),r},{e:void 0,t:void 0,a:void 0}),e):null;var e,t,i}),null),a(e=>{var r=k().panelCloseBtn,n=k().panelCloseBtnIcon,o=k().firstContainer,s=k().row,a=k().routerExplorerContainer,l=k().routerExplorer,u=k().secondContainer,f=k().matchesContainer,m=k().detailsHeader,b=k().detailsContent,y=k().detailsHeader,$=k().routeMatchesToggle,S=!F(),w=h(k().routeMatchesToggleBtn(!F(),!0)),C=F(),M=h(k().routeMatchesToggleBtn(!!F(),!1)),E=k().detailsHeaderInfo,O=h(k().routesContainer);return r!==e.e&&p(t,e.e=r),n!==e.t&&g(i,"class",e.t=n),o!==e.a&&p(d,e.a=o),s!==e.o&&p(c,e.o=s),a!==e.i&&p(v,e.i=a),l!==e.n&&p(x,e.n=l),u!==e.s&&p(B,e.s=u),f!==e.h&&p(P,e.h=f),m!==e.r&&p(T,e.r=m),b!==e.d&&p(N,e.d=b),y!==e.l&&p(J,e.l=y),$!==e.u&&p(q,e.u=$),S!==e.c&&(Y.disabled=e.c=S),w!==e.w&&p(Y,e.w=w),C!==e.m&&(Z.disabled=e.m=C),M!==e.f&&p(Z,e.f=M),E!==e.y&&p(X,e.y=E),O!==e.g&&p(Q,e.g=O),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),e})()};v(["click","mousedown"]);var dt=c('<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">');function ct(){const e=k();return t=dt(),i=t.firstChild.firstChild,r=i.nextSibling,n=r.nextSibling,o=n.firstChild,s=n.nextSibling,a=s.firstChild,l=s.nextSibling,d=l.nextSibling,c=d.firstChild,u=d.nextSibling,f=u.firstChild,p=u.nextSibling,h=p.nextSibling,v=h.firstChild,m=h.nextSibling,x=m.firstChild,b=m.nextSibling,y=b.nextSibling,$=y.firstChild,S=y.nextSibling,w=S.firstChild,C=S.nextSibling,F=C.nextSibling,M=F.firstChild,E=F.nextSibling,O=E.firstChild,D=E.nextSibling,z=D.nextSibling,B=z.firstChild,U=z.nextSibling,I=U.firstChild,A=U.nextSibling,G=A.nextSibling,P=G.firstChild,T=G.nextSibling,R=T.firstChild,L=T.nextSibling,_=L.firstChild.nextSibling,j=_.nextSibling,H=L.nextSibling,V=H.firstChild,W=H.nextSibling,N=W.firstChild,K=W.nextSibling,J=K.firstChild,q=J.nextSibling,Y=q.nextSibling,Z=Y.nextSibling,X=Z.nextSibling,Q=X.nextSibling,ee=Q.nextSibling,te=ee.nextSibling,ie=te.nextSibling,re=ie.nextSibling,ne=re.nextSibling,oe=ne.nextSibling,se=oe.nextSibling,ae=se.nextSibling,le=K.nextSibling,de=le.firstChild,ce=le.nextSibling,ue=ce.firstChild,fe=ce.nextSibling,pe=fe.nextSibling,he=pe.nextSibling,ge=he.firstChild,ve=he.nextSibling,me=ve.firstChild,xe=ve.nextSibling,be=xe.firstChild.firstChild,ye=be.nextSibling,$e=ye.nextSibling,ke=$e.nextSibling,Se=ke.nextSibling,we=Se.nextSibling,Ce=we.nextSibling,Fe=Ce.nextSibling,Me=Fe.nextSibling,Ee=Me.nextSibling,Oe=Ee.nextSibling,De=Oe.nextSibling,ze=De.nextSibling,Be=ze.nextSibling,Ue=Be.nextSibling,Ie=Ue.nextSibling,Ae=Ie.nextSibling,Ge=Ae.nextSibling,g(i,"id",`a-${e}`),g(r,"fill",`url(#a-${e})`),g(o,"id",`b-${e}`),g(s,"id",`c-${e}`),g(a,"filter",`url(#b-${e})`),g(l,"mask",`url(#c-${e})`),g(c,"id",`d-${e}`),g(u,"id",`e-${e}`),g(f,"filter",`url(#d-${e})`),g(p,"mask",`url(#e-${e})`),g(v,"id",`f-${e}`),g(m,"id",`g-${e}`),g(x,"filter",`url(#f-${e})`),g(b,"mask",`url(#g-${e})`),g($,"id",`h-${e}`),g(S,"id",`i-${e}`),g(w,"filter",`url(#h-${e})`),g(C,"mask",`url(#i-${e})`),g(M,"id",`j-${e}`),g(E,"id",`k-${e}`),g(O,"filter",`url(#j-${e})`),g(D,"mask",`url(#k-${e})`),g(B,"id",`l-${e}`),g(U,"id",`m-${e}`),g(I,"filter",`url(#l-${e})`),g(A,"mask",`url(#m-${e})`),g(P,"id",`n-${e}`),g(T,"id",`o-${e}`),g(R,"filter",`url(#n-${e})`),g(L,"mask",`url(#o-${e})`),g(_,"id",`p-${e}`),g(j,"fill",`url(#p-${e})`),g(V,"id",`q-${e}`),g(W,"id",`r-${e}`),g(N,"filter",`url(#q-${e})`),g(K,"mask",`url(#r-${e})`),g(J,"id",`s-${e}`),g(q,"fill",`url(#s-${e})`),g(Y,"id",`t-${e}`),g(Z,"fill",`url(#t-${e})`),g(X,"id",`u-${e}`),g(Q,"fill",`url(#u-${e})`),g(ee,"id",`v-${e}`),g(te,"fill",`url(#v-${e})`),g(ie,"id",`w-${e}`),g(re,"fill",`url(#w-${e})`),g(ne,"id",`x-${e}`),g(oe,"fill",`url(#x-${e})`),g(se,"id",`y-${e}`),g(ae,"fill",`url(#y-${e})`),g(de,"id",`z-${e}`),g(ce,"id",`A-${e}`),g(ue,"filter",`url(#z-${e})`),g(fe,"id",`B-${e}`),g(pe,"fill",`url(#B-${e})`),g(pe,"mask",`url(#A-${e})`),g(ge,"id",`C-${e}`),g(ve,"id",`D-${e}`),g(me,"filter",`url(#C-${e})`),g(xe,"mask",`url(#D-${e})`),g(be,"id",`E-${e}`),g(ye,"fill",`url(#E-${e})`),g($e,"id",`F-${e}`),g(ke,"stroke",`url(#F-${e})`),g(Se,"id",`G-${e}`),g(we,"stroke",`url(#G-${e})`),g(Ce,"id",`H-${e}`),g(Fe,"stroke",`url(#H-${e})`),g(Me,"id",`I-${e}`),g(Ee,"stroke",`url(#I-${e})`),g(Oe,"id",`J-${e}`),g(De,"stroke",`url(#J-${e})`),g(ze,"id",`K-${e}`),g(Be,"stroke",`url(#K-${e})`),g(Ue,"id",`L-${e}`),g(Ie,"stroke",`url(#L-${e})`),g(Ae,"id",`M-${e}`),g(Ge,"stroke",`url(#M-${e})`),t;var t,i,r,n,o,s,a,l,d,c,u,f,p,h,v,m,x,b,y,$,S,w,C,F,M,E,O,D,z,B,U,I,A,G,P,T,R,L,_,j,H,V,W,N,K,J,q,Y,Z,X,Q,ee,te,ie,re,ne,oe,se,ae,le,de,ce,ue,fe,pe,he,ge,ve,me,xe,be,ye,$e,ke,Se,we,Ce,Fe,Me,Ee,Oe,De,ze,Be,Ue,Ie,Ae,Ge}var ut=c("<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router");function ft({initialIsOpen:e,panelProps:t={},closeButtonProps:r={},toggleButtonProps:n={},position:l="bottom-left",containerElement:c="footer",router:f,routerState:g,shadowDOMTarget:v}){const[x,y]=i();let $;const[k,w]=Oe("tanstackRouterDevtoolsOpen",e),[C,F]=Oe("tanstackRouterDevtoolsHeight",null),[M,E]=i(!1),[O,D]=i(!1),z=function(){const[e,t]=i(!1);return(ge?s:a)(()=>{t(!0)}),e}(),B=Ee();k(),s(()=>{E(k()??!1)}),s(()=>{var e,t,i;if(M()){const i=null==(t=null==(e=x())?void 0:e.parentElement)?void 0:t.style.paddingBottom,r=()=>{var e;const t=$.getBoundingClientRect().height;(null==(e=x())?void 0:e.parentElement)&&y(e=>((null==e?void 0:e.parentElement)&&(e.parentElement.style.paddingBottom=`${t}px`),e))};if(r(),"undefined"!=typeof window)return window.addEventListener("resize",r),()=>{var e;window.removeEventListener("resize",r),(null==(e=x())?void 0:e.parentElement)&&"string"==typeof i&&y(e=>(e.parentElement.style.paddingBottom=i,e))}}else(null==(i=x())?void 0:i.parentElement)&&y(e=>((null==e?void 0:e.parentElement)&&e.parentElement.removeAttribute("style"),e))}),s(()=>{if(x()){const e=x(),t=getComputedStyle(e).fontSize;null==e||e.style.setProperty("--tsrd-font-size",t)}});const{style:U={},...I}=t,{style:A={},onClick:G,...P}=r,{onClick:T,class:R,...L}=n;if(!z())return null;const _=d(()=>C()??500),j=d(()=>h(B().devtoolsPanelContainer,B().devtoolsPanelContainerVisibility(!!k()),B().devtoolsPanelContainerResizing(O),B().devtoolsPanelContainerAnimation(M(),_()+16))),H=d(()=>({height:`${_()}px`,...U||{}})),V=d(()=>h(B().mainCloseBtn,B().mainCloseBtnPosition(l),B().mainCloseBtnAnimation(!!k()),R));return o(S,{component:c,ref:y,class:"TanStackRouterDevtools",get children(){return[o(Y.Provider,{value:{onCloseClick:G??(()=>{})},get children(){return o(lt,m({ref(e){"function"==typeof $?$(e):$=e}},I,{router:f,routerState:g,className:j,style:H,get isOpen(){return M()},setIsOpen:w,handleDragStart:e=>((e,t)=>{if(0!==t.button)return;D(!0);const i=(null==e?void 0:e.getBoundingClientRect().height)??0,r=t.pageY,n=e=>{const t=r-e.pageY,n=i+t;F(n),w(!(n<70))},o=()=>{D(!1),document.removeEventListener("mousemove",n),document.removeEventListener("mouseUp",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)})($,e),shadowDOMTarget:v}))}}),(e=ut(),t=e.firstChild,i=t.firstChild,r=i.nextSibling,n=t.nextSibling,s=n.nextSibling,b(e,m(L,{"aria-label":"Open TanStack Router Devtools",onClick:e=>{w(!0),T&&T(e)},get class(){return V()}}),!1,!0),u(i,o(ct,{})),u(r,o(ct,{})),a(e=>{var o=B().mainCloseBtnIconContainer,a=B().mainCloseBtnIconOuter,l=B().mainCloseBtnIconInner,d=B().mainCloseBtnDivider,c=B().routerLogoCloseButton;return o!==e.e&&p(t,e.e=o),a!==e.t&&p(i,e.t=a),l!==e.a&&p(r,e.a=l),d!==e.o&&p(n,e.o=d),c!==e.i&&p(s,e.i=c),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e)];var e,t,i,r,n,s}})}const pt=Object.freeze(Object.defineProperty({__proto__:null,FloatingTanStackRouterDevtools:ft,default:ft},Symbol.toStringTag,{value:"Module"}));export{G as S,he as T,J as _,H as a,A as b,V as c,W as p};
