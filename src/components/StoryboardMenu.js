import React from 'react';
import PropTypes from 'prop-types'
import '../App.css';
import { Card, Button } from 'react-bootstrap';


class StoryboardMenu extends React.Component {
    render() {
      return this.props.storyboardMenuItems.map((menuItem) => (
          <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src={menuItem.iconImage} alt={menuItem.title} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>{menuItem.title}</Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                Description of your {menuItem.title} storyboard...
              </Card.Text>
              <Button style={{display:"block",margin:"auto"}} variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
              
      ));
    }
  }

StoryboardMenu.propTypes = {
    storyboardMenuItems: PropTypes.object.isRequired,
}
export default StoryboardMenu;
