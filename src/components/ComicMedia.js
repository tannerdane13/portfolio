import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';


function ComicMedia(props) {
  return (
    <img className="flex-item" src={props.comic.imgSrc} alt={props.comic.title} />
  );
}

ComicMedia.propTypes = {
  comics: PropTypes.array.isRequired
}

export default ComicMedia