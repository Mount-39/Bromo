"use strict";

const chalk = require('chalk');

module.exports.info       = chalk.yellow;
module.exports.link       = chalk.blue.italic;
module.exports.number     = chalk.bold.green;
module.exports.error      = chalk.bgBlack.red.bold;
module.exports.important  = chalk.bgMagenta.white.bold;
