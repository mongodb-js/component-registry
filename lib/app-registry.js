'use strict';

const _ = require('lodash');
const Action = require('./actions');

/**
 * Is a registry for all user interface components, stores, and actions
 * in the application.
 */
class AppRegistry {

  /**
   * Instantiate the registry.
   */
  constructor() {
    this.actions = {};
    this.components = {};
    this.stores = {};
  }

  /**
   * Deregister an action.
   *
   * @param {String} name - The action to deregister.
   *
   * @returns {ComponentRegistry} This instance.
   */
  deregisterAction(name) {
    delete this.actions[name];
    Action.actionDeregistered(name);
    return this;
  }

  /**
   * Deregister a component.
   *
   * @param {String} name - The component to deregister.
   *
   * @returns {ComponentRegistry} This instance.
   */
  deregisterComponent(name) {
    delete this.components[name];
    Action.componentDeregistered(name);
    return this;
  }

  /**
   * Deregister a store.
   *
   * @param {String} name - The store to deregister.
   *
   * @returns {ComponentRegistry} This instance.
   */
  deregisterStore(name) {
    delete this.stores[name];
    Action.storeDeregistered(name);
    return this;
  }

  /**
   * Get an action for the name.
   *
   * @param {String} name - The action name.
   *
   * @returns {Action} The action.
   */
  getAction(name) {
    return this.actions[name];
  }

  /**
   * Get a component by name.
   *
   * @param {String} name - The component name.
   *
   * @returns {Component} The component.
   */
  getComponent(name) {
    return this.components[name];
  }

  /**
   * Get a store by name.
   *
   * @param {String} name - The store name.
   *
   * @returns {Store} The store.
   */
  getStore(name) {
    return this.stores[name];
  }

  /**
   * Register an action in the registry.
   *
   * @param {String} name - The name of the action.
   * @param {Action} action - The action.
   *
   * @returns {ComponentRegistry} This instance.
   */
  registerAction(name, action) {
    // Raise an error if action already registerd.
    this.actions[name] = action;
    Action.actionRegistered(name);
    return this;
  }

  /**
   * Register a component in the registry.
   *
   * @param {String} name - The name of the component.
   * @param {Component} component - The React Component.
   *
   * @returns {ComponentRegistry} This instance.
   */
  registerComponent(name, component) {
    // Raise an error if component already registerd.
    this.components[name] = component;
    Action.componentRegistered(name);
    return this;
  }

  /**
   * Register a store in the registry.
   *
   * @param {String} name - The name of the store.
   * @param {Store} store - The Reflux store.
   *
   * @returns {ComponentRegistry} This instance.
   */
  registerStore(name, store) {
    // Raise an error if store already registerd.
    this.stores[name] = store;
    Action.storeRegistered(name);
    return this;
  }

}

module.exports = AppRegistry;
