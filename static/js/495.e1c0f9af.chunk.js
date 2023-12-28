"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[495],{2657:(t,e,s)=>{s.r(e),s.d(e,{Chip:()=>ee,default:()=>se});var i=s(5072),n=s(6845),a=s(864),r=s(5524),o=s(7239),l=s(2201);class c extends r.tI{width;_memory;_nextData=0;_address=0;get memory(){return this._memory}get address(){return this._address}constructor(t,e){super(["in[16]","load",`address[${t}]`],["out[16]"],e),this.width=t,this._memory=new l.zp(Math.pow(2,this.width))}tick(){const t=this.in("load").voltage();this._address=this.in("address").busVoltage,t&&(this._nextData=this.in().busVoltage,this._memory.set(this._address,this._nextData))}tock(){this.out().busVoltage=this._memory?.get(this._address)??0}eval(){const t=this.in("address").busVoltage;this.out().busVoltage=this._memory?.get(t)??0}at(t){return(0,o.hu)(t<this._memory.size,(()=>`Request out of bounds (${t} >= ${this._memory.size})`)),new u(`${this.name}[${t}]`,t,this._memory)}reset(){this._memory.reset(),super.reset()}}class u extends r.Gc{index;ram;constructor(t,e,s){super(t),this.index=e,this.ram=s}get busVoltage(){return this.ram.get(this.index)}set busVoltage(t){this.ram.set(this.index,t)}}class d extends c{constructor(t){super(3,t)}}class h extends c{constructor(t){super(14,t)}}var p=s(2369),g=s(5150),m=s(9415);class b extends c{constructor(){super(16,"ROM")}async load(t,e){try{(await(0,m.zD)(t,e)).map(((t,e)=>this.at(e).busVoltage=t))}catch(s){throw new Error(`ROM32K Failed to load file ${e}`)}}}class f extends c{static SIZE=l.yJ;static OFFSET=l.GD;constructor(){super(13,"Screen")}}class x extends r.Af{static OFFSET=l.eu;constructor(){super([],["out[16]"],"Keyboard")}getKey(){return this.out().busVoltage}setKey(t){this.out().busVoltage=65535&t}clearKey(){this.out().busVoltage=0}}class y extends r.tI{ram=new h;screen=new f;keyboard=new x;address=0;constructor(){super(["in[16]","load","address[15])"],["out[16]"],"Memory"),this.parts.add(this.keyboard),this.parts.add(this.screen),this.parts.add(this.ram)}tick(){const t=this.in("load").voltage();if(this.address=this.in("address").busVoltage,t){const t=this.in().busVoltage;this.address>=x.OFFSET||(this.address>=f.OFFSET?this.screen.at(this.address-f.OFFSET).busVoltage=t:this.ram.at(this.address).busVoltage=t)}}tock(){this.eval()}eval(){if(!this.ram)return;this.address=this.in("address").busVoltage;let t=0;t=this.address>=x.OFFSET?this.keyboard?.out().busVoltage??0:this.address>=f.OFFSET?this.screen?.at(this.address-f.OFFSET).busVoltage??0:this.ram?.at(this.address).busVoltage??0,this.out().busVoltage=t}in(t){if(t?.startsWith("RAM16K")){const e=(0,g.o5)(t.match(/\[(?<idx>\d+)]/)?.groups?.idx??"0");return this.ram.at(e)}if(t?.startsWith("Screen")){const e=(0,g.o5)(t.match(/\[(?<idx>\d+)]/)?.groups?.idx??"0");return this.screen.at(e)}return super.in(t)}get(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.startsWith("RAM16K")?this.at(16383&e):t.startsWith("Screen")?this.at(e&8191+f.OFFSET):t.startsWith("Keyboard")?this.at(x.OFFSET):t.startsWith("Memory")?this.at(e):super.get(t,e)}at(t){return t>=x.OFFSET?this.keyboard.out():t>=f.OFFSET?this.screen.at(t-f.OFFSET):this.ram.at(t)}reset(){this.address=0,this.ram.reset(),this.screen.reset(),super.reset()}}class v extends r.tI{_state=(0,p.Zu)();get state(){return this._state}constructor(){super(["inM[16]","instruction[16]","reset"],["outM[16]","writeM","addressM[15]","pc[15]"])}tick(){const[t,e]=(0,p.aL)(this.cpuInput(),this._state);this._state=t,this.out("writeM").pull(e?r.lj:r.yE),this.out("outM").busVoltage=this._state.ALU??0}tock(){if(!this._state)return;const[t,e]=(0,p.Ff)(this.cpuInput(),this._state);this._state=e,this.out("addressM").busVoltage=t.addressM??0,this.out("outM").busVoltage=t.outM??0,this.out("writeM").pull(t.writeM?r.lj:r.yE),this.out("pc").busVoltage=this._state?.PC??0}cpuInput(){return{inM:this.in("inM").busVoltage,instruction:this.in("instruction").busVoltage,reset:1===this.in("reset").busVoltage}}get(t,e){return t?.startsWith("ARegister")?new r.qP("ARegister",this._state.A):t?.startsWith("DRegister")?new r.qP("DRegister",this._state.D):t?.startsWith("PC")?new r.qP("PC",this._state.PC):super.get(t,e)}reset(){this._state=(0,p.Zu)(),this._state.PC=-1,super.reset()}}class j extends r.Af{#t=new v;#e=new y;#s=new b;constructor(){super(["reset"],[]),this.wire(this.#t,[{from:{name:"reset",start:0},to:{name:"reset",start:0}},{from:{name:"instruction",start:0},to:{name:"instruction",start:0}},{from:{name:"oldOutM",start:0},to:{name:"inM",start:0}},{from:{name:"writeM",start:0},to:{name:"writeM",start:0}},{from:{name:"addressM",start:0},to:{name:"addressM",start:0}},{from:{name:"newInM",start:0},to:{name:"outM",start:0}},{from:{name:"pc",start:0},to:{name:"pc",start:0}}]),this.wire(this.#s,[{from:{name:"pc",start:0},to:{name:"address",start:0}},{from:{name:"instruction",start:0},to:{name:"out",start:0}}]),this.wire(this.#e,[{from:{name:"newInM",start:0},to:{name:"in",start:0}},{from:{name:"writeM",start:0},to:{name:"load",start:0}},{from:{name:"addressM",start:0},to:{name:"address",start:0}},{from:{name:"oldOutM",start:0},to:{name:"out",start:0}}])}eval(){super.eval()}get(t,e){return t.startsWith("PC")||t.startsWith("ARegister")||t.startsWith("DRegister")?this.#t.get(t):t.startsWith("RAM16K")?this.#e.get(t,e):super.get(t,e)}async load(t,e){return await this.#s.load(t,e)}}var C=s(7054);class w extends r.Af{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s]=function(t,e){return[1===t&&1===e?r.lj:r.yE]}(t,e);this.out().pull(s)}}class V extends r.Af{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[s]=function(t,e){return[t&e&65535]}(t,e);this.out().busVoltage=s}}class S extends r.Af{constructor(){super(["in","sel"],["a","b"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").voltage(),[s,i]=function(t,e){return[e===r.yE&&t===r.lj?r.lj:r.yE,e===r.lj&&t===r.lj?r.lj:r.yE]}(t,e);this.out("a").pull(s),this.out("b").pull(i)}}class k extends r.Af{constructor(){super(["in","sel[2]"],["a","b","c","d"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").busVoltage,[s,i,n,a]=function(t,e){return[0===e&&t===r.lj?r.lj:r.yE,1===e&&t===r.lj?r.lj:r.yE,2===e&&t===r.lj?r.lj:r.yE,3===e&&t===r.lj?r.lj:r.yE]}(t,e);this.out("a").pull(s),this.out("b").pull(i),this.out("c").pull(n),this.out("d").pull(a)}}class P extends r.Af{constructor(){super(["in","sel[3]"],["a","b","c","d","e","f","g","h"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").busVoltage,[s,i,n,a,o,l,c,u]=function(t,e){return[0===e&&t===r.lj?r.lj:r.yE,1===e&&t===r.lj?r.lj:r.yE,2===e&&t===r.lj?r.lj:r.yE,3===e&&t===r.lj?r.lj:r.yE,4===e&&t===r.lj?r.lj:r.yE,5===e&&t===r.lj?r.lj:r.yE,6===e&&t===r.lj?r.lj:r.yE,7===e&&t===r.lj?r.lj:r.yE]}(t,e);this.out("a").pull(s),this.out("b").pull(i),this.out("c").pull(n),this.out("d").pull(a),this.out("e").pull(o),this.out("f").pull(l),this.out("g").pull(c),this.out("h").pull(u)}}function A(t,e,s){return[s===r.yE?t:e]}function E(t,e,s,i,n){const a=1&n;return 0===(2&n)?A(t,e,a):A(s,i,a)}class M extends r.Af{constructor(){super(["a","b","sel"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),s=this.in("sel").voltage(),[i]=function(t,e,s){return[s===r.yE?t:e]}(t,e,s);this.out().pull(i)}}class F extends r.Af{constructor(){super(["a[16]","b[16]","sel"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,s=this.in("sel").voltage(),[i]=A(t,e,s);this.out().busVoltage=i}}class I extends r.Af{constructor(){super(["a[16]","b[16]","c[16]","d[16]","sel[2]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,s=this.in("c").busVoltage,i=this.in("d").busVoltage,n=this.in("sel").busVoltage,[a]=E(t,e,s,i,n);this.out().busVoltage=a}}class O extends r.Af{constructor(){super(["a[16]","b[16]","c[16]","d[16]","e[16]","f[16]","g[16]","h[16]","sel[3]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,s=this.in("c").busVoltage,i=this.in("d").busVoltage,n=this.in("e").busVoltage,a=this.in("f").busVoltage,r=this.in("g").busVoltage,o=this.in("h").busVoltage,l=this.in("sel").busVoltage,[c]=function(t,e,s,i,n,a,r,o,l){const c=3&l;return 0===(4&l)?E(t,e,s,i,c):E(n,a,r,o,c)}(t,e,s,i,n,a,r,o,l);this.out().busVoltage=c}}class _ extends r.Af{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s]=function(t,e){return[1===t&&1===e?r.yE:r.lj]}(t,e);this.out().pull(s)}}class N extends r.Af{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage;this.out().busVoltage=(0,g.C2)(t,e)}}class T extends r.Af{constructor(){super(["in"],["out"])}eval(){const t=this.in("in").voltage(),[e]=[t===r.yE?r.lj:r.yE];this.out().pull(e)}}class R extends r.Af{constructor(){super(["in[16]"],["out[16]"])}eval(){const[t]=[65535&~this.in().busVoltage];this.out().busVoltage=t}}function W(t,e){return[1===t||1===e?r.lj:r.yE]}class L extends r.Af{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s]=W(t,e);this.out().pull(s)}}class B extends r.Af{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[s]=function(t,e){return[65535&(t|e)]}(t,e);this.out().busVoltage=s}}class D extends r.Af{constructor(){super(["in[8]"],["out"],"Or8way")}eval(){const t=this.in().busVoltage,[e]=[0===(255&t)?r.yE:r.lj];this.out().pull(e)}}class $ extends r.Af{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s]=function(t,e){return[t===r.lj&&e===r.yE||t===r.yE&&e===r.lj?r.lj:r.yE]}(t,e);this.out().pull(s)}}class U extends r.Af{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[s]=function(t,e){return[65535&(t^e)]}(t,e);this.out().busVoltage=s}}function z(t,e){return[t+e&65535]}class H extends r.Af{constructor(){super(["a[16]","b[16]"],["out[16]"],"Add16")}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[s]=z(t,e);this.out().busVoltage=s}}var K=s(137);class Z extends r.Af{constructor(){super(["x[16]","y[16]","zx","nx","zy","ny","f","no"],["out[16]"],"ALU")}eval(){const t=this.in("x").busVoltage,e=this.in("y").busVoltage,s=(this.in("zx").busVoltage<<5)+(this.in("nx").busVoltage<<4)+(this.in("zy").busVoltage<<3)+(this.in("ny").busVoltage<<2)+(this.in("f").busVoltage<<1)+(this.in("no").busVoltage<<0),[i]=(0,K.Bb)(s,t,e);this.out().busVoltage=i}}class q extends r.Af{constructor(){super(["x[16]","y[16]","zx","nx","zy","ny","f","no"],["out[16]","zr","ng"],"ALU")}eval(){const t=this.in("x").busVoltage,e=this.in("y").busVoltage,s=(this.in("zx").busVoltage<<5)+(this.in("nx").busVoltage<<4)+(this.in("zy").busVoltage<<3)+(this.in("ny").busVoltage<<2)+(this.in("f").busVoltage<<1)+(this.in("no").busVoltage<<0),[i,n]=(0,K.Bb)(s,t,e),a=n===K.vU.Negative?r.lj:r.yE,o=n===K.vU.Zero?r.lj:r.yE;this.out("out").busVoltage=i,this.out("ng").pull(a),this.out("zr").pull(o)}op(){return(this.in("zx").busVoltage<<5)+(this.in("nx").busVoltage<<4)+(this.in("zy").busVoltage<<3)+(this.in("ny").busVoltage<<2)+(this.in("f").busVoltage<<1)+(this.in("no").busVoltage<<0)}}function J(t,e){return[1===t&&0===e||0===t&&1===e?r.lj:r.yE,1===t&&1===e?r.lj:r.yE]}class G extends r.Af{constructor(){super(["a","b"],["sum","carry"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s,i]=J(t,e);this.out("sum").pull(s),this.out("carry").pull(i)}}class X extends r.Af{constructor(){super(["a","b","c"],["sum","carry"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),s=this.in("c").voltage(),[i,n]=function(t,e,s){const[i,n]=J(t,e),[a,r]=J(i,s),[o]=W(n,r);return[a,o]}(t,e,s);this.out("sum").pull(i),this.out("carry").pull(n)}}class Y extends r.Af{constructor(){super(["in[16]"],["out[16]"],"Inc16")}eval(){const t=this.in().busVoltage,[e]=z(t,1);this.out().busVoltage=e}}class Q extends r.tI{bit=r.yE;constructor(t){super(["in","load"],["out"],t)}tick(){this.in("load").voltage()===r.lj&&(this.bit=this.in().voltage())}tock(){this.out().pull(this.bit??0)}reset(){this.bit=r.yE,super.reset()}}class tt extends r.tI{bits=0;constructor(t){super(["in[16]","load"],["out[16]"],t)}tick(){this.in("load").voltage()===r.lj&&(this.bits=65535&this.in().busVoltage)}tock(){this.out().busVoltage=65535&this.bits}get(t,e){return t===this.name?this.out():super.get(t,e)}reset(){this.bits=0,super.reset()}}class et extends tt{}class st extends r.tI{bits=0;constructor(t){super(["in[16]","load","inc","reset"],["out[16]"],t)}tick(){this.in("reset").voltage()===r.lj?this.bits=0:this.in("load").voltage()===r.lj?this.bits=65535&this.in().busVoltage:this.in("inc").voltage()===r.lj&&(this.bits+=1)}tock(){this.out().busVoltage=65535&this.bits}get(t,e){return t===this.name?this.out():super.get(t,e)}reset(){this.bits=0,super.reset()}}class it extends r.tI{constructor(t){super(["in"],["out"],t,["t"])}tick(){const t=this.in().voltage();this.pin("t").pull(t)}tock(){const t=this.pin("t").voltage();this.out().pull(t)}}const nt=new Map([["Nand",_],["Nand16",N],["Not",T],["Not16",R],["And",w],["And16",V],["Or",L],["Or16",B],["Or8Way",D],["XOr",$],["XOr16",U],["Xor",$],["Xor16",U],["Mux",M],["Mux16",F],["Mux4Way16",I],["Mux8Way16",O],["DMux",S],["DMux4Way",k],["DMux8Way",P],["HalfAdder",G],["FullAdder",X],["Add16",H],["Inc16",Y],["ALU",q],["ALUNoStat",Z],["DFF",it],["Bit",Q],["Register",tt],["ARegister",tt],["DRegister",tt],["PC",st],["RAM8",d],["RAM64",class extends c{constructor(t){super(6,t)}}],["RAM512",class extends c{constructor(t){super(9,t)}}],["RAM4K",class extends c{constructor(t){super(12,t)}}],["RAM16K",h],["ROM32K",b],["Screen",f],["Keyboard",x],["CPU",v],["Computer",j],["Memory",y],["ARegister",et],["DRegister",et]].map((t=>{let[e,s]=t;return[e,()=>{const t=new s;return t.name=e,t}]})));function at(t){const e=nt.get(t);return e?(0,C.Ok)(e()):(0,C.UG)(new Error(`Chip ${t} not in builtin registry`))}const rt=t=>{let{A:e,op:s,D:i,out:n,flag:r}=t;return(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"ALU"}),(0,a.jsx)("svg",{width:"250",height:"250",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{x:"1",y:"20",height:"85",width:"70",fill:"black"}),(0,a.jsx)("rect",{x:"1",y:"145",height:"85",width:"70",fill:"black"}),(0,a.jsx)("rect",{x:"180",y:"95",height:"60",width:"70",fill:"black"}),(0,a.jsx)("polygon",{points:"70,10 180,85 180,165 70,240 70,135 90,125 70,115",stroke:"#000",fill:"#6D97AB"}),(0,a.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",strokeWidth:"0",id:"svg_9",y:"63",x:"35",stroke:"white",fill:"#ffffff",children:e}),(0,a.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",id:"svg_10",y:"188",x:"35",strokeWidth:"0",stroke:"white",fill:"#ffffff",children:i}),(0,a.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",id:"svg_11",y:"125",x:"215",strokeWidth:"0",stroke:"white",fill:"#ffffff",children:n}),(0,a.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",id:"svg_13",y:"125",x:"135",strokeWidth:"0",stroke:"white",fill:"#ffffff",children:K.NM.op[s]??"(??)"})]})})]})};var ot=s(3478),lt=s(1062),ct=s(2869),ut=s(8963);function dt(t,e){if(t instanceof q)return(0,a.jsx)(rt,{A:t.in("x").busVoltage,op:t.op(),D:t.in("y").busVoltage,out:t.out().busVoltage,flag:t.out("zr").voltage()===r.lj?K.vU.Zero:t.out("ng").voltage()===r.lj?K.vU.Negative:K.vU.Positive});if(t instanceof tt)return(0,a.jsx)(ct.y,{name:t.name??`Chip ${t.id}`,bits:t.bits});if(t instanceof st)return(0,a.jsx)(ct.y,{name:"PC",bits:t.bits});if(t instanceof x)return(0,a.jsx)(ot.N,{keyboard:t,update:e});if(t instanceof f)return(0,a.jsx)(ut.l,{memory:t.memory});if(t instanceof c)return(0,a.jsx)(lt.zp,{name:t.name,memory:t.memory,format:t instanceof b?"asm":"dec",highlight:t.address});if(t instanceof d)return(0,a.jsxs)("span",{children:["RAM ",t.width]});if(t instanceof v){const e=(0,p.Jx)(t.in("instruction").busVoltage);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ct.y,{name:"A",bits:t.state.A}),(0,a.jsx)(ct.y,{name:"D",bits:t.state.D}),(0,a.jsx)(ct.y,{name:"PC",bits:t.state.PC}),(0,a.jsx)(rt,{A:e.am?t.in("inM").busVoltage:t.state.A,D:t.state.D,out:t.state.ALU,op:e.op,flag:t.state.flag})]})}const s=[...t.parts].map((t=>dt(t,e))).filter((t=>void 0!==t));return s.length>0?(0,a.jsx)(a.Fragment,{children:s}):void 0}var ht=s(5554),pt=s(1965),gt=s(8177);class mt{signBehaviors=new Map;constructor(t,e){if(nt.has(t)){const s=at(t);if((0,C.IY)(s)){const t=Array.from((0,C.Ok)(s).ins.entries()).concat(Array.from((0,C.Ok)(s).outs.entries()));for(const s of t)this.signBehaviors.set(s.name,!e||!e.includes(s.name))}}}isSigned(t){return this.signBehaviors.get(t)}}const bt=new Map([["Mux4Way16",["sel"]],["Mux8Way16",["sel"]],["DMux4Way",["sel"]],["DMux8Way",["sel"]],["RAM8",["address"]],["RAM64",["address"]],["RAM512",["address"]],["RAM4K",["address"]],["RAM16K",["address"]],["Screen",["address"]],["Memory",["address"]],["CPU",["addressM","pc"]]]),ft=(0,n.createContext)({});function xt(t){return{pin:t,bits:(0,gt.w)(0,t.width).map((e=>[e,t.voltage(e)])).reverse()}}function yt(t){return[...t.entries()].map(xt)}const vt=t=>{const{inPins:e,outPins:s,internalPins:i}=t.sim,n=(r=t.sim.chip[0].name??"",new mt(r,bt.get(r)));var r;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:"\n        table.pinout th {\n          font-weight: bold;\n        }\n\n        table.pinout tbody td:first-child {\n          text-align: right;\n          --font-size: 1rem;\n          width: 0;\n          white-space: nowrap;\n          border-right: var(--border-width) solid var(--table-border-color);\n        }\n\n        table.pinout tbody button {\n          --font-size: 0.875em;\n          font-family: var(--font-family-monospace);\n          max-width: 2em;\n        }\n        "}),(0,a.jsx)("table",{className:"pinout",children:(0,a.jsxs)("tbody",{children:[(0,a.jsx)(jt,{pins:e,header:"Input pins",toggle:t.toggle,setInputValid:t.setInputValid,displayInfo:n}),(0,a.jsx)(jt,{pins:s,header:"Output pins",disabled:t.sim.pending,enableEdit:!1,displayInfo:n}),!t.hideInternal&&(0,a.jsx)(jt,{pins:i,header:"Internal pins",disabled:t.sim.pending,enableEdit:!1,displayInfo:n})]})})]})},jt=t=>(0,a.jsxs)(a.Fragment,{children:[t.pins.length>0&&(0,a.jsx)("tr",{children:(0,a.jsx)("th",{colSpan:2,children:t.header})}),[...t.pins].map((e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.pin.name}),(0,a.jsx)("td",{children:(0,a.jsx)(Ct,{pin:e,toggle:t.toggle,disabled:t.disabled,enableEdit:t.enableEdit,signed:t.displayInfo.isSigned(e.pin.name),setInputValid:t.setInputValid,internal:"Internal pins"===t.header})})]},e.pin.name)))]}),Ct=t=>{let{pin:e,toggle:s,disabled:i=!1,enableEdit:r=!0,signed:o=!0,setInputValid:l,internal:c=!1}=t;const[u,d]=(0,n.useState)(!0);let h=!0;const[p,g]=(0,n.useState)(""),m=(0,n.useContext)(ft);m instanceof wt&&m.registerCallback((()=>{d(!0)}));const b=t=>{h=t,l?.(t)},f=t=>{for(let i=0;i<e.bits.length;i++)e.bits[e.bits.length-i-1][1]!==(t>>i&1)&&s?.(e.pin,i)};return(0,n.useEffect)((()=>{if(!u&&h){let t=0;if(o&&e.bits[0][1]){for(const[s,i]of e.bits)s<e.bits.length-1&&!i&&(t+=2**s);t=-t-1}else{const s=o?e.bits.length-1:e.bits.length;for(const[i,n]of e.bits)i<s&&n&&(t+=2**i)}g(t.toString())}}),[e,u]),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.jsx)("fieldset",{role:"group",style:{width:`${e.bits.length}rem`},children:u?e.bits.map((t=>{let[n,r]=t;return(0,a.jsx)("button",{disabled:i,style:c?{backgroundColor:"grey"}:{},onClick:()=>s?.(e.pin,n),"data-testid":`pin-${n}`,children:r},n)})):(0,a.jsx)("input",{className:"colored",value:p,onChange:t=>{(t=>{const s=t.replace(/[^\d]/g,""),i=o&&"-"===t[0]?`-${s}`:s;if(g(i),isNaN(parseInt(i)))b(!1);else{const t=parseInt(i);!o&&t>=Math.pow(2,e.bits.length)||o&&(t>=Math.pow(2,e.bits.length-1)||t<-Math.pow(2,e.bits.length-1))?b(!1):(f(t),b(!0))}})(t.target.value)},disabled:!r})}),e.bits.length>1&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{width:"1em"}}),(0,a.jsx)("button",{style:{maxWidth:"3em",margin:0},onClick:()=>{d(!u)},children:u?"dec":"bin"})]})]})};class wt{callbacks=[];registerCallback(t){this.callbacks.push(t)}reset(){for(const t of this.callbacks)t()}}var Vt=s(6604),St=s(6791),kt=s(5692),Pt=s(554),At=s(9814),Et=s(3484);const Mt='\nHdl <: Base{\n  Root := Chip\n  Chip = "CHIP" Name OpenBrace ChipBody CloseBrace\n  ChipBody = InList? OutList? PartList ClockedList?\n  InList = "IN" PinList Semi\n  OutList = "OUT" PinList Semi\n  PartList = BuiltinPart | Parts\n  PinList = List<PinDecl, Comma>\n  PinDecl = Name PinWidth?\n  PinWidth = OpenSquare decNumber CloseSquare\n  BuiltinPart = "BUILTIN" Semi\n  Parts = "PARTS:" Part*\n  Part = Name "(" Wires ")" Semi\n  Wires = List<Wire, Comma>\n  Wire = WireSide Equal (WireSide | True | False) \n  WireSide = Name SubBus? \n  SubBus = OpenSquare decNumber subBusRest? CloseSquare\n  subBusRest = ".." decNumber\n  ClockedList = "CLOCKED" SimplePinList Semi\n  SimplePinList = List<Name, Comma>\n}',Ft=At.Z.grammar(Mt,Et.y1),It=Ft.extendSemantics(Et.rJ);It.addAttribute("SubBus",{SubBus(t,e,s,i){const n=e.value;return{start:n,end:s.child(0)?.child(1)?.value??n}}}),It.addAttribute("WireSide",{WireSide(t,e){let{name:s}=t;const{start:i,end:n}=e.child(0)?.SubBus??{start:void 0,end:void 0};return{pin:s,start:i,end:n}}}),It.addAttribute("Wire",{Wire(t,e,s){const i=s.isTerminal()?{pin:s.sourceString}:s.WireSide;return{lhs:t.WireSide,rhs:i}}}),It.addAttribute("Wires",{Wires:t=>t.asIteration().children.map((t=>t.Wire))}),It.addAttribute("Part",{Part(t,e,s,i,n){let{name:a}=t,{Wires:r}=s;return{name:a,wires:r}}}),It.addAttribute("Parts",{Parts:(t,e)=>e.children.map((t=>t.Part)),BuiltinPart:(t,e)=>"BUILTIN"}),It.addAttribute("PartList",{PartList:t=>t.Parts}),It.addAttribute("Clocked",{ClockedList:(t,e,s)=>e.asIteration().children.map((t=>{let{sourceString:e}=t;return e}))??[]}),It.addAttribute("PinDecl",{PinDecl(t,e){let{name:s}=t;return{pin:s,width:e.child(0)?.child(1)?.value??1}}}),It.addAttribute("PinList",{PinList:t=>t.asIteration().children.map((t=>t.PinDecl))}),It.addAttribute("Chip",{Chip(t,e,s,i,n){let{name:a}=e;return{name:a,ins:i.child(0).child(0)?.child(1)?.PinList??[],outs:i.child(1).child(0)?.child(1)?.PinList??[],parts:i.child(2).PartList??[],clocked:i.child(3).child(0)?.Clocked}}}),It.addAttribute("Root",{Root:t=>t.child(0)?.Chip});const Ot={parser:Ft,grammar:Mt,semantics:It,parse:(0,Et.Pz)(Ft,It,(t=>t.Chip))};function _t(t,e){if(void 0!==e){if(e>=t)return e-t+1;if(t>0&&0===e)return 1;throw new Error(`Bus specification has start > end (${t} > ${e})`)}}async function Nt(t,e){if(function(t){return nt.has(t)}(t)||void 0===e)return at(t);try{const s=await e.readFile(`${t}.hdl`),i=Ot.parse(s);return(0,C.IY)(i)?Tt((0,C.Ok)(i),e):(0,C.UG)(new Error("HDL Was not parsed"))}catch(s){return(0,C.UG)(new Error(`Could not load chip ${t}.hdl`))}}async function Tt(t,e){if("BUILTIN"===t.parts)return at(t.name.toString());const s=new r.Af(t.ins.map((t=>{let{pin:e,width:s}=t;return{pin:e.toString(),width:s}})),t.outs.map((t=>{let{pin:e,width:s}=t;return{pin:e.toString(),width:s}})),t.name.toString(),[],t.clocked);for(const n of t.parts){const t=await Nt(n.name.toString(),e);if((0,C.dZ)(t))return t;const a=(0,C.Ok)(t),r=n.wires.map((t=>{let{lhs:e,rhs:s}=t;return{to:{name:e.pin.toString(),start:e.start??0,width:_t(e.start??0,e.end)},from:{name:s.pin.toString(),start:s.start??0,width:_t(s.start??0,s.end)}}}));try{s.wire(a,r)}catch(i){return(0,C.UG)(i)}}return(0,C.Ok)(s)}var Rt=s(5424),Wt=s(4430),Lt=s(6535),Bt=s(2836),Dt=s(4913);const $t=[["01","Project 1"],["02","Project 2"],["03","Project 3"],["05","Project 5"]];function Ut(t){return t in Lt.CHIP_ORDER?Lt.CHIP_ORDER[t]:Lt.BUILTIN_CHIP_PROJECTS[t].concat(Lt.CHIP_PROJECTS[t])}function zt(t){return Object.values(Lt.BUILTIN_CHIP_PROJECTS).flat().includes(t)}function Ht(t,e){const s=function(t,e){return zt(e)?Lt.ChipProjects[t].BUILTIN_CHIPS[e]:Lt.ChipProjects[t].CHIPS[e][`${e}.hdl`]}(t,e);if(zt(e))return s;const i="//// Replace this comment with your code.",n=`BUILTIN ${e};`;return s.includes(i)?s.replace(i,n):s.replace("PARTS:",`PARTS:\n    ${n}`)}function Kt(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{clocked:t.clocked,inPins:yt(t.ins),outPins:yt(t.outs),internalPins:yt(t.pins),chip:[t],pending:e,invalid:s}}const Zt=Rt.S.get();function qt(t,e,s,i){const n=function(t){const e=t["/chip/project"]??"01";return{project:e,chips:Ut(e),chipName:t["/chip/chip"]??Lt.CHIP_PROJECTS[e][0]}}(s);let{project:a,chipName:l}=n;const{chips:c}=n;let u=new r.P9,d=new Bt.l1,h=!1,p=!1;const g={setFiles(t,e){let{hdl:s=t.files.hdl,tst:i=t.files.tst,cmp:n=t.files.cmp,out:a=""}=e;t.files.hdl=s,t.files.tst=i,t.files.cmp=n,t.files.out=a},updateChip(t,e){t.sim=Kt(u,e?.pending??t.sim.pending,e?.invalid??t.sim.invalid),t.controls.error=t.sim.invalid?e?.error??t.controls.error:"",t.controls.chips=Ut(t.controls.project),t.controls.chipName=t.sim.invalid?e?.chipName??l:u.name??e?.chipName??l,t.controls.chips.includes(t.controls.chipName)||(t.controls.chips=[...t.controls.chips,t.controls.chipName])},setProject(t,e){const s=Ut(e),i=t.controls.chipName&&s.includes(t.controls.chipName)?t.controls.chipName:s[0];t.controls.project=e,t.controls.chips=s,this.setChip(t,i)},setChip(t,e){t.controls.chipName=e,t.controls.hasBuiltin=nt.has(e),t.controls.builtinOnly=zt(e)},testRunning(t){t.controls.runningTest=!0},testFinished(t){t.controls.runningTest=!1;const s=(0,Dt.q)(t.files.cmp.trim(),t.files.out.trim());e(s?"Simulation successful: The output file is identical to the compare file":"Simulation error: The output file differs from the compare file")},updateTestStep(t){if(t.files.out=d?.log()??"",d?.currentStep?.span)t.controls.span=d.currentStep.span;else if(d.done){const e=t.files.tst.length;t.controls.span={start:e-1,end:e,line:t.files.tst.split("\n").length}}this.updateChip(t,{pending:t.sim.pending,invalid:t.sim.invalid})}},m={setProject(t){a=s["/chip/project"]=t,i.current({action:"setProject",payload:a}),this.setChip(Lt.CHIP_PROJECTS[a][0])},async setChip(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s["/chip/project"]??"01";if(l=s["/chip/chip"]=t,i.current({action:"setChip",payload:l}),p=zt(l),p)return i.current({action:"setFiles",payload:{hdl:"",tst:"",cmp:""}}),void this.useBuiltin();await this.loadChip(e,l),h&&this.useBuiltin()},reset(){Rt.S.get().reset(),u.reset(),d.reset(),i.current({action:"setFiles",payload:{}}),i.current({action:"updateChip"})},async updateFiles(t){let{hdl:s,tst:n,cmp:a}=t;i.current({action:"setFiles",payload:{hdl:s,tst:n,cmp:a}});try{s&&await this.compileChip(s),n&&this.compileTest(n)}catch(r){e((0,Pt.j)(r))}},async compileChip(t){u.remove();const s=Ot.parse(t);if((0,C.dZ)(s))return e("Failed to parse chip"),void i.current({action:"updateChip",payload:{invalid:!0,error:(0,Pt.j)((0,C.UG)(s))}});const n=await Tt((0,C.Ok)(s));if((0,C.dZ)(n)){const t=(0,Pt.j)((0,C.UG)(n));return e(t),void i.current({action:"updateChip",payload:{invalid:!0,error:t}})}e(`Compiled ${u.name}`),this.replaceChip((0,C.Ok)(n))},replaceChip(t){const e=u.ins;for(const[s,{busVoltage:i}]of e){const e=t.ins.get(s);e&&(e.busVoltage=i)}Zt.reset(),t.eval(),u=t,u.reset(),d=d.with(u).reset(),i.current({action:"updateChip",payload:{invalid:!1}}),i.current({action:"updateTestStep"})},async loadChip(e,n){s["/chip/chip"]=n;const a=t=>`/projects/${e}/${n}/${n}.${t}`,[r,o,l]=await Promise.all([t.readFile(a("hdl")).catch((()=>function(t){return`CHIP ${t} {\n  IN in;\n  OUT out;\n  PARTS:\n}`}(n))),t.readFile(a("tst")).catch((t=>"repeat 10 {\n  tick,\n  tock;\n}")),t.readFile(a("cmp")).catch((()=>"| in|out|"))]);i.current({action:"setFiles",payload:{hdl:r,tst:o,cmp:l}}),await this.compileChip(r),this.compileTest(o)},async saveChip(s){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l;i.current({action:"setFiles",payload:{hdl:s}});const o=`/projects/${n}/${r}/${r}.hdl`;await t.writeFile(o,s),e(`Saved ${o}`)},toggle(t,e){void 0!==e?t.busVoltage=t.busVoltage^1<<e:1===t.width?t.toggle():t.busVoltage+=1,i.current({action:"updateChip",payload:{pending:!0}})},eval(){u.eval(),i.current({action:"updateChip",payload:{pending:!1}})},clock(){Zt.toggle(),Zt.isLow&&Zt.frame(),i.current({action:"updateChip"})},async useBuiltin(){let t=arguments.length>1?arguments[1]:void 0;if(!(!(arguments.length>0&&void 0!==arguments[0])||arguments[0]))return p||(h=!1),void await this.loadChip(a,l);p||(h=!0);const s=l,n=at(s);if((0,C.dZ)(n))return void e(`Failed to load builtin ${s}: ${(0,Pt.j)((0,C.UG)(n))}`);t&&await this.saveChip(t,a,l);const r=Ht(a,s);i.current({action:"setFiles",payload:{hdl:r}}),this.replaceChip((0,C.Ok)(n))},async initialize(){await this.setChip(l,a)},compileTest(s){i.current({action:"setFiles",payload:{tst:s}});const n=Wt.qH.parse(s);return(0,C.dZ)(n)?(e("Failed to parse test"),!1):(e("Parsed tst"),d=Bt.l1.from((0,C.Ok)(n)).with(u).reset(),d.setFileSystem(t),i.current({action:"updateTestStep"}),!0)},async runTest(e){this.compileTest(e)&&(i.current({action:"testRunning"}),t.pushd("/samples"),await d.run(),t.popd(),i.current({action:"updateTestStep"}),i.current({action:"testFinished"}))},tick(){return this.stepTest()},stepTest(){(0,o.hu)(d.chipId===u.id,"Test and chip out of sync");const t=d.step();return i.current({action:"updateTestStep"}),t&&i.current({action:"testFinished"}),t}};return{initialState:(()=>{const t={project:a,chips:c,chipName:l,hasBuiltin:nt.has(l),builtinOnly:zt(l),runningTest:!1,error:""},s=at(t.chipName);(0,C.dZ)(s)?(e((0,Pt.j)((0,C.UG)(s))),u=new r.P9):u=(0,C.Ok)(s);return{controls:t,files:{hdl:"",cmp:"",tst:"",out:""},sim:Kt(u)}})(),reducers:g,actions:m}}var Jt=s(7880),Gt=s(4619),Xt=s(8722),Yt=s(3847),Qt=s(9200),te=s(8398);const ee=()=>{const{fs:t,setStatus:e}=(0,n.useContext)(kt.r),{filePicker:s,tracking:r,toolStates:o}=(0,n.useContext)(Xt.Il),{state:l,actions:c,dispatch:u}=function(){const{fs:t,setStatus:e,storage:s}=(0,n.useContext)(kt.r),i=(0,n.useRef)((()=>{})),{initialState:a,reducers:r,actions:o}=(0,n.useMemo)((()=>qt(t,e,s,i)),[t,e,s,i]),[l,c]=(0,Vt.C)(r,a);return i.current=c,{state:l,dispatch:i,actions:o}}(),[d,h]=(0,Vt.i)(l.files.hdl),[p,g]=(0,Vt.i)(l.files.tst),[m,b]=(0,Vt.i)(l.files.cmp),[f]=(0,Vt.i)(l.files.out);(0,n.useEffect)((()=>{c.initialize()}),[c]),(0,n.useEffect)((()=>{r.trackPage("/chip")}),[r]),(0,n.useEffect)((()=>{o.setTool("chip"),r.trackEvent("action","setProject",l.controls.project),r.trackEvent("action","setChip",l.controls.chipName)}),[]);const x=(0,n.useCallback)((t=>{c.setProject(t),r.trackEvent("action","setProject",t)}),[c,r]),y=(0,n.useCallback)((t=>{c.setChip(t),r.trackEvent("action","setChip",t),O.reset()}),[c,r]),v=(0,n.useCallback)((()=>{c.eval(),r.trackEvent("action","eval")}),[c,r]),j=(0,n.useRef)((()=>{}));j.current=async function(){var t,e;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await c.updateFiles({hdl:s.hdl,tst:null!==(t=s.tst)&&void 0!==t?t:p,cmp:null!==(e=s.cmp)&&void 0!==e?e:m})};const C=(0,n.useCallback)((async()=>{try{const e=await s.select(),i=await t.readFile(e);await j.current({tst:i})}catch(i){console.error(i),e("Failed to load into memory")}}),[s,e,t,j]),w=(0,n.useRef)();(0,n.useEffect)((()=>(w.current=new class extends Gt.B{async reset(){await j.current(),await c.reset()}finishFrame(){super.finishFrame(),u.current({action:"updateTestStep"})}async tick(){return await c.stepTest()}toggle(){u.current({action:"updateTestStep"})}},()=>{var t;null===(t=w.current)||void 0===t||t.stop()})),[j,c,u]);const V=(0,n.useMemo)((()=>({toggle(){c.clock(),r.trackEvent("action","toggleClock")},reset(){r.trackEvent("action","resetClock"),c.reset()}})),[c]),[S,k]=(0,n.useState)(!1),P=(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("fieldset",{role:"group",children:[(0,a.jsx)("select",{value:l.controls.project,onChange:t=>{let{target:{value:e}}=t;x(e)},"data-testid":"project-picker",children:$t.map((t=>{let[e,s]=t;return(0,a.jsx)("option",{value:e,children:s},e)}))}),(0,a.jsx)("select",{value:l.controls.chipName,onChange:t=>{let{target:{value:e}}=t;y(e)},"data-testid":"chip-picker",children:l.controls.chips.map((t=>(0,a.jsx)("option",{value:t,style:zt(t)?{color:"rgb(170, 170, 170)"}:{},children:`${t} ${zt(t)?"(given)":""}`},t)))})]})}),A=(0,a.jsx)(te.s,{className:"_hdl_panel",header:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{tabIndex:0,children:"HDL"}),(0,a.jsx)("fieldset",{children:l.controls.hasBuiltin&&!l.controls.builtinOnly&&(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"checkbox",role:"switch",checked:S,onChange:()=>{S?(k(!1),c.useBuiltin(!1)):(k(!0),c.useBuiltin(!0,d)),O.reset()}}),(0,a.jsx)(i.cC,{id:"Builtin"})]})}),P]}),children:(0,a.jsx)(Qt.M,{className:"flex-1",value:d,onChange:async t=>{h(t),S||await c.saveChip(t),j.current(S||l.controls.builtinOnly?{}:{hdl:t})},grammar:Ot.parser,language:"hdl",disabled:S||l.controls.builtinOnly})}),[E,M]=(0,n.useState)(!0),F=(0,a.jsxs)("fieldset",{role:"group",children:[(0,a.jsx)("button",{onClick:v,onKeyDown:v,disabled:!l.sim.pending||!E,children:(0,a.jsx)(i.cC,{id:"Eval"})}),(0,a.jsxs)("button",{onClick:V.toggle,style:{maxWidth:"initial"},disabled:!l.sim.clocked,children:[(0,a.jsx)(i.cC,{id:"Clock"}),":","\xa0",(0,a.jsx)(ht.uY,{})]}),(0,a.jsx)("button",{onClick:V.reset,style:{maxWidth:"initial"},disabled:!l.sim.clocked,children:(0,a.jsx)(i.cC,{id:"Reset"})})]}),I=function(t,e){return[...t.parts].map(((t,s)=>[`${t.id}_${s}`,dt(t,e)])).filter((t=>{let[e,s]=t;return void 0!==s}))}({parts:l.sim.chip},(()=>{u.current({action:"updateChip"})})),O=new wt,_=(0,a.jsx)(te.s,{className:"_parts_panel",header:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(i.cC,{id:"Chip"})," ",l.controls.chipName]}),F]}),children:l.sim.invalid?(0,a.jsx)(i.cC,{id:"Syntax errors in the HDL code"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ft.Provider,{value:O,children:(0,a.jsx)(vt,{sim:l.sim,toggle:c.toggle,setInputValid:M,hideInternal:l.controls.builtinOnly||S})}),I.length>0&&(0,a.jsx)(te.G,{summary:(0,a.jsx)(i.cC,{id:"Visualization"}),open:!0,children:(0,a.jsx)("main",{children:I.map((t=>{let[e,s]=t;return s}))})})]})}),[N,T]=(0,n.useState)("tst"),R=(0,n.useCallback)((t=>{T(t),r.trackEvent("tab","change",t)}),[r]),W=(0,a.jsx)(te.s,{className:"_test_panel",header:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(i.cC,{id:"Test"})}),(0,a.jsx)("div",{className:"flex-2",children:w.current&&(0,a.jsx)(St.D,{runner:w.current})}),(0,a.jsx)("div",{children:(0,a.jsxs)("button",{onClick:C,children:[(0,a.jsx)(Yt.J,{name:"upload_file"})," "]})})]}),children:(0,a.jsxs)("div",{role:"tablist",style:{"--tab-count":"3"},children:[(0,a.jsx)("div",{role:"tab",id:"test-tab-tst","aria-controls":"test-tabpanel-tst","aria-selected":"tst"===N,children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-tst",value:"tst",checked:"tst"===N,onChange:()=>R("tst")}),"Test Script"]})}),(0,a.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-tst",id:"test-tabpanel-tst",children:(0,a.jsx)(Qt.M,{value:p,onChange:g,grammar:Wt.qH.parser,language:"tst",highlight:l.controls.span,disabled:l.controls.builtinOnly})}),(0,a.jsx)("div",{role:"tab",id:"test-tab-cmp","aria-controls":"test-tablpanel-cmp","aria-selected":"cmp"===N,children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-cmp",value:"cmp",checked:"cmp"===N,onChange:()=>R("cmp")}),"Compare File"]})}),(0,a.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-cmp",id:"test-tabpanel-cmp",style:{position:"relative"},children:(0,a.jsx)(Qt.M,{value:m,onChange:b,grammar:Jt.lA.parser,language:"cmp",disabled:l.controls.builtinOnly})}),(0,a.jsx)("div",{role:"tab",id:"test-tab-out","aria-controls":"test-tabpanel-out","aria-selected":"out"===N,children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-out",value:"out",checked:"out"===N,onChange:()=>R("out")}),"Output File"]})}),(0,a.jsx)("div",{role:"tabpanel",id:"test-tabpanel-out","aria-labelledby":"test-tab-out",children:(0,a.jsx)(pt.M,{cmp:m,out:f})})]})});return(0,a.jsxs)("div",{className:"Page ChipPage grid",children:[A,_,W]})},se=ee},4913:(t,e,s)=>{s.d(e,{q:()=>a});var i=s(7054),n=s(7880);const a=(t,e)=>{const s=n.lA.parse(t),a=n.lA.parse(e);if((0,i.dZ)(s)||(0,i.dZ)(a))return!1;const r=(0,i.Ok)(s),o=(0,i.Ok)(a);for(let i=0;i<Math.min(r.length,o.length);i++){const t=r[i]??[],e=o[i]??[];for(let s=0;s<Math.max(t.length,e.length);s++){const i=t[s]??"",n=e[s]??"";if(null===i?.trim().match(/^\*+$/)&&n?.trim()!==i?.trim())return!1}}return!0}}}]);