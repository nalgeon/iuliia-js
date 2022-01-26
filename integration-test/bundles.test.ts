import { readFile, stat } from "fs/promises";
import { join } from "path";
import { createContext, runInContext, runInNewContext } from "vm";
import webpack from "webpack";
import webpackConfig from "./webpack/webpack.config";

describe("CommonJS", () => {
    it("should load and execute a Node module", async () => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires

        const p = require.resolve("../");
        expect(p).toContain("dist/cjs/index.js");

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const iu = require("../");
        expect(iu.translate("Привет, мир!", iu.WIKIPEDIA)).toEqual("Privet, mir!");
    });
});

describe("UMD", () => {
    it("should load and execute an UMD bundle", async () => {
        const library = await readFile(join(__dirname, "../dist/umd/iuliia.js"), "utf8");
        const invocation = 'iuliia.translate("Привет, мир!", iuliia.WIKIPEDIA);';
        const res = runInNewContext(`${library}\n${invocation}`);
        expect(res).toEqual("Privet, mir!");
    });
});

describe("Webpack Tree-Shaking", () => {
    it("should create a tree-shaked bundle with only necesssary schemas included", async () => {
        const bundle = join(webpackConfig.output.path, webpackConfig.output.filename as string);
        await new Promise((res, rej) =>
            webpack(webpackConfig, (err, stats) => (err ? rej(err) : res(stats)))
        );

        const { size } = await stat(bundle);
        expect(size).toBeLessThan(5_700);
        expect(size).toBeGreaterThan(5_000);
        const contents = await readFile(bundle, "utf8");
        const matches = contents.match(/https:\/\/iuliia.ru\/([^/]+)/gim);
        expect(matches).toEqual(["https://iuliia.ru/mosmetro"]);

        const consoleLog = jest.fn();

        runInContext(
            await readFile(bundle, "utf8"),
            createContext({ console: { log: consoleLog } })
        );
        expect(consoleLog).toBeCalledWith("Privet, mir!");
    });
});
