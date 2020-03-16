import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';


function InkIllustrationMedia(props) {
  return (
    <img className="flex-item" src={props.inkIllustration.imgSrc} alt={props.inkIllustration.title} />
  );
}

InkIllustrationMedia.propTypes = {
  inkIllustrations: PropTypes.array.isRequired
}

export default InkIllustrationMedia

