// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    optimization: {
        minimize: true,
        innerGraph: true,
        usedExports: true,
    },
};
