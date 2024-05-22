const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 8564,
		open: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx']
	},
	devtool: 'inline-source-map',
};
