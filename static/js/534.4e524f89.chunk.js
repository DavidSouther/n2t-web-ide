"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[534],{3645:function(e,t,n){n.r(t),n.d(t,{VMInstructionRow:function(){return C},default:function(){return w}});var s=n(2951),r=n(1976),a=n(7591),i=n(4337),c=n(1026),l=n(2277),o=n(9613),u=n(6167),d=n(8698),h=n(7559),p=n(5838),x=n(184),f=n(5105),j=n(5029),m=n(4625),v=n(5354);function b(e,t){var n=new j.j(e.vm.RAM,t),s=new j.j(e.vm.Screen,t),r=new p.qT(new j.j(e.vm.Keyboard,t)),a=e.vm.derivedLine();return{Keyboard:r,RAM:n,Screen:s,Stack:e.vm.vmStack().reverse(),Prog:e.vm.program,highlight:a}}function g(){var e=(0,u.useContext)(d.r),t=e.fs,n=e.setStatus,s=e.storage,r=(0,u.useRef)((function(){})),a=(0,u.useMemo)((function(){return function(e,t,n,s){var r=(0,m.Wg)(f.VM.parse("\nfunction Main.fibonacci 0\npush argument 0\npush constant 2\nlt                     // checks if n<2\nif-goto IF_TRUE\ngoto IF_FALSE\nlabel IF_TRUE          // if n<2, return n\npush argument 0        \nreturn\nlabel IF_FALSE         // if n>=2, returns fib(n-2)+fib(n-1)\npush argument 0\npush constant 2\nsub\ncall Main.fibonacci 1  // computes fib(n-2)\npush argument 0\npush constant 1\nsub\ncall Main.fibonacci 1  // computes fib(n-1)\nadd                    // returns fib(n-1) + fib(n-2)\nreturn\n\nfunction Sys.init 0\npush constant 4\ncall Main.fibonacci 1   // computes the 4'th fibonacci element\nlabel WHILE\ngoto WHILE              // loops infinitely\n")),a=(0,m.Wg)(v.Vm.build(r.instructions)),i=(new x.w).with(a),c=!1,l={update:function(e){var t;e.vm=b(i,s),e.test.useTest=c,e.test.highlight=null===(t=i.currentStep)||void 0===t?void 0:t.span}};return{initialState:{vm:b(i,s),controls:{error:"",runningTest:!1},test:{useTest:c,highlight:void 0}},reducers:l,actions:{step:function(){c?i.step():a.step(),s.current({action:"update"})},reset:function(){i.reset(),a.reset(),s.current({action:"update"})},toggleUseTest:function(){c=!c,s.current({action:"update"})}}}}(0,0,0,r)}),[t,n,s,r]),i=a.initialState,l=a.reducers,o=a.actions,p=(0,h.C)(l,i),j=(0,c.Z)(p,2),g=j[0],k=j[1];return r.current=k,{state:g,dispatch:r,actions:o}}var k=n(8923),y=n(1124),Z=n(6398),S=n(7878),w=function(){var e=g(),t=e.state,n=e.actions,d=e.dispatch,h=(0,u.useState)("repeat {\n\tvmstep;\n}"),p=(0,c.Z)(h,2),x=p[0],f=p[1],j=(0,u.useState)(""),m=(0,c.Z)(j,2),v=m[0],b=m[1],w=(0,u.useState)(""),F=(0,c.Z)(w,2),T=F[0],M=F[1],N=(0,u.useRef)();return(0,u.useEffect)((function(){return N.current=new(function(e){(0,a.Z)(c,e);var t=(0,i.Z)(c);function c(){return(0,s.Z)(this,c),t.apply(this,arguments)}return(0,r.Z)(c,[{key:"tick",value:function(){return n.step(),!1}},{key:"finishFrame",value:function(){d.current({action:"update"})}},{key:"reset",value:function(){n.reset()}},{key:"toggle",value:function(){d.current({action:"update"})}}]),c}(k.B)),function(){var e;null===(e=N.current)||void 0===e||e.stop()}}),[n,d]),(0,S.jsxs)("div",{className:"Page VmPage grid",children:[(0,S.jsx)(y.s,{className:"program",children:(0,S.jsx)("main",{children:(0,S.jsxs)("table",{children:[(0,S.jsx)("thead",{children:(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{children:"Inst"}),(0,S.jsx)("td",{children:"Target"}),(0,S.jsx)("td",{children:"Val"})]})}),(0,S.jsx)("tbody",{children:t.vm.Prog.map((function(e,n){return C({inst:e,key:n,highlighted:n===t.vm.highlight})}))})]})})}),(0,S.jsxs)(y.s,{className:"IO",children:[(0,S.jsx)("div",{children:(0,S.jsxs)("label",{children:[(0,S.jsx)("input",{type:"checkbox",onChange:n.toggleUseTest,checked:t.test.useTest,role:"switch"}),"Use Test Script"]})}),(0,S.jsx)(o.l,{memory:t.vm.Screen}),(0,S.jsx)(l.N,{keyboard:t.vm.Keyboard}),(0,S.jsx)("div",{children:t.vm.Stack.map((function(e,t){var n,s;return(0,S.jsxs)("section",{children:[(0,S.jsx)("header",{children:(0,S.jsxs)("h3",{children:["Function",(0,S.jsx)("code",{children:null!==(n=null===(s=e.fn)||void 0===s?void 0:s.name)&&void 0!==n?n:"Unknown Function"})]})}),(0,S.jsxs)("main",{children:[(0,S.jsxs)("p",{children:[(0,S.jsx)("em",{children:"Args:"}),(0,S.jsxs)("code",{children:["[",e.args.values.join(", "),"]"]})]}),(0,S.jsxs)("p",{children:[(0,S.jsx)("em",{children:"Locals:"}),(0,S.jsxs)("code",{children:["[",e.locals.values.join(", "),"]"]})]}),(0,S.jsxs)("p",{children:[(0,S.jsx)("em",{children:"Stack:"}),(0,S.jsxs)("code",{children:["[",e.stack.values.join(", "),"]"]})]})]})]},t)}))})]}),(0,S.jsx)(Z.F,{runner:N,tst:[x,f,t.test.highlight],out:[v,b],cmp:[T,M]})]})};function C(e){var t=e.inst,n=e.key,s=e.highlighted;switch(t.op){case"add":case"and":case"eq":case"gt":case"lt":case"neg":case"not":case"or":case"sub":case"return":return(0,S.jsxs)("tr",{className:s?"highlight":"",children:[(0,S.jsx)("td",{children:t.op}),(0,S.jsx)("td",{colSpan:2})]},n);case"if-goto":case"label":case"goto":return(0,S.jsxs)("tr",{className:s?"highlight":"",children:[(0,S.jsx)("td",{children:t.op}),(0,S.jsx)("td",{colSpan:2,children:t.label})]},n);case"function":case"call":return(0,S.jsxs)("tr",{className:s?"highlight":"",children:[(0,S.jsx)("td",{children:t.op}),(0,S.jsx)("td",{children:t.name}),(0,S.jsx)("td",{children:"call"===t.op?t.nArgs:t.nVars})]},n);case"pop":case"push":return(0,S.jsxs)("tr",{className:s?"highlight":"",children:[(0,S.jsx)("td",{children:t.op}),(0,S.jsx)("td",{children:t.segment}),(0,S.jsx)("td",{children:t.offset})]},n);default:return(0,S.jsx)("tr",{className:s?"highlight":"",children:(0,S.jsx)("td",{colSpan:3,children:"Unknown"})},n)}}},6398:function(e,t,n){n.d(t,{F:function(){return m}});var s=n(1092),r=n(7791),a=n(1026),i=n(8061),c=n(6167),l=n(8582),o=n(258),u=n(8365),d=n(8698),h=n(9647),p=n(8016),x=n(1539),f=n(1124),j=n(7878),m=function(e){var t=e.runner,n=(0,a.Z)(e.tst,3),m=n[0],v=n[1],b=n[2],g=(0,a.Z)(e.cmp,2),k=g[0],y=g[1],Z=(0,a.Z)(e.out,1)[0],S=e.disabled,w=void 0!==S&&S,C=(0,c.useContext)(d.r),F=C.fs,T=C.setStatus,M=(0,c.useContext)(p.Il),N=M.filePicker,I=M.tracking,_=(0,c.useState)("tst"),E=(0,a.Z)(_,2),A=E[0],R=E[1],U=(0,c.useCallback)((function(e){R(e),I.trackEvent("tab","change",e)}),[I]),L=(0,c.useCallback)((0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.select();case 3:return t=e.sent,e.next=6,F.readFile(t);case 6:n=e.sent,v(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),T("Failed to load test");case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),[N,T,F]);return(0,j.jsx)(f.s,{className:"_test_panel",header:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"flex-0",children:(0,j.jsx)(i.cC,{id:"Test"})}),(0,j.jsx)("div",{className:"flex-1",children:t.current&&(0,j.jsx)(o.D,{runner:t.current})}),(0,j.jsx)("div",{children:(0,j.jsx)("fieldset",{role:"group",children:(0,j.jsx)("button",{onClick:L,children:"\ud83d\udcc2"})})})]}),children:(0,j.jsxs)("div",{role:"tablist",style:{"--tab-count":"3"},children:[(0,j.jsx)("div",{role:"tab",id:"test-tab-tst","aria-controls":"test-tabpanel-tst","aria-selected":"tst"===A,children:(0,j.jsxs)("label",{children:[(0,j.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-tst",value:"tst",checked:"tst"===A,onChange:function(){return U("tst")}}),"Test Script"]})}),(0,j.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-tst",id:"test-tabpanel-tst",children:(0,j.jsx)(x.M,{value:m,onChange:v,grammar:h.qH.parser,language:"tst",highlight:b,disabled:w})}),(0,j.jsx)("div",{role:"tab",id:"test-tab-cmp","aria-controls":"test-tablpanel-cmp","aria-selected":"cmp"===A,children:(0,j.jsxs)("label",{children:[(0,j.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-cmp",value:"cmp",checked:"cmp"===A,onChange:function(){return U("cmp")}}),"Compare File"]})}),(0,j.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-cmp",id:"test-tabpanel-cmp",style:{position:"relative"},children:(0,j.jsx)(x.M,{value:k,onChange:y,grammar:u.lA.parser,language:"cmp",disabled:w})}),(0,j.jsx)("div",{role:"tab",id:"test-tab-out","aria-controls":"test-tabpanel-out","aria-selected":"out"===A,children:(0,j.jsxs)("label",{children:[(0,j.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-out",value:"out",checked:"out"===A,onChange:function(){return U("out")}}),"Output File"]})}),(0,j.jsx)("div",{role:"tabpanel",id:"test-tabpanel-out","aria-labelledby":"test-tab-out",children:(0,j.jsx)(l.M,{cmp:k,out:Z})})]})})}},5029:function(e,t,n){n.d(t,{j:function(){return p}});var s=n(1092),r=n(7791),a=n(2951),i=n(1976),c=n(7169),l=n(3243),o=n(7597),u=n(7591),d=n(4337),h=n(4649),p=function(e){(0,u.Z)(n,e);var t=(0,d.Z)(n);function n(e,s){var r;return(0,a.Z)(this,n),r=t.call(this,e,e.size,0),(0,h.Z)((0,c.Z)(r),"dispatch",void 0),r.dispatch=s,r}return(0,i.Z)(n,[{key:"load",value:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t,r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)((0,o.Z)(n.prototype),"load",this).call(this,t,r);case 2:this.dispatch.current({action:"update"});case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(n(5838).kG)}}]);
//# sourceMappingURL=534.4e524f89.chunk.js.map