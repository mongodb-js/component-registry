'use strict';

const debug = require('debug')('hadron-app-registry:actions');
const Reflux = require('reflux');

/**
 * The action for an action being deregistered.
 */
const actionDeregistered = Reflux.createAction({

  /**
   * Log the action.
   *
   * @param {String} name - The action name.
   */
  preEmit: function(name) {
    debug(`Action ${name} deregistered.`);
  }
});

/**
 * The action for an action being registered.
 */
const actionRegistered = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {String} name - The action name.
   */
  preEmit: function(name) {
    debug(`Action ${name} registered.`);
  }
});

/**
 * The action for a component being deregistered.
 */
const componentDeregistered = Reflux.createAction({

  /**
   * Log the action.
   *
   * @param {String} name - The component name.
   */
  preEmit: function(name) {
    debug(`Component ${name} deregistered.`);
  }
});

/**
 * The action for a component being registered.
 */
const componentRegistered = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {String} name - The component name.
   */
  preEmit: function(name) {
    debug(`Component ${name} registered.`);
  }
});

/**
 * The action for a store being deregistered.
 */
const storeDeregistered = Reflux.createAction({

  /**
   * Log the action.
   *
   * @param {String} name - The store name.
   */
  preEmit: function(name) {
    debug(`Store ${name} deregistered.`);
  }
});

/**
 * The action for a store being registered.
 */
const storeRegistered = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {String} name - The store name.
   */
  preEmit: function(name) {
    debug(`Store ${name} registered.`);
  }
});

module.exports.actionDeregistered = actionDeregistered;
module.exports.actionRegistered = actionRegistered;
module.exports.componentDeregistered = componentDeregistered;
module.exports.componentRegistered = componentRegistered;
module.exports.storeDeregistered = storeDeregistered;
module.exports.storeRegistered = storeRegistered;
