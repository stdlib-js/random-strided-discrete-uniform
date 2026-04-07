"use strict";var y=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var d=y(function(H,m){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-discrete-uniform/dist');function x(n,e,u,i,c,a,f,t){var r,v,s;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return g(n)?v=n.get(u):v=n[u],g(i)?s=i.get(a):s=i[a],r.fcn=q.factory(v,s,t),r;r.fcn=q.factory(t)}else r.fcn=q;return r.arity+=2,r}m.exports=x
});var h=y(function(I,p){
var O=require('@stdlib/strided-base-nullary/dist'),R=require('@stdlib/strided-base-binary/dist'),j=d();function w(n,e,u,i,c,a,f,t){var r=j(e,u,0,i,c,0,arguments.length>7,t);return r.arity===0?(O([a],[n],[f],r.fcn),a):(R([e,i,a],[n],[u,c,f],r.fcn),a)}p.exports=w
});var U=y(function(J,A){
var z=require('@stdlib/strided-base-nullary/dist').ndarray,B=require('@stdlib/strided-base-binary/dist').ndarray,C=d();function D(n,e,u,i,c,a,f,t,r,v,s){var l=C(e,u,i,c,a,f,arguments.length>10,s);return l.arity===0?(z([t],[n],[r],[v],l.fcn),t):(B([e,c,t],[n],[u,a,r],[i,f,v],l.fcn),t)}A.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=h(),F=U();E(k,"ndarray",F);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
