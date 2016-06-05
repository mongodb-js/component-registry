'use strict';

const React = require('react');
const Element = require('../element');
const Truncator = require('./truncator');

/**
 * Base 64 constant.
 */
const BASE_64 = 'base64';

/**
 * The new UUID type.
 */
const UUID = 4;

/**
 * The old UUID type.
 */
const UUID_OLD = 3;

/**
 * Component for binary types.
 */
class BinaryElement extends React.Component {

  /**
   * Render a binary element.
   */
  render() {
    return (
      <Element field={this.props.field} value={this._generateValue()} type={this.props.type} />
    );
  }

  /**
   * Generate the value for the binary data.
   *
   * @returns {String} The beautified binary value.
   */
  _generateValue() {
    var type = this.props.value.sub_type;
    var buffer = this.props.value.buffer;
    if (type === UUID || type === UUID_OLD) {
      return `Binary(${Truncator.truncate(buffer.toString())})`;
    }
    return `Binary(${Truncator.truncate(buffer.toString(BASE_64))})`;
  }
}

BinaryElement.displayName = 'BinaryElement';

module.exports = BinaryElement;
