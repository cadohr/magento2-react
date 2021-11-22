const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        productList:
            "./app/code/Microfrontend/React/view/frontend/web/js/productList/productList.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    output: {
        path: path.resolve(
            __dirname,
            "app",
            "code",
            "Microfrontend",
            "React",
            "view",
            "frontend",
            "web",
            "js",
            "dist"
        ),
        filename: "[name].js",
    },
};