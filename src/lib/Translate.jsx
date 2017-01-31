/* eslint no-underscore-dangle: "off" */
/* eslint react/no-danger: "off" */

import React from 'react';
import I18n from './I18n';
import BaseComponent from './Base';

export default class Translate extends BaseComponent {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    dangerousHTML: React.PropTypes.bool,
    className: React.PropTypes.string,
    /**
     * Optional styling
     */
    style: React.PropTypes.objectOf(
      React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
      ])
    ),
  };

  otherProps() {
    const result = { ...this.props };
    delete result.value;
    return result;
  }

  render() {
    const { value, dangerousHTML, style, className } = this.props;
    const translation = I18n._translate(value, this.otherProps());

    if (dangerousHTML) {
      return <span style={style} className={className} dangerouslySetInnerHTML={{ __html: translation }} />;
    }
    return <span style={style} className={className}>{translation}</span>;
  }
}
