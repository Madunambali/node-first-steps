//console.log("Hello World!");


import {greet} from './greet.js'


console.log(greet('Ntombi'));

import chalk from 'chalk';
//import the greet module that is in the current folder
//import greet from './greet.js'

const styledMessage = chalk.bgRed.whiteBright(greet('Mbali Maduna'));
console.log(styledMessage)


import cowsay from 'cowsay';

console.log(chalk.bgYellow.white(cowsay.say({
    text: greet('Mbali')
})));

import figlet from 'figlet';

figlet("Hello Mbali!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });