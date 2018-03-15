const path = require('path'),
	path_js = path.resolve(__dirname, 'src', 'assets', 'js'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

const loaders = [
	{
		loader: 'babel-loader',
		options: {
			presets: ['env'],
			cacheDirectory: true
		}
	}
];

const plugins = [
	new UglifyJsPlugin({
		uglifyOptions: {
			compress: {
				pure_funcs: ['console.log']
			},
			mangle: false
		}
	})
];

const config = {
	entry: {
		app: ['babel-polyfill', path.join(path_js, 'app.jsx')]
	},
	output: {
		filename: path.join('assets', 'js', '[name].js'),
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: loaders
			}
		]
	},
	plugins: NODE_ENV === 'production' ? plugins : []
};

module.exports = config;
