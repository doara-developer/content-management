const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/server/app.ts",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "app.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts", ".json"],
        alias: {
            "@client": path.resolve(__dirname, "src/client"),
            "@server": path.resolve(__dirname, "src/server"),
            "@common": path.resolve(__dirname, "src/common"),
        },
    },
};
