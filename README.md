# simplify-string [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Create a primitive representation of a string

I use this lib in browser and in node. The goal is to remove all special chars from a string for different use cases. Create a human readable or SEO url tag from string. Create filenames and much more. I personally use it to create search index from strings and search user input strings from GUI passed through ```simplifyString``` to search with "some" kind of "more" fuzzy. It is especially interesting when u use firebase andwant to provide a full text search.
## Installation

```sh
$ npm i --save simplify-string
```

## Usage

```js
require("should");
var simplifyString = require("simplify-string");

describe("simplify-string", function () {
  it("should simplify a string", function () {
    simplifyString("üöäÜÖÄ").should.equal("uoauoa");
    simplifyString("andrè").should.equal("andre");
    simplifyString("a ûnîcôrn likes honey").should.equal("aunicornlikeshoney");
  });
});
```
## License

MIT © [s-a](https://github.com/s-a)


[npm-image]: https://badge.fury.io/js/simplify-string.svg
[npm-url]: https://npmjs.org/package/simplify-string
[travis-image]: https://travis-ci.org/s-a/simplify-string.svg?branch=master
[travis-url]: https://travis-ci.org/s-a/simplify-string
[daviddm-image]: https://david-dm.org/s-a/simplify-string.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/s-a/simplify-string
[coveralls-image]: https://coveralls.io/repos/s-a/simplify-string/badge.svg
[coveralls-url]: https://coveralls.io/r/s-a/simplify-string
