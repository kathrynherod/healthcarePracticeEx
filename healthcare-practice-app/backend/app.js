const express = require('express');
const providersData = require('./providers');
const membersData = require('./members');

const app = express();

//Only need to set headers for 2 app approach and not the integrated app approach
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  next();
});

app.get('/api/providers', (req, res, next) => {
  res.status(200).json(providersData);
});

app.get('/api/members', (req, res, next) => {
  res.status(200).json(membersData);
});

module.exports = app;
