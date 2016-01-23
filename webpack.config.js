module.exports = {
	entry: "./src/js/app.ts",

	output: {
		path: "./dist/js",
		filename: "client.js"
	},

	module: {
		loaders: [
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
		extensions: ["", ".ts"]
	}
};
