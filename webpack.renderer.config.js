const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/renderer/index.tsx",
    target: "electron-renderer",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist/renderer"),
        filename: "renderer.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 8080,
        hot: true,
    },
};
