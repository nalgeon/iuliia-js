// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    optimization: {
        innerGraph: true,
        usedExports: true,
    },
    resolve: {
        alias: {
            iuliia: path.resolve(path.join(__dirname, "../../dist/esm")),
        },
    },
};
