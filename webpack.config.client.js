const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/client/index.ts",
    output: {
        path: path.resolve(__dirname, "./dist/templates"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: [
                                path.resolve(
                                    __dirname,
                                    "src/client/scss/global.scss"
                                ),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(png|gif)$/,
                loader: "url-loader",
                options: {
                    esModule: false,
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts", ".vue", ".json"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@client": path.resolve(__dirname, "src/client"),
            "@server": path.resolve(__dirname, "src/server"),
            "@common": path.resolve(__dirname, "src/common"),
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/client/index.html",
        }),
    ],
};
