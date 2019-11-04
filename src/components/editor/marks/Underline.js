import React from 'react';
import PropTypes from 'prop-types';

const UnderlineMark = props => <u {...props.attributes}>{props.children}</u>;

UnderlineMark.propTypes = {
  attributes: PropTypes.object,
  children: PropTypes.node,
};

export default UnderlineMark;