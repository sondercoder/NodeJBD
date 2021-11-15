#!/usr/bin/env node
const cli = require('./cli');
const mqtt = require('./mqtt');
const jbd = require('./jbd');
const logger = require('./logger');

async function main() {

  logger.info('Starting NodeJBD...');

  const res = await jbd.getRegister3();

  console.log(res);
}

main();