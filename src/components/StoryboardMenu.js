import React from 'react';
import PropTypes from 'prop-types'
import '../style.css'
import { Card, Button } from 'react-bootstrap';


class StoryboardMenu extends React.Component {
    render() {
      return (
        <div className="media-container">
          {this.props.storyboardMenuItems.map((menuItem) => {
            return <Card style={{ width: '40%',backgroundColor:"black" }}>
            <Card.Img variant="top" src={menuItem.iconImage} alt={menuItem.title} />
            <Card.Body style={{ backgroundColor:"red" }}>
              <Card.Title style={{textAlign:"center"}}>{menuItem.title}</Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                Description of your {menuItem.title} storyboard...
              </Card.Text>
              <Button style={{display:"block",margin:"auto",width:"180px"}} href={menuItem.path} variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
          })}
        </div>
      )
    }
  }

StoryboardMenu.propTypes = {
    storyboardMenuItems: PropTypes.object.isRequired,
}
export default StoryboardMenu;
