const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const JS_PATH = path.resolve(__dirname, 'src', 'assets', 'js');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: {
		app: ['@babel/polyfill', path.join(JS_PATH, 'app.jsx')],
	},

	output: {
		filename: path.join('assets', 'js', '[name].js'),
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: { cacheDirectory: true },
					},
				],
			},
		],
	},

	mode: NODE_ENV === 'production' ? NODE_ENV : 'development',

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				sourceMap: true,
				uglifyOptions: {
					compress: { pure_funcs: ['console.log'] },
					mangle: false,
				},
			}),
		],
		splitChunks: {
			cacheGroups: {
				default: false,
				vendor: {
					test: /\/node_modules\//,
					name: 'vendor_app',
					chunks: chunk => chunk.name !== 'prelogin',
					minChunks: 2,
				},
			},
		},
	},

	plugins: [],
};
