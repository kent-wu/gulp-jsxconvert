var jsxhint = require("jsxhint");
var through2 = require('through2');
var PluginError = require('gulp-util').PluginError;
var vinylFile = require('vinyl');

module.exports = function () {
  return through2.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new PluginError('gulp-jsxhint', 'Streaming not supported'));
      return cb();
    }

    jsxhint.transformJSX(file.path, {}, function (error, data) {
      var vfile = new vinylFile({
        path: file.path,
        contents: new Buffer(data)
      });

      this.push(vfile);

      cb();
    }.bind(this));
  });
};