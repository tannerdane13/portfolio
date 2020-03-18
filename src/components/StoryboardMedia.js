import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';


function StoryboardMedia(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.storyboard.imgSrc} alt={props.storyboard.title} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
}

StoryboardMedia.propTypes = {
  comics: PropTypes.array.isRequired
}

export default StoryboardMedia