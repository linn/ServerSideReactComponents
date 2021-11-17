const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
        app: [
            'babel-polyfill',
            // 'react-hot-loader/patch', // activate HMR for React
             'webpack-dev-server/client?http://localhost:3000', // bundle the client for webpack-dev-server and connect to the provided endpoint
            // 'webpack/hot/only-dev-server', // bundle the client for hot reloading (only- means to only hot reload for successful updates)
            './index.js' // the entry point of our app
        ],
    },
	output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js',
        publicPath: '/build/'
    },
	devServer: {
        contentBase: __dirname
    },
	mode: 'development',
	// optimization: {
	// 	runtimeChunk: {
	// 		name: 'runtime', // necessary when using multiple entrypoints on the same page
	// 	},
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			commons: {
	// 				test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
	// 				name: 'vendor',
	// 				chunks: 'all',
	// 			},
	// 		},
	// 	},
	// },
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	}
};