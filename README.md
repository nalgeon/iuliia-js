# `Iuliia`

> Transliterate Cyrillic → Latin in every possible way

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

-   19 transliteration schemas (rule sets), including all main international and Russian standards.
-   Correctly implements not only the base mapping, but all the special rules for letter combinations and word endings (AFAIK, Iuliia is the only library which does so).
-   Simple API and zero third-party dependencies.

Supports actual schemas:

-   ALA-LC (`iuliia.ALA_LC` and `iuliia.ALA_LC_ALT`)
-   BGN/PCGN (`iuliia.BGN_PCGN` and `iuliia.BGN_PCGN_ALT`)
-   BS 2979:1958 (`iuliia.BS_2979` and `iuliia.BS_2979_ALT`)
-   GOST R 52290-2004 (`iuliia.GOST_52290`)
-   GOST R 7.0.34-2014 (`iuliia.GOST_7034`)
-   ICAO DOC 9303 (`iuliia.ICAO_DOC_9303`)
-   ISO 9:1995 aka GOST 7.79-2000 (`iuliia.GOST_779` and `iuliia.GOST_779_ALT`)
-   UNGEGN 1987 V/18 (`iuliia.UNGEGN_1987`)
-   Scientific (`iuliia.SCIENTIFIC`)
-   Telegram (`iuliia.TELEGRAM`)
-   Wikipedia (`iuliia.WIKIPEDIA`)
-   Yandex.Maps (`iuliia.YANDEX_MAPS`)
-   Yandex.Money (`iuliia.YANDEX_MONEY`)

And deprecated ones:

-   GOST 16876-71 (`iuliia.GOST_16876` and `iuliia.GOST_16876_ALT`)
-   GOST R 52535.1-2006 (`iuliia.GOST_52535`)
-   ISO/R 9:1954 (`iuliia.ISO_9_1954`)
-   ISO/R 9:1968 (`iuliia.ISO_9_1968` and `iuliia.ISO_9_1968_ALT`)
-   MVD 310-1997 (`iuliia.MVD_310` and `iuliia.MVD_310_FR`)
-   MVD 782-2000 (`iuliia.MVD_782`)

Known issues:

-   _BS 2979:1958_. This schema defines two alternative translations for `Ы`: `Ы` → `Ȳ` (used by the Oxford University Press) and `Ы` → `UI` (used by the British Library). `iuliia` uses `Ы` → `Ȳ`.
-   _GOST R 7.0.34-2014_. This schema defines alternatives for many letters, but does not specify when to use which. Therefore, `iuliia` uses the first of suggested translations for each such letter.
-   _MVD-310_. This schema defines "`С` between two vowels → `SS`" rule. There is no such rule in other schemas, and MVD-310 itself is deprecated, so I decided to ignore this specific rule for the sake of code simplicity.

For schema details and other information, see <https://dangry.ru/iuliia> (in Russian).

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
