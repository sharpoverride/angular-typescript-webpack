module.exports = {
	entry: "./src/js/app.ts",

	output: {
		path: "./dist/js",
		filename: "client.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ["es2015"]
				}
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.ts$/,
				loader: "ts-loader"
			}
		]
	},

	resolve: {
		extensions: ["", ".js", ".ts"]
	}
};