/*
 * Notes:
 * - to run the local server which creates bundle.js on the fly, do:
 * 		webpack-dev-server --progress --colors 	
 * - to get webpck to actually build and write bundle.js to disk, do:
 * 		node_modules/.bin/webpack 
 *		Or add this to package.json and then do "npm run build":
 *		"scripts": {"build": "webpack"},
 */


var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: {path: __dirname, filename: 'bundle.js'},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
};