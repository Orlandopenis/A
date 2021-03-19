console.log('Summonando a bot ALBEDO...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('ALBEDO BOT', {
  font: 'block',
  align: 'center',
  gradient: ['red', 'magenta']
})
start('denz.js')
