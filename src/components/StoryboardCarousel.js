import React from 'react';
import PropTypes from 'prop-types'
import '../App.css';
import { Carousel, } from 'react-bootstrap';


class StoryboardCarousel extends React.Component {
    render() {
      return (
        <div className="carousel">
          <Carousel pauseOnHover interval="9999999">
            {this.props.storyboards.map((storyboardMedia) =>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={storyboardMedia.imgSrc}
                  alt={storyboardMedia.id}
                />
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      );
    }
  }

StoryboardCarousel.propTypes = {
  storyboards: PropTypes.object.isRequired
}
export default StoryboardCarousel;

/*

this.props.storyboards.map((storyboard) => 
<StoryboardMedia key={storyboard.id} storyboard={storyboard} />*/