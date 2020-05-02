# `Iuliia`

> Transliterate Cyrillic → Latin in every possible way

> This is the TypeScript port of the Python [iuliia](https://github.com/nalgeon/iuliia-py) package

[![NPM Version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Quality][quality-image]][quality-url]

Transliteration means representing Cyrillic data (mainly names and geographic locations) with Latin letters. It is used for international passports, visas, green cards, driving licenses, mail and goods delivery etc.

`Iuliia` makes transliteration as easy as:

```js
> import iuliia from "iuliia";
> iuliia.translate("Юлия Щеглова", iuliia.WIKIPEDIA);
'Yuliya Shcheglova'
```

## Why use `Iuliia`

-   [20 transliteration schemas](https://github.com/nalgeon/iuliia) (rule sets), including all main international and Russian standards.
-   Correctly implements not only the base mapping, but all the special rules for letter combinations and word endings.
-   Simple API and zero third-party dependencies.

For schema details and other information, see <https://dangry.ru/iuliia> (in Russian).

[Issues and limitations](https://github.com/nalgeon/iuliia/blob/master/README.md#issues-and-limitations)

## Installation

```sh
npm install iuliia
```

## Usage

ES2015 JavaScript:

```js
import iuliia from "iuliia";

// list all supported schemas
for (let schemaName of iuliia.Schemas.names()) {
    console.log(schemaName);
}

// transliterate using specified schema
let source = "Юлия Щеглова";
iuliia.translate(source, iuliia.ICAO_DOC_9303);
// "Iuliia Shcheglova"

// or pick schema by name
let schema = iuliia.Schemas.get("wikipedia");
iuliia.translate(source, schema);
// "Yuliya Shcheglova"
```

ES5 browser JavaScript:

```html
<script src="https://unpkg.com/iuliia@latest/dist/umd/iuliia.min.js"></script>
<script>
    var source = "Юлия Щеглова";
    var result = iuliia.translate(source, iuliia.WIKIPEDIA);
    console.log(result);
</script>
```

Supported schemas:

```
ala_lc          iuliia.ALA_LC
ala_lc_alt      iuliia.ALA_LC_ALT
bgn_pcgn        iuliia.BGN_PCGN
bgn_pcgn_alt    iuliia.BGN_PCGN_ALT
bs_2979         iuliia.BS_2979
bs_2979_alt     iuliia.BS_2979_ALT
gost_779        iuliia.GOST_779
gost_779_alt    iuliia.GOST_779_ALT
gost_7034       iuliia.GOST_7034
gost_16876      iuliia.GOST_16876
gost_16876_alt  iuliia.GOST_16876_ALT
gost_52290      iuliia.GOST_52290
gost_52535      iuliia.GOST_52535
icao_doc_9303   iuliia.ICAO_DOC_9303
iso_9_1954      iuliia.ISO_9_1954
iso_9_1968      iuliia.ISO_9_1968
iso_9_1968_alt  iuliia.ISO_9_1968_ALT
mosmetro        iuliia.MOSMETRO
mvd_310         iuliia.MVD_310
mvd_310_fr      iuliia.MVD_310_FR
mvd_782         iuliia.MVD_782
scientific      iuliia.SCIENTIFIC
telegram        iuliia.TELEGRAM
ungegn_1987     iuliia.UNGEGN_1987
wikipedia       iuliia.WIKIPEDIA
yandex_maps     iuliia.YANDEX_MAPS
yandex_money    iuliia.YANDEX_MONEY
```

## Development setup

```sh
$ npm install
$ npm run format && npm run lint && npm test && npm run build
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Make sure to add or update tests as appropriate.

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) for commit messages.

## [Changelog](CHANGELOG.md)

## License

[MIT](https://choosealicense.com/licenses/mit/)

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/iuliia?style=flat-square
[npm-url]: https://www.npmjs.com/package/iuliia
[build-image]: https://img.shields.io/travis/nalgeon/iuliia-js?style=flat-square
[build-url]: https://travis-ci.org/nalgeon/iuliia-js
[coverage-image]: https://img.shields.io/coveralls/github/nalgeon/iuliia-js?style=flat-square
[coverage-url]: https://coveralls.io/github/nalgeon/iuliia-js
[quality-image]: https://img.shields.io/codeclimate/maintainability/nalgeon/iuliia-js?style=flat-square
[quality-url]: https://codeclimate.com/github/nalgeon/iuliia-js
