import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Carousel, } from 'react-bootstrap';

const CarouselContainer = styled.div`
  display: flex;
  align-items: top;
  align-content: center;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  max-width: 90%;
`


class StoryboardCarousel extends React.Component {
    render() {
      return (
        <CarouselContainer>
          <Carousel pauseOnHover interval="2s">
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
        </CarouselContainer>
      );
    }
  }

StoryboardCarousel.propTypes = {
  storyboards: PropTypes.object.isRequired
}
export default StoryboardCarousel;
