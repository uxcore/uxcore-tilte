/**
 * Title Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const classnames = require('classnames');

const { PropTypes } = React;

class Title extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prefixCls, children, type } = this.props;
    return (
      <div
        className={classnames(prefixCls, {
          [`${prefixCls}-${type}`]: true,
        })}
      >
        {children}
      </div>
    );
  }
}

Title.defaultProps = {
  prefixCls: 'kuma-title',
  type: 'primary',
};


// http://facebook.github.io/react/docs/reusable-components.html
Title.propTypes = {
  children: PropTypes.any,
  prefixCls: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'thirdary']),
};

Title.displayName = 'Title';

module.exports = Title;
