"use strict";var y=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var d=y(function(H,m){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-discrete-uniform/dist');function x(n,e,a,t,c,i,f,u){var r,v,s;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return g(n)?v=n.get(a):v=n[a],g(t)?s=t.get(i):s=t[i],r.fcn=q.factory(v,s,u),r;r.fcn=q.factory(u)}else r.fcn=q;return r.arity+=2,r}m.exports=x
});var h=y(function(I,p){
var O=require('@stdlib/strided-base-nullary/dist'),R=require('@stdlib/strided-base-binary/dist'),j=d();function w(n,e,a,t,c,i,f,u){var r=j(e,a,0,t,c,0,arguments.length>7,u);return r.arity===0?(O([i],[n],[f],r.fcn),i):(R([e,t,i],[n],[a,c,f],r.fcn),i)}p.exports=w
});var U=y(function(J,A){
var z=require('@stdlib/strided-base-nullary/dist').ndarray,B=require('@stdlib/strided-base-binary/dist').ndarray,C=d();function D(n,e,a,t,c,i,f,u,r,v,s){var l=C(e,a,t,c,i,f,arguments.length>10,s);return l.arity===0?(z([u],[n],[r],[v],l.fcn),u):(B([e,c,u],[n],[a,i,r],[t,f,v],l.fcn),u)}A.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=h(),F=U();E(k,"ndarray",F);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
