import{f as ue,g as Oe,h as E,i as yt,S as kt,k as W,t as G,l as h,n as K,o as D,p as c,q as Q,s as a,v as et,w as Ie,x as Mt,y as zt,z as tt,A as Ut,C as Pt,D as Bt,E as Dt,F as At}from"./index-Dl7_EzVl.js";const Ot=typeof window>"u";function We(e){const t={pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"};return e.isFetching&&e.status==="success"?e.isFetching==="beforeLoad"?"purple":"blue":t[e.status]}function It(e,t){const i=e.find(r=>r.routeId===t.id);return i?We(i):"gray"}function Tt(){const[e,t]=ue(!1);return(Ot?Oe:E)(()=>{t(!0)}),e}const Rt=e=>{const t=Object.getOwnPropertyNames(Object(e)),i=typeof e=="bigint"?`${e.toString()}n`:e;try{return JSON.stringify(i,t)}catch{return"unable to stringify"}};function Gt(e,t=[i=>i]){return e.map((i,r)=>[i,r]).sort(([i,r],[v,l])=>{for(const s of t){const d=s(i),u=s(v);if(typeof d>"u"){if(typeof u>"u")continue;return 1}if(d!==u)return d>u?1:-1}return r-l}).map(([i])=>i)}const je=0,qe=1,Je=2,_t=3;function Lt(e){return St(e.filter(t=>t!==void 0).join("/"))}function St(e){return e.replace(/\/{2,}/g,"/")}function jt(e){return e==="/"?e:e.replace(/^\/{1,}/,"")}function Ht(e){return e==="/"?e:e.replace(/\/{1,}$/,"")}function ht(e){return Ht(jt(e))}const Nt=(e,t)=>{if(!e)return[];const i=t==null?void 0:t.get(e);if(i)return i;const r=Zt(e);return t==null||t.set(e,r),r},Vt=/^\$.{1,}$/,Yt=/^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,Wt=/^(.*?)\{-(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,qt=/^\$$/,Jt=/^(.*?)\{\$\}(.*)$/;function Zt(e){e=St(e);const t=[];if(e.slice(0,1)==="/"&&(e=e.substring(1),t.push({type:je,value:"/"})),!e)return t;const i=e.split("/").filter(Boolean);return t.push(...i.map(r=>{const v=r.match(Jt);if(v){const d=v[1],u=v[2];return{type:Je,value:"$",prefixSegment:d||void 0,suffixSegment:u||void 0}}const l=r.match(Wt);if(l){const d=l[1],u=l[2],o=l[3];return{type:_t,value:u,prefixSegment:d||void 0,suffixSegment:o||void 0}}const s=r.match(Yt);if(s){const d=s[1],u=s[2],o=s[3];return{type:qe,value:""+u,prefixSegment:d||void 0,suffixSegment:o||void 0}}if(Vt.test(r)){const d=r.substring(1);return{type:qe,value:"$"+d,prefixSegment:void 0,suffixSegment:void 0}}return qt.test(r)?{type:Je,value:"$",prefixSegment:void 0,suffixSegment:void 0}:{type:je,value:r.includes("%25")?r.split("%25").map(d=>decodeURI(d)).join("%25"):decodeURI(r)}})),e.slice(-1)==="/"&&(e=e.substring(1),t.push({type:je,value:"/"})),t}function Kt({path:e,params:t,leaveWildcards:i,leaveParams:r,decodeCharMap:v,parseCache:l}){const s=Nt(e,l);function d(g){const f=t[g],$=typeof f=="string";return g==="*"||g==="_splat"?$?encodeURI(f):f:$?Qt(f,v):f}let u=!1;const o={},n=Lt(s.map(g=>{if(g.type===je)return g.value;if(g.type===Je){o._splat=t._splat;const f=g.prefixSegment||"",$=g.suffixSegment||"";if(!("_splat"in t))return u=!0,f||$?`${f}${$}`:void 0;const x=d("_splat");return`${f}${x}${$}`}if(g.type===qe){const f=g.value.substring(1);!u&&!(f in t)&&(u=!0),o[f]=t[f];const $=g.prefixSegment||"",x=g.suffixSegment||"";return`${$}${d(f)??"undefined"}${x}`}if(g.type===_t){const f=g.value.substring(1),$=g.prefixSegment||"",x=g.suffixSegment||"";return!(f in t)||t[f]==null?$||x?`${$}${x}`:void 0:(o[f]=t[f],`${$}${d(f)??""}${x}`)}return g.value}));return{usedParams:o,interpolatedPath:n,isMissingParams:u}}function Qt(e,t){let i=encodeURIComponent(e);if(t)for(const[r,v]of t)i=i.replaceAll(r,v);return i}const Ze="__root__";let Xt={data:""},er=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Xt,tr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,rr=/\/\*[^]*?\*\/|  +/g,$t=/\n+/g,_e=(e,t)=>{let i="",r="",v="";for(let l in e){let s=e[l];l[0]=="@"?l[1]=="i"?i=l+" "+s+";":r+=l[1]=="f"?_e(s,l):l+"{"+_e(s,l[1]=="k"?"":t)+"}":typeof s=="object"?r+=_e(s,t?t.replace(/([^,])+/g,d=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,d):d?d+" "+u:u)):l):s!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),v+=_e.p?_e.p(l,s):l+":"+s+";")}return i+(t&&v?t+"{"+v+"}":v)+r},he={},Ct=e=>{if(typeof e=="object"){let t="";for(let i in e)t+=i+Ct(e[i]);return t}return e},ir=(e,t,i,r,v)=>{let l=Ct(e),s=he[l]||(he[l]=(u=>{let o=0,n=11;for(;o<u.length;)n=101*n+u.charCodeAt(o++)>>>0;return"go"+n})(l));if(!he[s]){let u=l!==e?e:(o=>{let n,g,f=[{}];for(;n=tr.exec(o.replace(rr,""));)n[4]?f.shift():n[3]?(g=n[3].replace($t," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][n[1]]=n[2].replace($t," ").trim();return f[0]})(e);he[s]=_e(v?{["@keyframes "+s]:u}:u,i?"":"."+s)}let d=i&&he.g?he.g:null;return i&&(he.g=he[s]),((u,o,n,g)=>{g?o.data=o.data.replace(g,u):o.data.indexOf(u)===-1&&(o.data=n?u+o.data:o.data+u)})(he[s],t,r,d),s},nr=(e,t,i)=>e.reduce((r,v,l)=>{let s=t[l];if(s&&s.call){let d=s(i),u=d&&d.props&&d.props.className||/^go/.test(d)&&d;s=u?"."+u:d&&typeof d=="object"?d.props?"":_e(d,""):d===!1?"":d}return r+v+(s??"")},"");function Ee(e){let t=this||{},i=e.call?e(t.p):e;return ir(i.unshift?i.raw?nr(i,[].slice.call(arguments,1),t.p):i.reduce((r,v)=>Object.assign(r,v&&v.call?v(t.p):v),{}):i,er(t.target),t.g,t.o,t.k)}Ee.bind({g:1});Ee.bind({k:1});const B={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",70:"b3",20:"33"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)"},weight:{normal:"400",medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",full:"9999px"}},size:{0:"0px",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",5:"calc(var(--tsrd-font-size) * 1.25)",8:"calc(var(--tsrd-font-size) * 2)"}},or=e=>{const{colors:t,font:i,size:r,alpha:v,border:l}=B,{fontFamily:s,lineHeight:d,size:u}=i,o=e?Ee.bind({target:e}):Ee;return{devtoolsPanelContainer:o`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:n=>o`
        visibility: ${n?"visible":"hidden"};
      `,devtoolsPanelContainerResizing:n=>n()?o`
          transition: none;
        `:o`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(n,g)=>n?o`
          pointer-events: auto;
          transform: translateY(0);
        `:o`
        pointer-events: none;
        transform: translateY(${g}px);
      `,logo:o`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${s.sans};
      gap: ${B.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:o`
      font-size: ${i.size.md};
      font-weight: ${i.weight.bold};
      line-height: ${i.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:o`
      font-weight: ${i.weight.semibold};
      font-size: ${i.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:o`
      display: flex;
      font-size: ${u.sm};
      font-family: ${s.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${u.xs};
      }
    `,dragHandle:o`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${v[90]};
      }
    `,firstContainer:o`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:o`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:o`
      padding: ${B.size[2]};
    `,row:o`
      display: flex;
      align-items: center;
      padding: ${B.size[2]} ${B.size[2.5]};
      gap: ${B.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:o`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${B.size[2]};
      font-weight: ${i.weight.medium};
      font-size: ${i.size.xs};
      min-height: ${B.size[8]};
      line-height: ${i.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:o`
      background: ${t.yellow[900]}${v[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${B.size[0]} ${B.size[2.5]};
      border-radius: ${l.radius.full};
      font-size: ${i.size.xs};
      font-weight: ${i.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:o`
      color: ${t.yellow[300]};
    `,detailsContent:o`
      padding: ${B.size[1.5]} ${B.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${i.size.xs};
    `,routeMatchesToggle:o`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${l.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(n,g)=>{const $=[o`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${s.sans};
        font-weight: ${i.weight.medium};
      `];if(n){const x=o`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;$.push(x)}else{const x=o`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${v[20]};
        `;$.push(x)}return g&&$.push(o`
          border-right: 1px solid ${B.colors.gray[500]};
        `),$},detailsHeaderInfo:o`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${i.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:n=>{const f=[o`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${u.xs};
        color: ${t.gray[300]};
      `];if(n){const $=o`
          background: ${t.darkGray[500]};
        `;f.push($)}return f},matchIndicator:n=>{const f=[o`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[n][900]};
        border: 1px solid ${t[n][500]};
        border-radius: ${l.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(n==="gray"){const $=o`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;f.push($)}return f},matchID:o`
      flex: 1;
      line-height: ${d.xs};
    `,ageTicker:n=>{const f=[o`
        display: flex;
        gap: ${r[1]};
        font-size: ${u.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${d.xs};
      `];if(n){const $=o`
          color: ${t.yellow[400]};
        `;f.push($)}return f},secondContainer:o`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:o`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:o`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:o`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(n,g)=>{const $=[o`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${u.xs};
        color: ${t.gray[300]};
        cursor: ${g?"pointer":"default"};
        line-height: ${d.xs};
      `];if(n){const x=o`
          background: ${t.darkGray[500]};
        `;$.push(x)}return $},routesRow:n=>{const f=[o`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${u.xs};
        line-height: ${d.xs};
      `];if(!n){const $=o`
          color: ${t.gray[400]};
        `;f.push($)}return f},routesRowInner:o`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:o`
      color: ${t.gray[400]};
      font-size: ${u.xs};
      line-height: ${d.xs};
    `,nestedRouteRow:n=>o`
        margin-left: ${n?0:r[3.5]};
        border-left: ${n?"":`solid 1px ${t.gray[700]}`};
      `,code:o`
      font-size: ${u.xs};
      line-height: ${d.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:o`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:o`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,maskedBadgeContainer:o`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:o`
      display: flex;
      flex-direction: column;
      padding: ${B.size[2]};
      font-size: ${B.font.size.xs};
      color: ${B.colors.gray[300]};
      line-height: ${B.font.lineHeight.sm};
    `,matchStatus:(n,g)=>{const $=g&&n==="success"?g==="beforeLoad"?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[n];return o`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${B.border.radius.sm};
        font-weight: ${B.font.weight.normal};
        background-color: ${B.colors[$][900]}${B.alpha[90]};
        color: ${B.colors[$][300]};
        border: 1px solid ${B.colors[$][600]};
        margin-bottom: ${B.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:o`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:o`
      display: flex;
    `,mainCloseBtn:o`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${l.radius.md};
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
    `,mainCloseBtnPosition:n=>o`
        ${n==="top-left"?`top: ${r[2]}; left: ${r[2]};`:""}
        ${n==="top-right"?`top: ${r[2]}; right: ${r[2]};`:""}
        ${n==="bottom-left"?`bottom: ${r[2]}; left: ${r[2]};`:""}
        ${n==="bottom-right"?`bottom: ${r[2]}; right: ${r[2]};`:""}
      `,mainCloseBtnAnimation:n=>n?o`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:o`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:o`
      font-weight: ${i.weight.semibold};
      font-size: ${i.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:o`
      width: 1px;
      background: ${B.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:o`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:o`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:o`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:o`
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
      border-radius: ${l.radius.sm} ${l.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:o`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:o`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${u.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function Me(){const e=yt(kt),[t]=ue(or(e));return t}const lr=e=>{try{const t=localStorage.getItem(e);return typeof t=="string"?JSON.parse(t):void 0}catch{return}};function Ve(e,t){const[i,r]=ue();return Oe(()=>{const l=lr(e);r(typeof l>"u"||l===null?typeof t=="function"?t():t:l)}),[i,l=>{r(s=>{let d=l;typeof l=="function"&&(d=l(s));try{localStorage.setItem(e,JSON.stringify(d))}catch{}return d})}]}var sr=G('<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">'),Le=G("<div>"),ar=G("<button><span> "),dr=G("<div><div><button> [<!> ... <!>]"),cr=G("<button><span></span> 🔄 "),fr=G("<span>:"),ur=G("<span>");const xt=({expanded:e,style:t={}})=>{const i=wt();return(()=>{var r=sr(),v=r.firstChild;return E(l=>{var s=i().expander,d=Q(i().expanderIcon(e));return s!==l.e&&c(r,l.e=s),d!==l.t&&a(v,"class",l.t=d),l},{e:void 0,t:void 0}),r})()};function gr(e,t){if(t<1)return[];let i=0;const r=[];for(;i<e.length;)r.push(e.slice(i,i+t)),i=i+t;return r}function pr(e){return Symbol.iterator in e}function Fe({value:e,defaultExpanded:t,pageSize:i=100,filterSubEntries:r,...v}){const[l,s]=ue(!!t),d=()=>s(C=>!C),u=W(()=>typeof e()),o=W(()=>{let C=[];const le=S=>{const m=t===!0?{[S.label]:!0}:t==null?void 0:t[S.label];return{...S,value:()=>S.value,defaultExpanded:m}};return Array.isArray(e())?C=e().map((S,m)=>le({label:m.toString(),value:S})):e()!==null&&typeof e()=="object"&&pr(e())&&typeof e()[Symbol.iterator]=="function"?C=Array.from(e(),(S,m)=>le({label:m.toString(),value:S})):typeof e()=="object"&&e()!==null&&(C=Object.entries(e()).map(([S,m])=>le({label:S,value:m}))),r?r(C):C}),n=W(()=>gr(o(),i)),[g,f]=ue([]),[$,x]=ue(void 0),w=wt(),L=()=>{x(e()())},q=C=>D(Fe,Ie({value:e,filterSubEntries:r},v,C));return(()=>{var C=Le();return h(C,(()=>{var le=K(()=>!!n().length);return()=>le()?[(()=>{var S=ar(),m=S.firstChild,O=m.firstChild;return S.$$click=()=>d(),h(S,D(xt,{get expanded(){return l()??!1}}),m),h(S,()=>v.label,m),h(m,()=>String(u).toLowerCase()==="iterable"?"(Iterable) ":"",O),h(m,()=>o().length,O),h(m,()=>o().length>1?"items":"item",null),E(ie=>{var se=w().expandButton,F=w().info;return se!==ie.e&&c(S,ie.e=se),F!==ie.t&&c(m,ie.t=F),ie},{e:void 0,t:void 0}),S})(),K(()=>K(()=>!!(l()??!1))()?K(()=>n().length===1)()?(()=>{var S=Le();return h(S,()=>o().map((m,O)=>q(m))),E(()=>c(S,w().subEntries)),S})():(()=>{var S=Le();return h(S,()=>n().map((m,O)=>(()=>{var ie=dr(),se=ie.firstChild,F=se.firstChild,J=F.firstChild,ge=J.nextSibling,ce=ge.nextSibling,de=ce.nextSibling;return de.nextSibling,F.$$click=()=>f(H=>H.includes(O)?H.filter(X=>X!==O):[...H,O]),h(F,D(xt,{get expanded(){return g().includes(O)}}),J),h(F,O*i,ge),h(F,O*i+i-1,de),h(se,(()=>{var H=K(()=>!!g().includes(O));return()=>H()?(()=>{var X=Le();return h(X,()=>m.map(ne=>q(ne))),E(()=>c(X,w().subEntries)),X})():null})(),null),E(H=>{var X=w().entry,ne=Q(w().labelButton,"labelButton");return X!==H.e&&c(se,H.e=X),ne!==H.t&&c(F,H.t=ne),H},{e:void 0,t:void 0}),ie})())),E(()=>c(S,w().subEntries)),S})():null)]:(()=>{var S=K(()=>u()==="function");return()=>S()?D(Fe,{get label(){return(()=>{var m=cr(),O=m.firstChild;return m.$$click=L,h(O,()=>v.label),E(()=>c(m,w().refreshValueBtn)),m})()},value:$,defaultExpanded:{}}):[(()=>{var m=fr(),O=m.firstChild;return h(m,()=>v.label,O),m})()," ",(()=>{var m=ur();return h(m,()=>Rt(e())),E(()=>c(m,w().value)),m})()]})()})()),E(()=>c(C,w().entry)),C})()}const vr=e=>{const{colors:t,font:i,size:r}=B,{fontFamily:v,lineHeight:l,size:s}=i,d=e?Ee.bind({target:e}):Ee;return{entry:d`
      font-family: ${v.mono};
      font-size: ${s.xs};
      line-height: ${l.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:d`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:d`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:u=>u?d`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:d`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:d`
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
    `,value:d`
      color: ${t.purple[400]};
    `,subEntries:d`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:d`
      color: ${t.gray[500]};
      font-size: ${s["2xs"]};
      padding-left: ${r[1]};
    `,refreshValueBtn:d`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${v.mono};
      font-size: ${s.xs};
    `}};function wt(){const e=yt(kt),[t]=ue(vr(e));return t}et(["click"]);var hr=G("<div><div></div><div>/</div><div></div><div>/</div><div>");function Ye(e){const t=["s","min","h","d"],i=[e/1e3,e/6e4,e/36e5,e/864e5];let r=0;for(let l=1;l<i.length&&!(i[l]<1);l++)r=l;return new Intl.NumberFormat(navigator.language,{compactDisplay:"short",notation:"compact",maximumFractionDigits:0}).format(i[r])+t[r]}function Ke({match:e,router:t}){const i=Me();if(!e)return null;const r=t().looseRoutesById[e.routeId];if(!r.options.loader)return null;const v=Date.now()-e.updatedAt,l=r.options.staleTime??t().options.defaultStaleTime??0,s=r.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var d=hr(),u=d.firstChild,o=u.nextSibling,n=o.nextSibling,g=n.nextSibling,f=g.nextSibling;return h(u,()=>Ye(v)),h(n,()=>Ye(l)),h(f,()=>Ye(s)),E(()=>c(d,Q(i().ageTicker(v>l)))),d})()}var $r=G("<button type=button>➔");function Qe({to:e,params:t,search:i,router:r}){const v=Me();return(()=>{var l=$r();return l.$$click=s=>{s.stopPropagation(),r().navigate({to:e,params:t,search:i})},a(l,"title",`Navigate to ${e}`),E(()=>c(l,v().navigateButton)),l})()}et(["click"]);var xr=G("<button><div>TANSTACK</div><div>TanStack Router v1"),mr=G("<div><div>"),br=G("<code> "),He=G("<code>"),yr=G("<div><div role=button><div>"),Ne=G("<div>"),kr=G('<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button></div><div><div>age / staleTime / gcTime</div></div></div><div>'),_r=G("<div><span>masked"),mt=G("<div role=button><div>"),Sr=G("<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>"),Cr=G("<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>"),wr=G("<div>Loader Data"),Fr=G("<div><div>Search Params</div><div>");function Er(e){const{className:t,...i}=e,r=Me();return(()=>{var v=xr(),l=v.firstChild,s=l.nextSibling;return tt(v,Ie(i,{get class(){return Q(r().logo,t?t():"")}}),!1,!0),E(d=>{var u=r().tanstackLogo,o=r().routerLogo;return u!==d.e&&c(l,d.e=u),o!==d.t&&c(s,d.t=o),d},{e:void 0,t:void 0}),v})()}function Xe(e){return(()=>{var t=mr(),i=t.firstChild;return t.style.setProperty("display","flex"),t.style.setProperty("align-items","center"),t.style.setProperty("width","100%"),h(t,()=>e.left,i),i.style.setProperty("flex-grow","1"),i.style.setProperty("min-width","0"),h(i,()=>e.children),h(t,()=>e.right,null),E(()=>c(t,e.class)),t})()}function Ft({routerState:e,router:t,route:i,isRoot:r,activeId:v,setActiveId:l}){const s=Me(),d=W(()=>e().pendingMatches||e().matches),u=W(()=>e().matches.find(g=>g.routeId===i.id)),o=W(()=>{var g,f;try{if((g=u())!=null&&g.params){const $=(f=u())==null?void 0:f.params,x=i.path||ht(i.id);if(x.startsWith("$")){const w=x.slice(1);if($[w])return`(${$[w]})`}}return""}catch{return""}}),n=W(()=>{if(r||!i.path)return;const g=Object.assign({},...d().map($=>$.params)),f=Kt({path:i.fullPath,params:g,leaveWildcards:!1,leaveParams:!1,decodeCharMap:t().pathParamsDecodeCharMap});return f.isMissingParams?void 0:f.interpolatedPath});return(()=>{var g=yr(),f=g.firstChild,$=f.firstChild;return f.$$click=()=>{u()&&l(v()===i.id?"":i.id)},h(f,D(Xe,{get class(){return Q(s().routesRow(!!u()))},get left(){return D(Pt,{get when(){return n()},children:x=>D(Qe,{get to(){return x()},router:t})})},get right(){return D(Ke,{get match(){return u()},router:t})},get children(){return[(()=>{var x=br(),w=x.firstChild;return h(x,()=>r?Ze:i.path||ht(i.id),w),E(()=>c(x,s().code)),x})(),(()=>{var x=He();return h(x,o),E(()=>c(x,s().routeParamInfo)),x})()]}}),null),h(g,(()=>{var x=K(()=>{var w;return!!((w=i.children)!=null&&w.length)});return()=>x()?(()=>{var w=Ne();return h(w,()=>[...i.children].sort((L,q)=>L.rank-q.rank).map(L=>D(Ft,{routerState:e,router:t,route:L,activeId:v,setActiveId:l}))),E(()=>c(w,s().nestedRouteRow(!!r))),w})():null})(),null),E(x=>{var w=`Open match details for ${i.id}`,L=Q(s().routesRowContainer(i.id===v(),!!u())),q=Q(s().matchIndicator(It(d(),i)));return w!==x.e&&a(f,"aria-label",x.e=w),L!==x.t&&c(f,x.t=L),q!==x.a&&c($,x.a=q),x},{e:void 0,t:void 0,a:void 0}),g})()}const Mr=function({...t}){const{isOpen:i=!0,setIsOpen:r,handleDragStart:v,router:l,routerState:s,shadowDOMTarget:d,...u}=t,{onCloseClick:o}=Mt(),n=Me(),{className:g,style:f,...$}=u;zt(l);const[x,w]=Ve("tanstackRouterDevtoolsShowMatches",!0),[L,q]=Ve("tanstackRouterDevtoolsActiveRouteId",""),C=W(()=>[...s().pendingMatches??[],...s().matches,...s().cachedMatches].find(J=>J.routeId===L()||J.id===L())),le=W(()=>Object.keys(s().location.search).length),S=W(()=>({...l(),state:s()})),m=W(()=>Object.fromEntries(Gt(Object.keys(S()),["state","routesById","routesByPath","flatRoutes","options","manifest"].map(F=>J=>J!==F)).map(F=>[F,S()[F]]).filter(F=>typeof F[1]!="function"&&!["__store","basepath","injectedHtml","subscribers","latestLoadPromise","navigateTimeout","resetNextScroll","tempLocationKey","latestLocation","routeTree","history"].includes(F[0])))),O=W(()=>{var F;return(F=C())==null?void 0:F.loaderData}),ie=W(()=>C()),se=W(()=>s().location.search);return(()=>{var F=kr(),J=F.firstChild,ge=J.firstChild,ce=J.nextSibling,de=ce.firstChild,H=de.nextSibling,X=H.firstChild,ne=ce.nextSibling,Se=ne.firstChild,pe=Se.firstChild;pe.firstChild;var U=pe.nextSibling,V=U.firstChild,Z=U.nextSibling,N=Z.firstChild,Y=N.firstChild,ee=Y.nextSibling,A=N.nextSibling,te=Z.nextSibling;return tt(F,Ie({get class(){return Q(n().devtoolsPanel,"TanStackRouterDevtoolsPanel",g?g():"")},get style(){return f?f():""}},$),!1,!0),h(F,v?(()=>{var p=Ne();return Ut(p,"mousedown",v,!0),E(()=>c(p,n().dragHandle)),p})():null,J),J.$$click=p=>{r&&r(!1),o(p)},h(de,D(Er,{"aria-hidden":!0,onClick:p=>{r&&r(!1),o(p)}})),h(X,D(Fe,{label:"Router",value:m,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:p=>p.filter(k=>typeof k.value()!="function")})),h(pe,(()=>{var p=K(()=>!!s().location.maskedLocation);return()=>p()?(()=>{var k=_r(),z=k.firstChild;return E(I=>{var y=n().maskedBadgeContainer,j=n().maskedBadge;return y!==I.e&&c(k,I.e=y),j!==I.t&&c(z,I.t=j),I},{e:void 0,t:void 0}),k})():null})(),null),h(V,()=>s().location.pathname),h(U,(()=>{var p=K(()=>!!s().location.maskedLocation);return()=>p()?(()=>{var k=He();return h(k,()=>{var z;return(z=s().location.maskedLocation)==null?void 0:z.pathname}),E(()=>c(k,n().maskedLocation)),k})():null})(),null),Y.$$click=()=>{w(!1)},ee.$$click=()=>{w(!0)},h(te,(()=>{var p=K(()=>!x());return()=>p()?D(Ft,{routerState:s,router:l,get route(){return l().routeTree},isRoot:!0,activeId:L,setActiveId:q}):(()=>{var k=Ne();return h(k,()=>{var z,I;return(I=(z=s().pendingMatches)!=null&&z.length?s().pendingMatches:s().matches)==null?void 0:I.map((y,j)=>(()=>{var _=mt(),T=_.firstChild;return _.$$click=()=>q(L()===y.id?"":y.id),h(_,D(Xe,{get left(){return D(Qe,{get to(){return y.pathname},get params(){return y.params},get search(){return y.search},router:l})},get right(){return D(Ke,{match:y,router:l})},get children(){var R=He();return h(R,()=>`${y.routeId===Ze?Ze:y.pathname}`),E(()=>c(R,n().matchID)),R}}),null),E(R=>{var P=`Open match details for ${y.id}`,ae=Q(n().matchRow(y===C())),re=Q(n().matchIndicator(We(y)));return P!==R.e&&a(_,"aria-label",R.e=P),ae!==R.t&&c(_,R.t=ae),re!==R.a&&c(T,R.a=re),R},{e:void 0,t:void 0,a:void 0}),_})())}),k})()})()),h(ne,(()=>{var p=K(()=>!!s().cachedMatches.length);return()=>p()?(()=>{var k=Sr(),z=k.firstChild,I=z.firstChild,y=I.nextSibling,j=z.nextSibling;return h(j,()=>s().cachedMatches.map(_=>(()=>{var T=mt(),R=T.firstChild;return T.$$click=()=>q(L()===_.id?"":_.id),h(T,D(Xe,{get left(){return D(Qe,{get to(){return _.pathname},get params(){return _.params},get search(){return _.search},router:l})},get right(){return D(Ke,{match:_,router:l})},get children(){var P=He();return h(P,()=>`${_.id}`),E(()=>c(P,n().matchID)),P}}),null),E(P=>{var ae=`Open match details for ${_.id}`,re=Q(n().matchRow(_===C())),fe=Q(n().matchIndicator(We(_)));return ae!==P.e&&a(T,"aria-label",P.e=ae),re!==P.t&&c(T,P.t=re),fe!==P.a&&c(R,P.a=fe),P},{e:void 0,t:void 0,a:void 0}),T})())),E(_=>{var T=n().cachedMatchesContainer,R=n().detailsHeader,P=n().detailsHeaderInfo;return T!==_.e&&c(k,_.e=T),R!==_.t&&c(z,_.t=R),P!==_.a&&c(y,_.a=P),_},{e:void 0,t:void 0,a:void 0}),k})():null})(),null),h(F,(()=>{var p=K(()=>{var k;return!!(C()&&((k=C())!=null&&k.status))});return()=>p()?(()=>{var k=Cr(),z=k.firstChild,I=z.nextSibling,y=I.firstChild,j=y.firstChild,_=j.firstChild,T=j.nextSibling,R=T.firstChild,P=R.nextSibling,ae=P.firstChild,re=T.nextSibling,fe=re.firstChild,$e=fe.nextSibling,xe=re.nextSibling,be=xe.firstChild,me=be.nextSibling,ve=I.nextSibling,ye=ve.nextSibling;return h(_,(()=>{var b=K(()=>{var M,oe;return!!(((M=C())==null?void 0:M.status)==="success"&&((oe=C())!=null&&oe.isFetching))});return()=>{var M;return b()?"fetching":(M=C())==null?void 0:M.status}})()),h(ae,()=>{var b;return(b=C())==null?void 0:b.id}),h($e,(()=>{var b=K(()=>{var M;return!!((M=s().pendingMatches)!=null&&M.find(oe=>{var ke;return oe.id===((ke=C())==null?void 0:ke.id)}))});return()=>b()?"Pending":s().matches.find(M=>{var oe;return M.id===((oe=C())==null?void 0:oe.id)})?"Active":"Cached"})()),h(me,(()=>{var b=K(()=>{var M;return!!((M=C())!=null&&M.updatedAt)});return()=>{var M;return b()?new Date((M=C())==null?void 0:M.updatedAt).toLocaleTimeString():"N/A"}})()),h(k,(()=>{var b=K(()=>!!O());return()=>b()?[(()=>{var M=wr();return E(()=>c(M,n().detailsHeader)),M})(),(()=>{var M=Ne();return h(M,D(Fe,{label:"loaderData",value:O,defaultExpanded:{}})),E(()=>c(M,n().detailsContent)),M})()]:null})(),ve),h(ye,D(Fe,{label:"Match",value:ie,defaultExpanded:{}})),E(b=>{var M,oe,ke=n().thirdContainer,ze=n().detailsHeader,Ce=n().matchDetails,Ue=n().matchStatus((M=C())==null?void 0:M.status,(oe=C())==null?void 0:oe.isFetching),Te=n().matchDetailsInfoLabel,we=n().matchDetailsInfo,Re=n().matchDetailsInfoLabel,Pe=n().matchDetailsInfo,Ge=n().matchDetailsInfoLabel,Be=n().matchDetailsInfo,De=n().detailsHeader,Ae=n().detailsContent;return ke!==b.e&&c(k,b.e=ke),ze!==b.t&&c(z,b.t=ze),Ce!==b.a&&c(y,b.a=Ce),Ue!==b.o&&c(j,b.o=Ue),Te!==b.i&&c(T,b.i=Te),we!==b.n&&c(P,b.n=we),Re!==b.s&&c(re,b.s=Re),Pe!==b.h&&c($e,b.h=Pe),Ge!==b.r&&c(xe,b.r=Ge),Be!==b.d&&c(me,b.d=Be),De!==b.l&&c(ve,b.l=De),Ae!==b.u&&c(ye,b.u=Ae),b},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),k})():null})(),null),h(F,(()=>{var p=K(()=>!!le());return()=>p()?(()=>{var k=Fr(),z=k.firstChild,I=z.nextSibling;return h(I,D(Fe,{value:se,get defaultExpanded(){return Object.keys(s().location.search).reduce((y,j)=>(y[j]={},y),{})}})),E(y=>{var j=n().fourthContainer,_=n().detailsHeader,T=n().detailsContent;return j!==y.e&&c(k,y.e=j),_!==y.t&&c(z,y.t=_),T!==y.a&&c(I,y.a=T),y},{e:void 0,t:void 0,a:void 0}),k})():null})(),null),E(p=>{var k=n().panelCloseBtn,z=n().panelCloseBtnIcon,I=n().firstContainer,y=n().row,j=n().routerExplorerContainer,_=n().routerExplorer,T=n().secondContainer,R=n().matchesContainer,P=n().detailsHeader,ae=n().detailsContent,re=n().detailsHeader,fe=n().routeMatchesToggle,$e=!x(),xe=Q(n().routeMatchesToggleBtn(!x(),!0)),be=x(),me=Q(n().routeMatchesToggleBtn(!!x(),!1)),ve=n().detailsHeaderInfo,ye=Q(n().routesContainer);return k!==p.e&&c(J,p.e=k),z!==p.t&&a(ge,"class",p.t=z),I!==p.a&&c(ce,p.a=I),y!==p.o&&c(de,p.o=y),j!==p.i&&c(H,p.i=j),_!==p.n&&c(X,p.n=_),T!==p.s&&c(ne,p.s=T),R!==p.h&&c(Se,p.h=R),P!==p.r&&c(pe,p.r=P),ae!==p.d&&c(U,p.d=ae),re!==p.l&&c(Z,p.l=re),fe!==p.u&&c(N,p.u=fe),$e!==p.c&&(Y.disabled=p.c=$e),xe!==p.w&&c(Y,p.w=xe),be!==p.m&&(ee.disabled=p.m=be),me!==p.f&&c(ee,p.f=me),ve!==p.y&&c(A,p.y=ve),ye!==p.g&&c(te,p.g=ye),p},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),F})()};et(["click","mousedown"]);var zr=G('<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">');function bt(){const e=Bt();return(()=>{var t=zr(),i=t.firstChild,r=i.firstChild,v=r.nextSibling,l=v.nextSibling,s=l.firstChild,d=l.nextSibling,u=d.firstChild,o=d.nextSibling,n=o.nextSibling,g=n.firstChild,f=n.nextSibling,$=f.firstChild,x=f.nextSibling,w=x.nextSibling,L=w.firstChild,q=w.nextSibling,C=q.firstChild,le=q.nextSibling,S=le.nextSibling,m=S.firstChild,O=S.nextSibling,ie=O.firstChild,se=O.nextSibling,F=se.nextSibling,J=F.firstChild,ge=F.nextSibling,ce=ge.firstChild,de=ge.nextSibling,H=de.nextSibling,X=H.firstChild,ne=H.nextSibling,Se=ne.firstChild,pe=ne.nextSibling,U=pe.nextSibling,V=U.firstChild,Z=U.nextSibling,N=Z.firstChild,Y=Z.nextSibling,ee=Y.firstChild,A=ee.nextSibling,te=A.nextSibling,p=Y.nextSibling,k=p.firstChild,z=p.nextSibling,I=z.firstChild,y=z.nextSibling,j=y.firstChild,_=j.nextSibling,T=_.nextSibling,R=T.nextSibling,P=R.nextSibling,ae=P.nextSibling,re=ae.nextSibling,fe=re.nextSibling,$e=fe.nextSibling,xe=$e.nextSibling,be=xe.nextSibling,me=be.nextSibling,ve=me.nextSibling,ye=ve.nextSibling,b=y.nextSibling,M=b.firstChild,oe=b.nextSibling,ke=oe.firstChild,ze=oe.nextSibling,Ce=ze.nextSibling,Ue=Ce.nextSibling,Te=Ue.firstChild,we=Ue.nextSibling,Re=we.firstChild,Pe=we.nextSibling,Ge=Pe.firstChild,Be=Ge.firstChild,De=Be.nextSibling,Ae=De.nextSibling,rt=Ae.nextSibling,it=rt.nextSibling,nt=it.nextSibling,ot=nt.nextSibling,lt=ot.nextSibling,st=lt.nextSibling,at=st.nextSibling,dt=at.nextSibling,ct=dt.nextSibling,ft=ct.nextSibling,ut=ft.nextSibling,gt=ut.nextSibling,pt=gt.nextSibling,vt=pt.nextSibling,Et=vt.nextSibling;return a(r,"id",`a-${e}`),a(v,"fill",`url(#a-${e})`),a(s,"id",`b-${e}`),a(d,"id",`c-${e}`),a(u,"filter",`url(#b-${e})`),a(o,"mask",`url(#c-${e})`),a(g,"id",`d-${e}`),a(f,"id",`e-${e}`),a($,"filter",`url(#d-${e})`),a(x,"mask",`url(#e-${e})`),a(L,"id",`f-${e}`),a(q,"id",`g-${e}`),a(C,"filter",`url(#f-${e})`),a(le,"mask",`url(#g-${e})`),a(m,"id",`h-${e}`),a(O,"id",`i-${e}`),a(ie,"filter",`url(#h-${e})`),a(se,"mask",`url(#i-${e})`),a(J,"id",`j-${e}`),a(ge,"id",`k-${e}`),a(ce,"filter",`url(#j-${e})`),a(de,"mask",`url(#k-${e})`),a(X,"id",`l-${e}`),a(ne,"id",`m-${e}`),a(Se,"filter",`url(#l-${e})`),a(pe,"mask",`url(#m-${e})`),a(V,"id",`n-${e}`),a(Z,"id",`o-${e}`),a(N,"filter",`url(#n-${e})`),a(Y,"mask",`url(#o-${e})`),a(A,"id",`p-${e}`),a(te,"fill",`url(#p-${e})`),a(k,"id",`q-${e}`),a(z,"id",`r-${e}`),a(I,"filter",`url(#q-${e})`),a(y,"mask",`url(#r-${e})`),a(j,"id",`s-${e}`),a(_,"fill",`url(#s-${e})`),a(T,"id",`t-${e}`),a(R,"fill",`url(#t-${e})`),a(P,"id",`u-${e}`),a(ae,"fill",`url(#u-${e})`),a(re,"id",`v-${e}`),a(fe,"fill",`url(#v-${e})`),a($e,"id",`w-${e}`),a(xe,"fill",`url(#w-${e})`),a(be,"id",`x-${e}`),a(me,"fill",`url(#x-${e})`),a(ve,"id",`y-${e}`),a(ye,"fill",`url(#y-${e})`),a(M,"id",`z-${e}`),a(oe,"id",`A-${e}`),a(ke,"filter",`url(#z-${e})`),a(ze,"id",`B-${e}`),a(Ce,"fill",`url(#B-${e})`),a(Ce,"mask",`url(#A-${e})`),a(Te,"id",`C-${e}`),a(we,"id",`D-${e}`),a(Re,"filter",`url(#C-${e})`),a(Pe,"mask",`url(#D-${e})`),a(Be,"id",`E-${e}`),a(De,"fill",`url(#E-${e})`),a(Ae,"id",`F-${e}`),a(rt,"stroke",`url(#F-${e})`),a(it,"id",`G-${e}`),a(nt,"stroke",`url(#G-${e})`),a(ot,"id",`H-${e}`),a(lt,"stroke",`url(#H-${e})`),a(st,"id",`I-${e}`),a(at,"stroke",`url(#I-${e})`),a(dt,"id",`J-${e}`),a(ct,"stroke",`url(#J-${e})`),a(ft,"id",`K-${e}`),a(ut,"stroke",`url(#K-${e})`),a(gt,"id",`L-${e}`),a(pt,"stroke",`url(#L-${e})`),a(vt,"id",`M-${e}`),a(Et,"stroke",`url(#M-${e})`),t})()}var Ur=G("<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router");function Br({initialIsOpen:e,panelProps:t={},closeButtonProps:i={},toggleButtonProps:r={},position:v="bottom-left",containerElement:l="footer",router:s,routerState:d,shadowDOMTarget:u}){const[o,n]=ue();let g;const[f,$]=Ve("tanstackRouterDevtoolsOpen",e),[x,w]=Ve("tanstackRouterDevtoolsHeight",null),[L,q]=ue(!1),[C,le]=ue(!1),S=Tt(),m=Me(),O=(U,V)=>{if(V.button!==0)return;le(!0);const Z={originalHeight:(U==null?void 0:U.getBoundingClientRect().height)??0,pageY:V.pageY},N=ee=>{const A=Z.pageY-ee.pageY,te=Z.originalHeight+A;w(te),te<70?$(!1):$(!0)},Y=()=>{le(!1),document.removeEventListener("mousemove",N),document.removeEventListener("mouseUp",Y)};document.addEventListener("mousemove",N),document.addEventListener("mouseup",Y)};f(),Oe(()=>{q(f()??!1)}),Oe(()=>{var U,V,Z;if(L()){const N=(V=(U=o())==null?void 0:U.parentElement)==null?void 0:V.style.paddingBottom,Y=()=>{var ee;const A=g.getBoundingClientRect().height;(ee=o())!=null&&ee.parentElement&&n(te=>(te!=null&&te.parentElement&&(te.parentElement.style.paddingBottom=`${A}px`),te))};if(Y(),typeof window<"u")return window.addEventListener("resize",Y),()=>{var ee;window.removeEventListener("resize",Y),(ee=o())!=null&&ee.parentElement&&typeof N=="string"&&n(A=>(A.parentElement.style.paddingBottom=N,A))}}else(Z=o())!=null&&Z.parentElement&&n(N=>(N!=null&&N.parentElement&&N.parentElement.removeAttribute("style"),N))}),Oe(()=>{if(o()){const U=o(),V=getComputedStyle(U).fontSize;U==null||U.style.setProperty("--tsrd-font-size",V)}});const{style:ie={},...se}=t,{style:F={},onClick:J,...ge}=i,{onClick:ce,class:de,...H}=r;if(!S())return null;const X=W(()=>x()??500),ne=W(()=>Q(m().devtoolsPanelContainer,m().devtoolsPanelContainerVisibility(!!f()),m().devtoolsPanelContainerResizing(C),m().devtoolsPanelContainerAnimation(L(),X()+16))),Se=W(()=>({height:`${X()}px`,...ie||{}})),pe=W(()=>Q(m().mainCloseBtn,m().mainCloseBtnPosition(v),m().mainCloseBtnAnimation(!!f()),de));return D(At,{component:l,ref:n,class:"TanStackRouterDevtools",get children(){return[D(Dt.Provider,{value:{onCloseClick:J??(()=>{})},get children(){return D(Mr,Ie({ref(U){var V=g;typeof V=="function"?V(U):g=U}},se,{router:s,routerState:d,className:ne,style:Se,get isOpen(){return L()},setIsOpen:$,handleDragStart:U=>O(g,U),shadowDOMTarget:u}))}}),(()=>{var U=Ur(),V=U.firstChild,Z=V.firstChild,N=Z.nextSibling,Y=V.nextSibling,ee=Y.nextSibling;return tt(U,Ie(H,{"aria-label":"Open TanStack Router Devtools",onClick:A=>{$(!0),ce&&ce(A)},get class(){return pe()}}),!1,!0),h(Z,D(bt,{})),h(N,D(bt,{})),E(A=>{var te=m().mainCloseBtnIconContainer,p=m().mainCloseBtnIconOuter,k=m().mainCloseBtnIconInner,z=m().mainCloseBtnDivider,I=m().routerLogoCloseButton;return te!==A.e&&c(V,A.e=te),p!==A.t&&c(Z,A.t=p),k!==A.a&&c(N,A.a=k),z!==A.o&&c(Y,A.o=z),I!==A.i&&c(ee,A.i=I),A},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),U})()]}})}export{Br as FloatingTanStackRouterDevtools,Br as default};
