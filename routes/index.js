'use strict'

const util = require('./service');
const router = require('express').Router();

// @route POST api/items
// @desc Create an item
router.post('/expenses', (req, res, next) => {
  const data = req.body;
  util.createExpense(data);
  res.cookie('expensiveCookie', data);
  res.send(data);
});

router.get('/test', (req, res) => {
  res.cookie('expensiveCookie', 'yum');
  res.send('hello');
})
module.exports = router;