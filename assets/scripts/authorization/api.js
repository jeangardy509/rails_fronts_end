'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/',
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onChangePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const createBudgets = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/budgets'
//   })
// }
//
// const getBudgets = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/budgets'
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  onChangePassword
  // createBudgets,
  // getBudgets
}
