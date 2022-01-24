module.exports = {
    entry: "./src/index.ts",
    mode: "production",

    optimization: {
        minimize: true,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig.umd.json",
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    output: {
        filename: "umd/iuliia.js",
        library: {
            type: "umd",
            name: "iuliia",
        },
        globalObject: "this",
    },
};
