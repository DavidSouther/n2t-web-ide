"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[393],{1293:(e,t,s)=>{s.r(t),s.d(t,{CPU:()=>S,default:()=>w});var a=s(5072),n=s(4619),r=s(3478),i=s(1062),l=s(8963),c=s(7054),o=s(2201),u=s(4430);const d=new Int16Array([2,55944,0,64528,15,54018,1,64528,2,61584,54024,0,64648,2,55943,15,55943]);var h=s(1003),p=s(6845),m=s(4913),x=s(6604),g=s(5692),b=s(5969);function f(e,t){const s=new b.j(e.cpu.RAM,t),a=new b.j(e.cpu.ROM,t),n=new b.j(e.cpu.Screen,t),r=new o.qT(new b.j(e.cpu.RAM,t));return{A:e.cpu.A,D:e.cpu.D,PC:e.cpu.PC,RAM:s,ROM:a,Screen:n,Keyboard:r}}function j(){const{fs:e,setStatus:t,storage:s}=(0,p.useContext)(g.r),a=(0,p.useRef)((()=>{})),{initialState:n,reducers:r,actions:i}=(0,p.useMemo)((()=>function(e,t,s,a){let n=new h.o(new o.eD(d));const r={update(e){e.sim=f(n,a),e.test.highlight=n.currentStep?.span},setTest(e,t){let{tst:s,cmp:a}=t;e.test.tst=s??e.test.tst,e.test.cmp=a??e.test.cmp,e.test.out=""},testStep(e){e.test.out=n.log(),this.update(e)},testFinished(e){const s=(0,m.q)(e.test.cmp.trim(),n.log().trim());t(s?"Simulation successful: The output file is identical to the compare file":"Simulation error: The output file differs from the compare file")}},i={tick(){n.cpu.tick()},testStep(){const e=n.step();return a.current({action:"testStep"}),e&&a.current({action:"testFinished"}),e},resetRAM(){n.cpu.RAM.loadBytes([]),a.current({action:"update"}),t("Reset RAM")},toggleUseTest(){a.current({action:"update"})},resetCPU(){n.reset(),a.current({action:"setTest",payload:{}}),a.current({action:"update"}),t("Reset CPU")},reset(){this.resetCPU(),t("Reset CPU & RAM")},compileTest(e,s){a.current({action:"setTest",payload:{tst:e,cmp:s}});const r=u.qH.parse(e);return(0,c.dZ)(r)?(t("Failed to parse test"),!1):(t("Parsed tst"),n=h.o.from((0,c.Ok)(r),n.cpu.ROM),a.current({action:"update"}),!0)},initialize(){this.compileTest("repeat {\n  ticktock;\n}")}};return{initialState:{sim:f(n,a),test:{highlight:n.currentStep?.span,tst:"",cmp:"",out:""}},reducers:r,actions:i}}(0,t,0,a)),[e,t,s,a]),[l,b]=(0,x.C)(r,n);return a.current=b,{state:l,dispatch:a,actions:i}}var v=s(6791),y=s(8722),C=s(8398),k=s(558),M=s(864);const S=()=>{const{state:e,actions:t,dispatch:s}=j(),{toolStates:c}=(0,p.useContext)(y.Il),[o,u]=(0,x.i)(e.test.tst),[d,h]=(0,x.i)(e.test.out),[m,g]=(0,x.i)(e.test.cmp),[b,f]=(0,p.useState)(),[S,w]=(0,p.useState)("asm"),[R,P]=(0,p.useState)(!0),[I,T]=(0,p.useState)(0);(0,p.useEffect)((()=>{t.initialize()}),[t]),(0,p.useEffect)((()=>{c.setTool("cpu"),c.cpuState.rom&&(e.sim.ROM.loadBytes(c.cpuState.rom),c.cpuState.name&&(f(c.cpuState.name),c.cpuState.name.endsWith(".hack")&&w("bin")))}),[]),(0,p.useEffect)((()=>{c.setCpuState(b,Array.from(e.sim.ROM.map(((e,t)=>t))))}),[e]);const A=(0,p.useRef)(),F=(0,p.useRef)(),[H,N]=(0,p.useState)(!1);(0,p.useEffect)((()=>(A.current=new class extends n.B{async tick(){return t.tick(),!1}finishFrame(){s.current({action:"update"})}reset(){t.reset()}toggle(){s.current({action:"update"})}},F.current=new class extends n.B{async tick(){return t.testStep()}finishFrame(){s.current({action:"update"})}reset(){t.reset()}toggle(){s.current({action:"update"})}},N(!0),()=>{var e,t;null===(e=A.current)||void 0===e||e.stop(),null===(t=F.current)||void 0===t||t.stop()})),[t,s]);return(0,M.jsxs)("div",{className:"Page CpuPage grid",children:[(0,M.jsx)(i.ZP,{name:"ROM",displayEnabled:R,memory:e.sim.ROM,highlight:e.sim.PC,format:S,onUpload:e=>{f(e),t.reset()}}),(0,M.jsx)(i.ZP,{name:"RAM",displayEnabled:R,memory:e.sim.RAM,format:"hex",onChange:()=>{T(I+1)}}),(0,M.jsxs)(C.s,{className:"IO",header:(0,M.jsxs)(M.Fragment,{children:[b&&(0,M.jsx)("div",{className:"flex-0",children:b}),(0,M.jsx)("div",{className:"flex-1",children:H&&A.current&&(0,M.jsx)(v.D,{runner:A.current})})]}),children:[(0,M.jsx)(l.l,{memory:e.sim.Screen},I),(0,M.jsx)(r.N,{update:()=>{s.current({action:"update"})},keyboard:e.sim.Keyboard}),(0,M.jsxs)("label",{children:[(0,M.jsx)("input",{type:"checkbox",role:"switch",checked:R,onChange:()=>{P(!R)}}),(0,M.jsx)(a.cC,{id:"{0}",values:{0:R?"Disable display":"Enable display"}})]}),R&&(0,M.jsx)("div",{children:(0,M.jsxs)("dl",{children:[(0,M.jsx)("dt",{children:"PC"}),(0,M.jsx)("dd",{children:e.sim.PC}),(0,M.jsx)("dt",{children:"A"}),(0,M.jsx)("dd",{children:e.sim.A}),(0,M.jsx)("dt",{children:"D"}),(0,M.jsx)("dd",{children:e.sim.D})]})})]}),H&&(0,M.jsx)(k.F,{runner:F,tst:[o,u,e.test.highlight],out:[d,h],cmp:[m,g],onLoadTest:(e,s)=>{t.compileTest(e,s)}})]})},w=S},558:(e,t,s)=>{s.d(t,{F:()=>m});var a=s(5072),n=s(6845),r=s(1965),i=s(6791),l=s(7880),c=s(5692),o=s(4430),u=s(8722),d=s(9200),h=s(8398),p=s(864);const m=e=>{let{runner:t,tst:[s,m,x],cmp:[g,b],out:[f],disabled:j=!1,onLoadTest:v}=e;const{fs:y,setStatus:C}=(0,n.useContext)(c.r),{filePicker:k,tracking:M}=(0,n.useContext)(u.Il),[S,w]=(0,n.useState)("tst"),R=(0,n.useCallback)((e=>{w(e),M.trackEvent("tab","change",e)}),[M]),P=(0,n.useCallback)((async()=>{try{const e=await k.select(),t=await y.readFile(e),s=await y.readFile(e.replace(/\.tst$/,".cmp"));null===v||void 0===v||v(t,s)}catch(e){console.error(e),C("Failed to load test")}}),[k,C,y]);return(0,p.jsx)(h.s,{className:"_test_panel",header:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"flex-0",children:(0,p.jsx)(a.cC,{id:"Test"})}),(0,p.jsx)("div",{className:"flex-1",children:t.current&&(0,p.jsx)(i.D,{runner:t.current})}),(0,p.jsx)("div",{children:(0,p.jsx)("fieldset",{role:"group",children:(0,p.jsx)("button",{onClick:P,children:"\ud83d\udcc2"})})})]}),children:(0,p.jsxs)("div",{role:"tablist",style:{"--tab-count":"3"},children:[(0,p.jsx)("div",{role:"tab",id:"test-tab-tst","aria-controls":"test-tabpanel-tst","aria-selected":"tst"===S,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-tst",value:"tst",checked:"tst"===S,onChange:()=>R("tst")}),"Test Script"]})}),(0,p.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-tst",id:"test-tabpanel-tst",children:(0,p.jsx)(d.M,{value:s,onChange:m,grammar:o.qH.parser,language:"tst",highlight:x,disabled:j})}),(0,p.jsx)("div",{role:"tab",id:"test-tab-cmp","aria-controls":"test-tablpanel-cmp","aria-selected":"cmp"===S,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-cmp",value:"cmp",checked:"cmp"===S,onChange:()=>R("cmp")}),"Compare File"]})}),(0,p.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-cmp",id:"test-tabpanel-cmp",style:{position:"relative"},children:(0,p.jsx)(d.M,{value:g,onChange:b,grammar:l.lA.parser,language:"cmp",disabled:j})}),(0,p.jsx)("div",{role:"tab",id:"test-tab-out","aria-controls":"test-tabpanel-out","aria-selected":"out"===S,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-out",value:"out",checked:"out"===S,onChange:()=>R("out")}),"Output File"]})}),(0,p.jsx)("div",{role:"tabpanel",id:"test-tabpanel-out","aria-labelledby":"test-tab-out",children:(0,p.jsx)(r.M,{cmp:g,out:f})})]})})}},1062:(e,t,s)=>{s.d(t,{zp:()=>y,ZP:()=>C});var a=s(864),n=s(4089),r=s(6845),i=s(2201),l=s(6699),c=s(6871),o=s(5150),u=s(5554),d=s(5251);var h=s(6604);const p=0,m=1,x=e=>{const[t,s]=(0,r.useState)(e.mode??p),[n,i]=(0,h.i)(e.value),l=()=>{return(0,a.jsx)("span",{style:{cursor:"text",...(e="full",t="inline",void 0===e&&void 0!==d.BM[t]&&(e=t),{..."inline"===t?{display:"inline-block"}:{},width:d.BM[e]??"0"})},onClick:()=>{s(m)},children:n});var e,t},c=(0,r.useCallback)((e=>e?.select()),[]),o=(0,r.useCallback)((t=>{s(p),i(t.value??""),e.onChange(t.value??"")}),[e,s,i]),u=()=>(0,a.jsx)("span",{style:{display:"block",position:"relative"},children:(0,a.jsx)("input",{ref:c,style:{zIndex:"10",position:"absolute",left:"0",marginTop:"-0.375rem",color:"black"},onFocus:e.onFocus,onBlur:e=>{let{target:t}=e;return o(t)},onKeyPress:e=>{let{key:t,target:s}=e;"Enter"===t&&o(s)},type:"text",defaultValue:n})});return(()=>{switch(t){case m:return u();case p:return l();default:return(0,a.jsx)("span",{})}})()};var g=s(5692);function b(e,t,s){const{totalHeight:a,toleranceHeight:n,bufferedItems:r,settings:{itemHeight:i,minIndex:l,maxIndex:c}}=t,o=l+Math.floor((e-n)/i),u=function(e,t,s,a,n){const r=Math.max(0,e,s);return[...n(r,Math.min(t,s+a-1)-r)]}(l,c,o,r,s),d=Math.max((o-l)*i,0);return{scrollTop:e,topPaddingHeight:d,bottomPaddingHeight:Math.max(a-(d+u.length*i),0),data:u}}const f=e=>{const t=(0,r.useRef)(null),{settings:s,startState:n,reducer:i}=(0,r.useMemo)((()=>{const t=function(e){const{minIndex:t=0,maxIndex:s=Number.MAX_SAFE_INTEGER,startIndex:a=0,itemHeight:n=20,count:r=Math.max(s-t,1),tolerance:i=r}=e;return{minIndex:t,maxIndex:s,startIndex:a,itemHeight:n,count:r,tolerance:i}}(e.settings??{}),s=function(e,t){const{minIndex:s,maxIndex:a,startIndex:n,itemHeight:r,count:i,tolerance:l}=e,c=i+2*l,o=Math.max(0,n-l-s),u=i*r,d=Math.max(a-s,1)*r,h=l*r,p=o*r,m={scrollTop:0,settings:e,viewportHeight:u,totalHeight:d,toleranceHeight:h,bufferedItems:c,topPaddingHeight:p,bottomPaddingHeight:d-(p+(u+2*h)),data:[]};return{...m,...b(p+h,m,t)}}(t,e.get),a=(n=e.get,(e,t)=>({...e,...b(t,e,n)}));var n;return{settings:t,reducer:a,startState:s}}),[e.settings,e.get]),[l,c]=(0,r.useReducer)(i,n);(0,r.useEffect)((()=>{null!==t.current&&c(t.current.scrollTop)}),[s,e.row]);const o=(0,r.useCallback)((e=>{e&&(e.scrollTop=t.current?t.current.scrollTop:s.startIndex*s.itemHeight),t.current=e}),[t,s.startIndex,s.itemHeight]),u=l.data.map((t=>(0,a.jsx)("div",{style:{height:`${s.itemHeight}px`},children:e.row(t)},e.rowKey(t))));return(0,a.jsxs)("div",{ref:o,style:{height:`${l.viewportHeight}px`,overflowY:"scroll",overflowAnchor:"none"},className:e.className??"",onScroll:e=>c(e.target.scrollTop),children:[(0,a.jsx)("div",{style:{height:`${l.topPaddingHeight}px`}}),u,(0,a.jsx)("div",{style:{height:`${l.bottomPaddingHeight}px`}})]})},j=e=>{let{memory:t,jmp:s={value:0},highlight:n=-1,editable:i=!1,justifyLeft:l=!1,format:c=o.E_,onChange:u=(()=>{}),onFocus:d=(()=>{})}=e;const h=(0,r.useMemo)((()=>({count:Math.min(t.size,25),maxIndex:t.size,itemHeight:34,startIndex:s.value})),[t.size,s]),p=(0,r.useCallback)(((e,s)=>t.range(e,e+s).map(((t,s)=>[s+e,t]))),[t]),m=(0,r.useCallback)((e=>{let[s,r]=e;return(0,a.jsx)(v,{index:s,value:c(r),size:t.size,editable:i,justifyLeft:l,highlight:s===n,onChange:u,onFocus:d})}),[c,i,n,u]);return(0,a.jsx)(f,{settings:h,get:p,row:m,rowKey:e=>{let[t]=e;return t}})},v=e=>{let{index:t,value:s,size:r,highlight:i=!1,editable:l=!1,justifyLeft:c=!1,onChange:u=(()=>{}),onFocus:d=(()=>{})}=e;return(0,a.jsxs)("div",{style:{display:"flex",height:"100%"},children:[(0,a.jsx)("code",{style:{...(0,n.eP)("none"),...i?{background:"var(--mark-background-color)"}:{},whiteSpace:"pre"},children:r?(0,o.E_)(t).padStart(Math.ceil(Math.log10(r))," "):(0,o.E_)(t)}),(0,a.jsx)("code",{style:{flex:"1",textAlign:c?"left":"right",color:"black",...(0,n.eP)("none"),...i?{background:"var(--mark-background-color)"}:{}},children:l?(0,a.jsx)(x,{value:s,highlight:i,onChange:e=>u(t,e,Number(s)),onFocus:()=>d(t)}):(0,a.jsx)("span",{style:{color:"black"},children:s})})]})},y=e=>{let{name:t="Memory",displayEnabled:s=!0,highlight:n=-1,editable:d=!0,memory:p,format:m="dec",onUpload:x,onChange:b}=e;const[f,v]=(0,h.i)(m),[y,C]=(0,r.useState)(""),[k,M]=(0,r.useState)({value:0}),[S,w]=(0,h.i)(n),[R,P]=(0,r.useState)(0),I=()=>{const e=!isNaN(parseInt(y))&&isFinite(parseInt(y))?Number(y):0;w(e),M({value:e})},T=(0,r.useRef)(null),A=(0,r.useCallback)((()=>{b?.(),T.current?.click()}),[T]),{setStatus:F}=(0,r.useContext)(g.r),H=(0,r.useCallback)((async e=>{if(!e.target.files?.length)return void F("No file selected");const t=e.target.files[0];x?.(t.name);const s=await t.text(),a=t.name.endsWith("hack")?l.$W:t.name.endsWith("asm")?l.eC:l.uC,n=await a(s);p.loadBytes(n),e.target.value="",v(t.name.endsWith("hack")?"bin":t.name.endsWith("asm")?"asm":f),I()}),[]),N=()=>{P(R+1)};return(0,u._W)((()=>{C(""),M({value:0})})),(0,a.jsxs)("article",{className:`panel memory ${t}`,children:[(0,a.jsxs)("header",{children:[(0,a.jsx)("div",{children:t}),(0,a.jsxs)("fieldset",{role:"group",children:[(0,a.jsx)("input",{type:"file",style:{display:"none"},ref:T,onChange:H}),(0,a.jsx)("button",{onClick:A,className:"flex-0","data-tooltip":"Load file","data-placement":"bottom",children:"\ud83d\udcc2"}),(0,a.jsx)("button",{onClick:()=>{p.reset(),b?.(),N()},className:"flex-0","data-tooltip":"Clear","data-placement":"bottom",children:"\ud83c\udd91"}),(0,a.jsx)("input",{style:{width:"4em",height:"100%"},placeholder:"Addr",value:y,onKeyDown:e=>{let{key:t}=e;return"Enter"===t&&I()},onChange:e=>{let{target:{value:t}}=e;return C(t)}}),(0,a.jsx)("button",{onClick:I,className:"flex-0","data-tooltip":"Scroll to address","data-placement":"bottom",children:"\u2935\ufe0f"}),(0,a.jsx)("select",{value:f,onChange:e=>v(e.target.value),children:i.I2.map((e=>(0,a.jsx)("option",{children:e},e)))})]})]}),s?(0,a.jsx)(j,{jmp:k,memory:p,highlight:S,editable:d,justifyLeft:"asm"==f,format:e=>function(e,t){switch(e){case"bin":return(0,o.Ly)(t);case"hex":return(0,o.$v)(t);case"asm":return(0,c.a)(t);default:return(0,o.E_)(t)}}(f,e),onChange:(e,t)=>{p.update(e,t,f??"dec"),b?.(),N()},onFocus:e=>w(e)},R):"Memory display is disabled"]})},C=y},4913:(e,t,s)=>{s.d(t,{q:()=>r});var a=s(7054),n=s(7880);const r=(e,t)=>{const s=n.lA.parse(e),r=n.lA.parse(t);if((0,a.dZ)(s)||(0,a.dZ)(r))return!1;const i=(0,a.Ok)(s),l=(0,a.Ok)(r);for(let a=0;a<Math.min(i.length,l.length);a++){const e=i[a]??[],t=l[a]??[];for(let s=0;s<Math.max(e.length,t.length);s++){const a=e[s]??"",n=t[s]??"";if(null===a?.trim().match(/^\*+$/)&&n?.trim()!==a?.trim())return!1}}return!0}},5969:(e,t,s)=>{s.d(t,{j:()=>n});var a=s(2201);class n extends a.kG{dispatch;constructor(e,t){super(e,e.size,0),this.dispatch=t}async load(e,t){await super.load(e,t),this.dispatch.current({action:"update"})}}},4089:(e,t,s)=>{s.d(t,{eP:()=>l});var a=s(5251);function n(e){return void 0!==a.DB[e]}function r(e){return a.u8[e]}function i(e){switch(e){case"t":return[...i("tl"),...i("tr")];case"r":return[...i("tr"),...i("br")];case"b":return[...i("br"),...i("bl")];case"l":return[...i("tl"),...i("bl")];default:return[a.DB[e]]}}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n(e)&&(t=e,e="");const s=r(e);return i(t).reduce(((e,t)=>(""===t?e.borderRadius=s:e[`border${t}Radius`]=s,e)),{})}},5251:(e,t,s)=>{s.d(t,{BM:()=>r,DB:()=>n,u8:()=>a});const a={none:"0px",sm:"0.125rem","":"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},n={"":"",t:"Top",r:"Right",l:"Left",b:"Bottom",tl:"TopLeft",tr:"TopRight",bl:"BottomLeft",br:"BottomRight"},r={"1/4":"25%","1/2":"50%","3/4":"75%",full:"100%"}}}]);