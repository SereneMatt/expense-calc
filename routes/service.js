'use strict'

// module used for making http request
const request = require('request');
const config = require('../config/endpoint');
const rollbar = require('../config/rollbar');

/**
 * @name createExpense
 * @description
 *  function to create expense
 * @param cb a callback function
 */
const createExpense = (data) => {
  const url = config.basePath.concat('/v1/expenses');

  rollbar.error("New expense item created");
  request.post(url, {
    json: data.params
  }, (error, res, body) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(`statusCode: ${res.statusCode}`);
    console.log(body)
  })
}

const serviceObject = {
  createExpense: createExpense
}

module.exports = serviceObject;
