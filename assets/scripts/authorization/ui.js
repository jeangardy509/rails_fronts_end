'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Account Successfully created')
  $('#message').css('background-color', 'green')
  $('#message').css('color', 'white')
  console.log('successfully created an Account')
  console.log(data)
}

module.exports = {
  signUpSuccess
}
