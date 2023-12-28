"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[654],{8815:(e,t,s)=>{s.r(t),s.d(t,{VMInstructionRow:()=>y,VMStackFrame:()=>S,default:()=>k});var a=s(3478),n=s(8963);var r=s(6845),i=s(5692),l=s(6604),c=s(2201),d=s(4388),o=s(8637),h=s(5969),u=s(7054),p=s(6391);function m(e,t){const s=new h.j(e.vm.RAM,t),a=new h.j(e.vm.Screen,t),n=new c.qT(new h.j(e.vm.Keyboard,t)),r=e.vm.derivedLine();return{Keyboard:n,RAM:s,Screen:a,Stack:e.vm.vmStack().reverse(),Prog:e.vm.program,highlight:r}}function b(){const{fs:e,setStatus:t,storage:s}=(0,r.useContext)(i.r),a=(0,r.useRef)((()=>{})),{initialState:n,reducers:c,actions:h}=(0,r.useMemo)((()=>function(e,t,s,a){const n=(0,u.Wg)(o.VM.parse("\nfunction Main.fibonacci 0\npush argument 0\npush constant 2\nlt                     // checks if n<2\nif-goto IF_TRUE\ngoto IF_FALSE\nlabel IF_TRUE          // if n<2, return n\npush argument 0        \nreturn\nlabel IF_FALSE         // if n>=2, returns fib(n-2)+fib(n-1)\npush argument 0\npush constant 2\nsub\ncall Main.fibonacci 1  // computes fib(n-2)\npush argument 0\npush constant 1\nsub\ncall Main.fibonacci 1  // computes fib(n-1)\nadd                    // returns fib(n-1) + fib(n-2)\nreturn\n\nfunction Sys.init 0\npush constant 4\ncall Main.fibonacci 1   // computes the 4'th fibonacci element\nlabel WHILE\ngoto WHILE              // loops infinitely\n")),r=(0,u.Wg)(p.Vm.build(n.instructions)),i=(new d.w).with(r);let l=!1;const c={update(e){e.vm=m(i,a),e.test.useTest=l,e.test.highlight=i.currentStep?.span}};return{initialState:{vm:m(i,a),controls:{error:"",runningTest:!1},test:{useTest:l,highlight:void 0}},reducers:c,actions:{step(){l?i.step():r.step(),a.current({action:"update"})},reset(){i.reset(),r.reset(),a.current({action:"update"})},toggleUseTest(){l=!l,a.current({action:"update"})}}}}(0,0,0,a)),[e,t,s,a]),[b,x]=(0,l.C)(c,n);return a.current=x,{state:b,dispatch:a,actions:h}}var x=s(4619),j=s(8398),g=s(558),v=s(1062),f=s(864);const k=()=>{const{state:e,actions:t,dispatch:s}=b(),[i,l]=(0,r.useState)("Stack"),[c,d]=(0,r.useState)("repeat {\n\tvmstep;\n}"),[o,h]=(0,r.useState)(""),[u,p]=(0,r.useState)(""),m=(0,r.useRef)();return(0,r.useEffect)((()=>(m.current=new class extends x.B{async tick(){return t.step(),!1}finishFrame(){s.current({action:"update"})}reset(){t.reset()}toggle(){s.current({action:"update"})}},()=>{var e;null===(e=m.current)||void 0===e||e.stop()})),[t,s]),(0,f.jsxs)("div",{className:"Page VmPage grid",children:[(0,f.jsx)(j.s,{className:"program",children:(0,f.jsx)("main",{children:(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Inst"}),(0,f.jsx)("td",{children:"Target"}),(0,f.jsx)("td",{children:"Val"})]})}),(0,f.jsx)("tbody",{children:e.vm.Prog.map(((t,s)=>y({inst:t,key:s,highlighted:s===e.vm.highlight})))})]})})}),(0,f.jsxs)(j.s,{className:"IO",children:[(0,f.jsx)("div",{children:(0,f.jsxs)("label",{children:[(0,f.jsx)("input",{type:"checkbox",onChange:t.toggleUseTest,checked:e.test.useTest,role:"switch"}),"Use Test Script"]})}),(0,f.jsx)(n.l,{memory:e.vm.Screen}),(0,f.jsx)(a.N,{keyboard:e.vm.Keyboard}),(0,f.jsxs)("div",{role:"tablist",style:{"--tab-count":"2"},children:[(0,f.jsx)("div",{role:"tab",id:"mem-tab-stack","aria-controls":"mem-tabpanel","aria-selected":"Stack"===i,children:(0,f.jsxs)("label",{children:[(0,f.jsx)("input",{type:"radio",name:"mem-tabs","aria-controls":"mem-tabpanel",value:"tst",checked:"Stack"===i,onChange:()=>l("Stack")}),"Stack"]})}),(0,f.jsx)("div",{role:"tabpanel","aria-labelledby":"mem-tab-stack",id:"mem-tabpanel",children:e.vm.Stack.map(((e,t)=>(0,f.jsx)(S,{frame:e},t)))}),(0,f.jsx)("div",{role:"tab",id:"mem-tab-ram","aria-controls":"mem-tabpanel","aria-selected":"RAM"===i,children:(0,f.jsxs)("label",{children:[(0,f.jsx)("input",{type:"radio",name:"mem-tabs","aria-controls":"mem-tabpanel",value:"tst",checked:"RAM"===i,onChange:()=>l("RAM")}),"RAM"]})}),(0,f.jsx)("div",{role:"tabpanel","aria-labelledby":"mem-tab-ram",id:"mem-tabpanel",children:(0,f.jsx)(v.ZP,{memory:e.vm.RAM,format:"hex"})})]})]}),(0,f.jsx)(g.F,{runner:m,tst:[c,d,e.test.highlight],out:[o,h],cmp:[u,p]})]})};function S(e){var t,s;let{frame:a}=e;return(0,f.jsxs)("section",{children:[(0,f.jsx)("header",{children:(0,f.jsxs)("h3",{children:["Function",(0,f.jsx)("code",{children:null!==(t=null===(s=a.fn)||void 0===s?void 0:s.name)&&void 0!==t?t:"Unknown Function"})]})}),(0,f.jsxs)("main",{children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("em",{children:"Args:"}),(0,f.jsxs)("code",{children:["[",a.args.values.join(", "),"]"]})]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("em",{children:"Locals:"}),(0,f.jsxs)("code",{children:["[",a.locals.values.join(", "),"]"]})]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("em",{children:"Stack:"}),(0,f.jsxs)("code",{children:["[",a.stack.values.join(", "),"]"]})]})]})]})}function y(e){let{inst:t,key:s,highlighted:a}=e;switch(t.op){case"add":case"and":case"eq":case"gt":case"lt":case"neg":case"not":case"or":case"sub":case"return":return(0,f.jsxs)("tr",{className:a?"highlight":"",children:[(0,f.jsx)("td",{children:t.op}),(0,f.jsx)("td",{colSpan:2})]},s);case"if-goto":case"label":case"goto":return(0,f.jsxs)("tr",{className:a?"highlight":"",children:[(0,f.jsx)("td",{children:t.op}),(0,f.jsx)("td",{colSpan:2,children:t.label})]},s);case"function":case"call":return(0,f.jsxs)("tr",{className:a?"highlight":"",children:[(0,f.jsx)("td",{children:t.op}),(0,f.jsx)("td",{children:t.name}),(0,f.jsx)("td",{children:"call"===t.op?t.nArgs:t.nVars})]},s);case"pop":case"push":return(0,f.jsxs)("tr",{className:a?"highlight":"",children:[(0,f.jsx)("td",{children:t.op}),(0,f.jsx)("td",{children:t.segment}),(0,f.jsx)("td",{children:t.offset})]},s);default:return(0,f.jsx)("tr",{className:a?"highlight":"",children:(0,f.jsx)("td",{colSpan:3,children:"Unknown"})},s)}}},558:(e,t,s)=>{s.d(t,{F:()=>m});var a=s(5072),n=s(6845),r=s(1965),i=s(6791),l=s(7880),c=s(5692),d=s(4430),o=s(8722),h=s(9200),u=s(8398),p=s(864);const m=e=>{let{runner:t,tst:[s,m,b],cmp:[x,j],out:[g],disabled:v=!1,onLoadTest:f}=e;const{fs:k,setStatus:S}=(0,n.useContext)(c.r),{filePicker:y,tracking:w}=(0,n.useContext)(o.Il),[C,F]=(0,n.useState)("tst"),M=(0,n.useCallback)((e=>{F(e),w.trackEvent("tab","change",e)}),[w]),T=(0,n.useCallback)((async()=>{try{const e=await y.select(),t=await k.readFile(e),s=await k.readFile(e.replace(/\.tst$/,".cmp"));null===f||void 0===f||f(t,s)}catch(e){console.error(e),S("Failed to load test")}}),[y,S,k]);return(0,p.jsx)(u.s,{className:"_test_panel",header:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"flex-0",children:(0,p.jsx)(a.cC,{id:"Test"})}),(0,p.jsx)("div",{className:"flex-1",children:t.current&&(0,p.jsx)(i.D,{runner:t.current})}),(0,p.jsx)("div",{children:(0,p.jsx)("fieldset",{role:"group",children:(0,p.jsx)("button",{onClick:T,children:"\ud83d\udcc2"})})})]}),children:(0,p.jsxs)("div",{role:"tablist",style:{"--tab-count":"3"},children:[(0,p.jsx)("div",{role:"tab",id:"test-tab-tst","aria-controls":"test-tabpanel-tst","aria-selected":"tst"===C,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-tst",value:"tst",checked:"tst"===C,onChange:()=>M("tst")}),"Test Script"]})}),(0,p.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-tst",id:"test-tabpanel-tst",children:(0,p.jsx)(h.M,{value:s,onChange:m,grammar:d.qH.parser,language:"tst",highlight:b,disabled:v})}),(0,p.jsx)("div",{role:"tab",id:"test-tab-cmp","aria-controls":"test-tablpanel-cmp","aria-selected":"cmp"===C,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-cmp",value:"cmp",checked:"cmp"===C,onChange:()=>M("cmp")}),"Compare File"]})}),(0,p.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-cmp",id:"test-tabpanel-cmp",style:{position:"relative"},children:(0,p.jsx)(h.M,{value:x,onChange:j,grammar:l.lA.parser,language:"cmp",disabled:v})}),(0,p.jsx)("div",{role:"tab",id:"test-tab-out","aria-controls":"test-tabpanel-out","aria-selected":"out"===C,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-out",value:"out",checked:"out"===C,onChange:()=>M("out")}),"Output File"]})}),(0,p.jsx)("div",{role:"tabpanel",id:"test-tabpanel-out","aria-labelledby":"test-tab-out",children:(0,p.jsx)(r.M,{cmp:x,out:g})})]})})}},5969:(e,t,s)=>{s.d(t,{j:()=>n});var a=s(2201);class n extends a.kG{dispatch;constructor(e,t){super(e,e.size,0),this.dispatch=t}async load(e,t){await super.load(e,t),this.dispatch.current({action:"update"})}}}}]);