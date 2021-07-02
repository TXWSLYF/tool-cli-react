const pkg = require("./package.json");
const InsertCodePlugin = require("./plugins/InsertCode");

// tool-container 全局定义的工具定义函数
const TOOL_LOADER_DEFINE = "TOOL_LOADER_DEFINE";

const name = pkg.name;
const version = pkg.version;

const header = `
(function() {
`;

const footer = `
window['${TOOL_LOADER_DEFINE}'] &&
window['${TOOL_LOADER_DEFINE}'].define &&
window['${TOOL_LOADER_DEFINE}'].define(
  '${name}',
  '${version}',
  ${name},
);
})();
`;

module.exports = {
  mode: "production",
  entry: `./src/index.js`,
  output: {
    filename: `${name}.min.js`,
    library: {
      name: pkg.name,
      type: "var",
    },
  },
  externals: {
    react: "React",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new InsertCodePlugin({
      header: header,
      footer: footer,
      filename: `${name}.min.js`,
    }),
  ],
};
