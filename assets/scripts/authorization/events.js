'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

// const store = ('./../store.js')

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

const onCreate = (event) => {
  event.preventDefault()
  const data = getFormFields(this)
  api.createBudgets(data)
  console.log('HELP ME!')
    .then(ui.createBudgetsSuccess)
    .catch(ui.createBudgetsFailure)
}

const onGetBudgets = (event) => {
  event.preventDefault()
  api.getBudgets()
    .then(ui.getBudgetsSuccess)
    .then(() => onGetBudgets(event))
    .catch(ui.failure)
  // $('#content').toggle()
}

const onClearBudgets = (event) => {
  event.preventDefault()
  ui.clearBudgets()
}

// const onUpdate = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.updaBudgets(data)
//     .then(ui.updateBudgetsSuccess)
//     .catch(ui.updateBudgetsFailure)
// }
const onUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateBudgets(data)
    .then(ui.updateBudgetsSuccess)
    .then(() => onGetBudgets(event))
    .catch(ui.updateBudgetsFailure)
  console.log('hello world')
}

const onRemoveBudgets = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.removeBudgets(id)
    .then(() => onGetBudgets(event))
    .catch(ui.failure)
    // .then(ui.deleteBudgetsSuccess)
    // .catch(ui.deleBudgetsfailure)
    // ui.remove(remove)
  console.log('Delete!')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#create').on('submit', onCreate)
  $('#getBudgetsButton').on('click', onGetBudgets)
  $('#clearBudgetsButton').on('click', onClearBudgets)
  $('#update-form').on('click', onUpdate)
  $('#content').on('click', '.delete', onRemoveBudgets)
}

module.exports = {
  addHandlers
}
