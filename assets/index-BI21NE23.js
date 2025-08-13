const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-D1YXCw03.js","assets/camperStore-qP9JMdOb.js","assets/Home-DLeOzW8b.css","assets/CamperDetails-CGLBRNnN.js","assets/reservationStore-trpCy7pT.js","assets/CamperDetails-BONwOFMc.css","assets/Login-B7vW4ZnT.js","assets/Login-SUqwteKX.css","assets/Admin-D95Cq0_r.js","assets/Admin-a9k28R7B.css","assets/Reservations-CNjahcde.js","assets/Reservations-HNhLT4Se.css","assets/NotFound-CTtztJht.js","assets/NotFound-KrQrWJqe.css","assets/PrivacyPolicy-lr004cJM.js","assets/PrivacyPolicy-CiPdi88c.css","assets/CookiePolicy-CDePfXxQ.js","assets/CookiePolicy-ZUyPVcOV.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Il(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},ss=[],tn=()=>{},yy=()=>!1,ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),wl=t=>t.startsWith("onUpdate:"),Je=Object.assign,Al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vy=Object.prototype.hasOwnProperty,Se=(t,e)=>vy.call(t,e),ie=Array.isArray,is=t=>oa(t)==="[object Map]",op=t=>oa(t)==="[object Set]",ue=t=>typeof t=="function",je=t=>typeof t=="string",fr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",ap=t=>(De(t)||ue(t))&&ue(t.then)&&ue(t.catch),cp=Object.prototype.toString,oa=t=>cp.call(t),Ey=t=>oa(t).slice(8,-1),lp=t=>oa(t)==="[object Object]",Rl=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qs=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ty=/-(\w)/g,Lt=aa(t=>t.replace(Ty,(e,n)=>n?n.toUpperCase():"")),Iy=/\B([A-Z])/g,Fr=aa(t=>t.replace(Iy,"-$1").toLowerCase()),ca=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),tc=aa(t=>t?`on${ca(t)}`:""),Qn=(t,e)=>!Object.is(t,e),vo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Vc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},wy=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Ih;const la=()=>Ih||(Ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?Sy(r):bl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||De(t))return t}const Ay=/;(?![^(]*\))/g,Ry=/:([^]+)/,by=/\/\*[^]*?\*\//g;function Sy(t){const e={};return t.replace(by,"").split(Ay).forEach(n=>{if(n){const r=n.split(Ry);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ua(t){let e="";if(je(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=ua(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Py=Il(Cy);function up(t){return!!t||t===""}const hp=t=>!!(t&&t.__v_isRef===!0),Sl=t=>je(t)?t:t==null?"":ie(t)||De(t)&&(t.toString===cp||!ue(t.toString))?hp(t)?Sl(t.value):JSON.stringify(t,fp,2):String(t),fp=(t,e)=>hp(e)?fp(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[nc(r,i)+" =>"]=s,n),{})}:op(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nc(n))}:fr(e)?nc(e):De(e)&&!ie(e)&&!lp(e)?String(e):e,nc=(t,e="")=>{var n;return fr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lt;class dp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=lt,!e&&lt&&(this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){++this._on===1&&(this.prevScope=lt,lt=this)}off(){this._on>0&&--this._on===0&&(lt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pp(t){return new dp(t)}function gp(){return lt}function ky(t,e=!1){lt&&lt.cleanups.push(t)}let Oe;const rc=new WeakSet;class mp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,lt&&lt.active&&lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rc.has(this)&&(rc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wh(this),vp(this);const e=Oe,n=Ht;Oe=this,Ht=!0;try{return this.fn()}finally{Ep(this),Oe=e,Ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kl(e);this.deps=this.depsTail=void 0,wh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xc(this)&&this.run()}get dirty(){return xc(this)}}let _p=0,Ys,Js;function yp(t,e=!1){if(t.flags|=8,e){t.next=Js,Js=t;return}t.next=Ys,Ys=t}function Cl(){_p++}function Pl(){if(--_p>0)return;if(Js){let e=Js;for(Js=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ys;){let e=Ys;for(Ys=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function vp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ep(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),kl(r),Ny(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function xc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===fi)||(t.globalVersion=fi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!xc(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=Ht;Oe=t,Ht=!0;try{vp(t);const s=t.fn(t._value);(e.version===0||Qn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,Ht=r,Ep(t),t.flags&=-3}}function kl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)kl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ny(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ht=!0;const Ip=[];function wn(){Ip.push(Ht),Ht=!1}function An(){const t=Ip.pop();Ht=t===void 0?!0:t}function wh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let fi=0;class Oy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!Ht||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new Oy(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,wp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,fi++,this.notify(e)}notify(e){Cl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Pl()}}}function wp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)wp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Do=new WeakMap,Sr=Symbol(""),Lc=Symbol(""),di=Symbol("");function ht(t,e,n){if(Ht&&Oe){let r=Do.get(t);r||Do.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Nl),s.map=r,s.key=n),s.track()}}function yn(t,e,n,r,s,i){const a=Do.get(t);if(!a){fi++;return}const c=l=>{l&&l.trigger()};if(Cl(),e==="clear")a.forEach(c);else{const l=ie(t),h=l&&Rl(n);if(l&&n==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===di||!fr(g)&&g>=f)&&c(p)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(di)),e){case"add":l?h&&c(a.get("length")):(c(a.get(Sr)),is(t)&&c(a.get(Lc)));break;case"delete":l||(c(a.get(Sr)),is(t)&&c(a.get(Lc)));break;case"set":is(t)&&c(a.get(Sr));break}}Pl()}function Dy(t,e){const n=Do.get(t);return n&&n.get(e)}function Gr(t){const e=Ee(t);return e===t?e:(ht(e,"iterate",di),Vt(t)?e:e.map(rt))}function ha(t){return ht(t=Ee(t),"iterate",di),t}const Vy={__proto__:null,[Symbol.iterator](){return sc(this,Symbol.iterator,rt)},concat(...t){return Gr(this).concat(...t.map(e=>ie(e)?Gr(e):e))},entries(){return sc(this,"entries",t=>(t[1]=rt(t[1]),t))},every(t,e){return pn(this,"every",t,e,void 0,arguments)},filter(t,e){return pn(this,"filter",t,e,n=>n.map(rt),arguments)},find(t,e){return pn(this,"find",t,e,rt,arguments)},findIndex(t,e){return pn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return pn(this,"findLast",t,e,rt,arguments)},findLastIndex(t,e){return pn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return pn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ic(this,"includes",t)},indexOf(...t){return ic(this,"indexOf",t)},join(t){return Gr(this).join(t)},lastIndexOf(...t){return ic(this,"lastIndexOf",t)},map(t,e){return pn(this,"map",t,e,void 0,arguments)},pop(){return Us(this,"pop")},push(...t){return Us(this,"push",t)},reduce(t,...e){return Ah(this,"reduce",t,e)},reduceRight(t,...e){return Ah(this,"reduceRight",t,e)},shift(){return Us(this,"shift")},some(t,e){return pn(this,"some",t,e,void 0,arguments)},splice(...t){return Us(this,"splice",t)},toReversed(){return Gr(this).toReversed()},toSorted(t){return Gr(this).toSorted(t)},toSpliced(...t){return Gr(this).toSpliced(...t)},unshift(...t){return Us(this,"unshift",t)},values(){return sc(this,"values",rt)}};function sc(t,e,n){const r=ha(t),s=r[e]();return r!==t&&!Vt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const xy=Array.prototype;function pn(t,e,n,r,s,i){const a=ha(t),c=a!==t&&!Vt(t),l=a[e];if(l!==xy[e]){const p=l.apply(t,i);return c?rt(p):p}let h=n;a!==t&&(c?h=function(p,g){return n.call(this,rt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(a,h,r);return c&&s?s(f):f}function Ah(t,e,n,r){const s=ha(t);let i=n;return s!==t&&(Vt(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,rt(c),l,t)}),s[e](i,...r)}function ic(t,e,n){const r=Ee(t);ht(r,"iterate",di);const s=r[e](...n);return(s===-1||s===!1)&&Vl(n[0])?(n[0]=Ee(n[0]),r[e](...n)):s}function Us(t,e,n=[]){wn(),Cl();const r=Ee(t)[e].apply(t,n);return Pl(),An(),r}const Ly=Il("__proto__,__v_isRef,__isVue"),Ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fr));function My(t){fr(t)||(t=String(t));const e=Ee(this);return ht(e,"has",t),e.hasOwnProperty(t)}class Rp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Wy:Pp:i?Cp:Sp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let l;if(a&&(l=Vy[n]))return l;if(n==="hasOwnProperty")return My}const c=Reflect.get(e,n,Fe(e)?e:r);return(fr(n)?Ap.has(n):Ly(n))||(s||ht(e,"get",n),i)?c:Fe(c)?a&&Rl(n)?c:c.value:De(c)?s?Np(c):Pi(c):c}}class bp extends Rp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=rr(i);if(!Vt(r)&&!rr(r)&&(i=Ee(i),r=Ee(r)),!ie(e)&&Fe(i)&&!Fe(r))return l?!1:(i.value=r,!0)}const a=ie(e)&&Rl(n)?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,Fe(e)?e:s);return e===Ee(s)&&(a?Qn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fr(n)||!Ap.has(n))&&ht(e,"has",n),r}ownKeys(e){return ht(e,"iterate",ie(e)?"length":Sr),Reflect.ownKeys(e)}}class Fy extends Rp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uy=new bp,By=new Fy,jy=new bp(!0);const Mc=t=>t,ao=t=>Reflect.getPrototypeOf(t);function $y(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),a=is(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),f=n?Mc:e?Vo:rt;return!e&&ht(i,"iterate",l?Lc:Sr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function co(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Hy(t,e){const n={get(s){const i=this.__v_raw,a=Ee(i),c=Ee(s);t||(Qn(s,c)&&ht(a,"get",s),ht(a,"get",c));const{has:l}=ao(a),h=e?Mc:t?Vo:rt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ht(Ee(s),"iterate",Sr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ee(i),c=Ee(s);return t||(Qn(s,c)&&ht(a,"has",s),ht(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=Ee(c),h=e?Mc:t?Vo:rt;return!t&&ht(l,"iterate",Sr),c.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return Je(n,t?{add:co("add"),set:co("set"),delete:co("delete"),clear:co("clear")}:{add(s){!e&&!Vt(s)&&!rr(s)&&(s=Ee(s));const i=Ee(this);return ao(i).has.call(i,s)||(i.add(s),yn(i,"add",s,s)),this},set(s,i){!e&&!Vt(i)&&!rr(i)&&(i=Ee(i));const a=Ee(this),{has:c,get:l}=ao(a);let h=c.call(a,s);h||(s=Ee(s),h=c.call(a,s));const f=l.call(a,s);return a.set(s,i),h?Qn(i,f)&&yn(a,"set",s,i):yn(a,"add",s,i),this},delete(s){const i=Ee(this),{has:a,get:c}=ao(i);let l=a.call(i,s);l||(s=Ee(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&yn(i,"delete",s,void 0),h},clear(){const s=Ee(this),i=s.size!==0,a=s.clear();return i&&yn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$y(s,t,e)}),n}function Ol(t,e){const n=Hy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const qy={get:Ol(!1,!1)},zy={get:Ol(!1,!0)},Ky={get:Ol(!0,!1)};const Sp=new WeakMap,Cp=new WeakMap,Pp=new WeakMap,Wy=new WeakMap;function Gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qy(t){return t.__v_skip||!Object.isExtensible(t)?0:Gy(Ey(t))}function Pi(t){return rr(t)?t:Dl(t,!1,Uy,qy,Sp)}function kp(t){return Dl(t,!1,jy,zy,Cp)}function Np(t){return Dl(t,!0,By,Ky,Pp)}function Dl(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Qy(t);if(i===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function In(t){return rr(t)?In(t.__v_raw):!!(t&&t.__v_isReactive)}function rr(t){return!!(t&&t.__v_isReadonly)}function Vt(t){return!!(t&&t.__v_isShallow)}function Vl(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function xl(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&Dc(t,"__v_skip",!0),t}const rt=t=>De(t)?Pi(t):t,Vo=t=>De(t)?Np(t):t;function Fe(t){return t?t.__v_isRef===!0:!1}function ki(t){return Op(t,!1)}function Yy(t){return Op(t,!0)}function Op(t,e){return Fe(t)?t:new Jy(t,e)}class Jy{constructor(e,n){this.dep=new Nl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:rt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Vt(e)||rr(e);e=r?e:Ee(e),Qn(e,n)&&(this._rawValue=e,this._value=r?e:rt(e),this.dep.trigger())}}function Cr(t){return Fe(t)?t.value:t}const Xy={get:(t,e,n)=>e==="__v_raw"?t:Cr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Fe(s)&&!Fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dp(t){return In(t)?t:new Proxy(t,Xy)}function Zy(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=Vp(t,n);return e}class ev{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Dy(Ee(this._object),this._key)}}class tv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function nv(t,e,n){return Fe(t)?t:ue(t)?new tv(t):De(t)&&arguments.length>1?Vp(t,e,n):ki(t)}function Vp(t,e,n){const r=t[e];return Fe(r)?r:new ev(t,e,n)}class rv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Nl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return yp(this,!0),!0}get value(){const e=this.dep.track();return Tp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sv(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new rv(r,s,n)}const lo={},xo=new WeakMap;let wr;function iv(t,e=!1,n=wr){if(n){let r=xo.get(n);r||xo.set(n,r=[]),r.push(t)}}function ov(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=j=>s?j:Vt(j)||s===!1||s===0?vn(j,1):vn(j);let f,p,g,v,P=!1,N=!1;if(Fe(t)?(p=()=>t.value,P=Vt(t)):In(t)?(p=()=>h(t),P=!0):ie(t)?(N=!0,P=t.some(j=>In(j)||Vt(j)),p=()=>t.map(j=>{if(Fe(j))return j.value;if(In(j))return h(j);if(ue(j))return l?l(j,2):j()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){wn();try{g()}finally{An()}}const j=wr;wr=f;try{return l?l(t,3,[v]):t(v)}finally{wr=j}}:p=tn,e&&s){const j=p,Z=s===!0?1/0:s;p=()=>vn(j(),Z)}const O=gp(),$=()=>{f.stop(),O&&O.active&&Al(O.effects,f)};if(i&&e){const j=e;e=(...Z)=>{j(...Z),$()}}let F=N?new Array(t.length).fill(lo):lo;const U=j=>{if(!(!(f.flags&1)||!f.dirty&&!j))if(e){const Z=f.run();if(s||P||(N?Z.some((oe,b)=>Qn(oe,F[b])):Qn(Z,F))){g&&g();const oe=wr;wr=f;try{const b=[Z,F===lo?void 0:N&&F[0]===lo?[]:F,v];F=Z,l?l(e,3,b):e(...b)}finally{wr=oe}}}else f.run()};return c&&c(U),f=new mp(p),f.scheduler=a?()=>a(U,!1):U,v=j=>iv(j,!1,f),g=f.onStop=()=>{const j=xo.get(f);if(j){if(l)l(j,4);else for(const Z of j)Z();xo.delete(f)}},e?r?U(!0):F=f.run():a?a(U.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function vn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Fe(t))vn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)vn(t[r],e,n);else if(op(t)||is(t))t.forEach(r=>{vn(r,e,n)});else if(lp(t)){for(const r in t)vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ni(t,e,n,r){try{return r?t(...r):t()}catch(s){fa(s,e,n)}}function qt(t,e,n,r){if(ue(t)){const s=Ni(t,e,n,r);return s&&ap(s)&&s.catch(i=>{fa(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(qt(t[i],e,n,r));return s}}function fa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){wn(),Ni(i,null,10,[t,l,h]),An();return}}av(t,n,s,r,a)}function av(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const yt=[];let Qt=-1;const os=[];let Un=null,Yr=0;const xp=Promise.resolve();let Lo=null;function Ll(t){const e=Lo||xp;return t?e.then(this?t.bind(this):t):e}function cv(t){let e=Qt+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=pi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ml(t){if(!(t.flags&1)){const e=pi(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=pi(n)?yt.push(t):yt.splice(cv(e),0,t),t.flags|=1,Lp()}}function Lp(){Lo||(Lo=xp.then(Fp))}function lv(t){ie(t)?os.push(...t):Un&&t.id===-1?Un.splice(Yr+1,0,t):t.flags&1||(os.push(t),t.flags|=1),Lp()}function Rh(t,e,n=Qt+1){for(;n<yt.length;n++){const r=yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Mp(t){if(os.length){const e=[...new Set(os)].sort((n,r)=>pi(n)-pi(r));if(os.length=0,Un){Un.push(...e);return}for(Un=e,Yr=0;Yr<Un.length;Yr++){const n=Un[Yr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Un=null,Yr=0}}const pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fp(t){try{for(Qt=0;Qt<yt.length;Qt++){const e=yt[Qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ni(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qt<yt.length;Qt++){const e=yt[Qt];e&&(e.flags&=-2)}Qt=-1,yt.length=0,Mp(),Lo=null,(yt.length||os.length)&&Fp()}}let Ct=null,Up=null;function Mo(t){const e=Ct;return Ct=t,Up=t&&t.type.__scopeId||null,e}function St(t,e=Ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Lh(-1);const i=Mo(e);let a;try{a=t(...s)}finally{Mo(i),r._d&&Lh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function sP(t,e){if(Ct===null)return t;const n=_a(Ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=ke]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&vn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(wn(),qt(l,n,8,[t.el,c,t,e]),An())}}const uv=Symbol("_vte"),Bp=t=>t.__isTeleport,Bn=Symbol("_leaveCb"),uo=Symbol("_enterCb");function hv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gp(()=>{t.isMounted=!0}),Qp(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],jp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},$p=t=>{const e=t.subTree;return e.component?$p(e.component):e},fv={name:"BaseTransition",props:jp,setup(t,{slots:e}){const n=Hl(),r=hv();return()=>{const s=e.default&&zp(e.default(),!0);if(!s||!s.length)return;const i=Hp(s),a=Ee(t),{mode:c}=a;if(r.isLeaving)return oc(i);const l=bh(i);if(!l)return oc(i);let h=Fc(l,a,r,n,p=>h=p);l.type!==vt&&gi(l,h);let f=n.subTree&&bh(n.subTree);if(f&&f.type!==vt&&!Rr(l,f)&&$p(n).type!==vt){let p=Fc(f,a,r,n);if(gi(f,p),c==="out-in"&&l.type!==vt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},oc(i);c==="in-out"&&l.type!==vt?p.delayLeave=(g,v,P)=>{const N=qp(r,f);N[String(f.key)]=f,g[Bn]=()=>{v(),g[Bn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{P(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Hp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==vt){e=n;break}}return e}const dv=fv;function qp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Fc(t,e,n,r,s){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:v,onAfterLeave:P,onLeaveCancelled:N,onBeforeAppear:O,onAppear:$,onAfterAppear:F,onAppearCancelled:U}=e,j=String(t.key),Z=qp(n,t),oe=(_,A)=>{_&&qt(_,r,9,A)},b=(_,A)=>{const R=A[1];oe(_,A),ie(_)?_.every(w=>w.length<=1)&&R():_.length<=1&&R()},y={mode:a,persisted:c,beforeEnter(_){let A=l;if(!n.isMounted)if(i)A=O||l;else return;_[Bn]&&_[Bn](!0);const R=Z[j];R&&Rr(t,R)&&R.el[Bn]&&R.el[Bn](),oe(A,[_])},enter(_){let A=h,R=f,w=p;if(!n.isMounted)if(i)A=$||h,R=F||f,w=U||p;else return;let E=!1;const Re=_[uo]=$e=>{E||(E=!0,$e?oe(w,[_]):oe(R,[_]),y.delayedLeave&&y.delayedLeave(),_[uo]=void 0)};A?b(A,[_,Re]):Re()},leave(_,A){const R=String(t.key);if(_[uo]&&_[uo](!0),n.isUnmounting)return A();oe(g,[_]);let w=!1;const E=_[Bn]=Re=>{w||(w=!0,A(),Re?oe(N,[_]):oe(P,[_]),_[Bn]=void 0,Z[R]===t&&delete Z[R])};Z[R]=t,v?b(v,[_,E]):E()},clone(_){const A=Fc(_,e,n,r,s);return s&&s(A),A}};return y}function oc(t){if(da(t))return t=sr(t),t.children=null,t}function bh(t){if(!da(t))return Bp(t.type)&&t.children?Hp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function gi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,gi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function zp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Jt?(a.patchFlag&128&&s++,r=r.concat(zp(a.children,e,c))):(e||a.type!==vt)&&r.push(c!=null?sr(a,{key:c}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Oi(t,e){return ue(t)?Je({name:t.name},e,{setup:t}):t}function Kp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xs(t,e,n,r,s=!1){if(ie(t)){t.forEach((P,N)=>Xs(P,e&&(ie(e)?e[N]:e),n,r,s));return}if(Zs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Xs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?_a(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===ke?c.refs={}:c.refs,p=c.setupState,g=Ee(p),v=p===ke?()=>!1:P=>Se(g,P);if(h!=null&&h!==l&&(je(h)?(f[h]=null,v(h)&&(p[h]=null)):Fe(h)&&(h.value=null)),ue(l))Ni(l,c,12,[a,f]);else{const P=je(l),N=Fe(l);if(P||N){const O=()=>{if(t.f){const $=P?v(l)?p[l]:f[l]:l.value;s?ie($)&&Al($,i):ie($)?$.includes(i)||$.push(i):P?(f[l]=[i],v(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else P?(f[l]=a,v(l)&&(p[l]=a)):N&&(l.value=a,t.k&&(f[t.k]=a))};a?(O.id=-1,bt(O,n)):O()}}}la().requestIdleCallback;la().cancelIdleCallback;const Zs=t=>!!t.type.__asyncLoader,da=t=>t.type.__isKeepAlive;function pv(t,e){Wp(t,"a",e)}function gv(t,e){Wp(t,"da",e)}function Wp(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)da(s.parent.vnode)&&mv(r,e,n,s),s=s.parent}}function mv(t,e,n,r){const s=pa(e,t,r,!0);Yp(()=>{Al(r[e],s)},n)}function pa(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{wn();const c=Di(n),l=qt(e,n,t,a);return c(),An(),l});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=dt)=>{(!_i||t==="sp")&&pa(t,(...r)=>e(...r),n)},_v=Cn("bm"),Gp=Cn("m"),yv=Cn("bu"),vv=Cn("u"),Qp=Cn("bum"),Yp=Cn("um"),Ev=Cn("sp"),Tv=Cn("rtg"),Iv=Cn("rtc");function wv(t,e=dt){pa("ec",t,e)}const Jp="components";function Fl(t,e){return Zp(Jp,t,!0,e)||t}const Xp=Symbol.for("v-ndc");function Av(t){return je(t)?Zp(Jp,t,!1)||t:t||Xp}function Zp(t,e,n=!0,r=!1){const s=Ct||dt;if(s){const i=s.type;{const c=fE(i,!1);if(c&&(c===e||c===Lt(e)||c===ca(Lt(e))))return i}const a=Sh(s[t]||i[t],e)||Sh(s.appContext[t],e);return!a&&r?i:a}}function Sh(t,e){return t&&(t[e]||t[Lt(e)]||t[ca(Lt(e))])}function iP(t,e,n,r){let s;const i=n,a=ie(t);if(a||je(t)){const c=a&&In(t);let l=!1,h=!1;c&&(l=!Vt(t),h=rr(t),t=ha(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?Vo(rt(t[f])):rt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Uc=t=>t?vg(t)?_a(t):Uc(t.parent):null,ei=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uc(t.parent),$root:t=>Uc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>tg(t),$forceUpdate:t=>t.f||(t.f=()=>{Ml(t.update)}),$nextTick:t=>t.n||(t.n=Ll.bind(t.proxy)),$watch:t=>Kv.bind(t)}),ac=(t,e)=>t!==ke&&!t.__isScriptSetup&&Se(t,e),Rv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const v=a[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ac(r,e))return a[e]=1,r[e];if(s!==ke&&Se(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Se(h,e))return a[e]=3,i[e];if(n!==ke&&Se(n,e))return a[e]=4,n[e];Bc&&(a[e]=0)}}const f=ei[e];let p,g;if(f)return e==="$attrs"&&ht(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==ke&&Se(n,e))return a[e]=4,n[e];if(g=l.config.globalProperties,Se(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ac(s,e)?(s[e]=n,!0):r!==ke&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==ke&&Se(t,a)||ac(e,a)||(c=i[0])&&Se(c,a)||Se(r,a)||Se(ei,a)||Se(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ch(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bc=!0;function bv(t){const e=tg(t),n=t.proxy,r=t.ctx;Bc=!1,e.beforeCreate&&Ph(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:v,updated:P,activated:N,deactivated:O,beforeDestroy:$,beforeUnmount:F,destroyed:U,unmounted:j,render:Z,renderTracked:oe,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:A,inheritAttrs:R,components:w,directives:E,filters:Re}=e;if(h&&Sv(h,r,null),a)for(const le in a){const pe=a[le];ue(pe)&&(r[le]=pe.bind(n))}if(s){const le=s.call(n,n);De(le)&&(t.data=Pi(le))}if(Bc=!0,i)for(const le in i){const pe=i[le],At=ue(pe)?pe.bind(n,n):ue(pe.get)?pe.get.bind(n,n):tn,Mt=!ue(pe)&&ue(pe.set)?pe.set.bind(n):tn,kt=wt({get:At,set:Mt});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Le=>kt.value=Le})}if(c)for(const le in c)eg(c[le],r,n,le);if(l){const le=ue(l)?l.call(n):l;Reflect.ownKeys(le).forEach(pe=>{Eo(pe,le[pe])})}f&&Ph(f,t,"c");function Ce(le,pe){ie(pe)?pe.forEach(At=>le(At.bind(n))):pe&&le(pe.bind(n))}if(Ce(_v,p),Ce(Gp,g),Ce(yv,v),Ce(vv,P),Ce(pv,N),Ce(gv,O),Ce(wv,y),Ce(Iv,oe),Ce(Tv,b),Ce(Qp,F),Ce(Yp,j),Ce(Ev,_),ie(A))if(A.length){const le=t.exposed||(t.exposed={});A.forEach(pe=>{Object.defineProperty(le,pe,{get:()=>n[pe],set:At=>n[pe]=At,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===tn&&(t.render=Z),R!=null&&(t.inheritAttrs=R),w&&(t.components=w),E&&(t.directives=E),_&&Kp(t)}function Sv(t,e,n=tn){ie(t)&&(t=jc(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=xt(s.from||r,s.default,!0):i=xt(s.from||r):i=xt(s),Fe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Ph(t,e,n){qt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function eg(t,e,n,r){let s=r.includes(".")?pg(n,r):()=>n[r];if(je(t)){const i=e[t];ue(i)&&ti(s,i)}else if(ue(t))ti(s,t.bind(n));else if(De(t))if(ie(t))t.forEach(i=>eg(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&ti(s,i,t)}}function tg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Fo(l,h,a,!0)),Fo(l,e,a)),De(e)&&i.set(e,l),l}function Fo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fo(t,i,n,!0),s&&s.forEach(a=>Fo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Cv[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Cv={data:kh,props:Nh,emits:Nh,methods:$s,computed:$s,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:$s,directives:$s,watch:kv,provide:kh,inject:Pv};function kh(t,e){return e?t?function(){return Je(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Pv(t,e){return $s(jc(t),jc(e))}function jc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function $s(t,e){return t?Je(Object.create(null),t,e):e}function Nh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:Je(Object.create(null),Ch(t),Ch(e??{})):e}function kv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function ng(){return{app:null,config:{isNativeTag:yy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nv=0;function Ov(t,e){return function(r,s=null){ue(r)||(r=Je({},r)),s!=null&&!De(s)&&(s=null);const i=ng(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Nv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:pE,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ue(f.install)?(a.add(f),f.install(h,...p)):ue(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const v=h._ceVNode||Ne(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(v,f,g),l=!0,h._container=f,f.__vue_app__=h,_a(v.component)}},onUnmount(f){c.push(f)},unmount(){l&&(qt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Pr;Pr=h;try{return f()}finally{Pr=p}}};return h}}let Pr=null;function Eo(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function xt(t,e,n=!1){const r=Hl();if(r||Pr){let s=Pr?Pr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}function Dv(){return!!(Hl()||Pr)}const rg={},sg=()=>Object.create(rg),ig=t=>Object.getPrototypeOf(t)===rg;function Vv(t,e,n,r=!1){const s={},i=sg();t.propsDefaults=Object.create(null),og(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:kp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=Ee(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ga(t.emitsOptions,g))continue;const v=e[g];if(l)if(Se(i,g))v!==i[g]&&(i[g]=v,h=!0);else{const P=Lt(g);s[P]=$c(l,c,P,v,t,!1)}else v!==i[g]&&(i[g]=v,h=!0)}}}else{og(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Se(e,p)&&((f=Fr(p))===p||!Se(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=$c(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Se(e,p))&&(delete i[p],h=!0)}h&&yn(t.attrs,"set","")}function og(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Qs(l))continue;const h=e[l];let f;s&&Se(s,f=Lt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:ga(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=Ee(n),h=c||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=$c(s,l,p,h[p],t,!Se(h,p))}}return a}function $c(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Se(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Di(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}const Lv=new WeakMap;function ag(t,e,n=!1){const r=n?Lv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[g,v]=ag(p,e,!0);Je(a,g),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return De(t)&&r.set(t,ss),ss;if(ie(i))for(let f=0;f<i.length;f++){const p=Lt(i[f]);Oh(p)&&(a[p]=ke)}else if(i)for(const f in i){const p=Lt(f);if(Oh(p)){const g=i[f],v=a[p]=ie(g)||ue(g)?{type:g}:Je({},g),P=v.type;let N=!1,O=!0;if(ie(P))for(let $=0;$<P.length;++$){const F=P[$],U=ue(F)&&F.name;if(U==="Boolean"){N=!0;break}else U==="String"&&(O=!1)}else N=ue(P)&&P.name==="Boolean";v[0]=N,v[1]=O,(N||Se(v,"default"))&&c.push(p)}}const h=[a,c];return De(t)&&r.set(t,h),h}function Oh(t){return t[0]!=="$"&&!Qs(t)}const Ul=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Bl=t=>ie(t)?t.map(Xt):[Xt(t)],Mv=(t,e,n)=>{if(e._n)return e;const r=St((...s)=>Bl(e(...s)),n);return r._c=!1,r},cg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ul(s))continue;const i=t[s];if(ue(i))e[s]=Mv(s,i,r);else if(i!=null){const a=Bl(i);e[s]=()=>a}}},lg=(t,e)=>{const n=Bl(e);t.slots.default=()=>n},ug=(t,e,n)=>{for(const r in e)(n||!Ul(r))&&(t[r]=e[r])},Fv=(t,e,n)=>{const r=t.slots=sg();if(t.vnode.shapeFlag&32){const s=e.__;s&&Dc(r,"__",s,!0);const i=e._;i?(ug(r,e,n),n&&Dc(r,"_",i,!0)):cg(e,r)}else e&&lg(t,e)},Uv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:ug(s,e,n):(i=!e.$stable,cg(e,s)),a=e}else e&&(lg(t,e),a={default:1});if(i)for(const c in s)!Ul(c)&&a[c]==null&&delete s[c]},bt=Zv;function Bv(t){return jv(t)}function jv(t,e){const n=la();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:v=tn,insertStaticContent:P}=t,N=(T,I,S,V=null,M=null,x=null,G=void 0,z=null,q=!!I.dynamicChildren)=>{if(T===I)return;T&&!Rr(T,I)&&(V=D(T),Le(T,M,x,!0),T=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:B,ref:ne,shapeFlag:W}=I;switch(B){case ma:O(T,I,S,V);break;case vt:$(T,I,S,V);break;case To:T==null&&F(I,S,V,G);break;case Jt:w(T,I,S,V,M,x,G,z,q);break;default:W&1?Z(T,I,S,V,M,x,G,z,q):W&6?E(T,I,S,V,M,x,G,z,q):(W&64||W&128)&&B.process(T,I,S,V,M,x,G,z,q,X)}ne!=null&&M?Xs(ne,T&&T.ref,x,I||T,!I):ne==null&&T&&T.ref!=null&&Xs(T.ref,null,x,T,!0)},O=(T,I,S,V)=>{if(T==null)r(I.el=c(I.children),S,V);else{const M=I.el=T.el;I.children!==T.children&&h(M,I.children)}},$=(T,I,S,V)=>{T==null?r(I.el=l(I.children||""),S,V):I.el=T.el},F=(T,I,S,V)=>{[T.el,T.anchor]=P(T.children,I,S,V,T.el,T.anchor)},U=({el:T,anchor:I},S,V)=>{let M;for(;T&&T!==I;)M=g(T),r(T,S,V),T=M;r(I,S,V)},j=({el:T,anchor:I})=>{let S;for(;T&&T!==I;)S=g(T),s(T),T=S;s(I)},Z=(T,I,S,V,M,x,G,z,q)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),T==null?oe(I,S,V,M,x,G,z,q):_(T,I,M,x,G,z,q)},oe=(T,I,S,V,M,x,G,z)=>{let q,B;const{props:ne,shapeFlag:W,transition:te,dirs:ce}=T;if(q=T.el=a(T.type,x,ne&&ne.is,ne),W&8?f(q,T.children):W&16&&y(T.children,q,null,V,M,cc(T,x),G,z),ce&&vr(T,null,V,"created"),b(q,T,T.scopeId,G,V),ne){for(const de in ne)de!=="value"&&!Qs(de)&&i(q,de,null,ne[de],x,V);"value"in ne&&i(q,"value",null,ne.value,x),(B=ne.onVnodeBeforeMount)&&Gt(B,V,T)}ce&&vr(T,null,V,"beforeMount");const se=$v(M,te);se&&te.beforeEnter(q),r(q,I,S),((B=ne&&ne.onVnodeMounted)||se||ce)&&bt(()=>{B&&Gt(B,V,T),se&&te.enter(q),ce&&vr(T,null,V,"mounted")},M)},b=(T,I,S,V,M)=>{if(S&&v(T,S),V)for(let x=0;x<V.length;x++)v(T,V[x]);if(M){let x=M.subTree;if(I===x||mg(x.type)&&(x.ssContent===I||x.ssFallback===I)){const G=M.vnode;b(T,G,G.scopeId,G.slotScopeIds,M.parent)}}},y=(T,I,S,V,M,x,G,z,q=0)=>{for(let B=q;B<T.length;B++){const ne=T[B]=z?jn(T[B]):Xt(T[B]);N(null,ne,I,S,V,M,x,G,z)}},_=(T,I,S,V,M,x,G)=>{const z=I.el=T.el;let{patchFlag:q,dynamicChildren:B,dirs:ne}=I;q|=T.patchFlag&16;const W=T.props||ke,te=I.props||ke;let ce;if(S&&Er(S,!1),(ce=te.onVnodeBeforeUpdate)&&Gt(ce,S,I,T),ne&&vr(I,T,S,"beforeUpdate"),S&&Er(S,!0),(W.innerHTML&&te.innerHTML==null||W.textContent&&te.textContent==null)&&f(z,""),B?A(T.dynamicChildren,B,z,S,V,cc(I,M),x):G||pe(T,I,z,null,S,V,cc(I,M),x,!1),q>0){if(q&16)R(z,W,te,S,M);else if(q&2&&W.class!==te.class&&i(z,"class",null,te.class,M),q&4&&i(z,"style",W.style,te.style,M),q&8){const se=I.dynamicProps;for(let de=0;de<se.length;de++){const ye=se[de],Xe=W[ye],Ze=te[ye];(Ze!==Xe||ye==="value")&&i(z,ye,Xe,Ze,M,S)}}q&1&&T.children!==I.children&&f(z,I.children)}else!G&&B==null&&R(z,W,te,S,M);((ce=te.onVnodeUpdated)||ne)&&bt(()=>{ce&&Gt(ce,S,I,T),ne&&vr(I,T,S,"updated")},V)},A=(T,I,S,V,M,x,G)=>{for(let z=0;z<I.length;z++){const q=T[z],B=I[z],ne=q.el&&(q.type===Jt||!Rr(q,B)||q.shapeFlag&198)?p(q.el):S;N(q,B,ne,null,V,M,x,G,!0)}},R=(T,I,S,V,M)=>{if(I!==S){if(I!==ke)for(const x in I)!Qs(x)&&!(x in S)&&i(T,x,I[x],null,M,V);for(const x in S){if(Qs(x))continue;const G=S[x],z=I[x];G!==z&&x!=="value"&&i(T,x,z,G,M,V)}"value"in S&&i(T,"value",I.value,S.value,M)}},w=(T,I,S,V,M,x,G,z,q)=>{const B=I.el=T?T.el:c(""),ne=I.anchor=T?T.anchor:c("");let{patchFlag:W,dynamicChildren:te,slotScopeIds:ce}=I;ce&&(z=z?z.concat(ce):ce),T==null?(r(B,S,V),r(ne,S,V),y(I.children||[],S,ne,M,x,G,z,q)):W>0&&W&64&&te&&T.dynamicChildren?(A(T.dynamicChildren,te,S,M,x,G,z),(I.key!=null||M&&I===M.subTree)&&hg(T,I,!0)):pe(T,I,S,ne,M,x,G,z,q)},E=(T,I,S,V,M,x,G,z,q)=>{I.slotScopeIds=z,T==null?I.shapeFlag&512?M.ctx.activate(I,S,V,G,q):Re(I,S,V,M,x,G,q):$e(T,I,q)},Re=(T,I,S,V,M,x,G)=>{const z=T.component=aE(T,V,M);if(da(T)&&(z.ctx.renderer=X),cE(z,!1,G),z.asyncDep){if(M&&M.registerDep(z,Ce,G),!T.el){const q=z.subTree=Ne(vt);$(null,q,I,S),T.placeholder=q.el}}else Ce(z,T,I,S,M,x,G)},$e=(T,I,S)=>{const V=I.component=T.component;if(Jv(T,I,S))if(V.asyncDep&&!V.asyncResolved){le(V,I,S);return}else V.next=I,V.update();else I.el=T.el,V.vnode=I},Ce=(T,I,S,V,M,x,G)=>{const z=()=>{if(T.isMounted){let{next:W,bu:te,u:ce,parent:se,vnode:de}=T;{const it=fg(T);if(it){W&&(W.el=de.el,le(T,W,G)),it.asyncDep.then(()=>{T.isUnmounted||z()});return}}let ye=W,Xe;Er(T,!1),W?(W.el=de.el,le(T,W,G)):W=de,te&&vo(te),(Xe=W.props&&W.props.onVnodeBeforeUpdate)&&Gt(Xe,se,W,de),Er(T,!0);const Ze=Vh(T),Nt=T.subTree;T.subTree=Ze,N(Nt,Ze,p(Nt.el),D(Nt),T,M,x),W.el=Ze.el,ye===null&&Xv(T,Ze.el),ce&&bt(ce,M),(Xe=W.props&&W.props.onVnodeUpdated)&&bt(()=>Gt(Xe,se,W,de),M)}else{let W;const{el:te,props:ce}=I,{bm:se,m:de,parent:ye,root:Xe,type:Ze}=T,Nt=Zs(I);Er(T,!1),se&&vo(se),!Nt&&(W=ce&&ce.onVnodeBeforeMount)&&Gt(W,ye,I),Er(T,!0);{Xe.ce&&Xe.ce._def.shadowRoot!==!1&&Xe.ce._injectChildStyle(Ze);const it=T.subTree=Vh(T);N(null,it,S,V,T,M,x),I.el=it.el}if(de&&bt(de,M),!Nt&&(W=ce&&ce.onVnodeMounted)){const it=I;bt(()=>Gt(W,ye,it),M)}(I.shapeFlag&256||ye&&Zs(ye.vnode)&&ye.vnode.shapeFlag&256)&&T.a&&bt(T.a,M),T.isMounted=!0,I=S=V=null}};T.scope.on();const q=T.effect=new mp(z);T.scope.off();const B=T.update=q.run.bind(q),ne=T.job=q.runIfDirty.bind(q);ne.i=T,ne.id=T.uid,q.scheduler=()=>Ml(ne),Er(T,!0),B()},le=(T,I,S)=>{I.component=T;const V=T.vnode.props;T.vnode=I,T.next=null,xv(T,I.props,V,S),Uv(T,I.children,S),wn(),Rh(T),An()},pe=(T,I,S,V,M,x,G,z,q=!1)=>{const B=T&&T.children,ne=T?T.shapeFlag:0,W=I.children,{patchFlag:te,shapeFlag:ce}=I;if(te>0){if(te&128){Mt(B,W,S,V,M,x,G,z,q);return}else if(te&256){At(B,W,S,V,M,x,G,z,q);return}}ce&8?(ne&16&&Tt(B,M,x),W!==B&&f(S,W)):ne&16?ce&16?Mt(B,W,S,V,M,x,G,z,q):Tt(B,M,x,!0):(ne&8&&f(S,""),ce&16&&y(W,S,V,M,x,G,z,q))},At=(T,I,S,V,M,x,G,z,q)=>{T=T||ss,I=I||ss;const B=T.length,ne=I.length,W=Math.min(B,ne);let te;for(te=0;te<W;te++){const ce=I[te]=q?jn(I[te]):Xt(I[te]);N(T[te],ce,S,null,M,x,G,z,q)}B>ne?Tt(T,M,x,!0,!1,W):y(I,S,V,M,x,G,z,q,W)},Mt=(T,I,S,V,M,x,G,z,q)=>{let B=0;const ne=I.length;let W=T.length-1,te=ne-1;for(;B<=W&&B<=te;){const ce=T[B],se=I[B]=q?jn(I[B]):Xt(I[B]);if(Rr(ce,se))N(ce,se,S,null,M,x,G,z,q);else break;B++}for(;B<=W&&B<=te;){const ce=T[W],se=I[te]=q?jn(I[te]):Xt(I[te]);if(Rr(ce,se))N(ce,se,S,null,M,x,G,z,q);else break;W--,te--}if(B>W){if(B<=te){const ce=te+1,se=ce<ne?I[ce].el:V;for(;B<=te;)N(null,I[B]=q?jn(I[B]):Xt(I[B]),S,se,M,x,G,z,q),B++}}else if(B>te)for(;B<=W;)Le(T[B],M,x,!0),B++;else{const ce=B,se=B,de=new Map;for(B=se;B<=te;B++){const et=I[B]=q?jn(I[B]):Xt(I[B]);et.key!=null&&de.set(et.key,B)}let ye,Xe=0;const Ze=te-se+1;let Nt=!1,it=0;const Nn=new Array(Ze);for(B=0;B<Ze;B++)Nn[B]=0;for(B=ce;B<=W;B++){const et=T[B];if(Xe>=Ze){Le(et,M,x,!0);continue}let Ot;if(et.key!=null)Ot=de.get(et.key);else for(ye=se;ye<=te;ye++)if(Nn[ye-se]===0&&Rr(et,I[ye])){Ot=ye;break}Ot===void 0?Le(et,M,x,!0):(Nn[Ot-se]=B+1,Ot>=it?it=Ot:Nt=!0,N(et,I[Ot],S,null,M,x,G,z,q),Xe++)}const bs=Nt?Hv(Nn):ss;for(ye=bs.length-1,B=Ze-1;B>=0;B--){const et=se+B,Ot=I[et],zi=I[et+1],Hr=et+1<ne?zi.el||zi.placeholder:V;Nn[B]===0?N(null,Ot,S,Hr,M,x,G,z,q):Nt&&(ye<0||B!==bs[ye]?kt(Ot,S,Hr,2):ye--)}}},kt=(T,I,S,V,M=null)=>{const{el:x,type:G,transition:z,children:q,shapeFlag:B}=T;if(B&6){kt(T.component.subTree,I,S,V);return}if(B&128){T.suspense.move(I,S,V);return}if(B&64){G.move(T,I,S,X);return}if(G===Jt){r(x,I,S);for(let W=0;W<q.length;W++)kt(q[W],I,S,V);r(T.anchor,I,S);return}if(G===To){U(T,I,S);return}if(V!==2&&B&1&&z)if(V===0)z.beforeEnter(x),r(x,I,S),bt(()=>z.enter(x),M);else{const{leave:W,delayLeave:te,afterLeave:ce}=z,se=()=>{T.ctx.isUnmounted?s(x):r(x,I,S)},de=()=>{W(x,()=>{se(),ce&&ce()})};te?te(x,se,de):de()}else r(x,I,S)},Le=(T,I,S,V=!1,M=!1)=>{const{type:x,props:G,ref:z,children:q,dynamicChildren:B,shapeFlag:ne,patchFlag:W,dirs:te,cacheIndex:ce}=T;if(W===-2&&(M=!1),z!=null&&(wn(),Xs(z,null,S,T,!0),An()),ce!=null&&(I.renderCache[ce]=void 0),ne&256){I.ctx.deactivate(T);return}const se=ne&1&&te,de=!Zs(T);let ye;if(de&&(ye=G&&G.onVnodeBeforeUnmount)&&Gt(ye,I,T),ne&6)Wt(T.component,S,V);else{if(ne&128){T.suspense.unmount(S,V);return}se&&vr(T,null,I,"beforeUnmount"),ne&64?T.type.remove(T,I,S,X,V):B&&!B.hasOnce&&(x!==Jt||W>0&&W&64)?Tt(B,I,S,!1,!0):(x===Jt&&W&384||!M&&ne&16)&&Tt(q,I,S),V&&Me(T)}(de&&(ye=G&&G.onVnodeUnmounted)||se)&&bt(()=>{ye&&Gt(ye,I,T),se&&vr(T,null,I,"unmounted")},S)},Me=T=>{const{type:I,el:S,anchor:V,transition:M}=T;if(I===Jt){kn(S,V);return}if(I===To){j(T);return}const x=()=>{s(S),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(T.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:z}=M,q=()=>G(S,x);z?z(T.el,x,q):q()}else x()},kn=(T,I)=>{let S;for(;T!==I;)S=g(T),s(T),T=S;s(I)},Wt=(T,I,S)=>{const{bum:V,scope:M,job:x,subTree:G,um:z,m:q,a:B,parent:ne,slots:{__:W}}=T;Dh(q),Dh(B),V&&vo(V),ne&&ie(W)&&W.forEach(te=>{ne.renderCache[te]=void 0}),M.stop(),x&&(x.flags|=8,Le(G,T,I,S)),z&&bt(z,I),bt(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Tt=(T,I,S,V=!1,M=!1,x=0)=>{for(let G=x;G<T.length;G++)Le(T[G],I,S,V,M)},D=T=>{if(T.shapeFlag&6)return D(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const I=g(T.anchor||T.el),S=I&&I[uv];return S?g(S):I};let Y=!1;const Q=(T,I,S)=>{T==null?I._vnode&&Le(I._vnode,null,null,!0):N(I._vnode||null,T,I,null,null,null,S),I._vnode=T,Y||(Y=!0,Rh(),Mp(),Y=!1)},X={p:N,um:Le,m:kt,r:Me,mt:Re,mc:y,pc:pe,pbc:A,n:D,o:t};return{render:Q,hydrate:void 0,createApp:Ov(Q)}}function cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $v(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hg(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=jn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&hg(a,c)),c.type===ma&&(c.el=a.el),c.type===vt&&!c.el&&(c.el=a.el)}}function Hv(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function fg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fg(e)}function Dh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const qv=Symbol.for("v-scx"),zv=()=>xt(qv);function ti(t,e,n){return dg(t,e,n)}function dg(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:a}=n,c=Je({},n),l=e&&r||!e&&i!=="post";let h;if(_i){if(i==="sync"){const v=zv();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=tn,v.resume=tn,v.pause=tn,v}}const f=dt;c.call=(v,P,N)=>qt(v,f,P,N);let p=!1;i==="post"?c.scheduler=v=>{bt(v,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(v,P)=>{P?v():Ml(v)}),c.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const g=ov(t,e,c);return _i&&(h?h.push(g):l&&g()),g}function Kv(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?pg(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=Di(this),c=dg(s,i.bind(r),n);return a(),c}function pg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Wv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Lt(e)}Modifiers`]||t[`${Fr(e)}Modifiers`];function Gv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),a=i&&Wv(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>je(f)?f.trim():f)),a.number&&(s=n.map(Vc)));let c,l=r[c=tc(e)]||r[c=tc(Lt(e))];!l&&i&&(l=r[c=tc(Fr(e))]),l&&qt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,qt(h,t,6,s)}}function gg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!ue(t)){const l=h=>{const f=gg(h,e,!0);f&&(c=!0,Je(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>a[l]=null):Je(a,i),De(t)&&r.set(t,a),a)}function ga(t,e){return!t||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Fr(e))||Se(t,e))}function Vh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:v,ctx:P,inheritAttrs:N}=t,O=Mo(t);let $,F;try{if(n.shapeFlag&4){const j=s||r,Z=j;$=Xt(h.call(Z,j,f,p,v,g,P)),F=c}else{const j=e;$=Xt(j.length>1?j(p,{attrs:c,slots:a,emit:l}):j(p,null)),F=e.props?c:Qv(c)}}catch(j){ni.length=0,fa(j,t,1),$=Ne(vt)}let U=$;if(F&&N!==!1){const j=Object.keys(F),{shapeFlag:Z}=U;j.length&&Z&7&&(i&&j.some(wl)&&(F=Yv(F,i)),U=sr(U,F,!1,!0))}return n.dirs&&(U=sr(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&gi(U,n.transition),$=U,Mo(O),$}const Qv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ia(n))&&((e||(e={}))[n]=t[n]);return e},Yv=(t,e)=>{const n={};for(const r in t)(!wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Jv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xh(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!ga(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?xh(r,a,h):!0:!!a;return!1}function xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ga(n,i))return!0}return!1}function Xv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const mg=t=>t.__isSuspense;function Zv(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):lv(t)}const Jt=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),ni=[];let Pt=null;function kr(t=!1){ni.push(Pt=t?null:[])}function eE(){ni.pop(),Pt=ni[ni.length-1]||null}let mi=1;function Lh(t,e=!1){mi+=t,t<0&&Pt&&e&&(Pt.hasOnce=!0)}function _g(t){return t.dynamicChildren=mi>0?Pt||ss:null,eE(),mi>0&&Pt&&Pt.push(t),t}function Uo(t,e,n,r,s,i){return _g(me(t,e,n,r,s,i,!0))}function jl(t,e,n,r,s){return _g(Ne(t,e,n,r,s,!0))}function Bo(t){return t?t.__v_isVNode===!0:!1}function Rr(t,e){return t.type===e.type&&t.key===e.key}const yg=({key:t})=>t??null,Io=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||Fe(t)||ue(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function me(t,e=null,n=null,r=0,s=null,i=t===Jt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yg(e),ref:e&&Io(e),scopeId:Up,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return c?($l(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),mi>0&&!a&&Pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pt.push(l),l}const Ne=tE;function tE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xp)&&(t=vt),Bo(t)){const c=sr(t,e,!0);return n&&$l(c,n),mi>0&&!i&&Pt&&(c.shapeFlag&6?Pt[Pt.indexOf(t)]=c:Pt.push(c)),c.patchFlag=-2,c}if(dE(t)&&(t=t.__vccOpts),e){e=nE(e);let{class:c,style:l}=e;c&&!je(c)&&(e.class=ua(c)),De(l)&&(Vl(l)&&!ie(l)&&(l=Je({},l)),e.style=bl(l))}const a=je(t)?1:mg(t)?128:Bp(t)?64:De(t)?4:ue(t)?2:0;return me(t,e,n,r,s,a,i,!0)}function nE(t){return t?Vl(t)||ig(t)?Je({},t):t:null}function sr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?sE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&yg(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(Io(e)):[i,Io(e)]:Io(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Jt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sr(t.ssContent),ssFallback:t.ssFallback&&sr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&gi(f,l.clone(f)),f}function Ut(t=" ",e=0){return Ne(ma,null,t,e)}function rE(t,e){const n=Ne(To,null,t);return n.staticCount=e,n}function oP(t="",e=!1){return e?(kr(),jl(vt,null,t)):Ne(vt,null,t)}function Xt(t){return t==null||typeof t=="boolean"?Ne(vt):ie(t)?Ne(Jt,null,t.slice()):Bo(t)?jn(t):Ne(ma,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:sr(t)}function $l(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$l(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ig(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[Ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function sE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ua([e.class,r.class]));else if(s==="style")e.style=bl([e.style,r.style]);else if(ia(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Gt(t,e,n,r=null){qt(t,e,7,[n,r])}const iE=ng();let oE=0;function aE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iE,i={uid:oE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ag(r,s),emitsOptions:gg(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gv.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const Hl=()=>dt||Ct;let jo,Hc;{const t=la(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};jo=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),Hc=e("__VUE_SSR_SETTERS__",n=>_i=n)}const Di=t=>{const e=dt;return jo(t),t.scope.on(),()=>{t.scope.off(),jo(e)}},Mh=()=>{dt&&dt.scope.off(),jo(null)};function vg(t){return t.vnode.shapeFlag&4}let _i=!1;function cE(t,e=!1,n=!1){e&&Hc(e);const{props:r,children:s}=t.vnode,i=vg(t);Vv(t,r,i,e),Fv(t,s,n||e);const a=i?lE(t,e):void 0;return e&&Hc(!1),a}function lE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rv);const{setup:r}=n;if(r){wn();const s=t.setupContext=r.length>1?hE(t):null,i=Di(t),a=Ni(r,t,0,[t.props,s]),c=ap(a);if(An(),i(),(c||t.sp)&&!Zs(t)&&Kp(t),c){if(a.then(Mh,Mh),e)return a.then(l=>{Fh(t,l)}).catch(l=>{fa(l,t,0)});t.asyncDep=a}else Fh(t,a)}else Eg(t)}function Fh(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Dp(e)),Eg(t)}function Eg(t,e,n){const r=t.type;t.render||(t.render=r.render||tn);{const s=Di(t);wn();try{bv(t)}finally{An(),s()}}}const uE={get(t,e){return ht(t,"get",""),t[e]}};function hE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,uE),slots:t.slots,emit:t.emit,expose:e}}function _a(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dp(xl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ei)return ei[n](t)},has(e,n){return n in e||n in ei}})):t.proxy}function fE(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function dE(t){return ue(t)&&"__vccOpts"in t}const wt=(t,e)=>sv(t,e,_i);function ql(t,e,n){const r=arguments.length;return r===2?De(e)&&!ie(e)?Bo(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bo(n)&&(n=[n]),Ne(t,e,n))}const pE="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qc;const Uh=typeof window<"u"&&window.trustedTypes;if(Uh)try{qc=Uh.createPolicy("vue",{createHTML:t=>t})}catch{}const Tg=qc?t=>qc.createHTML(t):t=>t,gE="http://www.w3.org/2000/svg",mE="http://www.w3.org/1998/Math/MathML",_n=typeof document<"u"?document:null,Bh=_n&&_n.createElement("template"),_E={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?_n.createElementNS(gE,t):e==="mathml"?_n.createElementNS(mE,t):n?_n.createElement(t,{is:n}):_n.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Bh.innerHTML=Tg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Bh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xn="transition",Bs="animation",yi=Symbol("_vtc"),Ig={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yE=Je({},jp,Ig),vE=t=>(t.displayName="Transition",t.props=yE,t),EE=vE((t,{slots:e})=>ql(dv,TE(t),e)),Tr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},jh=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function TE(t){const e={};for(const w in t)w in Ig||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=a,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,P=IE(s),N=P&&P[0],O=P&&P[1],{onBeforeEnter:$,onEnter:F,onEnterCancelled:U,onLeave:j,onLeaveCancelled:Z,onBeforeAppear:oe=$,onAppear:b=F,onAppearCancelled:y=U}=e,_=(w,E,Re,$e)=>{w._enterCancelled=$e,Ir(w,E?f:c),Ir(w,E?h:a),Re&&Re()},A=(w,E)=>{w._isLeaving=!1,Ir(w,p),Ir(w,v),Ir(w,g),E&&E()},R=w=>(E,Re)=>{const $e=w?b:F,Ce=()=>_(E,w,Re);Tr($e,[E,Ce]),$h(()=>{Ir(E,w?l:i),gn(E,w?f:c),jh($e)||Hh(E,r,N,Ce)})};return Je(e,{onBeforeEnter(w){Tr($,[w]),gn(w,i),gn(w,a)},onBeforeAppear(w){Tr(oe,[w]),gn(w,l),gn(w,h)},onEnter:R(!1),onAppear:R(!0),onLeave(w,E){w._isLeaving=!0;const Re=()=>A(w,E);gn(w,p),w._enterCancelled?(gn(w,g),Kh()):(Kh(),gn(w,g)),$h(()=>{w._isLeaving&&(Ir(w,p),gn(w,v),jh(j)||Hh(w,r,O,Re))}),Tr(j,[w,Re])},onEnterCancelled(w){_(w,!1,void 0,!0),Tr(U,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),Tr(y,[w])},onLeaveCancelled(w){A(w),Tr(Z,[w])}})}function IE(t){if(t==null)return null;if(De(t))return[lc(t.enter),lc(t.leave)];{const e=lc(t);return[e,e]}}function lc(t){return wy(t)}function gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[yi]||(t[yi]=new Set)).add(e)}function Ir(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[yi];n&&(n.delete(e),n.size||(t[yi]=void 0))}function $h(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let wE=0;function Hh(t,e,n,r){const s=t._endId=++wE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:c,propCount:l}=AE(t,e);if(!a)return r();const h=a+"end";let f=0;const p=()=>{t.removeEventListener(h,g),i()},g=v=>{v.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(h,g)}function AE(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${xn}Delay`),i=r(`${xn}Duration`),a=qh(s,i),c=r(`${Bs}Delay`),l=r(`${Bs}Duration`),h=qh(c,l);let f=null,p=0,g=0;e===xn?a>0&&(f=xn,p=a,g=i.length):e===Bs?h>0&&(f=Bs,p=h,g=l.length):(p=Math.max(a,h),f=p>0?a>h?xn:Bs:null,g=f?f===xn?i.length:l.length:0);const v=f===xn&&/\b(transform|all)(,|$)/.test(r(`${xn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:v}}function qh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>zh(n)+zh(t[r])))}function zh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Kh(){return document.body.offsetHeight}function RE(t,e,n){const r=t[yi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wh=Symbol("_vod"),bE=Symbol("_vsh"),SE=Symbol(""),CE=/(^|;)\s*display\s*:/;function PE(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&wo(r,c,"")}else for(const a in e)n[a]==null&&wo(r,a,"");for(const a in n)a==="display"&&(i=!0),wo(r,a,n[a])}else if(s){if(e!==n){const a=r[SE];a&&(n+=";"+a),r.cssText=n,i=CE.test(n)}}else e&&t.removeAttribute("style");Wh in t&&(t[Wh]=i?r.display:"",t[bE]&&(r.display="none"))}const Gh=/\s*!important$/;function wo(t,e,n){if(ie(n))n.forEach(r=>wo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=kE(t,e);Gh.test(n)?t.setProperty(Fr(r),n.replace(Gh,""),"important"):t[r]=n}}const Qh=["Webkit","Moz","ms"],uc={};function kE(t,e){const n=uc[e];if(n)return n;let r=Lt(e);if(r!=="filter"&&r in t)return uc[e]=r;r=ca(r);for(let s=0;s<Qh.length;s++){const i=Qh[s]+r;if(i in t)return uc[e]=i}return e}const Yh="http://www.w3.org/1999/xlink";function Jh(t,e,n,r,s,i=Py(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yh,e.slice(6,e.length)):t.setAttributeNS(Yh,e,n):n==null||i&&!up(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fr(n)?String(n):n)}function Xh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Tg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=up(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Jr(t,e,n,r){t.addEventListener(e,n,r)}function NE(t,e,n,r){t.removeEventListener(e,n,r)}const Zh=Symbol("_vei");function OE(t,e,n,r,s=null){const i=t[Zh]||(t[Zh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=DE(e);if(r){const h=i[e]=LE(r,s);Jr(t,c,h,l)}else a&&(NE(t,c,a,l),i[e]=void 0)}}const ef=/(?:Once|Passive|Capture)$/;function DE(t){let e;if(ef.test(t)){e={};let r;for(;r=t.match(ef);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let hc=0;const VE=Promise.resolve(),xE=()=>hc||(VE.then(()=>hc=0),hc=Date.now());function LE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qt(ME(r,n.value),e,5,[r])};return n.value=t,n.attached=xE(),n}function ME(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,FE=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?RE(t,r,a):e==="style"?PE(t,n,r):ia(e)?wl(e)||OE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):UE(t,e,r,a))?(Xh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(r))?Xh(t,Lt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jh(t,e,r,a))};function UE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&tf(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return tf(e)&&je(n)?!1:e in t}const nf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>vo(e,n):e};function BE(t){t.target.composing=!0}function rf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fc=Symbol("_assign"),aP={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fc]=nf(s);const i=r||s.props&&s.props.type==="number";Jr(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Vc(c)),t[fc](c)}),n&&Jr(t,"change",()=>{t.value=t.value.trim()}),e||(Jr(t,"compositionstart",BE),Jr(t,"compositionend",rf),Jr(t,"change",rf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[fc]=nf(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Vc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},jE=["ctrl","shift","alt","meta"],$E={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jE.some(n=>t[`${n}Key`]&&!e.includes(n))},cP=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=$E[e[a]];if(c&&c(s,e))return}return t(s,...i)})},HE=Je({patchProp:FE},_E);let sf;function qE(){return sf||(sf=Bv(HE))}const zE=(...t)=>{const e=qE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=WE(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,KE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function KE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function WE(t){return je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let wg;const ya=t=>wg=t,Ag=Symbol();function zc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ri;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ri||(ri={}));function GE(){const t=pp(!0),e=t.run(()=>ki({}));let n=[],r=[];const s=xl({install(i){ya(s),s._a=i,i.provide(Ag,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Rg=()=>{};function of(t,e,n,r=Rg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&gp()&&ky(s),s}function Qr(t,...e){t.slice().forEach(n=>{n(...e)})}const QE=t=>t(),af=Symbol(),dc=Symbol();function Kc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];zc(s)&&zc(r)&&t.hasOwnProperty(n)&&!Fe(r)&&!In(r)?t[n]=Kc(s,r):t[n]=r}return t}const YE=Symbol();function JE(t){return!zc(t)||!Object.prototype.hasOwnProperty.call(t,YE)}const{assign:Fn}=Object;function XE(t){return!!(Fe(t)&&t.effect)}function ZE(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const f=Zy(n.state.value[t]);return Fn(f,i,Object.keys(a||{}).reduce((p,g)=>(p[g]=xl(wt(()=>{ya(n);const v=n._s.get(t);return a[g].call(v,v)})),p),{}))}return l=bg(t,h,e,n,r,!0),l}function bg(t,e,n={},r,s,i){let a;const c=Fn({actions:{}},n),l={deep:!0};let h,f,p=[],g=[],v;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),ki({});let N;function O(y){let _;h=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:ri.patchFunction,storeId:t,events:v}):(Kc(r.state.value[t],y),_={type:ri.patchObject,payload:y,storeId:t,events:v});const A=N=Symbol();Ll().then(()=>{N===A&&(h=!0)}),f=!0,Qr(p,_,r.state.value[t])}const $=i?function(){const{state:_}=n,A=_?_():{};this.$patch(R=>{Fn(R,A)})}:Rg;function F(){a.stop(),p=[],g=[],r._s.delete(t)}const U=(y,_="")=>{if(af in y)return y[dc]=_,y;const A=function(){ya(r);const R=Array.from(arguments),w=[],E=[];function Re(le){w.push(le)}function $e(le){E.push(le)}Qr(g,{args:R,name:A[dc],store:Z,after:Re,onError:$e});let Ce;try{Ce=y.apply(this&&this.$id===t?this:Z,R)}catch(le){throw Qr(E,le),le}return Ce instanceof Promise?Ce.then(le=>(Qr(w,le),le)).catch(le=>(Qr(E,le),Promise.reject(le))):(Qr(w,Ce),Ce)};return A[af]=!0,A[dc]=_,A},j={_p:r,$id:t,$onAction:of.bind(null,g),$patch:O,$reset:$,$subscribe(y,_={}){const A=of(p,y,_.detached,()=>R()),R=a.run(()=>ti(()=>r.state.value[t],w=>{(_.flush==="sync"?f:h)&&y({storeId:t,type:ri.direct,events:v},w)},Fn({},l,_)));return A},$dispose:F},Z=Pi(j);r._s.set(t,Z);const b=(r._a&&r._a.runWithContext||QE)(()=>r._e.run(()=>(a=pp()).run(()=>e({action:U}))));for(const y in b){const _=b[y];if(Fe(_)&&!XE(_)||In(_))i||(P&&JE(_)&&(Fe(_)?_.value=P[y]:Kc(_,P[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const A=U(_,y);b[y]=A,c.actions[y]=_}}return Fn(Z,b),Fn(Ee(Z),b),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:y=>{O(_=>{Fn(_,y)})}}),r._p.forEach(y=>{Fn(Z,a.run(()=>y({store:Z,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(Z.$state,P),h=!0,f=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function eT(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,c){const l=Dv();return a=a||(l?xt(Ag,null):null),a&&ya(a),a=wg,a._s.has(t)||(s?bg(t,e,r,a):ZE(t,r,a)),a._s.get(t)}return i.$id=t,i}function tT(t){const e=Ee(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=wt({get:()=>t[r],set(i){t[r]=i}}):(Fe(s)||In(s))&&(n[r]=nv(t,r))}return n}const nT="modulepreload",rT=function(t){return"/camper-rental/"+t},cf={},dr=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=l(n.map(h=>{if(h=rT(h),h in cf)return;cf[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":nT,f||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((v,P)=>{g.addEventListener("load",v),g.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Xr=typeof document<"u";function Sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sg(t.default)}const be=Object.assign;function pc(t,e){const n={};for(const r in e){const s=e[r];n[r]=zt(s)?s.map(t):t(s)}return n}const si=()=>{},zt=Array.isArray,Cg=/#/g,iT=/&/g,oT=/\//g,aT=/=/g,cT=/\?/g,Pg=/\+/g,lT=/%5B/g,uT=/%5D/g,kg=/%5E/g,hT=/%60/g,Ng=/%7B/g,fT=/%7C/g,Og=/%7D/g,dT=/%20/g;function zl(t){return encodeURI(""+t).replace(fT,"|").replace(lT,"[").replace(uT,"]")}function pT(t){return zl(t).replace(Ng,"{").replace(Og,"}").replace(kg,"^")}function Wc(t){return zl(t).replace(Pg,"%2B").replace(dT,"+").replace(Cg,"%23").replace(iT,"%26").replace(hT,"`").replace(Ng,"{").replace(Og,"}").replace(kg,"^")}function gT(t){return Wc(t).replace(aT,"%3D")}function mT(t){return zl(t).replace(Cg,"%23").replace(cT,"%3F")}function _T(t){return t==null?"":mT(t).replace(oT,"%2F")}function vi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yT=/\/$/,vT=t=>t.replace(yT,"");function gc(t,e,n="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=wT(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:vi(a)}}function ET(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function TT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ds(e.matched[r],n.matched[s])&&Dg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IT(t[n],e[n]))return!1;return!0}function IT(t,e){return zt(t)?uf(t,e):zt(e)?uf(e,t):t===e}function uf(t,e){return zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ei;(function(t){t.pop="pop",t.push="push"})(Ei||(Ei={}));var ii;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ii||(ii={}));function AT(t){if(!t)if(Xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vT(t)}const RT=/^[^#]+#/;function bT(t,e){return t.replace(RT,"#")+e}function ST(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const va=()=>({left:window.scrollX,top:window.scrollY});function CT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ST(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hf(t,e){return(history.state?history.state.position-e:-1)+t}const Gc=new Map;function PT(t,e){Gc.set(t,e)}function kT(t){const e=Gc.get(t);return Gc.delete(t),e}let NT=()=>location.protocol+"//"+location.host;function Vg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),lf(l,"")}return lf(n,t)+r+s}function OT(t,e,n,r){let s=[],i=[],a=null;const c=({state:g})=>{const v=Vg(t,location),P=n.value,N=e.value;let O=0;if(g){if(n.value=v,e.value=g,a&&a===P){a=null;return}O=N?g.position-N.position:0}else r(v);s.forEach($=>{$(n.value,P,{delta:O,type:Ei.pop,direction:O?O>0?ii.forward:ii.back:ii.unknown})})};function l(){a=n.value}function h(g){s.push(g);const v=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(v),v}function f(){const{history:g}=window;g.state&&g.replaceState(be({},g.state,{scroll:va()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function ff(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?va():null}}function DT(t){const{history:e,location:n}=window,r={value:Vg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:NT()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(v){console.error(v),n[f?"replace":"assign"](g)}}function a(l,h){const f=be({},e.state,ff(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=be({},s.value,e.state,{forward:l,scroll:va()});i(f.current,f,!0);const p=be({},ff(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function VT(t){t=AT(t);const e=DT(t),n=OT(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:bT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xT(t){return typeof t=="string"||t&&typeof t=="object"}function xg(t){return typeof t=="string"||typeof t=="symbol"}const Lg=Symbol("");var df;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(df||(df={}));function ps(t,e){return be(new Error,{type:t,[Lg]:!0},e)}function mn(t,e){return t instanceof Error&&Lg in t&&(e==null||!!(t.type&e))}const pf="[^/]+?",LT={sensitive:!1,strict:!1,start:!0,end:!0},MT=/[.+*?^${}()[\]/\\]/g;function FT(t,e){const n=be({},LT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(MT,"\\$&"),v+=40;else if(g.type===1){const{value:P,repeatable:N,optional:O,regexp:$}=g;i.push({name:P,repeatable:N,optional:O});const F=$||pf;if(F!==pf){v+=10;try{new RegExp(`(${F})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${P}" (${F}): `+j.message)}}let U=N?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(U=O&&h.length<2?`(?:/${U})`:"/"+U),O&&(U+="?"),s+=U,v+=20,O&&(v+=-8),N&&(v+=-20),F===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const v=f[g]||"",P=i[g-1];p[P.name]=v&&P.repeatable?v.split("/"):v}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of g)if(v.type===0)f+=v.value;else if(v.type===1){const{value:P,repeatable:N,optional:O}=v,$=P in h?h[P]:"";if(zt($)&&!N)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const F=zt($)?$.join("/"):$;if(!F)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);f+=F}}return f||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function UT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Mg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=UT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(gf(r))return 1;if(gf(s))return-1}return s.length-r.length}function gf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const BT={type:0,value:""},jT=/[a-zA-Z0-9_]/;function $T(t){if(!t)return[[]];if(t==="/")return[[BT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:jT.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function HT(t,e,n){const r=FT($T(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function qT(t,e){const n=[],r=new Map;e=vf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,v){const P=!v,N=_f(p);N.aliasOf=v&&v.record;const O=vf(e,p),$=[N];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of j)$.push(_f(be({},N,{components:v?v.record.components:N.components,path:Z,aliasOf:v?v.record:N})))}let F,U;for(const j of $){const{path:Z}=j;if(g&&Z[0]!=="/"){const oe=g.record.path,b=oe[oe.length-1]==="/"?"":"/";j.path=g.record.path+(Z&&b+Z)}if(F=HT(j,g,O),v?v.alias.push(F):(U=U||F,U!==F&&U.alias.push(F),P&&p.name&&!yf(F)&&a(p.name)),Fg(F)&&l(F),N.children){const oe=N.children;for(let b=0;b<oe.length;b++)i(oe[b],F,v&&v.children[b])}v=v||F}return U?()=>{a(U)}:si}function a(p){if(xg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function c(){return n}function l(p){const g=WT(p,n);n.splice(g,0,p),p.record.name&&!yf(p)&&r.set(p.record.name,p)}function h(p,g){let v,P={},N,O;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw ps(1,{location:p});O=v.record.name,P=be(mf(g.params,v.keys.filter(U=>!U.optional).concat(v.parent?v.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),p.params&&mf(p.params,v.keys.map(U=>U.name))),N=v.stringify(P)}else if(p.path!=null)N=p.path,v=n.find(U=>U.re.test(N)),v&&(P=v.parse(N),O=v.record.name);else{if(v=g.name?r.get(g.name):n.find(U=>U.re.test(g.path)),!v)throw ps(1,{location:p,currentLocation:g});O=v.record.name,P=be({},g.params,p.params),N=v.stringify(P)}const $=[];let F=v;for(;F;)$.unshift(F.record),F=F.parent;return{name:O,path:N,params:P,matched:$,meta:KT($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _f(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:zT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function zT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KT(t){return t.reduce((e,n)=>be(e,n.meta),{})}function vf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function WT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Mg(t,e[i])<0?r=i:n=i+1}const s=GT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function GT(t){let e=t;for(;e=e.parent;)if(Fg(e)&&Mg(t,e)===0)return e}function Fg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function QT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Pg," "),a=i.indexOf("="),c=vi(a<0?i:i.slice(0,a)),l=a<0?null:vi(i.slice(a+1));if(c in e){let h=e[c];zt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Ef(t){let e="";for(let n in t){const r=t[n];if(n=gT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(zt(r)?r.map(i=>i&&Wc(i)):[r&&Wc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const JT=Symbol(""),Tf=Symbol(""),Ea=Symbol(""),Kl=Symbol(""),Qc=Symbol("");function js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $n(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(ps(4,{from:n,to:e})):g instanceof Error?l(g):xT(g)?l(ps(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function mc(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const c in a.components){let l=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(Sg(l)){const f=(l.__vccOpts||l)[e];f&&i.push($n(f,n,r,a,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const p=sT(f)?f.default:f;a.mods[c]=f,a.components[c]=p;const v=(p.__vccOpts||p)[e];return v&&$n(v,n,r,a,c,s)()}))}}return i}function If(t){const e=xt(Ea),n=xt(Kl),r=wt(()=>{const l=Cr(t.to);return e.resolve(l)}),s=wt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ds.bind(null,f));if(g>-1)return g;const v=wf(l[h-2]);return h>1&&wf(f)===v&&p[p.length-1].path!==v?p.findIndex(ds.bind(null,l[h-2])):g}),i=wt(()=>s.value>-1&&nI(n.params,r.value.params)),a=wt(()=>s.value>-1&&s.value===n.matched.length-1&&Dg(n.params,r.value.params));function c(l={}){if(tI(l)){const h=e[Cr(t.replace)?"replace":"push"](Cr(t.to)).catch(si);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:wt(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}function XT(t){return t.length===1?t[0]:t}const ZT=Oi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:If,setup(t,{slots:e}){const n=Pi(If(t)),{options:r}=xt(Ea),s=wt(()=>({[Af(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Af(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&XT(e.default(n));return t.custom?i:ql("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),eI=ZT;function tI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!zt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function wf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Af=(t,e,n)=>t??e??n,rI=Oi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xt(Qc),s=wt(()=>t.route||r.value),i=xt(Tf,0),a=wt(()=>{let h=Cr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=wt(()=>s.value.matched[a.value]);Eo(Tf,wt(()=>a.value+1)),Eo(JT,c),Eo(Qc,s);const l=ki();return ti(()=>[l.value,c.value,t.name],([h,f,p],[g,v,P])=>{f&&(f.instances[p]=h,v&&v!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),h&&f&&(!v||!ds(f,v)||!g)&&(f.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return Rf(n.default,{Component:g,route:h});const v=p.props[f],P=v?v===!0?h.params:typeof v=="function"?v(h):v:null,O=ql(g,be({},P,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Rf(n.default,{Component:O,route:h})||O}}});function Rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sI=rI;function iI(t){const e=qT(t.routes,t),n=t.parseQuery||QT,r=t.stringifyQuery||Ef,s=t.history,i=js(),a=js(),c=js(),l=Yy(Ln);let h=Ln;Xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=pc.bind(null,D=>""+D),p=pc.bind(null,_T),g=pc.bind(null,vi);function v(D,Y){let Q,X;return xg(D)?(Q=e.getRecordMatcher(D),X=Y):X=D,e.addRoute(X,Q)}function P(D){const Y=e.getRecordMatcher(D);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(D=>D.record)}function O(D){return!!e.getRecordMatcher(D)}function $(D,Y){if(Y=be({},Y||l.value),typeof D=="string"){const S=gc(n,D,Y.path),V=e.resolve({path:S.path},Y),M=s.createHref(S.fullPath);return be(S,V,{params:g(V.params),hash:vi(S.hash),redirectedFrom:void 0,href:M})}let Q;if(D.path!=null)Q=be({},D,{path:gc(n,D.path,Y.path).path});else{const S=be({},D.params);for(const V in S)S[V]==null&&delete S[V];Q=be({},D,{params:p(S)}),Y.params=p(Y.params)}const X=e.resolve(Q,Y),we=D.hash||"";X.params=f(g(X.params));const T=ET(r,be({},D,{hash:pT(we),path:X.path})),I=s.createHref(T);return be({fullPath:T,hash:we,query:r===Ef?YT(D.query):D.query||{}},X,{redirectedFrom:void 0,href:I})}function F(D){return typeof D=="string"?gc(n,D,l.value.path):be({},D)}function U(D,Y){if(h!==D)return ps(8,{from:Y,to:D})}function j(D){return b(D)}function Z(D){return j(be(F(D),{replace:!0}))}function oe(D){const Y=D.matched[D.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let X=typeof Q=="function"?Q(D):Q;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=F(X):{path:X},X.params={}),be({query:D.query,hash:D.hash,params:X.path!=null?{}:D.params},X)}}function b(D,Y){const Q=h=$(D),X=l.value,we=D.state,T=D.force,I=D.replace===!0,S=oe(Q);if(S)return b(be(F(S),{state:typeof S=="object"?be({},we,S.state):we,force:T,replace:I}),Y||Q);const V=Q;V.redirectedFrom=Y;let M;return!T&&TT(r,X,Q)&&(M=ps(16,{to:V,from:X}),kt(X,X,!0,!1)),(M?Promise.resolve(M):A(V,X)).catch(x=>mn(x)?mn(x,2)?x:Mt(x):pe(x,V,X)).then(x=>{if(x){if(mn(x,2))return b(be({replace:I},F(x.to),{state:typeof x.to=="object"?be({},we,x.to.state):we,force:T}),Y||V)}else x=w(V,X,!0,I,we);return R(V,X,x),x})}function y(D,Y){const Q=U(D,Y);return Q?Promise.reject(Q):Promise.resolve()}function _(D){const Y=kn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(D):D()}function A(D,Y){let Q;const[X,we,T]=oI(D,Y);Q=mc(X.reverse(),"beforeRouteLeave",D,Y);for(const S of X)S.leaveGuards.forEach(V=>{Q.push($n(V,D,Y))});const I=y.bind(null,D,Y);return Q.push(I),Tt(Q).then(()=>{Q=[];for(const S of i.list())Q.push($n(S,D,Y));return Q.push(I),Tt(Q)}).then(()=>{Q=mc(we,"beforeRouteUpdate",D,Y);for(const S of we)S.updateGuards.forEach(V=>{Q.push($n(V,D,Y))});return Q.push(I),Tt(Q)}).then(()=>{Q=[];for(const S of T)if(S.beforeEnter)if(zt(S.beforeEnter))for(const V of S.beforeEnter)Q.push($n(V,D,Y));else Q.push($n(S.beforeEnter,D,Y));return Q.push(I),Tt(Q)}).then(()=>(D.matched.forEach(S=>S.enterCallbacks={}),Q=mc(T,"beforeRouteEnter",D,Y,_),Q.push(I),Tt(Q))).then(()=>{Q=[];for(const S of a.list())Q.push($n(S,D,Y));return Q.push(I),Tt(Q)}).catch(S=>mn(S,8)?S:Promise.reject(S))}function R(D,Y,Q){c.list().forEach(X=>_(()=>X(D,Y,Q)))}function w(D,Y,Q,X,we){const T=U(D,Y);if(T)return T;const I=Y===Ln,S=Xr?history.state:{};Q&&(X||I?s.replace(D.fullPath,be({scroll:I&&S&&S.scroll},we)):s.push(D.fullPath,we)),l.value=D,kt(D,Y,Q,I),Mt()}let E;function Re(){E||(E=s.listen((D,Y,Q)=>{if(!Wt.listening)return;const X=$(D),we=oe(X);if(we){b(be(we,{replace:!0,force:!0}),X).catch(si);return}h=X;const T=l.value;Xr&&PT(hf(T.fullPath,Q.delta),va()),A(X,T).catch(I=>mn(I,12)?I:mn(I,2)?(b(be(F(I.to),{force:!0}),X).then(S=>{mn(S,20)&&!Q.delta&&Q.type===Ei.pop&&s.go(-1,!1)}).catch(si),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),pe(I,X,T))).then(I=>{I=I||w(X,T,!1),I&&(Q.delta&&!mn(I,8)?s.go(-Q.delta,!1):Q.type===Ei.pop&&mn(I,20)&&s.go(-1,!1)),R(X,T,I)}).catch(si)}))}let $e=js(),Ce=js(),le;function pe(D,Y,Q){Mt(D);const X=Ce.list();return X.length?X.forEach(we=>we(D,Y,Q)):console.error(D),Promise.reject(D)}function At(){return le&&l.value!==Ln?Promise.resolve():new Promise((D,Y)=>{$e.add([D,Y])})}function Mt(D){return le||(le=!D,Re(),$e.list().forEach(([Y,Q])=>D?Q(D):Y()),$e.reset()),D}function kt(D,Y,Q,X){const{scrollBehavior:we}=t;if(!Xr||!we)return Promise.resolve();const T=!Q&&kT(hf(D.fullPath,0))||(X||!Q)&&history.state&&history.state.scroll||null;return Ll().then(()=>we(D,Y,T)).then(I=>I&&CT(I)).catch(I=>pe(I,D,Y))}const Le=D=>s.go(D);let Me;const kn=new Set,Wt={currentRoute:l,listening:!0,addRoute:v,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:N,resolve:$,options:t,push:j,replace:Z,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:Ce.add,isReady:At,install(D){const Y=this;D.component("RouterLink",eI),D.component("RouterView",sI),D.config.globalProperties.$router=Y,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Cr(l)}),Xr&&!Me&&l.value===Ln&&(Me=!0,j(s.location).catch(we=>{}));const Q={};for(const we in Ln)Object.defineProperty(Q,we,{get:()=>l.value[we],enumerable:!0});D.provide(Ea,Y),D.provide(Kl,kp(Q)),D.provide(Qc,l);const X=D.unmount;kn.add(D),D.unmount=function(){kn.delete(D),kn.size<1&&(h=Ln,E&&E(),E=null,l.value=Ln,Me=!1,le=!1),X()}}};function Tt(D){return D.reduce((Y,Q)=>Y.then(()=>_(Q)),Promise.resolve())}return Wt}function oI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(h=>ds(h,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>ds(h,l))||s.push(l))}return[n,r,s]}function aI(){return xt(Ea)}function lP(t){return xt(Kl)}const cI=()=>dr(()=>import("./Home-D1YXCw03.js"),__vite__mapDeps([0,1,2])),lI=()=>dr(()=>import("./CamperDetails-CGLBRNnN.js"),__vite__mapDeps([3,1,4,5])),uI=()=>dr(()=>import("./Login-B7vW4ZnT.js"),__vite__mapDeps([6,7])),hI=()=>dr(()=>import("./Admin-D95Cq0_r.js"),__vite__mapDeps([8,1,9])),fI=()=>dr(()=>import("./Reservations-CNjahcde.js"),__vite__mapDeps([10,4,1,11])),dI=()=>dr(()=>import("./NotFound-CTtztJht.js"),__vite__mapDeps([12,13])),pI=()=>dr(()=>import("./PrivacyPolicy-lr004cJM.js"),__vite__mapDeps([14,15])),gI=()=>dr(()=>import("./CookiePolicy-CDePfXxQ.js"),__vite__mapDeps([16,17])),mI=[{path:"/",redirect:"/inicio"},{path:"/inicio",name:"Home",component:cI,meta:{title:"Inicio - Alquiler de Campers"}},{path:"/vehiculo/:id",name:"CamperDetails",component:lI,meta:{title:"Detalles del Camper"}},{path:"/acceso",name:"Login",component:uI,meta:{title:"Iniciar Sesión"}},{path:"/administracion",name:"Admin",component:hI,meta:{title:"Panel de Administración"}},{path:"/mis-reservas",name:"Reservations",component:fI,meta:{title:"Mis Reservas"}},{path:"/politica-privacidad",name:"PrivacyPolicy",component:pI,meta:{title:"Política de Privacidad - TuCamper.com"}},{path:"/politica-cookies",name:"CookiePolicy",component:gI,meta:{title:"Política de Cookies - TuCamper.com"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:dI,meta:{title:"Página no encontrada"}}],Ug=iI({history:VT("/camper-rental/"),routes:mI,scrollBehavior(){return{top:0}}});Ug.beforeEach((t,e,n)=>{document.title=t.meta.title||"Alquiler de Campers",n()});const _I=()=>{};var bf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,v=h&63;l||(v=64,a||(g=64)),r.push(n[f],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new vI;const g=i<<2|c>>4;if(r.push(g),h!==64){const v=c<<4&240|h>>2;if(r.push(v),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EI=function(t){const e=Bg(t);return jg.encodeByteArray(e,!0)},$o=function(t){return EI(t).replace(/\./g,"")},$g=function(t){try{return jg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=()=>TI().__FIREBASE_DEFAULTS__,wI=()=>{if(typeof process>"u"||typeof bf>"u")return;const t=bf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$g(t[1]);return e&&JSON.parse(e)},Ta=()=>{try{return _I()||II()||wI()||AI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hg=t=>Ta()?.emulatorHosts?.[t],qg=t=>{const e=Hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zg=()=>Ta()?.config,Kg=t=>Ta()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wl(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[$o(JSON.stringify(n)),$o(JSON.stringify(a)),""].join(".")}const oi={};function bI(){const t={prod:[],emulator:[]};for(const e of Object.keys(oi))oi[e]?t.emulator.push(e):t.prod.push(e);return t}function SI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Sf=!1;function Gl(t,e){if(typeof window>"u"||typeof document>"u"||!Ur(window.location.host)||oi[t]===e||oi[t]||Sf)return;oi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=bI().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,v){g.setAttribute("width","24"),g.setAttribute("id",v),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Sf=!0,a()},g}function f(g,v){g.setAttribute("id",v),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=SI(r),v=n("text"),P=document.getElementById(v)||document.createElement("span"),N=n("learnmore"),O=document.getElementById(N)||document.createElement("a"),$=n("preprendIcon"),F=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const U=g.element;c(U),f(O,N);const j=h();l(F,$),U.append(F,P,O,j),document.body.appendChild(U)}i?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function PI(){const t=Ta()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DI(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VI(){return!PI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xI(){try{return typeof indexedDB=="object"}catch{return!1}}function LI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MI,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?FI(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new un(s,c,r)}}function FI(t,e){return t.replace(UI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UI=/\{\$([^}]+)}/g;function BI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Cf(i)&&Cf(a)){if(!Vr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Cf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jI(t,e){const n=new $I(t,e);return n.subscribe.bind(n)}class $I{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_c),s.error===void 0&&(s.error=_c),s.complete===void 0&&(s.complete=_c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _c(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){return t&&t._delegate?t._delegate:t}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KI(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zI(t){return t===Ar?void 0:t}function KI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const GI={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},QI=ge.INFO,YI={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},JI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ql{constructor(e){this.name=e,this._logLevel=QI,this._logHandler=JI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const XI=(t,e)=>e.some(n=>t instanceof n);let Pf,kf;function ZI(){return Pf||(Pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ew(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,Yc=new WeakMap,Qg=new WeakMap,yc=new WeakMap,Yl=new WeakMap;function tw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Yn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Gg.set(n,t)}).catch(()=>{}),Yl.set(e,t),e}function nw(t){if(Yc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Yc.set(t,e)}let Jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rw(t){Jc=t(Jc)}function sw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vc(this),e,...n);return Qg.set(r,e.sort?e.sort():[e]),Yn(r)}:ew().includes(t)?function(...e){return t.apply(vc(this),e),Yn(Gg.get(this))}:function(...e){return Yn(t.apply(vc(this),e))}}function iw(t){return typeof t=="function"?sw(t):(t instanceof IDBTransaction&&nw(t),XI(t,ZI())?new Proxy(t,Jc):t)}function Yn(t){if(t instanceof IDBRequest)return tw(t);if(yc.has(t))return yc.get(t);const e=iw(t);return e!==t&&(yc.set(t,e),Yl.set(e,t)),e}const vc=t=>Yl.get(t);function ow(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Yn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Yn(a.result),l.oldVersion,l.newVersion,Yn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const aw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],Ec=new Map;function Nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||aw.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Ec.set(e,i),i}rw(t=>({...t,get:(e,n,r)=>Nf(e,n)||t.get(e,n,r),has:(e,n)=>!!Nf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uw(t){return t.getComponent()?.type==="VERSION"}const Xc="@firebase/app",Of="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Ql("@firebase/app"),hw="@firebase/app-compat",fw="@firebase/analytics-compat",dw="@firebase/analytics",pw="@firebase/app-check-compat",gw="@firebase/app-check",mw="@firebase/auth",_w="@firebase/auth-compat",yw="@firebase/database",vw="@firebase/data-connect",Ew="@firebase/database-compat",Tw="@firebase/functions",Iw="@firebase/functions-compat",ww="@firebase/installations",Aw="@firebase/installations-compat",Rw="@firebase/messaging",bw="@firebase/messaging-compat",Sw="@firebase/performance",Cw="@firebase/performance-compat",Pw="@firebase/remote-config",kw="@firebase/remote-config-compat",Nw="@firebase/storage",Ow="@firebase/storage-compat",Dw="@firebase/firestore",Vw="@firebase/ai",xw="@firebase/firestore-compat",Lw="firebase",Mw="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="[DEFAULT]",Fw={[Xc]:"fire-core",[hw]:"fire-core-compat",[dw]:"fire-analytics",[fw]:"fire-analytics-compat",[gw]:"fire-app-check",[pw]:"fire-app-check-compat",[mw]:"fire-auth",[_w]:"fire-auth-compat",[yw]:"fire-rtdb",[vw]:"fire-data-connect",[Ew]:"fire-rtdb-compat",[Tw]:"fire-fn",[Iw]:"fire-fn-compat",[ww]:"fire-iid",[Aw]:"fire-iid-compat",[Rw]:"fire-fcm",[bw]:"fire-fcm-compat",[Sw]:"fire-perf",[Cw]:"fire-perf-compat",[Pw]:"fire-rc",[kw]:"fire-rc-compat",[Nw]:"fire-gcs",[Ow]:"fire-gcs-compat",[Dw]:"fire-fst",[xw]:"fire-fst-compat",[Vw]:"fire-vertex","fire-js":"fire-js",[Lw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Map,Uw=new Map,el=new Map;function Df(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(el.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;el.set(e,t);for(const n of Ho.values())Df(n,t);for(const n of Uw.values())Df(n,t);return!0}function Ia(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Vi("app","Firebase",Bw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=Mw;function Yg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Zc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});if(n||(n=zg()),!n)throw Jn.create("no-options");const i=Ho.get(s);if(i){if(Vr(n,i.options)&&Vr(r,i.config))return i;throw Jn.create("duplicate-app",{appName:s})}const a=new WI(s);for(const l of el.values())a.addComponent(l);const c=new jw(n,r,a);return Ho.set(s,c),c}function Jl(t=Zc){const e=Ho.get(t);if(!e&&t===Zc&&zg())return Yg();if(!e)throw Jn.create("no-app",{appName:t});return e}function nn(t,e,n){let r=Fw[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(a.join(" "));return}xr(new ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="firebase-heartbeat-database",Hw=1,Ti="firebase-heartbeat-store";let Tc=null;function Jg(){return Tc||(Tc=ow($w,Hw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),Tc}async function qw(t){try{const n=(await Jg()).transaction(Ti),r=await n.objectStore(Ti).get(Xg(t));return await n.done,r}catch(e){if(e instanceof un)Rn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e?.message});Rn.warn(n.message)}}}async function Vf(t,e){try{const r=(await Jg()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,Xg(t)),await r.done}catch(n){if(n instanceof un)Rn.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n?.message});Rn.warn(r.message)}}}function Xg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=1024,Kw=30;class Ww{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Kw){const s=Yw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Rn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xf(),{heartbeatsToSend:n,unsentEntries:r}=Gw(this._heartbeatsCache.heartbeats),s=$o(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Rn.warn(e),""}}}function xf(){return new Date().toISOString().substring(0,10)}function Gw(t,e=zw){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Lf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xI()?LI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qw(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lf(t){return $o(JSON.stringify({version:2,heartbeats:t})).length}function Yw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t){xr(new ir("platform-logger",e=>new lw(e),"PRIVATE")),xr(new ir("heartbeat",e=>new Ww(e),"PRIVATE")),nn(Xc,Of,t),nn(Xc,Of,"esm2020"),nn("fire-js","")}Jw("");var Xw="firebase",Zw="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(Xw,Zw,"app");var Mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xn,Zg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(A,R,w){for(var E=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)E[Re-2]=arguments[Re];return y.prototype[R].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)A[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],R=b.g[2];var w=b.g[3],E=y+(w^_&(R^w))+A[0]+3614090360&4294967295;y=_+(E<<7&4294967295|E>>>25),E=w+(R^y&(_^R))+A[1]+3905402710&4294967295,w=y+(E<<12&4294967295|E>>>20),E=R+(_^w&(y^_))+A[2]+606105819&4294967295,R=w+(E<<17&4294967295|E>>>15),E=_+(y^R&(w^y))+A[3]+3250441966&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(w^_&(R^w))+A[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=w+(R^y&(_^R))+A[5]+1200080426&4294967295,w=y+(E<<12&4294967295|E>>>20),E=R+(_^w&(y^_))+A[6]+2821735955&4294967295,R=w+(E<<17&4294967295|E>>>15),E=_+(y^R&(w^y))+A[7]+4249261313&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(w^_&(R^w))+A[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=w+(R^y&(_^R))+A[9]+2336552879&4294967295,w=y+(E<<12&4294967295|E>>>20),E=R+(_^w&(y^_))+A[10]+4294925233&4294967295,R=w+(E<<17&4294967295|E>>>15),E=_+(y^R&(w^y))+A[11]+2304563134&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(w^_&(R^w))+A[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=w+(R^y&(_^R))+A[13]+4254626195&4294967295,w=y+(E<<12&4294967295|E>>>20),E=R+(_^w&(y^_))+A[14]+2792965006&4294967295,R=w+(E<<17&4294967295|E>>>15),E=_+(y^R&(w^y))+A[15]+1236535329&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(R^w&(_^R))+A[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=w+(_^R&(y^_))+A[6]+3225465664&4294967295,w=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(w^y))+A[11]+643717713&4294967295,R=w+(E<<14&4294967295|E>>>18),E=_+(w^y&(R^w))+A[0]+3921069994&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(R^w&(_^R))+A[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=w+(_^R&(y^_))+A[10]+38016083&4294967295,w=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(w^y))+A[15]+3634488961&4294967295,R=w+(E<<14&4294967295|E>>>18),E=_+(w^y&(R^w))+A[4]+3889429448&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(R^w&(_^R))+A[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=w+(_^R&(y^_))+A[14]+3275163606&4294967295,w=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(w^y))+A[3]+4107603335&4294967295,R=w+(E<<14&4294967295|E>>>18),E=_+(w^y&(R^w))+A[8]+1163531501&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(R^w&(_^R))+A[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=w+(_^R&(y^_))+A[2]+4243563512&4294967295,w=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(w^y))+A[7]+1735328473&4294967295,R=w+(E<<14&4294967295|E>>>18),E=_+(w^y&(R^w))+A[12]+2368359562&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(_^R^w)+A[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=w+(y^_^R)+A[8]+2272392833&4294967295,w=y+(E<<11&4294967295|E>>>21),E=R+(w^y^_)+A[11]+1839030562&4294967295,R=w+(E<<16&4294967295|E>>>16),E=_+(R^w^y)+A[14]+4259657740&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(_^R^w)+A[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=w+(y^_^R)+A[4]+1272893353&4294967295,w=y+(E<<11&4294967295|E>>>21),E=R+(w^y^_)+A[7]+4139469664&4294967295,R=w+(E<<16&4294967295|E>>>16),E=_+(R^w^y)+A[10]+3200236656&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(_^R^w)+A[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=w+(y^_^R)+A[0]+3936430074&4294967295,w=y+(E<<11&4294967295|E>>>21),E=R+(w^y^_)+A[3]+3572445317&4294967295,R=w+(E<<16&4294967295|E>>>16),E=_+(R^w^y)+A[6]+76029189&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(_^R^w)+A[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=w+(y^_^R)+A[12]+3873151461&4294967295,w=y+(E<<11&4294967295|E>>>21),E=R+(w^y^_)+A[15]+530742520&4294967295,R=w+(E<<16&4294967295|E>>>16),E=_+(R^w^y)+A[2]+3299628645&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(R^(_|~w))+A[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=w+(_^(y|~R))+A[7]+1126891415&4294967295,w=y+(E<<10&4294967295|E>>>22),E=R+(y^(w|~_))+A[14]+2878612391&4294967295,R=w+(E<<15&4294967295|E>>>17),E=_+(w^(R|~y))+A[5]+4237533241&4294967295,_=R+(E<<21&4294967295|E>>>11),E=y+(R^(_|~w))+A[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=w+(_^(y|~R))+A[3]+2399980690&4294967295,w=y+(E<<10&4294967295|E>>>22),E=R+(y^(w|~_))+A[10]+4293915773&4294967295,R=w+(E<<15&4294967295|E>>>17),E=_+(w^(R|~y))+A[1]+2240044497&4294967295,_=R+(E<<21&4294967295|E>>>11),E=y+(R^(_|~w))+A[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=w+(_^(y|~R))+A[15]+4264355552&4294967295,w=y+(E<<10&4294967295|E>>>22),E=R+(y^(w|~_))+A[6]+2734768916&4294967295,R=w+(E<<15&4294967295|E>>>17),E=_+(w^(R|~y))+A[13]+1309151649&4294967295,_=R+(E<<21&4294967295|E>>>11),E=y+(R^(_|~w))+A[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=w+(_^(y|~R))+A[11]+3174756917&4294967295,w=y+(E<<10&4294967295|E>>>22),E=R+(y^(w|~_))+A[2]+718787259&4294967295,R=w+(E<<15&4294967295|E>>>17),E=_+(w^(R|~y))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+w&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,A=this.B,R=this.h,w=0;w<y;){if(R==0)for(;w<=_;)s(this,b,w),w+=this.blockSize;if(typeof b=="string"){for(;w<y;)if(A[R++]=b.charCodeAt(w++),R==this.blockSize){s(this,A),R=0;break}}else for(;w<y;)if(A[R++]=b[w++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var A=0;32>A;A+=8)b[_++]=this.g[y]>>>A&255;return b};function i(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function a(b,y){this.h=y;for(var _=[],A=!0,R=b.length-1;0<=R;R--){var w=b[R]|0;A&&w==y||(_[R]=w,A=!1)}this.g=_}var c={};function l(b){return-128<=b&&128>b?i(b,function(y){return new a([y|0],0>y?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return O(h(-b));for(var y=[],_=1,A=0;b>=_;A++)y[A]=b/_|0,_*=4294967296;return new a(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return O(f(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),A=p,R=0;R<b.length;R+=8){var w=Math.min(8,b.length-R),E=parseInt(b.substring(R,R+w),y);8>w?(w=h(Math.pow(y,w)),A=A.j(w).add(h(E))):(A=A.j(_),A=A.add(h(E)))}return A}var p=l(0),g=l(1),v=l(16777216);t=a.prototype,t.m=function(){if(N(this))return-O(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var A=this.i(_);b+=(0<=A?A:4294967296+A)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(N(this))return"-"+O(this).toString(b);for(var y=h(Math.pow(b,6)),_=this,A="";;){var R=j(_,y).g;_=$(_,R.j(y));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=R,P(_))return w+A;for(;6>w.length;)w="0"+w;A=w+A}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function N(b){return b.h==-1}t.l=function(b){return b=$(this,b),N(b)?-1:P(b)?0:1};function O(b){for(var y=b.g.length,_=[],A=0;A<y;A++)_[A]=~b.g[A];return new a(_,~b.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],A=0,R=0;R<=y;R++){var w=A+(this.i(R)&65535)+(b.i(R)&65535),E=(w>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);A=E>>>16,w&=65535,E&=65535,_[R]=E<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(b,y){return b.add(O(y))}t.j=function(b){if(P(this)||P(b))return p;if(N(this))return N(b)?O(this).j(O(b)):O(O(this).j(b));if(N(b))return O(this.j(O(b)));if(0>this.l(v)&&0>b.l(v))return h(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],A=0;A<2*y;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<b.g.length;R++){var w=this.i(A)>>>16,E=this.i(A)&65535,Re=b.i(R)>>>16,$e=b.i(R)&65535;_[2*A+2*R]+=E*$e,F(_,2*A+2*R),_[2*A+2*R+1]+=w*$e,F(_,2*A+2*R+1),_[2*A+2*R+1]+=E*Re,F(_,2*A+2*R+1),_[2*A+2*R+2]+=w*Re,F(_,2*A+2*R+2)}for(A=0;A<y;A++)_[A]=_[2*A+1]<<16|_[2*A];for(A=y;A<2*y;A++)_[A]=0;return new a(_,0)};function F(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function U(b,y){this.g=b,this.h=y}function j(b,y){if(P(y))throw Error("division by zero");if(P(b))return new U(p,p);if(N(b))return y=j(O(b),y),new U(O(y.g),O(y.h));if(N(y))return y=j(b,O(y)),new U(O(y.g),y.h);if(30<b.g.length){if(N(b)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,A=y;0>=A.l(b);)_=Z(_),A=Z(A);var R=oe(_,1),w=oe(A,1);for(A=oe(A,2),_=oe(_,2);!P(A);){var E=w.add(A);0>=E.l(b)&&(R=R.add(_),w=E),A=oe(A,1),_=oe(_,1)}return y=$(b,R.j(y)),new U(R,y)}for(R=p;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),w=h(_),E=w.j(y);N(E)||0<E.l(b);)_-=A,w=h(_),E=w.j(y);P(w)&&(w=g),R=R.add(w),b=$(b,E)}return new U(R,b)}t.A=function(b){return j(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],A=0;A<y;A++)_[A]=this.i(A)&b.i(A);return new a(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],A=0;A<y;A++)_[A]=this.i(A)|b.i(A);return new a(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],A=0;A<y;A++)_[A]=this.i(A)^b.i(A);return new a(_,this.h^b.h)};function Z(b){for(var y=b.g.length+1,_=[],A=0;A<y;A++)_[A]=b.i(A)<<1|b.i(A-1)>>>31;return new a(_,b.h)}function oe(b,y){var _=y>>5;y%=32;for(var A=b.g.length-_,R=[],w=0;w<A;w++)R[w]=0<y?b.i(w+_)>>>y|b.i(w+_+1)<<32-y:b.i(w+_);return new a(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Xn=a}).apply(typeof Mf<"u"?Mf:typeof self<"u"?self:typeof window<"u"?window:{});var ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var em,zs,tm,Ao,tl,nm,rm,sm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ho=="object"&&ho];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var C=o[m];if(!(C in d))break e;d=d[C]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,m=!1,C={next:function(){if(!m&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function P(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,C,k){for(var K=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)K[Pe-2]=arguments[Pe];return u.prototype[C].apply(m,K)}}function N(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function O(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const C=o.length||0,k=m.length||0;o.length=C+k;for(let K=0;K<k;K++)o[C+K]=m[K]}else o.push(m)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function j(o){return j[" "](o),o}j[" "]=function(){};var Z=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function oe(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function b(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)o[d]=m[d];for(let k=0;k<_.length;k++)d=_[k],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function R(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function w(o){c.setTimeout(()=>{throw o},0)}function E(){var o=At;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Re{constructor(){this.h=this.g=null}add(u,d){const m=$e.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var $e=new $(()=>new Ce,o=>o.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,pe=!1,At=new Re,Mt=()=>{const o=c.Promise.resolve(void 0);le=()=>{o.then(kt)}};var kt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){w(d)}var u=$e;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var kn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function Wt(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Z){e:{try{j(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Tt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wt.aa.h.call(this)}}P(Wt,Me);var Tt={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(o,u,d,m,C){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=C,this.key=++Y,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function we(o){this.src=o,this.g={},this.h=0}we.prototype.add=function(o,u,d,m,C){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var K=I(o,u,m,C);return-1<K?(u=o[K],d||(u.fa=!1)):(u=new Q(u,this.src,k,!!m,C),u.fa=d,o.push(u)),u};function T(o,u){var d=u.type;if(d in o.g){var m=o.g[d],C=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=C)&&Array.prototype.splice.call(m,C,1),k&&(X(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function I(o,u,d,m){for(var C=0;C<o.length;++C){var k=o[C];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),V={};function M(o,u,d,m,C){if(Array.isArray(u)){for(var k=0;k<u.length;k++)M(o,u[k],d,m,C);return null}return d=ce(d),o&&o[D]?o.K(u,d,h(m)?!!m.capture:!1,C):x(o,u,d,!1,m,C)}function x(o,u,d,m,C,k){if(!u)throw Error("Invalid event type");var K=h(C)?!!C.capture:!!C,Pe=W(o);if(Pe||(o[S]=Pe=new we(o)),d=Pe.add(u,d,m,K,k),d.proxy)return d;if(m=G(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)kn||(C=K),C===void 0&&(C=!1),o.addEventListener(u.toString(),m,C);else if(o.attachEvent)o.attachEvent(B(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function o(d){return u.call(o.src,o.listener,d)}const u=ne;return o}function z(o,u,d,m,C){if(Array.isArray(u))for(var k=0;k<u.length;k++)z(o,u[k],d,m,C);else m=h(m)?!!m.capture:!!m,d=ce(d),o&&o[D]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=I(k,d,m,C),-1<d&&(X(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=W(o))&&(u=o.g[u.toString()],o=-1,u&&(o=I(u,d,m,C)),(d=-1<o?u[o]:null)&&q(d))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[D])T(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(B(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=W(u))?(T(d,o),d.h==0&&(d.src=null,u[S]=null)):X(o)}}}function B(o){return o in V?V[o]:V[o]="on"+o}function ne(o,u){if(o.da)o=!0;else{u=new Wt(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&q(o),o=d.call(m,u)}return o}function W(o){return o=o[S],o instanceof we?o:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(o){return typeof o=="function"?o:(o[te]||(o[te]=function(u){return o.handleEvent(u)}),o[te])}function se(){Le.call(this),this.i=new we(this),this.M=this,this.F=null}P(se,Le),se.prototype[D]=!0,se.prototype.removeEventListener=function(o,u,d,m){z(this,o,u,d,m)};function de(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var C=u;u=new Me(m,o),A(u,C)}if(C=!0,d)for(var k=d.length-1;0<=k;k--){var K=u.g=d[k];C=ye(K,m,!0,u)&&C}if(K=u.g=o,C=ye(K,m,!0,u)&&C,C=ye(K,m,!1,u)&&C,d)for(k=0;k<d.length;k++)K=u.g=d[k],C=ye(K,m,!1,u)&&C}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)X(d[m]);delete o.g[u],o.h--}}this.F=null},se.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},se.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function ye(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,k=0;k<u.length;++k){var K=u[k];if(K&&!K.da&&K.capture==d){var Pe=K.listener,tt=K.ha||K.src;K.fa&&T(o.i,K),C=Pe.call(tt,m)!==!1&&C}}return C&&!m.defaultPrevented}function Xe(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ze(o){o.g=Xe(()=>{o.g=null,o.i&&(o.i=!1,Ze(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Nt extends Le{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ze(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function it(o){Le.call(this),this.h=o,this.g={}}P(it,Le);var Nn=[];function bs(o){oe(o.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},o),o.g={}}it.prototype.N=function(){it.aa.N.call(this),bs(this)},it.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=c.JSON.stringify,Ot=c.JSON.parse,zi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Hr(){}Hr.prototype.h=null;function Nu(o){return o.h||(o.h=o.i())}function Ou(){}var Ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ja(){Me.call(this,"d")}P(ja,Me);function $a(){Me.call(this,"c")}P($a,Me);var gr={},Du=null;function Ki(){return Du=Du||new se}gr.La="serverreachability";function Vu(o){Me.call(this,gr.La,o)}P(Vu,Me);function Cs(o){const u=Ki();de(u,new Vu(u))}gr.STAT_EVENT="statevent";function xu(o,u){Me.call(this,gr.STAT_EVENT,o),this.stat=u}P(xu,Me);function mt(o){const u=Ki();de(u,new xu(u,o))}gr.Ma="timingevent";function Lu(o,u){Me.call(this,gr.Ma,o),this.size=u}P(Lu,Me);function Ps(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function Q_(o,u,d,m,C,k){o.info(function(){if(o.g)if(k)for(var K="",Pe=k.split("&"),tt=0;tt<Pe.length;tt++){var Ae=Pe[tt].split("=");if(1<Ae.length){var ot=Ae[0];Ae=Ae[1];var at=ot.split("_");K=2<=at.length&&at[1]=="type"?K+(ot+"="+Ae+"&"):K+(ot+"=redacted&")}}else K=null;else K=k;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+d+`
`+K})}function Y_(o,u,d,m,C,k,K){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+d+`
`+k+" "+K})}function qr(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+X_(o,d)+(m?" "+m:"")})}function J_(o,u){o.info(function(){return"TIMEOUT: "+u})}ks.prototype.info=function(){};function X_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var k=C[0];if(k!="noop"&&k!="stop"&&k!="close")for(var K=1;K<C.length;K++)C[K]=""}}}}return et(d)}catch{return u}}var Wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ha;function Gi(){}P(Gi,Hr),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},Ha=new Gi;function On(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new it(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fu}function Fu(){this.i=null,this.g="",this.h=!1}var Uu={},qa={};function za(o,u,d){o.L=1,o.v=Xi(fn(u)),o.m=d,o.P=!0,Bu(o,null)}function Bu(o,u){o.F=Date.now(),Qi(o),o.A=fn(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),eh(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Fu,o.g=yh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Nt(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Nn[0]=C.toString()),C=Nn);for(var k=0;k<C.length;k++){var K=M(d,C[k],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Cs(),Q_(o.i,o.u,o.A,o.l,o.R,o.m)}On.prototype.ca=function(o){o=o.target;const u=this.M;u&&dn(o)==3?u.j():this.Y(o)},On.prototype.Y=function(o){try{if(o==this.g)e:{const at=dn(this.g);var u=this.g.Ba();const Wr=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||ah(this.g)))){this.J||at!=4||u==7||(u==8||0>=Wr?Cs(3):Cs(2)),Ka(this);var d=this.g.Z();this.X=d;t:if(ju(this)){var m=ah(this.g);o="";var C=m.length,k=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),Ns(this);var K="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(k&&u==C-1)});m.length=0,this.h.g+=o,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,Y_(this.i,this.u,this.A,this.l,this.R,at,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,tt=this.g;if((Pe=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Pe)){var Ae=Pe;break t}}Ae=null}if(d=Ae)qr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wa(this,d);else{this.o=!1,this.s=3,mt(12),mr(this),Ns(this);break e}}if(this.P){d=!0;let Ft;for(;!this.J&&this.C<K.length;)if(Ft=Z_(this,K),Ft==qa){at==4&&(this.s=4,mt(14),d=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Uu){this.s=4,mt(15),qr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else qr(this.i,this.l,Ft,null),Wa(this,Ft);if(ju(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||K.length!=0||this.h.h||(this.s=1,mt(16),d=!1),this.o=this.o&&d,!d)qr(this.i,this.l,K,"[Invalid Chunked Response]"),mr(this),Ns(this);else if(0<K.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Za(ot),ot.M=!0,mt(11))}}else qr(this.i,this.l,K,null),Wa(this,K);at==4&&mr(this),this.o&&!this.J&&(at==4?ph(this.j,this):(this.o=!1,Qi(this)))}else my(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),mr(this),Ns(this)}}}catch{}finally{}};function ju(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Z_(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?qa:(d=Number(u.substring(d,m)),isNaN(d)?Uu:(m+=1,m+d>u.length?qa:(u=u.slice(m,m+d),o.C=m+d,u)))}On.prototype.cancel=function(){this.J=!0,mr(this)};function Qi(o){o.S=Date.now()+o.I,$u(o,o.I)}function $u(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ps(g(o.ba,o),u)}function Ka(o){o.B&&(c.clearTimeout(o.B),o.B=null)}On.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(J_(this.i,this.A),this.L!=2&&(Cs(),mt(17)),mr(this),this.s=2,Ns(this)):$u(this,this.S-o)};function Ns(o){o.j.G==0||o.J||ph(o.j,o)}function mr(o){Ka(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,bs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Wa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Ga(d.h,o))){if(!o.K&&Ga(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)so(d),no(d);else break e;Xa(d),mt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ps(g(d.Za,d),6e3));if(1>=zu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else yr(d,11)}else if((o.K||d.g==o)&&so(d),!F(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let Ae=C[u];if(d.T=Ae[0],Ae=Ae[1],d.G==2)if(Ae[0]=="c"){d.K=Ae[1],d.ia=Ae[2];const ot=Ae[3];ot!=null&&(d.la=ot,d.j.info("VER="+d.la));const at=Ae[4];at!=null&&(d.Aa=at,d.j.info("SVER="+d.Aa));const Wr=Ae[5];Wr!=null&&typeof Wr=="number"&&0<Wr&&(m=1.5*Wr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ft=o.g;if(Ft){const oo=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oo){var k=m.h;k.g||oo.indexOf("spdy")==-1&&oo.indexOf("quic")==-1&&oo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Qa(k,k.h),k.h=null))}if(m.D){const ec=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(m.ya=ec,Ve(m.I,m.D,ec))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=o;if(m.qa=_h(m,m.J?m.ia:null,m.W),K.K){Ku(m.h,K);var Pe=K,tt=m.L;tt&&(Pe.I=tt),Pe.B&&(Ka(Pe),Qi(Pe)),m.g=K}else fh(m);0<d.i.length&&ro(d)}else Ae[0]!="stop"&&Ae[0]!="close"||yr(d,7);else d.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?yr(d,7):Ja(d):Ae[0]!="noop"&&d.l&&d.l.ta(Ae),d.v=0)}}Cs(4)}catch{}}var ey=class{constructor(o,u){this.g=o,this.map=u}};function Hu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zu(o){return o.h?1:o.g?o.g.size:0}function Ga(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Qa(o,u){o.g?o.g.add(u):o.h=u}function Ku(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Hu.prototype.cancel=function(){if(this.i=Wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Wu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return N(o.i)}function ty(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function ny(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function Gu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=ny(o),m=ty(o),C=m.length,k=0;k<C;k++)u.call(void 0,m[k],d&&d[k],o)}var Qu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ry(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),C=null;if(0<=m){var k=o[d].substring(0,m);C=o[d].substring(m+1)}else k=o[d];u(k,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function _r(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof _r){this.h=o.h,Yi(this,o.j),this.o=o.o,this.g=o.g,Ji(this,o.s),this.l=o.l;var u=o.i,d=new Vs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Yu(this,d),this.m=o.m}else o&&(u=String(o).match(Qu))?(this.h=!1,Yi(this,u[1]||"",!0),this.o=Os(u[2]||""),this.g=Os(u[3]||"",!0),Ji(this,u[4]),this.l=Os(u[5]||"",!0),Yu(this,u[6]||"",!0),this.m=Os(u[7]||"")):(this.h=!1,this.i=new Vs(null,this.h))}_r.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ds(u,Ju,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ds(u,Ju,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ds(d,d.charAt(0)=="/"?oy:iy,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ds(d,cy)),o.join("")};function fn(o){return new _r(o)}function Yi(o,u,d){o.j=d?Os(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ji(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Yu(o,u,d){u instanceof Vs?(o.i=u,ly(o.i,o.h)):(d||(u=Ds(u,ay)),o.i=new Vs(u,o.h))}function Ve(o,u,d){o.i.set(u,d)}function Xi(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Os(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ds(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,sy),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function sy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ju=/[#\/\?@]/g,iy=/[#\?:]/g,oy=/[#\?]/g,ay=/[#\?@]/g,cy=/#/g;function Vs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Dn(o){o.g||(o.g=new Map,o.h=0,o.i&&ry(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Vs.prototype,t.add=function(o,u){Dn(this),this.i=null,o=zr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Xu(o,u){Dn(o),u=zr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Zu(o,u){return Dn(o),u=zr(o,u),o.g.has(u)}t.forEach=function(o,u){Dn(this),this.g.forEach(function(d,m){d.forEach(function(C){o.call(u,C,m,this)},this)},this)},t.na=function(){Dn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const C=o[m];for(let k=0;k<C.length;k++)d.push(u[m])}return d},t.V=function(o){Dn(this);let u=[];if(typeof o=="string")Zu(this,o)&&(u=u.concat(this.g.get(zr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return Dn(this),this.i=null,o=zr(this,o),Zu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function eh(o,u,d){Xu(o,u),0<d.length&&(o.i=null,o.g.set(zr(o,u),N(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const k=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var C=k;K[m]!==""&&(C+="="+encodeURIComponent(String(K[m]))),o.push(C)}}return this.i=o.join("&")};function zr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function ly(o,u){u&&!o.j&&(Dn(o),o.i=null,o.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(Xu(this,m),eh(this,C,d))},o)),o.j=u}function uy(o,u){const d=new ks;if(c.Image){const m=new Image;m.onload=v(Vn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=v(Vn,d,"TestLoadImage: error",!1,u,m),m.onabort=v(Vn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=v(Vn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function hy(o,u){const d=new ks,m=new AbortController,C=setTimeout(()=>{m.abort(),Vn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(C),k.ok?Vn(d,"TestPingServer: ok",!0,u):Vn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Vn(d,"TestPingServer: error",!1,u)})}function Vn(o,u,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function fy(){this.g=new zi}function dy(o,u,d){const m=d||"";try{Gu(o,function(C,k){let K=C;h(C)&&(K=et(C)),u.push(m+k+"="+encodeURIComponent(K))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function Zi(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Zi,Hr),Zi.prototype.g=function(){return new eo(this.l,this.j)},Zi.prototype.i=function(o){return function(){return o}}({});function eo(o,u){se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(eo,se),t=eo.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ls(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;th(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function th(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?xs(this):Ls(this),this.readyState==3&&th(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,xs(this))},t.Qa=function(o){this.g&&(this.response=o,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ls(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Ls(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function nh(o){let u="";return oe(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ya(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=nh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ve(o,u,d))}function Be(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Be,se);var py=/^https?$/i,gy=["POST","PUT"];t=Be.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ha.g(),this.v=this.o?Nu(this.o):Nu(Ha),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){rh(this,k);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),C=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(gy,u,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,K]of d)this.g.setRequestHeader(k,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oh(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){rh(this,k)}};function rh(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,sh(o),to(o)}function sh(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),to(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),to(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ih(this):this.bb())},t.bb=function(){ih(this)};function ih(o){if(o.h&&typeof a<"u"&&(!o.v[1]||dn(o)!=4||o.Z()!=2)){if(o.u&&dn(o)==4)Xe(o.Ea,0,o);else if(de(o,"readystatechange"),dn(o)==4){o.h=!1;try{const K=o.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=K===0){var C=String(o.D).match(Qu)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),m=!py.test(C?C.toLowerCase():"")}d=m}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var k=2<dn(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",sh(o)}}finally{to(o)}}}}function to(o,u){if(o.g){oh(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||de(o,"ready");try{d.onreadystatechange=m}catch{}}}function oh(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function dn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ot(u)}};function ah(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function my(o){const u={};o=(o.g&&2<=dn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(F(o[m]))continue;var d=R(o[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[C]||[];u[C]=k,k.push(d)}b(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function ch(o){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,o),this.cb=Ms("retryDelaySeedMs",1e4,o),this.Wa=Ms("forwardChannelMaxRetries",2,o),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Hu(o&&o.concurrentRequestLimit),this.Da=new fy,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ch.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,m){mt(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=_h(this,null,this.W),ro(this)};function Ja(o){if(lh(o),o.G==3){var u=o.U++,d=fn(o.I);if(Ve(d,"SID",o.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),Fs(o,d),u=new On(o,o.j,u),u.L=2,u.v=Xi(fn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=yh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Qi(u)}mh(o)}function no(o){o.g&&(Za(o),o.g.cancel(),o.g=null)}function lh(o){no(o),o.u&&(c.clearTimeout(o.u),o.u=null),so(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ro(o){if(!qu(o.h)&&!o.s){o.s=!0;var u=o.Ga;le||Mt(),pe||(le(),pe=!0),At.add(u,o),o.B=0}}function _y(o,u){return zu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ps(g(o.Ga,o,u),gh(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new On(this,this.j,o);let k=this.o;if(this.S&&(k?(k=y(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(C.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=hh(this,C,u),d=fn(this.I),Ve(d,"RID",o),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Fs(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(nh(k)))+"&"+u:this.m&&Ya(d,this.m,k)),Qa(this.h,C),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),C.T=!0,za(C,d,null)):za(C,d,u),this.G=2}}else this.G==3&&(o?uh(this,o):this.i.length==0||qu(this.h)||uh(this))};function uh(o,u){var d;u?d=u.l:d=o.U++;const m=fn(o.I);Ve(m,"SID",o.K),Ve(m,"RID",d),Ve(m,"AID",o.T),Fs(o,m),o.m&&o.o&&Ya(m,o.m,o.o),d=new On(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=hh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Qa(o.h,d),za(d,m,u)}function Fs(o,u){o.H&&oe(o.H,function(d,m){Ve(u,m,d)}),o.l&&Gu({},function(d,m){Ve(u,m,d)})}function hh(o,u,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var C=o.i;let k=-1;for(;;){const K=["count="+d];k==-1?0<d?(k=C[0].g,K.push("ofs="+k)):k=0:K.push("ofs="+k);let Pe=!0;for(let tt=0;tt<d;tt++){let Ae=C[tt].g;const ot=C[tt].map;if(Ae-=k,0>Ae)k=Math.max(0,C[tt].g-100),Pe=!1;else try{dy(ot,K,"req"+Ae+"_")}catch{m&&m(ot)}}if(Pe){m=K.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function fh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;le||Mt(),pe||(le(),pe=!0),At.add(u,o),o.v=0}}function Xa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ps(g(o.Fa,o),gh(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,dh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ps(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),no(this),dh(this))};function Za(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function dh(o){o.g=new On(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=fn(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),Fs(o,u),o.m&&o.o&&Ya(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Xi(fn(u)),d.m=null,d.P=!0,Bu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,no(this),Xa(this),mt(19))};function so(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ph(o,u){var d=null;if(o.g==u){so(o),Za(o),o.g=null;var m=2}else if(Ga(o.h,u))d=u.D,Ku(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;m=Ki(),de(m,new Lu(m,d)),ro(o)}else fh(o);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&_y(o,u)||m==2&&Xa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),C){case 1:yr(o,5);break;case 4:yr(o,10);break;case 3:yr(o,6);break;default:yr(o,2)}}}function gh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function yr(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),m=o.Xa;const C=!m;m=new _r(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Yi(m,"https"),Xi(m),C?uy(m.toString(),d):hy(m.toString(),d)}else mt(2);o.G=0,o.l&&o.l.sa(u),mh(o),lh(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function mh(o){if(o.G=0,o.ka=[],o.l){const u=Wu(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function _h(o,u,d){var m=d instanceof _r?fn(d):new _r(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ji(m,m.s);else{var C=c.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var k=new _r(null);m&&Yi(k,m),u&&(k.g=u),C&&Ji(k,C),d&&(k.l=d),m=k}return d=o.D,u=o.ya,d&&u&&Ve(m,d,u),Ve(m,"VER",o.la),Fs(o,m),m}function yh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Be(new Zi({eb:d})):new Be(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vh(){}t=vh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function io(){}io.prototype.g=function(o,u){return new Rt(o,u)};function Rt(o,u){se.call(this),this.g=new ch(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Kr(this)}P(Rt,se),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Ja(this.g)},Rt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=et(o),o=d);u.i.push(new ey(u.Ya++,o)),u.G==3&&ro(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Ja(this.g),delete this.g,Rt.aa.N.call(this)};function Eh(o){ja.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(Eh,ja);function Th(){$a.call(this),this.status=1}P(Th,$a);function Kr(o){this.g=o}P(Kr,vh),Kr.prototype.ua=function(){de(this.g,"a")},Kr.prototype.ta=function(o){de(this.g,new Eh(o))},Kr.prototype.sa=function(o){de(this.g,new Th)},Kr.prototype.ra=function(){de(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,sm=function(){return new io},rm=function(){return Ki()},nm=gr,tl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,Ao=Wi,Mu.COMPLETE="complete",tm=Mu,Ou.EventType=Ss,Ss.OPEN="a",Ss.CLOSE="b",Ss.ERROR="c",Ss.MESSAGE="d",se.prototype.listen=se.prototype.K,zs=Ou,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,em=Be}).apply(typeof ho<"u"?ho:typeof self<"u"?self:typeof window<"u"?window:{});const Ff="@firebase/firestore",Uf="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Ql("@firebase/firestore");function Zr(){return Lr.logLevel}function J(t,...e){if(Lr.logLevel<=ge.DEBUG){const n=e.map(Xl);Lr.debug(`Firestore (${ws}): ${t}`,...n)}}function bn(t,...e){if(Lr.logLevel<=ge.ERROR){const n=e.map(Xl);Lr.error(`Firestore (${ws}): ${t}`,...n)}}function gs(t,...e){if(Lr.logLevel<=ge.WARN){const n=e.map(Xl);Lr.warn(`Firestore (${ws}): ${t}`,...n)}}function Xl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,im(t,r,n)}function im(t,e,n){let r=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw bn(r),new Error(r)}function Ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||im(e,s,r)}function Te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class tA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nA{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string",31837,{l:r}),new om(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new ut(e)}}class rA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new rA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ue(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Bf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=oA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function nl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ic(s)===Ic(i)?_e(s,i):Ic(s)?1:-1}return _e(t.length,e.length)}const aA=55296,cA=57343;function Ic(t){const e=t.charCodeAt(0);return e>=aA&&e<=cA}function ms(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="__name__";class Yt{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&fe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Yt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=Yt.isNumericId(e),s=Yt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Yt.extractNumericId(e).compare(Yt.extractNumericId(n)):nl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xn.fromString(e.substring(4,e.length-2))}}class xe extends Yt{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const lA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Yt{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return lA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jf}static keyField(){return new Et([jf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(xe.fromString(e))}static fromName(e){return new re(xe.fromString(e).popFirst(5))}static empty(){return new re(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t,e,n){if(!n)throw new ee(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uA(t,e,n,r){if(e===!0&&r===!0)throw new ee(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $f(t){if(!re.isDocumentKey(t))throw new ee(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hf(t){if(re.isDocumentKey(t))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hA(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function fA(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function Ii(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fA(t);throw new ee(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function Li(t,e){if(!hA(t))throw new ee(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ee(H.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=-62135596800,zf=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*zf);return new Ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<qf)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zf}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Li(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:We("string",Ke._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Ke(0,0))}static max(){return new he(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=-1;function dA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new or(s,re.empty(),e)}function pA(t){return new or(t.readTime,t.key,wi)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(he.min(),re.empty(),wi)}static max(){return new or(he.max(),re.empty(),wi)}}function gA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _A{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==mA)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function yA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function As(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Aa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=-1;function Ra(t){return t==null}function rl(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="";function EA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kf(e)),e=TA(t.get(n),e);return Kf(e)}function TA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case cm:n+="";break;default:n+=i}}return n}function Kf(t){return t+cm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gf(this.data.getIterator())}getIteratorFrom(e){return new Gf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Gf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new Wn([])}unionWith(e){let n=new Qe(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lm("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const wA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(Ue(!!t,39018),typeof t=="string"){let e=0;const n=wA.exec(t);if(Ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="server_timestamp",hm="__type__",fm="__previous_value__",dm="__local_write_time__";function eu(t){return(t?.mapValue?.fields||{})[hm]?.stringValue===um}function ba(t){const e=t.mapValue.fields[fm];return eu(e)?ba(e):e}function Ai(t){const e=ar(t.mapValue.fields[dm].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r,s,i,a,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const qo="(default)";class Ri{constructor(e,n){this.projectId=e,this.database=n||qo}static empty(){return new Ri("","")}get isDefaultDatabase(){return this.database===qo}isEqual(e){return e instanceof Ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="__type__",bA="__max__",po={mapValue:{}},SA="__vector__",sl="value";function lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eu(t)?4:PA(t)?9007199254740991:CA(t)?10:11:fe(28295,{value:t})}function an(t,e){if(t===e)return!0;const n=lr(t);if(n!==lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ai(t).isEqual(Ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ar(s.timestampValue),c=ar(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return cr(s.bytesValue).isEqual(cr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=He(s.doubleValue),c=He(i.doubleValue);return a===c?rl(a)===rl(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Wf(a)!==Wf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!an(a[l],c[l])))return!1;return!0}(t,e);default:return fe(52216,{left:t})}}function bi(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=lr(t),r=lr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=He(i.integerValue||i.doubleValue),l=He(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Qf(t.timestampValue,e.timestampValue);case 4:return Qf(Ai(t),Ai(e));case 5:return nl(t.stringValue,e.stringValue);case 6:return function(i,a){const c=cr(i),l=cr(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=_e(c[h],l[h]);if(f!==0)return f}return _e(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=_e(He(i.latitude),He(a.latitude));return c!==0?c:_e(He(i.longitude),He(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yf(t.arrayValue,e.arrayValue);case 10:return function(i,a){const c=i.fields||{},l=a.fields||{},h=c[sl]?.arrayValue,f=l[sl]?.arrayValue,p=_e(h?.values?.length||0,f?.values?.length||0);return p!==0?p:Yf(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===po.mapValue&&a===po.mapValue)return 0;if(i===po.mapValue)return 1;if(a===po.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=nl(l[p],f[p]);if(g!==0)return g;const v=_s(c[l[p]],h[f[p]]);if(v!==0)return v}return _e(l.length,f.length)}(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function Qf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=ar(t),r=ar(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Yf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function ys(t){return il(t)}function il(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=il(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${il(n.fields[a])}`;return s+"}"}(t.mapValue):fe(61005,{value:t})}function Ro(t){switch(lr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ba(t);return e?16+Ro(e):16;case 5:return 2*t.stringValue.length;case 6:return cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ro(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Mi(r.fields,(i,a)=>{s+=i.length+Ro(a)}),s}(t.mapValue);default:throw fe(13486,{value:t})}}function ol(t){return!!t&&"integerValue"in t}function tu(t){return!!t&&"arrayValue"in t}function Jf(t){return!!t&&"nullValue"in t}function Xf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wc(t){return!!t&&"mapValue"in t}function CA(t){return(t?.mapValue?.fields||{})[RA]?.stringValue===SA}function ai(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ai(t.arrayValue.values[n]);return e}return{...t}}function PA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===bA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(n)}setAll(e){let n=Et.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=ai(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Zt(ai(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ft(e,0,he.min(),he.min(),he.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,he.min(),he.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,he.min(),he.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.position=e,this.inclusive=n}}function Zf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(a.referenceValue),n.key):r=_s(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ed(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function kA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{}class Ge extends pm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OA(e,n,r):n==="array-contains"?new xA(e,r):n==="in"?new LA(e,r):n==="not-in"?new MA(e,r):n==="array-contains-any"?new FA(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DA(e,r):new VA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(_s(n,this.value)):n!==null&&lr(this.value)===lr(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends pm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new cn(e,n)}matches(e){return gm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gm(t){return t.op==="and"}function mm(t){return NA(t)&&gm(t)}function NA(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function al(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(mm(t))return t.filters.map(e=>al(e)).join(",");{const e=t.filters.map(n=>al(n)).join(",");return`${t.op}(${e})`}}function _m(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&_m(a,s.filters[c]),!0):!1}(t,e):void fe(19439)}function ym(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(ym).join(" ,")+"}"}(t):"Filter"}class OA extends Ge{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class DA extends Ge{constructor(e,n){super(e,"in",n),this.keys=vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VA extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vm(t,e){return(e.arrayValue?.values||[]).map(n=>re.fromName(n.referenceValue))}class xA extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tu(n)&&bi(n.arrayValue,this.value)}}class LA extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bi(this.value.arrayValue,n)}}class MA extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!bi(this.value.arrayValue,n)}}class FA extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function td(t,e=null,n=[],r=[],s=null,i=null,a=null){return new UA(t,e,n,r,s,i,a)}function nu(t){const e=Te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>al(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.Te=n}return e.Te}function ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_m(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ed(t.startAt,e.startAt)&&ed(t.endAt,e.endAt)}function cl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function BA(t,e,n,r,s,i,a,c){return new Sa(t,e,n,r,s,i,a,c)}function su(t){return new Sa(t)}function nd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jA(t){return t.collectionGroup!==null}function ci(t){const e=Te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Qe(Et.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ko(i,r))}),n.has(Et.keyField().canonicalString())||e.Ie.push(new Ko(Et.keyField(),r))}return e.Ie}function rn(t){const e=Te(t);return e.Ee||(e.Ee=$A(e,ci(t))),e.Ee}function $A(t,e){if(t.limitType==="F")return td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ko(s.field,i)});const n=t.endAt?new zo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zo(t.startAt.position,t.startAt.inclusive):null;return td(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ll(t,e,n){return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ca(t,e){return ru(rn(t),rn(e))&&t.limitType===e.limitType}function Em(t){return`${nu(rn(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ym(s)).join(", ")}]`),Ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function Pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Zf(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,ci(r),s)||r.endAt&&!function(a,c,l){const h=Zf(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,ci(r),s))}(t,e)}function HA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tm(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=qA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qA(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?_s(l,h):fe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return IA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new qe(re.comparator);function ur(){return zA}const Im=new qe(re.comparator);function Ks(...t){let e=Im;for(const n of t)e=e.insert(n.key,n);return e}function KA(t){let e=Im;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return li()}function wm(){return li()}function li(){return new jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const WA=new Qe(re.comparator);function Ie(...t){let e=WA;for(const n of t)e=e.add(n);return e}const GA=new Qe(_e);function QA(){return GA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rl(e)?"-0":e}}function JA(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this._=void 0}}function XA(t,e,n){return t instanceof ul?function(s,i){const a={fields:{[hm]:{stringValue:um},[dm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&eu(i)&&(i=ba(i)),i&&(a.fields[fm]=i),{mapValue:a}}(n,e):t instanceof Wo?Am(t,e):t instanceof Go?Rm(t,e):function(s,i){const a=eR(s,i),c=rd(a)+rd(s.Ae);return ol(a)&&ol(s.Ae)?JA(c):YA(s.serializer,c)}(t,e)}function ZA(t,e,n){return t instanceof Wo?Am(t,e):t instanceof Go?Rm(t,e):n}function eR(t,e){return t instanceof hl?function(r){return ol(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ul extends ka{}class Wo extends ka{constructor(e){super(),this.elements=e}}function Am(t,e){const n=bm(e);for(const r of t.elements)n.some(s=>an(s,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends ka{constructor(e){super(),this.elements=e}}function Rm(t,e){let n=bm(e);for(const r of t.elements)n=n.filter(s=>!an(s,r));return{arrayValue:{values:n}}}class hl extends ka{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function rd(t){return He(t.integerValue||t.doubleValue)}function bm(t){return tu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Wo&&s instanceof Wo||r instanceof Go&&s instanceof Go?ms(r.elements,s.elements,an):r instanceof hl&&s instanceof hl?an(r.Ae,s.Ae):r instanceof ul&&s instanceof ul}(t.transform,e.transform)}class Nr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nr}static exists(e){return new Nr(void 0,e)}static updateTime(e){return new Nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class iu{}function Sm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rR(t.key,Nr.none()):new ou(t.key,t.data,Nr.none());{const n=t.data,r=Zt.empty();let s=new Qe(Et.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Na(t.key,r,new Wn(s.toArray()),Nr.none())}}function nR(t,e,n){t instanceof ou?function(s,i,a){const c=s.value.clone(),l=id(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Na?function(s,i,a){if(!bo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=id(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Cm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ui(t,e,n,r){return t instanceof ou?function(i,a,c,l){if(!bo(i.precondition,a))return c;const h=i.value.clone(),f=od(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Na?function(i,a,c,l){if(!bo(i.precondition,a))return c;const h=od(i.fieldTransforms,l,a),f=a.data;return f.setAll(Cm(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,c){return bo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function sd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ms(r,s,(i,a)=>tR(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ou extends iu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Na extends iu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function id(t,e,n){const r=new Map;Ue(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ZA(a,c,n[s]))}return r}function od(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,XA(i,a,e))}return r}class rR extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=Sm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>sd(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>sd(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ve;function Pm(t){if(t===void 0)return bn("GRPC error has no .code"),H.UNKNOWN;switch(t){case ze.OK:return H.OK;case ze.CANCELLED:return H.CANCELLED;case ze.UNKNOWN:return H.UNKNOWN;case ze.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ze.INTERNAL:return H.INTERNAL;case ze.UNAVAILABLE:return H.UNAVAILABLE;case ze.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ze.NOT_FOUND:return H.NOT_FOUND;case ze.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ze.ABORTED:return H.ABORTED;case ze.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ze.DATA_LOSS:return H.DATA_LOSS;default:return fe(39323,{code:t})}}(ve=ze||(ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new Xn([4294967295,4294967295],0);function ad(t){const e=aR().encode(t),n=new Zg;return n.update(e),new Uint8Array(n.digest())}function cd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xn([n,r],0),new Xn([s,i],0)]}class au{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Xn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Xn.fromNumber(r)));return s.compare(cR)===1&&(s=new Xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ad(e),[r,s]=cd(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new au(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const n=ad(e),[r,s]=cd(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Fi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oa(he.min(),s,new qe(_e),ur(),Ie())}}class Fi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fi(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class km{constructor(e,n){this.targetId=e,this.Ce=n}}class Nm{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ld{constructor(){this.ve=0,this.Fe=ud(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe(38017,{changeType:i})}}),new Fi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ud()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class lR{constructor(e){this.Ge=e,this.ze=new Map,this.je=ur(),this.Je=go(),this.He=go(),this.Ye=new qe(_e)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(cl(i))if(r===0){const a=new re(i.path);this.et(n,a,ft.newNoDocument(a,he.min()))}else Ue(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=cr(r).toUint8Array()}catch(l){if(l instanceof lm)return gs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new au(a,s,i)}catch(l){return gs(l instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&cl(c.target)){const l=new re(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ft.newNoDocument(l,e))}i.Be&&(n.set(a,i.ke()),i.qe())}});let r=Ie();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Oa(e,n,this.Ye,this.je,r);return this.je=ur(),this.Je=go(),this.He=go(),this.Ye=new qe(_e),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new ld,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Qe(_e),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Qe(_e),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ld),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function go(){return new qe(re.comparator)}function ud(){return new qe(re.comparator)}const uR={asc:"ASCENDING",desc:"DESCENDING"},hR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fR={and:"AND",or:"OR"};class dR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fl(t,e){return t.useProto3Json||Ra(e)?e:{value:e}}function pR(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function as(t){return Ue(!!t,49232),he.fromTimestamp(function(n){const r=ar(n);return new Ke(r.seconds,r.nanos)}(t))}function mR(t,e){return dl(t,e).canonicalString()}function dl(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Om(t){const e=xe.fromString(t);return Ue(Mm(e),10190,{key:e.toString()}),e}function Ac(t,e){const n=Om(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Vm(n))}function Dm(t,e){return mR(t.databaseId,e)}function _R(t){const e=Om(t);return e.length===4?xe.emptyPath():Vm(e)}function hd(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vm(t){return Ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function yR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:fe(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ue(f===void 0||typeof f=="string",58123),st.fromBase64String(f||"")):(Ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?H.UNKNOWN:Pm(h.code);return new ee(f,h.message||"")}(a);n=new Nm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ac(t,r.document.name),i=as(r.document.updateTime),a=r.document.createTime?as(r.document.createTime):he.min(),c=new Zt({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new So(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ac(t,r.document),i=r.readTime?as(r.readTime):he.min(),a=ft.newNoDocument(s,i),c=r.removedTargetIds||[];n=new So([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ac(t,r.document),i=r.removedTargetIds||[];n=new So([],i,s,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new oR(s,i),c=r.targetId;n=new km(c,a)}}return n}function vR(t,e){return{documents:[Dm(t,e.path)]}}function ER(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Dm(t,s);const i=function(h){if(h.length!==0)return Lm(cn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:ts(g.field),direction:wR(g.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=fl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function TR(t){let e=_R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ue(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=xm(p);return g instanceof cn&&mm(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(P){return new Ko(ns(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Ra(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,v=p.values||[];return new zo(v,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new zo(v,g)}(n.endAt)),BA(e,s,a,i,c,"F",l,h)}function IR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ns(n.unaryFilter.field);return Ge.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(ns(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>xm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe(1026)}}(n.compositeFilter.op))}(t):fe(30097,{filter:t})}function wR(t){return uR[t]}function AR(t){return hR[t]}function RR(t){return fR[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return Et.fromServerFormat(t.fieldPath)}function Lm(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Xf(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(Jf(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xf(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(Jf(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:AR(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>Lm(s));return r.length===1?r[0]:{compositeFilter:{op:RR(n.op),filters:r}}}(t):fe(54877,{filter:t})}function Mm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,s,i=he.min(),a=he.min(),c=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.yt=e}}function SR(t){const e=TR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ll(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.Cn=new PR}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(or.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class PR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fm=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Fm,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new vs(0)}static cr(){return new vs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="LruGarbageCollector",kR=1048576;function pd([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class NR{constructor(e){this.Ir=e,this.buffer=new Qe(pd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();pd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class OR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){J(dd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){As(n)?J(dd,"Ignoring IndexedDB error during garbage collection: ",n):await wa(n)}await this.Vr(3e5)})}}class DR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Aa.ce);const r=new NR(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(fd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fd):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Zr()<=ge.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function VR(t,e){return new DR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.changes=new jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ui(r.mutation,s,Wn.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Ks();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=ur();const a=li(),c=function(){return li()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Na)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ui(f.mutation,h,f.mutation.getFieldMask(),Ke.now())):a.set(h.key,Wn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>c.set(h,new LR(f,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=li();let s=new qe((a,c)=>a-c),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Wn.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=wm();f.forEach(g=>{if(!i.has(g)){const v=Sm(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return re.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(br());let c=wi,l=i;return a.next(h=>L.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ie())).next(f=>({batchId:c,changes:KA(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Ks();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ks();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const h=function(p,g){return new Sa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ft.newInvalidDocument(f)))});let c=Ks();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ui(f.mutation,h,Wn.empty(),Ke.now()),Pa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:as(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:as(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.overlays=new qe(re.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=br(),i=n.length+1,a=new re(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=br(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=br(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new iR(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.Qr=new Qe(Ye.$r),this.Ur=new Qe(Ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ye(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new re(new xe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new re(new xe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return re.comparator(e.key,n.key)||_e(e.Yr,n.Yr)}static Kr(e,n){return _e(e.Yr,n.Yr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Qe(Ye.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sR(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?vA:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(_e);return n.forEach(s=>{const i=new Ye(s,0),a=new Ye(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const a=new Ye(new re(i),0);let c=new Qe(_e);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},a),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ue(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.ri=e,this.docs=function(){return new qe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ur();const a=n.path,c=new re(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||gA(pA(f),r)<=0||(s.has(f.key)||Pa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe(9500)}ii(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HR(this)}getSize(e){return L.resolve(this.size)}}class HR extends xR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.persistence=e,this.si=new jr(n=>nu(n),ru),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new cu,this.targetCount=0,this.ai=vs.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.ui={},this.overlays={},this.ci=new Aa(0),this.li=!1,this.li=!0,this.hi=new BR,this.referenceDelegate=e(this),this.Pi=new qR(this),this.indexManager=new CR,this.remoteDocumentCache=function(s){return new $R(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new bR(n),this.Ii=new FR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new jR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new zR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return L.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class zR extends _A{constructor(e){super(),this.currentSequenceNumber=e}}class lu{constructor(e){this.persistence=e,this.Ri=new cu,this.Vi=null}static mi(e){return new lu(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,r=>{const s=re.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Qo{constructor(e,n){this.persistence=e,this.pi=new jr(r=>EA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VR(this,n)}static mi(e,n){return new Qo(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return L.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,n).next(c=>{c||(r++,i.removeEntry(a,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ro(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return VI()?8:yA(gt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new KR;return this.Ss(e,n,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,a,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Zr()<=ge.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(Zr()<=ge.DEBUG&&J("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Zr()<=ge.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):L.resolve())}ys(e,n){if(nd(n))return L.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ll(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ie(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(n,c);return this.Cs(n,h,a,l.readTime)?this.ys(e,ll(n,null,"F")):this.vs(e,h,n,l)}))})))}ws(e,n,r,s){return nd(n)||s.isEqual(he.min())?L.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?L.resolve(null):(Zr()<=ge.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.vs(e,a,n,dA(s,wi)).next(c=>c))})}Ds(e,n){let r=new Qe(Tm(e));return n.forEach((s,i)=>{Pa(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Zr()<=ge.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",es(n)),this.ps.getDocumentsMatchingQuery(e,n,or.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="LocalStore",GR=3e8;class QR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new qe(_e),this.xs=new jr(i=>nu(i),ru),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function YR(t,e,n,r){return new QR(t,e,n,r)}async function Bm(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=Ie();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function jm(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function JR(t,e){const n=Te(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(st.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),function(N,O,$){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=GR?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,v,f)&&c.push(n.Pi.updateTargetData(i,v))});let l=ur(),h=Ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(XR(i,a,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!r.isEqual(he.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ms=s,i))}function XR(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=ur();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):J(hu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:a,qs:s}})}function ZR(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next(a=>(s=new Gn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function pl(t,e,n){const r=Te(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!As(a))throw a;J(hu,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function gd(t,e,n){const r=Te(t);let s=he.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const p=Te(l),g=p.xs.get(f);return g!==void 0?L.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,a,rn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,n?s:he.min(),n?i:Ie())).next(c=>(eb(r,HA(e),c),{documents:c,Qs:i})))}function eb(t,e,n){let r=t.Os.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class md{constructor(){this.activeTargetIds=QA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tb{constructor(){this.Mo=new md,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new md,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="ConnectivityMonitor";class yd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){J(_d,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){J(_d,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo=null;function gl(){return mo===null?mo=function(){return 268435456+Math.round(2147483648*Math.random())}():mo++,"0x"+mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="RestConnection",rb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===qo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=gl(),c=this.zo(e,n.toUriEncodedString());J(Rc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Ur(h);return this.Jo(e,c,l,r,f).then(p=>(J(Rc,`Received RPC '${e}' ${a}: `,p),p),p=>{throw gs(Rc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ws}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=rb[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class ob extends sb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=gl();return new Promise((c,l)=>{const h=new em;h.setWithCredentials(!0),h.listenOnce(tm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ao.NO_ERROR:const p=h.getResponseJson();J(ct,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Ao.TIMEOUT:J(ct,`RPC '${e}' ${a} timed out`),l(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ao.HTTP_ERROR:const g=h.getStatus();if(J(ct,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const P=v?.error;if(P&&P.status&&P.message){const N=function($){const F=$.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(F)>=0?F:H.UNKNOWN}(P.status);l(new ee(N,P.message))}else l(new ee(H.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new ee(H.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{J(ct,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);J(ct,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=gl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sm(),c=rm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");J(ct,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);this.I_(p);let g=!1,v=!1;const P=new ib({Yo:O=>{v?J(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(J(ct,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),J(ct,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Zo:()=>p.close()}),N=(O,$,F)=>{O.listen($,U=>{try{F(U)}catch(j){setTimeout(()=>{throw j},0)}})};return N(p,zs.EventType.OPEN,()=>{v||(J(ct,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),N(p,zs.EventType.CLOSE,()=>{v||(v=!0,J(ct,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))}),N(p,zs.EventType.ERROR,O=>{v||(v=!0,gs(ct,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),P.a_(new ee(H.UNAVAILABLE,"The operation could not be completed")))}),N(p,zs.EventType.MESSAGE,O=>{if(!v){const $=O.data[0];Ue(!!$,16349);const F=$,U=F?.error||F[0]?.error;if(U){J(ct,`RPC '${e}' stream ${s} received error:`,U);const j=U.status;let Z=function(y){const _=ze[y];if(_!==void 0)return Pm(_)}(j),oe=U.message;Z===void 0&&(Z=H.INTERNAL,oe="Unknown error status: "+j+" with message "+U.message),v=!0,P.a_(new ee(Z,oe)),p.close()}else J(ct,`RPC '${e}' stream ${s} received:`,$),P.u_($)}}),N(c,nm.STAT_EVENT,O=>{O.stat===tl.PROXY?J(ct,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===tl.NOPROXY&&J(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){return new dR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="PersistentStream";class ab{constructor(e,n,r,s,i,a,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Hm(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new ee(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return J(vd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(J(vd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cb extends ab{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=yR(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?he.min():a.readTime?as(a.readTime):he.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=hd(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=cl(l)?{documents:vR(i,l)}:{query:ER(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=gR(i,a.resumeToken);const h=fl(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(he.min())>0){c.readTime=pR(i,a.snapshotVersion.toTimestamp());const h=fl(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=IR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=hd(this.serializer),n.removeTarget=e,this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{}class ub extends lb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,dl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(H.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,dl(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ee(H.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class hb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(bn(n),this.aa=!1):J("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="RemoteStore";class fb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Bi(this)&&(J(Es,"Restarting streams for network reachability change."),await async function(l){const h=Te(l);h.Ea.add(4),await Ui(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Da(h)}(this))})}),this.Ra=new hb(r,s)}}async function Da(t){if(Bi(t))for(const e of t.da)await e(!0)}async function Ui(t){for(const e of t.da)await e(!1)}function qm(t,e){const n=Te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),gu(n)?pu(n):Rs(n).O_()&&du(n,e))}function fu(t,e){const n=Te(t),r=Rs(n);n.Ia.delete(e),r.O_()&&zm(n,e),n.Ia.size===0&&(r.O_()?r.L_():Bi(n)&&n.Ra.set("Unknown"))}function du(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).Y_(e)}function zm(t,e){t.Va.Ue(e),Rs(t).Z_(e)}function pu(t){t.Va=new lR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.Ra.ua()}function gu(t){return Bi(t)&&!Rs(t).x_()&&t.Ia.size>0}function Bi(t){return Te(t).Ea.size===0}function Km(t){t.Va=void 0}async function db(t){t.Ra.set("Online")}async function pb(t){t.Ia.forEach((e,n)=>{du(t,e)})}async function gb(t,e){Km(t),gu(t)?(t.Ra.ha(e),pu(t)):t.Ra.set("Unknown")}async function mb(t,e,n){if(t.Ra.set("Online"),e instanceof Nm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){J(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ed(t,r)}else if(e instanceof So?t.Va.Ze(e):e instanceof km?t.Va.st(e):t.Va.tt(e),!n.isEqual(he.min()))try{const r=await jm(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),zm(i,l);const p=new Gn(f.target,l,h,f.sequenceNumber);du(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){J(Es,"Failed to raise snapshot:",r),await Ed(t,r)}}async function Ed(t,e,n){if(!As(e))throw e;t.Ea.add(1),await Ui(t),t.Ra.set("Offline"),n||(n=()=>jm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J(Es,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Da(t)})}async function Td(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),J(Es,"RemoteStore received new credentials");const r=Bi(n);n.Ea.add(3),await Ui(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Da(n)}async function _b(t,e){const n=Te(t);e?(n.Ea.delete(2),await Da(n)):e||(n.Ea.add(2),await Ui(n),n.Ra.set("Unknown"))}function Rs(t){return t.ma||(t.ma=function(n,r,s){const i=Te(n);return i.sa(),new cb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:db.bind(null,t),t_:pb.bind(null,t),r_:gb.bind(null,t),H_:mb.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),gu(t)?pu(t):t.Ra.set("Unknown")):(await t.ma.stop(),Km(t))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new mu(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wm(t,e){if(bn("AsyncQueue",`${e}: ${t}`),As(t))return new ee(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static emptySet(e){return new cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Ks(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.ga=new qe(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ts{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Ts(e,n,cs.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ca(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class vb{constructor(){this.queries=wd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Te(n),i=s.queries;s.queries=wd(),i.forEach((a,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new ee(H.ABORTED,"Firestore shutting down"))}}function wd(){return new jr(t=>Em(t),Ca)}async function Gm(t,e){const n=Te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new yb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Wm(a,`Initialization of query '${es(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&_u(n)}async function Qm(t,e){const n=Te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Eb(t,e){const n=Te(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&_u(n)}function Tb(t,e,n){const r=Te(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function _u(t){t.Ca.forEach(e=>{e.next()})}var ml,Ad;(Ad=ml||(ml={})).Ma="default",Ad.Cache="cache";class Ym{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ml.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.key=e}}class Xm{constructor(e){this.key=e}}class Ib{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=Tm(e),this.tu=new cs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Id,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),v=Pa(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let O=!1;g&&v?g.data.isEqual(v.data)?P!==N&&(r.track({type:3,doc:v}),O=!0):this.su(g,v)||(r.track({type:2,doc:v}),O=!0,(l&&this.eu(v,l)>0||h&&this.eu(v,h)<0)&&(c=!0)):!g&&v?(r.track({type:0,doc:v}),O=!0):g&&!v&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(v?(a=a.add(v),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,p)=>function(v,P){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:O})}};return N(v)-N(P)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new Ts(this.query,e.tu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Id,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Xm(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Jm(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ts.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const yu="SyncEngine";class wb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ab{constructor(e){this.key=e,this.hu=!1}}class Rb{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new jr(c=>Em(c),Ca),this.Iu=new Map,this.Eu=new Set,this.du=new qe(re.comparator),this.Au=new Map,this.Ru=new cu,this.Vu={},this.mu=new Map,this.fu=vs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bb(t,e,n=!0){const r=r_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Zm(r,e,n,!0),s}async function Sb(t,e){const n=r_(t);await Zm(n,e,!0,!1)}async function Zm(t,e,n,r){const s=await ZR(t.localStore,rn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Cb(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&qm(t.remoteStore,s),c}async function Cb(t,e,n,r,s){t.pu=(p,g,v)=>async function(N,O,$,F){let U=O.view.ru($);U.Cs&&(U=await gd(N.localStore,O.query,!1).then(({documents:b})=>O.view.ru(b,U)));const j=F&&F.targetChanges.get(O.targetId),Z=F&&F.targetMismatches.get(O.targetId)!=null,oe=O.view.applyChanges(U,N.isPrimaryClient,j,Z);return bd(N,O.targetId,oe.au),oe.snapshot}(t,p,g,v);const i=await gd(t.localStore,e,!0),a=new Ib(e,i.Qs),c=a.ru(i.documents),l=Fi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);bd(t,n,h.au);const f=new wb(e,n,a);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function Pb(t,e,n){const r=Te(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!Ca(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fu(r.remoteStore,s.targetId),_l(r,s.targetId)}).catch(wa)):(_l(r,s.targetId),await pl(r.localStore,s.targetId,!0))}async function kb(t,e){const n=Te(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fu(n.remoteStore,r.targetId))}async function e_(t,e){const n=Te(t);try{const r=await JR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Au.get(i);a&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Ue(a.hu,14607):s.removedDocuments.size>0&&(Ue(a.hu,42227),a.hu=!1))}),await n_(n,r,e)}catch(r){await wa(r)}}function Rd(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=Te(a);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)}),h&&_u(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Nb(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new qe(re.comparator);a=a.insert(i,ft.newNoDocument(i,he.min()));const c=Ie().add(i),l=new Oa(he.min(),new Map,new qe(_e),a,c);await e_(r,l),r.du=r.du.remove(i),r.Au.delete(e),vu(r)}else await pl(r.localStore,e,!1).then(()=>_l(r,e,n)).catch(wa)}function _l(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||t_(t,r)})}function t_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(fu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),vu(t))}function bd(t,e,n){for(const r of n)r instanceof Jm?(t.Ru.addReference(r.key,e),Ob(t,r)):r instanceof Xm?(J(yu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||t_(t,r.key)):fe(19791,{wu:r})}function Ob(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(J(yu,"New document in limbo: "+n),t.Eu.add(r),vu(t))}function vu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new re(xe.fromString(e)),r=t.fu.next();t.Au.set(r,new Ab(n)),t.du=t.du.insert(n,r),qm(t.remoteStore,new Gn(rn(su(n.path)),r,"TargetPurposeLimboResolution",Aa.ce))}}async function n_(t,e,n){const r=Te(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{a.push(r.pu(l,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const f=h?!h.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(h){s.push(h);const f=uu.As(l.targetId,h);i.push(f)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(l,h){const f=Te(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.Es,v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>L.forEach(g.ds,v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!As(p))throw p;J(hu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=f.Ms.get(g),P=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(g,N)}}}(r.localStore,i))}async function Db(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){J(yu,"User change. New user:",e.toKey());const r=await Bm(n.localStore,e);n.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new ee(H.CANCELLED,a))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await n_(n,r.Ls)}}function Vb(t,e){const n=Te(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const a of i){const c=n.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function r_(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=e_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nb.bind(null,e),e.Pu.H_=Eb.bind(null,e.eventManager),e.Pu.yu=Tb.bind(null,e.eventManager),e}class Yo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$m(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return YR(this.persistence,new WR,e.initialUser,this.serializer)}Cu(e){return new Um(lu.mi,this.serializer)}Du(e){return new tb}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yo.provider={build:()=>new Yo};class xb extends Yo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ue(this.persistence.referenceDelegate instanceof Qo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new OR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Um(r=>Qo.mi(r,n),this.serializer)}}class yl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Db.bind(null,this.syncEngine),await _b(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vb}()}createDatastore(e){const n=$m(e.databaseInfo.databaseId),r=function(i){return new ob(i)}(e.databaseInfo);return function(i,a,c,l){return new ub(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new fb(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Rd(this.syncEngine,n,0),function(){return yd.v()?new yd:new nb}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,f){const p=new Rb(s,i,a,c,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=Te(n);J(Es,"RemoteStore shutting down."),r.Ea.add(5),await Ui(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}yl.provider={build:()=>new yl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="FirestoreClient";class Lb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=Zl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{J(hr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(J(hr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sc(t,e){t.asyncQueue.verifyOperationInProgress(),J(hr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Mb(t);J(hr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Td(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Td(e.remoteStore,s)),t._onlineComponents=e}async function Mb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(hr,"Using user provided OfflineComponentProvider");try{await Sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await Sc(t,new Yo)}}else J(hr,"Using default OfflineComponentProvider"),await Sc(t,new xb(void 0));return t._offlineComponents}async function Fb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(hr,"Using user provided OnlineComponentProvider"),await Sd(t,t._uninitializedComponentsProvider._online)):(J(hr,"Using default OnlineComponentProvider"),await Sd(t,new yl))),t._onlineComponents}async function i_(t){const e=await Fb(t),n=e.eventManager;return n.onListen=bb.bind(null,e.syncEngine),n.onUnlisten=Pb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Sb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=kb.bind(null,e.syncEngine),n}function Ub(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new s_({next:g=>{f.Nu(),a.enqueueAndForget(()=>Qm(i,p));const v=g.docs.has(c);!v&&g.fromCache?h.reject(new ee(H.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?h.reject(new ee(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ym(su(c.path),f,{includeMetadataChanges:!0,qa:!0});return Gm(i,p)}(await i_(t),t.asyncQueue,e,n,r)),r.promise}function Bb(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new s_({next:g=>{f.Nu(),a.enqueueAndForget(()=>Qm(i,p)),g.fromCache&&l.source==="server"?h.reject(new ee(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ym(c,f,{includeMetadataChanges:!0,qa:!0});return Gm(i,p)}(await i_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="firestore.googleapis.com",Pd=!0;class kd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=a_,this.ssl=Pd}else this.host=e.host,this.ssl=e.ssl??Pd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kR)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=o_(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Va{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eA;switch(r.type){case"firstParty":return new sA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cd.get(n);r&&(J("ComponentProvider","Removing Datastore"),Cd.delete(n),r.terminate())}(this),Promise.resolve()}}function jb(t,e,n,r={}){t=Ii(t,Va);const s=Ur(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Wl(`https://${c}`),Gl("Firestore",!0)),i.host!==a_&&i.host!==c&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Vr(l,a)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=ut.MOCK_USER;else{h=Wg(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ut(p)}t._authCredentials=new tA(new om(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xa(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Li(n,pt._jsonSchema))return new pt(e,r||null,new re(xe.fromString(n.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:We("string",pt._jsonSchemaVersion),referencePath:We("string")};class er extends xa{constructor(e,n,r){super(e,n,su(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new re(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function hP(t,e,...n){if(t=Pn(t),am("collection","path",e),t instanceof Va){const r=xe.fromString(e,...n);return Hf(r),new er(t,null,r)}{if(!(t instanceof pt||t instanceof er))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Hf(r),new er(t.firestore,null,r)}}function fP(t,e,...n){if(t=Pn(t),arguments.length===1&&(e=Zl.newId()),am("doc","path",e),t instanceof Va){const r=xe.fromString(e,...n);return $f(r),new pt(t,null,new re(r))}{if(!(t instanceof pt||t instanceof er))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return $f(r),new pt(t.firestore,t instanceof er?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="AsyncQueue";class Od{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hm(this,"async_queue_retry"),this._c=()=>{const r=bc();r&&J(Nd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!As(e))throw e;J(Nd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,bn("INTERNAL UNHANDLED ERROR: ",Dd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=mu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&fe(47125,{Pc:Dd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Dd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Eu extends Va{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Od,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Od(e),this._firestoreClient=void 0,await e}}}function $b(t,e){const n=typeof t=="object"?t:Jl(),r=typeof t=="string"?t:qo,s=Ia(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qg("firestore");i&&jb(s,...i)}return s}function c_(t){if(t._terminated)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Hb(t),t._firestoreClient}function Hb(t){const e=t._freezeSettings(),n=function(s,i,a,c){return new AA(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,o_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Lb(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(st.fromBase64String(e))}catch(n){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new en(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:en._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Li(e,en._jsonSchema))return en.fromBase64String(e.bytes)}}en._jsonSchemaVersion="firestore/bytes/1.0",en._jsonSchema={type:We("string",en._jsonSchemaVersion),bytes:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tr._jsonSchemaVersion}}static fromJSON(e){if(Li(e,tr._jsonSchema))return new tr(e.latitude,e.longitude)}}tr._jsonSchemaVersion="firestore/geoPoint/1.0",tr._jsonSchema={type:We("string",tr._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:nr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Li(e,nr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new nr(e.vectorValues);throw new ee(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nr._jsonSchemaVersion="firestore/vectorValue/1.0",nr._jsonSchema={type:We("string",nr._jsonSchemaVersion),vectorValues:We("object")};const qb=new RegExp("[~\\*/\\[\\]]");function zb(t,e,n){if(e.search(qb)>=0)throw Vd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new l_(...e.split("."))._internalPath}catch{throw Vd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Vd(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new ee(H.INVALID_ARGUMENT,i+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(h_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Kb extends u_{data(){return super.data()}}function h_(t,e){return typeof e=="string"?zb(t,e):e instanceof l_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gb{convertValue(e,n="none"){switch(lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[sl].arrayValue?.values?.map(r=>He(r.doubleValue));return new nr(n)}convertGeoPoint(e){return new tr(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ba(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ai(e));default:return null}}convertTimestamp(e){const n=ar(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Ue(Mm(r),9688,{name:e});const s=new Ri(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Or extends u_{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(h_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Or._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Or._jsonSchemaVersion="firestore/documentSnapshot/1.0",Or._jsonSchema={type:We("string",Or._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class Co extends Or{data(e={}){return super.data(e)}}class ls{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Co(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Co(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Co(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Qb(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ls._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Qb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){t=Ii(t,pt);const e=Ii(t.firestore,Eu);return Ub(c_(e),t._key).then(n=>Yb(e,t,n))}ls._jsonSchemaVersion="firestore/querySnapshot/1.0",ls._jsonSchema={type:We("string",ls._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};class f_ extends Gb{constructor(e){super(),this.firestore=e}convertBytes(e){return new en(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function pP(t){t=Ii(t,xa);const e=Ii(t.firestore,Eu),n=c_(e),r=new f_(e);return Wb(t._query),Bb(n,t._query).then(s=>new ls(e,r,t,s))}function Yb(t,e,n){const r=n.docs.get(e._key),s=new f_(t);return new Or(t,s,e._key,r,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ws=s})(Br),xr(new ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Eu(new nA(r.getProvider("auth-internal")),new iA(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ri(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),nn(Ff,Uf,e),nn(Ff,Uf,"esm2020")})();function d_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jb=d_,p_=new Vi("auth","Firebase",d_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Ql("@firebase/auth");function Xb(t,...e){Jo.logLevel<=ge.WARN&&Jo.warn(`Auth (${Br}): ${t}`,...e)}function Po(t,...e){Jo.logLevel<=ge.ERROR&&Jo.error(`Auth (${Br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw Tu(t,...e)}function sn(t,...e){return Tu(t,...e)}function g_(t,e,n){const r={...Jb(),[e]:n};return new Vi("auth","Firebase",r).create(e,{appName:t.name})}function Dr(t){return g_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return p_.create(t,...e)}function ae(t,e,...n){if(!t)throw Tu(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function Sn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return typeof self<"u"&&self.location?.href||""}function Zb(){return xd()==="http:"||xd()==="https:"}function xd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zb()||NI()||"connection"in navigator)?navigator.onLine:!0}function tS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=CI()||OI()}get(){return eS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sS=new ji(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function pr(t,e,n,r,s={}){return __(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=xi({key:t.config.apiKey,...a}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return kI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ur(t.emulatorConfig.host)&&(h.credentials="include"),m_.fetch()(await y_(t,t.config.apiHost,n,c),h)})}async function __(t,e,n){t._canInitEmulator=!1;const r={...nS,...e};try{const s=new oS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw _o(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw _o(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw g_(t,f,h);Kt(t,f)}}catch(s){if(s instanceof un)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function La(t,e,n,r,s={}){const i=await pr(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function y_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Iu(t.config,s):`${t.config.apiScheme}://${s}`;return rS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function iS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),sS.get())})}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function Ld(t){return t!==void 0&&t.enterprise!==void 0}class aS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cS(t,e){return pr(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t,e){return pr(t,"POST","/v1/accounts:delete",e)}async function Xo(t,e){return pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uS(t,e=!1){const n=Pn(t),r=await n.getIdToken(e),s=wu(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:hi(Cc(s.auth_time)),issuedAtTime:hi(Cc(s.iat)),expirationTime:hi(Cc(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Cc(t){return Number(t)*1e3}function wu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=$g(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Md(t){const e=wu(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&hS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t){const e=t.auth,n=await t.getIdToken(),r=await Si(t,Xo(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?v_(s.providerUserInfo):[],a=pS(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!a?.length,h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new El(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function dS(t){const e=Pn(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function v_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e){const n=await __(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await y_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ur(t.emulatorConfig.host)&&(l.credentials="include"),m_.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mS(t,e){return pr(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Md(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await gS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new us;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new fS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new El(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uS(this,e)}reload(){return dS(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(Dr(this.auth));const e=await this.getIdToken();return await Si(this,lS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:v,providerData:P,stsTokenManager:N}=n;ae(p&&N,e,"internal-error");const O=us.fromJSON(this.name,N);ae(typeof p=="string",e,"internal-error"),Mn(r,e.name),Mn(s,e.name),ae(typeof g=="boolean",e,"internal-error"),ae(typeof v=="boolean",e,"internal-error"),Mn(i,e.name),Mn(a,e.name),Mn(c,e.name),Mn(l,e.name),Mn(h,e.name),Mn(f,e.name);const $=new jt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:v,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&($.providerData=P.map(F=>({...F}))),l&&($._redirectEventId=l),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new us;s.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?v_(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new us;c.updateFromIdToken(r);const l=new jt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new El(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new Map;function Tn(t){Sn(t instanceof Function,"Expected a class definition");let e=Fd.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}E_.type="NONE";const Ud=E_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Xo(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(Tn(Ud),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Tn(Ud);const a=ko(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const g=await Xo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await jt._fromGetAccountInfoResponse(e,g,f)}else p=jt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hs(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new hs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(b_(e))return"Blackberry";if(S_(e))return"Webos";if(I_(e))return"Safari";if((e.includes("chrome/")||w_(e))&&!e.includes("edge/"))return"Chrome";if(R_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function T_(t=gt()){return/firefox\//i.test(t)}function I_(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w_(t=gt()){return/crios\//i.test(t)}function A_(t=gt()){return/iemobile/i.test(t)}function R_(t=gt()){return/android/i.test(t)}function b_(t=gt()){return/blackberry/i.test(t)}function S_(t=gt()){return/webos/i.test(t)}function Au(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _S(t=gt()){return Au(t)&&!!window.navigator?.standalone}function yS(){return DI()&&document.documentMode===10}function C_(t=gt()){return Au(t)||R_(t)||S_(t)||b_(t)||/windows phone/i.test(t)||A_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e=[]){let n;switch(t){case"Browser":n=Bd(gt());break;case"Worker":n=`${Bd(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e={}){return pr(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=6;class IS{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??TS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jd(this),this.idTokenSubscription=new jd(this),this.beforeStateQueue=new vS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xo(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Bt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(Dr(this));const n=e?Pn(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(Dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(Dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ES(this),n=new IS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mS(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=P_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Xb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ma(t){return Pn(t)}class jd{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AS(t){Fa=t}function k_(t){return Fa.loadJS(t)}function RS(){return Fa.recaptchaEnterpriseScript}function bS(){return Fa.gapiScript}function SS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class CS{constructor(){this.enterprise=new PS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class PS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const kS="recaptcha-enterprise",N_="NO_RECAPTCHA";class NS{constructor(e){this.type=kS,this.auth=Ma(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{cS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new aS(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;Ld(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(N_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CS().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!n&&Ld(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=RS();l.length!==0&&(l+=c),k_(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function $d(t,e,n,r=!1,s=!1){const i=new NS(t);let a;if(s)a=N_;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Hd(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $d(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await $d(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t,e){const n=Ia(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Vr(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function DS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Tn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function VS(t,e,n){const r=Ma(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=O_(e),{host:a,port:c}=xS(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Vr(h,r.config.emulator)&&Vr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ur(a)?(Wl(`${i}//${a}${l}`),Gl("Auth",!0)):LS()}function O_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xS(t){const e=O_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:qd(a)}}}function qd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function MS(t,e){return pr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(t,e){return La(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(t,e){return La(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function BS(t,e){return La(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Ru{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,n,"signInWithPassword",FS);case"emailLink":return US(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,r,"signUpPassword",MS);case"emailLink":return BS(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return La(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="http://localhost";class Mr extends Ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new Mr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:jS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HS(t){const e=Hs(qs(t)).link,n=e?Hs(qs(e)).deep_link_id:null,r=Hs(qs(t)).deep_link_id;return(r?Hs(qs(r)).link:null)||r||n||e||t}class bu{constructor(e){const n=Hs(qs(e)),r=n.apiKey??null,s=n.oobCode??null,i=$S(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=HS(e);try{return new bu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.providerId=$i.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bu.parseLink(n);return ae(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}$i.PROVIDER_ID="password";$i.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$i.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends D_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Hi{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Hi{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jt._fromIdTokenResponse(e,r,s),a=zd(r);return new Is({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=zd(r);return new Is({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function zd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ea(e,n,r,s)}}function V_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,i,e,r):i})}async function qS(t,e,n=!1){const r=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(Dr(r));const s="reauthenticate";try{const i=await Si(t,V_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const a=wu(i.idToken);ae(a,r,"internal-error");const{sub:c}=a;return ae(t.uid===c,r,"user-mismatch"),Is._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(t,e,n=!1){if(Bt(t.app))return Promise.reject(Dr(t));const r="signIn",s=await V_(t,r,e),i=await Is._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e,n,r){return Pn(t).onIdTokenChanged(e,n,r)}function GS(t,e,n){return Pn(t).beforeAuthStateChanged(e,n)}const ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=1e3,YS=10;class L_ extends x_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);yS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,YS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L_.type="LOCAL";const JS=L_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends x_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}M_.type="SESSION";const F_=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await XS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Su("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function eC(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function tC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nC(){return navigator?.serviceWorker?.controller||null}function rC(){return U_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="firebaseLocalStorageDb",sC=1,na="firebaseLocalStorage",j_="fbase_key";class qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ba(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function iC(){const t=indexedDB.deleteDatabase(B_);return new qi(t).toPromise()}function Tl(){const t=indexedDB.open(B_,sC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(na,{keyPath:j_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(na)?e(r):(r.close(),await iC(),e(await Tl()))})})}async function Kd(t,e,n){const r=Ba(t,!0).put({[j_]:e,value:n});return new qi(r).toPromise()}async function oC(t,e){const n=Ba(t,!1).get(e),r=await new qi(n).toPromise();return r===void 0?null:r.value}function Wd(t,e){const n=Ba(t,!0).delete(e);return new qi(n).toPromise()}const aC=800,cC=3;class $_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ua._getInstance(rC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await tC(),!this.activeServiceWorker)return;this.sender=new ZS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tl();return await Kd(e,ta,"1"),await Wd(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ba(s,!1).getAll();return new qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$_.type="LOCAL";const lC=$_;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t,e){return e?Tn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends Ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hC(t){return KS(t.auth,new Cu(t),t.bypassAuthState)}function fC(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),zS(n,new Cu(t),t.bypassAuthState)}async function dC(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),qS(n,new Cu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hC;case"linkViaPopup":case"linkViaRedirect":return dC;case"reauthViaPopup":case"reauthViaRedirect":return fC;default:Kt(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new ji(2e3,1e4);class rs extends H_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pC.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="pendingRedirect",No=new Map;class mC extends H_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=No.get(this.auth._key());if(!e){try{const r=await _C(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}No.set(this.auth._key(),e)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _C(t,e){const n=EC(e),r=vC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yC(t,e){No.set(t._key(),e)}function vC(t){return Tn(t._redirectPersistence)}function EC(t){return ko(gC,t.config.apiKey,t.name)}async function TC(t,e,n=!1){if(Bt(t.app))return Promise.reject(Dr(t));const r=Ma(t),s=uC(r,e),a=await new mC(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=600*1e3;class wC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!q_(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(sn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gd(e))}saveEventToCache(e){this.cachedEventUids.add(Gd(e)),this.lastProcessedEventTime=Date.now()}}function Gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function AC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e={}){return pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SC=/^https?/;async function CC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RC(t);for(const n of e)try{if(PC(n))return}catch{}Kt(t,"unauthorized-domain")}function PC(t){const e=vl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!SC.test(n))return!1;if(bC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=new ji(3e4,6e4);function Qd(){const t=on().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NC(t){return new Promise((e,n)=>{function r(){Qd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qd(),n(sn(t,"network-request-failed"))},timeout:kC.get()})}if(on().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(on().gapi?.load)r();else{const s=SS("iframefcb");return on()[s]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},k_(`${bS()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Oo=null,e})}let Oo=null;function OC(t){return Oo=Oo||NC(t),Oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new ji(5e3,15e3),VC="__/auth/iframe",xC="emulator/auth/iframe",LC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FC(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Iu(e,xC):`https://${t.config.authDomain}/${VC}`,r={apiKey:e.apiKey,appName:t.name,v:Br},s=MC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xi(r).slice(1)}`}async function UC(t){const e=await OC(t),n=on().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:FC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=sn(t,"network-request-failed"),c=on().setTimeout(()=>{i(a)},DC.get());function l(){on().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jC=500,$C=600,HC="_blank",qC="http://localhost";class Yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zC(t,e,n,r=jC,s=$C){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...BC,width:r.toString(),height:s.toString(),top:i,left:a},h=gt().toLowerCase();n&&(c=w_(h)?HC:n),T_(h)&&(e=e||qC,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[v,P])=>`${g}${v}=${P},`,"");if(_S(h)&&c!=="_self")return KC(e||"",c),new Yd(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Yd(p)}function KC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="__/auth/handler",GC="emulator/auth/handler",QC=encodeURIComponent("fac");async function Jd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:s};if(e instanceof D_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",BI(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Hi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${QC}=${encodeURIComponent(l)}`:"";return`${YC(t)}?${xi(c).slice(1)}${h}`}function YC({config:t}){return t.emulator?Iu(t,GC):`https://${t.authDomain}/${WC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="webStorageSupport";class JC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F_,this._completeRedirectFn=TC,this._overrideRedirectResult=yC}async _openPopup(e,n,r,s){Sn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Jd(e,n,r,vl(),s);return zC(e,i,Su())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jd(e,n,r,vl(),s);return eC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UC(e),r=new wC(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pc,{type:Pc},s=>{const i=s?.[0]?.[Pc];i!==void 0&&n(!!i),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C_()||I_()||Au()}}const XC=JC;var Xd="@firebase/auth",Zd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function t0(t){xr(new ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P_(t)},h=new wS(r,s,i,l);return DS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new ir("auth-internal",e=>{const n=Ma(e.getProvider("auth").getImmediate());return(r=>new ZC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Xd,Zd,e0(t)),nn(Xd,Zd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=300,r0=Kg("authIdTokenMaxAge")||n0;let ep=null;const s0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>r0)return;const s=n?.token;ep!==s&&(ep=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function i0(t=Jl()){const e=Ia(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OS(t,{popupRedirectResolver:XC,persistence:[lC,JS,F_]}),r=Kg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=s0(i.toString());GS(n,a,()=>a(n.currentUser)),WS(n,c=>a(c))}}const s=Hg("auth");return s&&VS(n,`http://${s}`),n}function o0(){return document.getElementsByTagName("head")?.[0]??document}AS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",o0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});t0("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="firebasestorage.googleapis.com",a0="storageBucket",c0=120*1e3,l0=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends un{constructor(e,n,r=0){super(kc(e),`Firebase Storage: ${n} (${kc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,hn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ln;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ln||(ln={}));function kc(t){return"storage/"+t}function u0(){const t="An unknown error occurred, please check the error payload for server response.";return new hn(ln.UNKNOWN,t)}function h0(){return new hn(ln.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function f0(){return new hn(ln.CANCELED,"User canceled the upload/download.")}function d0(t){return new hn(ln.INVALID_URL,"Invalid URL '"+t+"'.")}function p0(t){return new hn(ln.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tp(t){return new hn(ln.INVALID_ARGUMENT,t)}function K_(){return new hn(ln.APP_DELETED,"The Firebase app was deleted.")}function g0(t){return new hn(ln.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(r.path==="")return r;throw p0(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function h(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),P={bucket:1,path:3},N=n===z_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",$=new RegExp(`^https?://${N}/${s}/${O}`,"i"),U=[{regex:c,indices:l,postModify:i},{regex:v,indices:P,postModify:h},{regex:$,indices:{bucket:1,path:2},postModify:h}];for(let j=0;j<U.length;j++){const Z=U[j],oe=Z.regex.exec(e);if(oe){const b=oe[Z.indices.bucket];let y=oe[Z.indices.path];y||(y=""),r=new $t(b,y),Z.postModify(r);break}}if(r==null)throw d0(e);return r}}class m0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t,e,n){let r=1,s=null,i=null,a=!1,c=0;function l(){return c===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(v,l())},O)}function g(){i&&clearTimeout(i)}function v(O,...$){if(h){g();return}if(O){g(),f.call(null,O,...$);return}if(l()||a){g(),f.call(null,O,...$);return}r<64&&(r*=2);let U;c===1?(c=2,U=0):U=(r+Math.random())*1e3,p(U)}let P=!1;function N(O){P||(P=!0,g(),!h&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{a=!0,N(!0)},n),N}function y0(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){return t!==void 0}function np(t,e,n,r){if(r<e)throw tp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tp(`Invalid value for '${t}'. Expected ${n} or less.`)}function E0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ra;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ra||(ra={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r,s,i,a,c,l,h,f,p,g=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,N)=>{this.resolve_=P,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new yo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===ra.NO_ERROR,l=i.getStatus();if(!c||T0(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ra.ABORT;r(!1,new yo(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new yo(h,i))})},n=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());v0(l)?i(l):i()}catch(l){a(l)}else if(c!==null){const l=u0();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(s.canceled){const l=this.appDelete_?K_():f0();a(l)}else{const l=h0();a(l)}};this.canceled_?n(!1,new yo(!1,null,!0)):this.backoffId_=_0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&y0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function w0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function A0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function R0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function b0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function S0(t,e,n,r,s,i,a=!0,c=!1){const l=E0(t.urlParams),h=t.url+l,f=Object.assign({},t.headers);return R0(f,e),w0(f,n),A0(f,i),b0(f,r),new I0(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function P0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new sa(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P0(this._location.path)}get storage(){return this._service}get parent(){const e=C0(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new sa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw g0(e)}}function rp(t,e){const n=e?.[a0];return n==null?null:$t.makeFromBucketSpec(n,t)}function k0(t,e,n,r={}){t.host=`${e}:${n}`;const s=Ur(e);s&&(Wl(`https://${t.host}/b`),Gl("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Wg(i,t.app.options.projectId))}class N0{constructor(e,n,r,s,i,a=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=z_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c0,this._maxUploadRetryTime=l0,this._requests=new Set,s!=null?this._bucket=$t.makeFromBucketSpec(s,this._host):this._bucket=rp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=rp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){np("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){np("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sa(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new m0(K_());{const a=S0(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const sp="@firebase/storage",ip="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="storage";function O0(t=Jl(),e){t=Pn(t);const r=Ia(t,W_).getImmediate({identifier:e}),s=qg("storage");return s&&D0(r,...s),r}function D0(t,e,n,r={}){k0(t,e,n,r)}function V0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new N0(n,r,s,e,Br)}function x0(){xr(new ir(W_,V0,"PUBLIC").setMultipleInstances(!0)),nn(sp,ip,""),nn(sp,ip,"esm2020")}x0();const L0={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"},Pu=Yg(L0),gP=$b(Pu),mP=i0(Pu);O0(Pu);const Nc=!1,Oc={uid:"admin123",email:"admin@camperrental.com",displayName:"Administrador",photoURL:null,isAdmin:!0},M0=eT("auth",{state:()=>({user:null,loading:!1,error:null}),getters:{isAuthenticated:t=>!!t.user,currentUser:t=>t.user},actions:{init(){console.log("Usando datos de ejemplo para autenticación")},async register(t,e,n){this.loading=!0,this.error=null;try{Nc||(this.user={uid:`user_${Date.now()}`,email:t,displayName:n,photoURL:null,isAdmin:!1},console.log("Usuario registrado (simulado):",this.user))}catch(r){throw this.error=r.message||"Error al registrar usuario",console.error("Error de registro:",r),r}finally{this.loading=!1}},async login(t,e){this.loading=!0,this.error=null;try{if(!Nc){if(await new Promise(n=>setTimeout(n,1e3)),t!==Oc.email)throw{code:"auth/not-admin"};if(!e||e.length<6)throw{code:"auth/wrong-password"};return this.user=Oc,Oc}}catch(n){throw this.error=this.handleAuthError(n.code),n}finally{this.loading=!1}},async logout(){try{Nc||await new Promise(t=>setTimeout(t,500)),this.user=null}catch(t){throw this.error=this.handleAuthError(t.code),t}},handleAuthError(t){switch(t){case"auth/email-already-in-use":return"Este correo electrónico ya está en uso";case"auth/invalid-email":return"Correo electrónico inválido";case"auth/user-disabled":return"Usuario deshabilitado";case"auth/user-not-found":return"Usuario no encontrado";case"auth/wrong-password":return"Contraseña incorrecta";case"auth/weak-password":return"La contraseña debe tener al menos 6 caracteres";case"auth/not-admin":return"Solo el administrador puede iniciar sesión";default:return"Error de autenticación"}}}}),F0={class:"navbar"},U0={class:"navbar-container"},B0={class:"navbar-logo"},j0={class:"navbar-start"},$0={class:"navbar-end"},H0={key:0,class:"navbar-item has-dropdown"},q0={class:"navbar-link"},z0={class:"navbar-dropdown"},K0=Oi({__name:"AppNavbar",setup(t){const e=aI(),n=M0(),{isAuthenticated:r,currentUser:s}=tT(n),i=ki(!1),a=()=>{i.value=!i.value},c=()=>{i.value=!1},l=async()=>{try{await n.logout(),e.push("/"),c()}catch(f){console.error("Error al cerrar sesión:",f)}},h=wt(()=>s.value?.displayName||"Usuario");return(f,p)=>{const g=Fl("router-link");return kr(),Uo("nav",F0,[me("div",U0,[me("div",B0,[Ne(g,{to:"/",onClick:c},{default:St(()=>p[0]||(p[0]=[me("span",{class:"logo-text"},"🚐",-1)])),_:1,__:[0]})]),me("div",{class:"navbar-toggle",onClick:a},p[1]||(p[1]=[me("span",null,null,-1),me("span",null,null,-1),me("span",null,null,-1)])),me("div",{class:ua(["navbar-menu",{"is-active":i.value}])},[me("div",j0,[p[4]||(p[4]=me("span",{class:"navbar-item brand-text"},[Ut("TuCamper"),me("span",{class:"brand-highlight"},".com")],-1)),Ne(g,{to:"/",class:"navbar-item navbar-item-bold",onClick:c},{default:St(()=>p[2]||(p[2]=[Ut("Inicio",-1)])),_:1,__:[2]}),Ne(g,{to:"/mis-reservas",class:"navbar-item navbar-item-bold",onClick:c},{default:St(()=>p[3]||(p[3]=[Ut("Mis Reservas",-1)])),_:1,__:[3]})]),me("div",$0,[Cr(r)?(kr(),Uo("div",H0,[me("a",q0,Sl(h.value),1),me("div",z0,[Ne(g,{to:"/administracion",class:"navbar-item"},{default:St(()=>p[5]||(p[5]=[Ut("Panel de Control",-1)])),_:1,__:[5]}),me("a",{class:"navbar-item",onClick:l},"Cerrar sesión")])])):(kr(),jl(g,{key:1,to:"/acceso",class:"navbar-item",onClick:c},{default:St(()=>p[6]||(p[6]=[Ut("Área de Administración",-1)])),_:1,__:[6]}))])],2)])])}}}),G_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},W0=G_(K0,[["__scopeId","data-v-0025b1e0"]]),G0={class:"footer"},Q0={class:"footer-container"},Y0={class:"footer-section"},J0={class:"footer-section"},X0={class:"footer-bottom"},Z0=Oi({__name:"AppFooter",setup(t){return(e,n)=>{const r=Fl("router-link");return kr(),Uo("footer",G0,[me("div",Q0,[n[7]||(n[7]=me("div",{class:"footer-section"},[me("h3",null,"TuCamper.com"),me("p",null,"Tu destino para alquilar campers y autocaravanas de calidad. Explora la libertad de viajar a tu ritmo.")],-1)),me("div",Y0,[n[3]||(n[3]=me("h3",null,"Enlaces rápidos",-1)),me("ul",null,[me("li",null,[Ne(r,{to:"/"},{default:St(()=>n[0]||(n[0]=[Ut("Inicio",-1)])),_:1,__:[0]})]),me("li",null,[Ne(r,{to:"/acceso"},{default:St(()=>n[1]||(n[1]=[Ut("Área de Administración",-1)])),_:1,__:[1]})]),me("li",null,[Ne(r,{to:"/mis-reservas"},{default:St(()=>n[2]||(n[2]=[Ut("Mis Reservas",-1)])),_:1,__:[2]})])])]),me("div",J0,[n[6]||(n[6]=me("h3",null,"Legal",-1)),me("ul",null,[me("li",null,[Ne(r,{to:"/politica-privacidad"},{default:St(()=>n[4]||(n[4]=[Ut("Política de Privacidad",-1)])),_:1,__:[4]})]),me("li",null,[Ne(r,{to:"/politica-cookies"},{default:St(()=>n[5]||(n[5]=[Ut("Política de Cookies",-1)])),_:1,__:[5]})])])]),n[8]||(n[8]=rE('<div class="footer-section" data-v-24d77a5e><h3 data-v-24d77a5e>Contacto</h3><ul data-v-24d77a5e><li data-v-24d77a5e>Email: info@tucamper.com</li><li data-v-24d77a5e>Teléfono: +34 123 456 789</li><li data-v-24d77a5e>Dirección: Calle Principal 123, Madrid</li></ul></div><div class="footer-section" data-v-24d77a5e><h3 data-v-24d77a5e>Síguenos</h3><div class="social-links" data-v-24d77a5e><a href="#" aria-label="Facebook" data-v-24d77a5e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-24d77a5e><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-24d77a5e></path></svg></a><a href="#" aria-label="Twitter" data-v-24d77a5e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-24d77a5e><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-24d77a5e></path></svg></a><a href="#" aria-label="Instagram" data-v-24d77a5e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-24d77a5e><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-24d77a5e></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-24d77a5e></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-24d77a5e></line></svg></a></div></div>',2))]),me("div",X0,[me("p",null,"© "+Sl(new Date().getFullYear())+" TuCamper.com. Todos los derechos reservados.",1)])])}}}),eP=G_(Z0,[["__scopeId","data-v-24d77a5e"]]),tP={class:"app"},nP={class:"main-content"},rP=Oi({__name:"App",setup(t){return(e,n)=>{const r=Fl("router-view");return kr(),Uo("div",tP,[Ne(W0),me("main",nP,[Ne(r,null,{default:St(({Component:s})=>[Ne(EE,{name:"fade",mode:"out-in"},{default:St(()=>[(kr(),jl(Av(s)))]),_:2},1024)]),_:1})]),Ne(eP)])}}}),ku=zE(rP);ku.use(GE());ku.use(Ug);ku.mount("#app");export{gP as A,dP as B,hP as C,pP as D,Jt as F,G_ as _,me as a,rE as b,Uo as c,Oi as d,Ne as e,Ut as f,iP as g,kr as h,oP as i,M0 as j,ki as k,lP as l,wt as m,aI as n,Gp as o,cP as p,sP as q,Fl as r,tT as s,Sl as t,Cr as u,aP as v,St as w,ua as x,eT as y,fP as z};
