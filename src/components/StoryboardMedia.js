import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';


function StoryboardMedia(props) {
  return (
    <img src={props.storyboard.imgSrc} alt={props.storyboard.title} />
  );
}

StoryboardMedia.propTypes = {
  comics: PropTypes.array.isRequired
}

export default StoryboardMedia