import React from 'react';
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components'

const StyledCard = styled(Card)`
  width: 45%;
  margin: 30px;
`
const StyledBody = styled(Card.Body)`
  backgroundColor: {this.props.storyboardMenuItems.color};
`

const StyledCardImage = styled(Card.Img)`
  Height: 500px;
`



class StoryboardMenu extends React.Component {
    render() {
      return (
        <div className="media-container">
          {this.props.storyboardMenuItems.map((menuItem) => {
            return (
              <StyledCard>
                <a href={menuItem.path}>
                <StyledCardImage src={menuItem.iconImage} alt={menuItem.title} />
                <Card.Body style={{ backgroundColor:"red" }}>
                  <Card.Title>{menuItem.title}</Card.Title>
                  <Card.Text style={{textAlign:"center"}}>
                    Description of your {menuItem.title} storyboard...
                  </Card.Text>
                  <Button style={{display:"block",margin:"auto",width:"180px"}} href={menuItem.path} variant="dark">Go somewhere</Button>
                </Card.Body></a>
              </StyledCard>
            )
          })}
        </div>
      )
    }
  }

StoryboardMenu.propTypes = {
    storyboardMenuItems: PropTypes.object.isRequired,
}
export default StoryboardMenu;
