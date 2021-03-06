const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {rules: [
    {
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader"
    },
    {
        test: /\.scss$/,
        use: [ { loader: "style-loader" },
          { loader: "css-loader" } ,
          {
                    loader: "sass-loader"
                }
          ]
      }
  ]
},
 resolve: {
    extensions: ['.tsx', '.ts', '.js','.scss'],
},
  plugins: []
};   