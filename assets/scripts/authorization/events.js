'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const store = ('./../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('say hello world!')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('Welcome!')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('Thanks for signing out!')
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Password change!')
  api.onChangePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#getBudgetsButton').on('click', onGetBudgets)
  $('#clearBudgetsButton').on('click', onClearBudgets)
  $('ul').on('click', id, onRemove)
}

// handlebars
const onGetBudgets = (event) => {
  event.preventDefault()
  api.getBudgets()
    .then(ui.getBudgetsSuccess)
    .catch(ui.failure)
}

const onClearBudgets = (event) => {
  event.preventDefault()
  ui.clearBudgets()
}

const onRemove = (event) => {
  event.preventDefault()
  ui.remove()
  console.log('hello world!')
}

const id = event.target.dataset.id

module.exports = {
  addHandlers
}
