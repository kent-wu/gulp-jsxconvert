> gulp plugin, wrapper for jsxhint to transform jsx to js before run jshint.

## Getting Started
Gulp requires `~3.8.11`

Please check out this [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) to install gulp if you haven't used gulp before.
Then you may install this plugin with this command:

```shell
npm install gulp-jsxconvert --save
```

## Add "hint" task

### Overview
Once the plugin has been installed, add a 'hint' task to your project's gulpfile.js.

```js
var gulp   = require('gulp');
var jsxconvert = require("gulp-jsxconvert");
var jshint = require('gulp-jshint');
 
gulp.task('hint', function() {
  return gulp.src('./lib/*.js')
  	.pipe(jsxconvert())
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
```

## License
This projected is licensed under the terms of the MIT license.
