'use strict'

const util = require('./service');
const router = require('express').Router();

// @route POST api/items
// @desc Create an item
router.post('/expenses', (req, res, next) => {
  const result = util.createExpense((err, response, data) => {
    if(!err) {
      res.send(data);
    }
  });
});

module.exports = router;