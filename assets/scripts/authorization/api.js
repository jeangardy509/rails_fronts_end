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

const createBudgets = function (data) {
  console.log(data)
  data = {
    budget: data
  }
  return $.ajax({
    url: config.apiOrigin + '/budgets',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getBudgets = function () {
  return $.ajax({
    url: config.apiOrigin + '/budgets',
    method: 'GET',
    contentType: 'application/json',
    Authorization: 'Token token=' + store.user.token
  })
}

const clearBudgets = function () {
  return $.ajax({
    url: config.apiOrigin + '/budgets'
  })
}

const updateBudgets = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/budgets/' + data.budgets.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const removeBudgets = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/budgets/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  onChangePassword,
  createBudgets,
  getBudgets,
  clearBudgets,
  removeBudgets,
  updateBudgets
}
