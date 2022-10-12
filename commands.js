'use strict';

/**
 * Requires
 */
const __ = require('./words');
const helper = require('./helper');


/**
 * Commands
 */
module.exports = {
  /**
   * Fake a error promise
   *
   * @param {string} error Error Message
   *
   * @return {object} Rejected Request Promise
   */
  error(error) {
    return Promise.reject(new Error(error));
  },

  /**
   * Bench command
   *
   * @param {object} commandArguments Command Arguments
   *
   * @return {object} Request promise
   */
  b: function (commandArguments) {
    return Promise.resolve(helper.formatMessage('Бенч', 'путін' + __.randomize().join('') + 'бенч', []));
  },

  /**
   *
   *
   * @param {object} commandArguments Command Arguments
   *
   * @return {object} Request promise
   */
  pb(commandArguments) {
    return Promise.resolve(helper.formatMessage('ПроєБенч', 'путін' + __.randomize().join('') + 'проєбенч', []));
  }
};
