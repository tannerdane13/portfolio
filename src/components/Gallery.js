import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MediaContainer = styled.div`
  display: flex;
  align-items: top;
  align-content: center;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  max-width: 2000px;
`
const ArtPiece = styled.img`
  width: 45%;
  height: auto;
  margin: 25px;
`



class Gallery extends React.Component {
    render() {
      return (
        <MediaContainer>
          {this.props.images.map((image) => {
            return <ArtPiece src={image.imgSrc} alt={image.title} />
          })}
        </MediaContainer>
      )
    }
  }

Gallery.propTypes = {
    images: PropTypes.object.isRequired
}
export default Gallery;