/* eslint-disable @typescript-eslint/no-var-requires */

const { ok, deepStrictEqual } = require("assert");
const { stat, readFile } = require("fs/promises");
const { join } = require("path");

const BUNDLE = join(__dirname, "dist", "bundle.js");

async function checkSize() {
    const { size } = await stat(BUNDLE);
    ok(size <= 19000, `Bundle is too big: ${size} bytes`);
}

async function checkContents() {
    const contents = await readFile(BUNDLE, "utf8");
    const matches = contents.match(/https:\/\/iuliia.ru\/([^/]+)/gim);
    ok(
        matches.length === 1,
        `There should be only one schema in the bundle. The following ${
            matches.length
        } schemas are found: ${matches.join(", ")}`
    );
}

function checkFunction() {
    const calls = [];
    const log = console.log;
    console.log = (...args) => {
        calls.push(args);
    };
    require(BUNDLE);
    console.log = log;

    deepStrictEqual(calls, [["Privet, mir!"]], "Bundle does not work");
}
const main = async () => {
    checkFunction();
    await checkContents();
    await checkSize();
};

main().catch((e) => {
    console.error(e.stack);
    process.exit(1);
});
