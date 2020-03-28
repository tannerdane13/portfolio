import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ListGroup } from 'react-bootstrap';


const MediaContainer = styled.div`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: top;
	justify-content: center;
	background-color: #E3E3E3;
`
const ArtPiece = styled.img`
	align-self: center;
	height: 95vh;
	width: auto;
	max-width: 100vw;
`

const StyledListItem = styled(ListGroup.Item)`
	background: transparent;
`


class Landing extends React.Component {
    render() {
      return (
				<MediaContainer>
					<ArtPiece src={this.props.image.imgSrc} alt={this.props.image.title} />
					<ListGroup variant="flush" style={{position: 'absolute', left: '55%', top: '5%'}}>
						<StyledListItem action href="/Comics">Comics</StyledListItem>
						<StyledListItem action href="/InkIllustrations">Ink Illustrations</StyledListItem>
						<StyledListItem action href="/Storyboards">Storyboards</StyledListItem>
						<StyledListItem action href="/Contact">Contact</StyledListItem>
					</ListGroup>
				</MediaContainer>
			)
    }
  }

Landing.propTypes = {
    image: PropTypes.array.isRequired
}
export default Landing;

