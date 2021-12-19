/* eslint-disable import/no-extraneous-dependencies */
import { exec } from 'child_process';
import gulp from 'gulp';
import replace from 'gulp-replace';

gulp.task('svgr', (cb) => {
  exec('yarn icons', (err) => {
    cb(err);
  });
});

gulp.task('icon-tsx-file-changes', () => {
  const comment = '// this is a generated file, do not make any changes\n';

  return gulp
    .src(['src/assets/cases/*.tsx'])
    .pipe(replace("import * as React from 'react';", `${comment}import React from 'react';`))
    .pipe(replace('SvgProps)', 'SvgProps): JSX.Element'))
    .pipe(replace(/fill=["']#.*?["']/g, "fill='currentColor'"))
    .pipe(replace(/stroke=["']#.*?["']/g, "stroke='currentColor'"))
    .pipe(gulp.dest('src/assets/cases'));
});

gulp.task('default', gulp.series(['svgr', 'icon-tsx-file-changes']));
