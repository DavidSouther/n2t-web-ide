"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[428],{6393:(e,t,s)=>{s.r(t),s.d(t,{Asm:()=>S,default:()=>R});var r=s(5072),n=s(6791),i=s(7054),a=s(2201),l=s(7472),o=s(5150),c=s(6845),u=s(6604),h=s(5692);class m{asm={instructions:[]};current=-1;done=!1;symbols=[];variables=new Map;lines=[];lineNumbers=[];getResult(){return this.lines.join("\n")}load(e,t){this.symbols=[{name:"R0",value:"0"},{name:"R1",value:"1"},{name:"R2",value:"2"},{name:"...",value:""},{name:"R15",value:"15"},{name:"SCREEN",value:a.GD.toString()},{name:"KBD",value:a.eu.toString()}],this.variables.clear(),this.asm=e,(0,l.$o)(e,((e,t,s)=>{s?this.variables.set(t,{name:e,isHidden:!0}):this.symbols.push({name:e,value:t.toString()})})),e.instructions=e.instructions.filter((e=>{let{type:t}=e;return"L"!==t})),this.resolveLineNumbers(t),this.reset()}resolveLineNumbers(e){this.lineNumbers=Array(e);let t=0;for(const s of this.asm.instructions)"A"!==s.type&&"C"!==s.type||void 0==s.span||(this.lineNumbers[s.span.line]=t,t+=1)}step(e){if(this.current>=this.asm.instructions.length-1)return;this.current+=1;const t=this.asm.instructions[this.current];if("A"===t.type||"C"===t.type){e.sourceHighlight=t.span;const s=(0,l.Y_)(this.asm.instructions[this.current]);if(void 0===s)return;if(this.lines.push(`${(0,o.Ly)(s)}`),e.resultHighlight={start:17*this.current,end:17*(this.current+1),line:-1},e.sourceHighlight&&e.highlightMap.set(e.sourceHighlight,e.resultHighlight),(0,l.w_)(t)){const e=this.variables.get(t.value);void 0!=e&&e.isHidden&&(this.symbols.push({name:e.name,value:t.value.toString()}),e.isHidden=!1)}this.current===this.asm.instructions.length-1&&(this.done=!0)}}resetSymbols(){for(const t of this.variables.values())t.isHidden=!0;const e=new Set(Array.from(this.variables.values()).map((e=>e.name)));this.symbols=this.symbols.filter((t=>!e.has(t.name)))}reset(){this.current=-1,this.lines=[],this.done=!1,this.resetSymbols()}}function d(){const{setStatus:e}=(0,c.useContext)(h.r),t=(0,c.useRef)((()=>{})),{initialState:s,reducers:r,actions:n}=(0,c.useMemo)((()=>function(e,t){const s=new m,r={resultHighlight:void 0,sourceHighlight:void 0,highlightMap:new Map};let n=!0,a=!1,o=!1;const c={setAsm(e,t){let{asm:s,name:r}=t;e.asm=s,r&&(e.asmName=r)},setCmp(t,s){let{cmp:r,name:n}=s;t.compare=r,t.compareName=n,e("Loaded compare file")},update(e){e.translating=o,e.current=s.current,e.result=s.getResult(),e.symbols=Array.from(s.symbols),e.lineNumbers=Array.from(s.lineNumbers),e.sourceHighlight=r.sourceHighlight,e.resultHighlight=r.resultHighlight},compare(t){const s=t.result.split("\n"),r=t.compare.split("\n").filter((e=>""!=e.trim()));if(s.length==r.length){for(let n=0;n<r.length;n++)for(let i=0;i<r[n].length;i++)if(s[n][i]!==r[n][i])return e(`Comparison failed at ${n}:${i}`),void(t.resultHighlight={start:17*n,end:17*(n+1),line:-1});e("Comparison successful")}else e("Comparison failed - different lengths")}},u={setAsm(e,s){e=e.replace(/\r\n/g,"\n"),t.current({action:"setAsm",payload:{asm:e,name:s}}),o=!1,this.compileAsm(e)},compileAsm(r){this.reset();const n=l.Ww.parse(r);if((0,i.dZ)(n))return e(`Error parsing asm file - ${(0,i.UG)(n).message}`),void(a=!1);s.load((0,i.Ok)(n),r.split("\n").length),a=s.asm.instructions.length>0,e(""),t.current({action:"update"})},setAnimate(e){n=e},step:()=>(a&&(o=!0),s.step(r),(n||s.done)&&t.current({action:"update"}),s.done&&e("Translation done."),s.done),updateHighlight(e,s){for(const[t,n]of r.highlightMap)(s&&t.start<=e&&e<=t.end||!s&&n.start<=e&&e<=n.end)&&(r.sourceHighlight=t,r.resultHighlight=n);t.current({action:"update"})},resetHighlightInfo(){r.sourceHighlight=void 0,r.resultHighlight=void 0,r.highlightMap.clear()},reset(){e("Reset"),s.reset(),this.resetHighlightInfo(),t.current({action:"update"})},overrideState(e){if(this.resetHighlightInfo(),this.setAsm(e.asm,e.asmName),t.current({action:"setCmp",payload:{cmp:e.compare,name:e.compareName}}),e.translating)for(let t=0;t<=e.current;t++)this.step();t.current({action:"update"})}};return{initialState:{asm:"",asmName:void 0,translating:!1,current:-1,resultHighlight:void 0,sourceHighlight:void 0,symbols:[],result:"",compare:"",compareName:void 0,lineNumbers:[]},reducers:c,actions:u}}(e,t)),[e,t]),[a,o]=(0,u.C)(r,s);return t.current=o,{state:a,dispatch:t,actions:n}}var g=s(864),p=s(4089);const f=e=>{let{values:t=[],highlight:s=-1,onClick:r}=e;return(0,g.jsx)("div",{children:t.map(((e,t)=>(0,g.jsx)(v,{identifier:e.name,value:e.value,highlight:t===s,onClick:()=>r?.(e.name,e.value)},t)))})},v=e=>{let{identifier:t,value:s,highlight:r=!1,onClick:n}=e;return(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center"},onClick:n,children:[t.length>0&&(0,g.jsx)("code",{style:{flex:"1",...(0,p.eP)("none"),...r?{background:"var(--mark-background-color)"}:{},whiteSpace:"pre",padding:"3px"},children:t}),s.length>0&&(0,g.jsx)("code",{style:{flex:"1",textAlign:"right",color:"black",padding:"3px",...(0,p.eP)("none"),...r?{background:"var(--mark-background-color)"}:{}},children:s})]})};var b=s(6699),x=s(4619),y=s(9200),j=s(8398),C=s(1881),k=s(8722),H=s(7457),N=s(8079);const S=()=>{const{state:e,actions:t,dispatch:s}=d(),{toolStates:i}=(0,c.useContext)(k.Il),a=(0,c.useRef)(0),o=(0,c.useRef)(0),u=(0,c.useRef)(),[m,p]=(0,c.useState)(!1),v=(0,H.R)();(0,c.useEffect)((()=>{i.setTool("asm"),i.asmState&&t.overrideState(i.asmState)}),[]),(0,c.useEffect)((()=>{i.setAsmState(e)}),[e,i.setAsmState]),(0,c.useEffect)((()=>(u.current=new class extends x.B{async tick(){return a.current=0,o.current=0,t.step()}reset(){t.reset()}toggle(){}},p(!0),()=>{var e;null===(e=u.current)||void 0===e||e.stop()})),[t,s]);const S=(0,c.useRef)(null),R=(0,c.useRef)(null),A=(0,c.useRef)(null);let w="asm";const{setStatus:L}=(0,c.useContext)(h.r);return(0,g.jsxs)("div",{className:"AsmPage grid",children:[(0,g.jsx)(j.s,{className:"source",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(r.cC,{id:"Source"}),e.asmName&&`: ${e.asmName}`]}),(0,g.jsx)("input",{type:"file",style:{display:"none"},ref:S,onChange:async e=>{var r;if(null===(r=e.target.files)||void 0===r||!r.length)return void L("No file selected");L("Loading");const n=e.target.files[0],i=await n.text();if("asm"===w){if(!n.name.endsWith(".asm"))return void L("File must be .asm file");t.setAsm(i,n.name),L("Loaded asm file")}else{if(!n.name.endsWith(".hack"))return void L("File must be .hack file");s.current({action:"setCmp",payload:{cmp:i,name:n.name}}),L("Loaded cmp file")}}}),(0,g.jsx)("div",{className:"flex-1",children:m&&u.current&&(0,g.jsx)(n.D,{runner:u.current,prefix:(0,g.jsx)("button",{className:"flex-0",onClick:()=>{var e;w="asm",null===(e=S.current)||void 0===e||e.click()},"data-tooltip":"Load file","data-placement":"bottom",children:"\ud83d\udcc2"}),overrideTooltips:{step:"Translate",run:"Translate all"},onSpeedChange:e=>{t.setAnimate(e<=2)}})})]}),children:(0,g.jsx)(y.M,{value:e.asm,onChange:e=>{t.setAsm(e)},onCursorPositionChange:e=>{e!=a.current&&(a.current=e,t.updateHighlight(e,!0))},grammar:l.Ww.parser,language:"asm",highlight:e.translating?e.sourceHighlight:{start:0,end:0,line:1},lineNumberTransform:t=>{if(!e.translating)return"";const s=e.lineNumbers[t];return(void 0===s?"":s).toString()}})}),(0,g.jsxs)(j.s,{className:"result",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:(0,g.jsx)(r.cC,{id:"Binary Code"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("a",{ref:R,style:{display:"none"}}),(0,g.jsx)("fieldset",{role:"group",children:(0,g.jsx)("button",{onClick:v.open,children:"\ud83d\udcc2"})}),(0,g.jsx)("dialog",{open:v.isOpen,children:(0,g.jsxs)("article",{children:[(0,g.jsx)("header",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,g.jsx)("a",{style:{color:"rgba(0, 0, 0, 0)"},className:"close",href:"#root",onClick:e=>{e.preventDefault(),v.close()}})}),(0,g.jsxs)("main",{children:[(0,g.jsx)("button",{onClick:()=>{(()=>{var t,s;const r=new Blob([e.result],{type:"text/plain"}),n=URL.createObjectURL(r);R.current&&(R.current.href=n,R.current.download=null!==(t=null===(s=e.asmName)||void 0===s?void 0:s.replace(".asm",".hack"))&&void 0!==t?t:"result.hack",R.current.click(),URL.revokeObjectURL(n))})(),v.close()},children:"Download"}),(0,g.jsx)(C.rU,{ref:A,style:{display:"none"},to:N.ZP.cpu.href}),(0,g.jsx)("button",{onClick:async()=>{var t,s;i.setTool("cpu");const r=await(0,b.$W)(e.result);i.setCpuState(null===(t=e.asmName)||void 0===t?void 0:t.replace(".asm",".hack"),r),null===(s=A.current)||void 0===s||s.click()},children:"Load in CPU Emulator"})]})]})})]})]}),children:[(0,g.jsx)(y.M,{value:e.result,highlight:e.resultHighlight,disabled:!0,onChange:function(e){},onCursorPositionChange:e=>{e!=o.current&&(o.current=e,t.updateHighlight(e,!1))},grammar:void 0,language:"",dynamicHeight:!0,lineNumberTransform:e=>(e-1).toString()}),e.symbols.length>0&&e.translating&&"Symbol Table",e.translating&&(0,g.jsx)(f,{values:e.symbols})]}),(0,g.jsx)(j.s,{className:"compare",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(r.cC,{id:"Compare"}),e.compareName&&`: ${e.compareName}`]}),(0,g.jsx)("div",{children:(0,g.jsxs)("fieldset",{role:"group",children:[(0,g.jsx)("button",{onClick:()=>{s.current({action:"compare"})},children:"Compare"}),(0,g.jsx)("button",{onClick:()=>{var e;w="cmp",null===(e=S.current)||void 0===e||e.click()},"data-tooltip":"Load file","data-placement":"left",children:"\ud83d\udcc2"})]})})]}),children:(0,g.jsx)(y.M,{value:e.compare,highlight:e.translating?e.resultHighlight:{start:0,end:0,line:1},disabled:!0,onChange:function(e){},onCursorPositionChange:e=>{e!=o.current&&(o.current=e,t.updateHighlight(e,!1))},language:"",lineNumberTransform:e=>(e-1).toString()})})]})},R=S},4089:(e,t,s)=>{s.d(t,{eP:()=>l});var r=s(5251);function n(e){return void 0!==r.DB[e]}function i(e){return r.u8[e]}function a(e){switch(e){case"t":return[...a("tl"),...a("tr")];case"r":return[...a("tr"),...a("br")];case"b":return[...a("br"),...a("bl")];case"l":return[...a("tl"),...a("bl")];default:return[r.DB[e]]}}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n(e)&&(t=e,e="");const s=i(e);return a(t).reduce(((e,t)=>(""===t?e.borderRadius=s:e[`border${t}Radius`]=s,e)),{})}},5251:(e,t,s)=>{s.d(t,{BM:()=>i,DB:()=>n,u8:()=>r});const r={none:"0px",sm:"0.125rem","":"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},n={"":"",t:"Top",r:"Right",l:"Left",b:"Bottom",tl:"TopLeft",tr:"TopRight",bl:"BottomLeft",br:"BottomRight"},i={"1/4":"25%","1/2":"50%","3/4":"75%",full:"100%"}}}]);