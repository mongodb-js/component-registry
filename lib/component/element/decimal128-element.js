'use strict';

const React = require('react');
const Field = require('../field');

/**
 * The property class.
 */
const PROPERTY_CLASS = 'document-property';

/**
 * The document value class.
 */
const VALUE_CLASS = 'document-property-value';

/**
 * Decimal128 element.
 */
class Decimal128Element extends React.Component {

  /**
   * Render a single element in a document.
   *
   * @returns {React.Component} The element component.
   */
  render() {
    return React.createElement(
      'li',
      { className: `${ PROPERTY_CLASS } ${ this.props.type.toLowerCase() }` },
      React.createElement(Field, { field: this.props.field }),
      React.createElement(
        'span',
        { className: 'document-property-colon' },
        ':'
      ),
      React.createElement(
        'div',
        { className: VALUE_CLASS, title: this.props.value.toString() },
        this.props.value.toString()
      )
    );
  }
}

Decimal128Element.displayName = 'Decimal128Element';

Decimal128Element.propTypes = {
  field: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.any
};

module.exports = Decimal128Element;