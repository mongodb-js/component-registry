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
    return (
      <li className={`${PROPERTY_CLASS} ${this.props.type.toLowerCase()}`}>
        <Field field={this.props.field} />
        <span className='document-property-colon'>:</span>
        <div className={VALUE_CLASS} title={this.props.value.toString()}>
          {this.props.value.toString()}
        </div>
      </li>
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
