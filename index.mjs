// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t,{ndarray as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.1.0-esm/index.mjs";import n,{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@v0.1.0-esm/index.mjs";function d(r,t,e,n,s,d,f,m){var o,c,l;if(o={arity:0,fcn:null},f){if(0===t&&0===s)return c=i(r)?r.get(e):r[e],l=i(n)?n.get(d):n[d],o.fcn=a.factory(c,l,m),o;o.fcn=a.factory(m)}else o.fcn=a;return o.arity+=2,o}function f(r,e,s,i,a,f,m,o){var c=d(e,s,0,i,a,0,arguments.length>7,o);return 0===c.arity?(t([f],[r],[m],c.fcn),f):(n([e,i,f],[r],[s,a,m],c.fcn),f)}function m(r,t,n,i,a,f,m,o,c,l,j){var y=d(t,n,i,a,f,m,arguments.length>10,j);return 0===y.arity?(e([o],[r],[c],[l],y.fcn),o):(s([t,a,o],[r],[n,f,c],[i,m,l],y.fcn),o)}r(f,"ndarray",m);export{f as default,m as ndarray};
//# sourceMappingURL=index.mjs.map
