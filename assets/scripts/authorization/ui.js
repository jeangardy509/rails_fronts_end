'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up').text('Account Successfully created')
  $('#sign-up').css('background-color', 'green')
  $('#sign-up').css('color', 'white')
  console.log('successfully created an Account')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#sign-up').text('Sorry fail to Sign Up!')
  $('#sign-up').css('background-color', 'red')
  $('#sign-up').css('color', 'white')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#sign-in').text('Sign in Successfully ' + data.user.id)
  $('#sign-in').css('background-color', 'green')
  $('#sign-in').css('color', 'white')
  console.log(data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#sign-in').text('Error Signing in, please try again!')
  $('#sign-in').css('background-color', 'red')
  $('#sign-in').css('color', 'white')
  console.log(error)
}

const signOutSuccess = function (data) {
  $('#message').text('You have Successfully sign out')
  $('#message').css('background-color', 'green')
  $('#message').css('color', 'white')
  console.log(data)
}
const signOutFailure = function (error) {
  $('#message').text('Something went wrong, please try again!')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  console.log(error)
}

const changePasswordSuccess = function (error) {
  $('#message').text('Password successfully change!')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  console.log(error)
}

const changePasswordFailure = function (error) {
  $('#message').text('Was not able to cahnge password, plase try again!')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
