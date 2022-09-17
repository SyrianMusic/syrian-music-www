#! /usr/bin/env node

const jwt = require('jsonwebtoken');

const clientSecret = process.argv[2];

const token = jwt.sign({}, clientSecret);
console.log(token);

process.exit(0);
