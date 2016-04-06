'use strict';
const config = require('./server/config');
const colors = require('./server/colors');

const Express = require('express');
const parser = require('body-parser');

const app = Express();
const port = (+process.env.PORT) || config.PORT;

/*
 * TODO babelrc
 *
 * TODO hot-reload
 *
 * TODO webpack config
 *
 * TODO webpack middleware
 *
 * TODO bodyParser middleware
 *
 * TODO eslintrc
 * */

app.listen(port, err => {
  if (err) {
    console.log(
      colors.error('There is an error while trying to' +
        ' listen to port ' + port) + '\n'
    );
  } else {
    console.log(
      colors.info('Your app is almost ready now') + '\n' +
      colors.info('Just wait until webpack build the bundle for you') +
      '\n\n' +
      colors.important('PORT') + ' ' +
      colors.number(port) + '\n\n' +
      colors.important('LINK') + ' ' +
      colors.link('http://localhost:' + port) + '\n\n'
    );
  }
});