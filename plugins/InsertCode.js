const { ConcatSource } = require("webpack-sources");

class InsertCode {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    const options = this.options;

    const header = options.header;
    const footer = options.footer;
    const filename = options.filename;

    compiler.hooks.compilation.tap("InsertCodePlugin", (compilation) => {
      compilation.hooks.optimizeChunkAssets.tap(
        "InsertCodePlugin",
        (chunks) => {
          for (const chunk of chunks) {
            for (const file of chunk.files) {
              if (file === filename) {
                compilation.assets[file] = new ConcatSource(
                  header,
                  compilation.assets[file],
                  footer
                );
              }
            }
          }
        }
      );
    });
  }
}

module.exports = InsertCode;
