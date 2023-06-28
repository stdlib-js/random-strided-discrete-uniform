<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Discrete Uniform Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a strided array with pseudorandom numbers drawn from a [discrete uniform][@stdlib/random/base/uniform] distribution.



<section class="usage">

## Usage

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-discrete-uniform@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-discrete-uniform@deno/mod.js';
```

#### discreteUniform( N, a, sa, b, sb, out, so\[, options] )

Fills a strided array with pseudorandom numbers drawn from a [discrete uniform][@stdlib/random/base/uniform] distribution.

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';

// Create an array:
var out = new Int32Array( 10 );

// Fill the array with pseudorandom numbers:
discreteUniform( out.length, [ -10 ], 0, [ 10 ], 0, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **a**: minimum support.
-   **sa**: index increment for `a`.
-   **b**: maximum support.
-   **sb**: index increment for `b`.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
var out = [ 0, 0, 0, 0, 0, 0 ];

discreteUniform( 3, [ -10 ], 0, [ 10 ], 0, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';

// Initial arrays...
var a0 = new Int32Array( [ -10, -10, -10, 0, 0, 0 ] );
var b0 = new Int32Array( [ 10, 10, 10, 10, 10, 10 ] );

// Create offset views...
var a1 = new Int32Array( a0.buffer, a0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var b1 = new Int32Array( b0.buffer, b0.BYTES_PER_ELEMENT*3 ); // start at 4th element

// Create an output array:
var out = new Int32Array( 3 );

// Fill the output array:
discreteUniform( out.length, a1, -2, b1, 1, out, 1 );
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@deno/mod.js';

var opts = {
    'prng': minstd
};

var out = new Int32Array( 10 );
discreteUniform( out.length, [ -10 ], 0, [ 10 ], 0, out, 1, opts );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';

var opts = {
    'seed': 12345
};

var out = new Int32Array( 10 );
discreteUniform( out.length, [ -10 ], 0, [ 10 ], 0, out, 1, opts );
```

#### discreteUniform.ndarray( N, a, sa, oa, b, sb, ob, out, so, oo\[, options] )

Fills a strided array with pseudorandom numbers drawn from a [discrete uniform][@stdlib/random/base/uniform] distribution using alternative indexing semantics.

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';

// Create an array:
var out = new Int32Array( 10 );

// Fill the array with pseudorandom numbers:
discreteUniform.ndarray( out.length, [ -10 ], 0, 0, [ 10 ], 0, 0, out, 1, 0 );
```

The function has the following additional parameters:

-   **oa**: starting index for `a`.
-   **ob**: starting index for `b`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
var out = [ 0, 0, 0, 0, 0, 0 ];

discreteUniform.ndarray( 3, [ -10 ], 0, 0, [ 10 ], 0, 0, out, 2, 1 );
```

The function accepts the same `options` as documented above for `discreteUniform()`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave the output array unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@deno/mod.js';
import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@deno/mod.js';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@deno/mod.js';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-discrete-uniform@deno/mod.js';

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create an array:
var x1 = zeros( 10, 'int32' );

// Create a list of indices:
var idx = zeroTo( x1.length );

// Fill the array with pseudorandom numbers:
discreteUniform( x1.length, [ -10 ], 0, [ 10 ], 0, x1, 1, opts );

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
discreteUniform( x2.length, [ -10 ], 0, [ 10 ], 0, x2, 1, opts );

// Print the array contents:
logEach( 'x1[%d] = %d; x2[%d] = %d', idx, x1, idx, x2 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-strided-discrete-uniform.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-strided-discrete-uniform

[test-image]: https://github.com/stdlib-js/random-strided-discrete-uniform/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-strided-discrete-uniform/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-strided-discrete-uniform/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-strided-discrete-uniform?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-strided-discrete-uniform.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-strided-discrete-uniform/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-strided-discrete-uniform/tree/deno
[umd-url]: https://github.com/stdlib-js/random-strided-discrete-uniform/tree/umd
[esm-url]: https://github.com/stdlib-js/random-strided-discrete-uniform/tree/esm
[branches-url]: https://github.com/stdlib-js/random-strided-discrete-uniform/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-strided-discrete-uniform/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/random/base/uniform]: https://github.com/stdlib-js/random-base-uniform/tree/deno

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/deno

</section>

<!-- /.links -->
