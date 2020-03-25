import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


function Comic(props) {
  return (
    <img className="flex-item" src={props.comic.imgSrc} alt={props.comic.title} />
  );
}

Comic.propTypes = {
  images: PropTypes.array.isRequired
}

export default Comic