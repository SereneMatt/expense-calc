'use strict'

// module used for making http request
const request = require('request');
// endpoint object
const config = require('../config/endpoint');

/**
 * @name createExpense
 * @description
 *  function to create expense
 * @param cb a callback function
 */
const createExpense = (cb) => {
  const url = config.basePath.concat('/v1/expenses');

  request.post(url, {
    json: {
      "spent_for":"croissant",
      "amount":"30.57",
      "pricy":"true"
    }
  }, (error, res, body) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)
  })
}

const serviceObject = {
  "createExpense": createExpense
}

module.exports = serviceObject;
