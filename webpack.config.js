const path = require("path")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = "development"
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
]

if (process.env.NODE_ENV === "production") {
    mode = "production"
}
if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
    mode: mode,
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x$/i,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sc|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""}
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },

    plugins: plugins,

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    devtool: "source-map",
    devServer: {
        port: 3000,
        static: "./dist",
        hot: true
    }
}