const path = require("path");

module.exports = [
    // Main process
    {
        mode: "production",
        entry: "./src/main/main.ts",
        target: "electron-main",
        output: {
            path: path.resolve(__dirname, "dist/main"),
            filename: "main.js",
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        node: {
            __dirname: false,
            __filename: false,
        },
    },
    // Preload script
    {
        mode: "production",
        entry: "./src/main/preload.ts",
        target: "electron-preload",
        output: {
            path: path.resolve(__dirname, "dist/main"),
            filename: "preload.js",
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        node: {
            __dirname: false,
            __filename: false,
        },
    },
];
