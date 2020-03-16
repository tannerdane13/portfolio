import React from 'react';
import PropTypes from 'prop-types'
import '../App.css';

class StoryboardMenu extends React.Component {
    render() {
      return this.props.storyboardMenuItems.map((menuItem) => (
        <div className="flex-item">
            <a href={menuItem.path}>
                <h1>{menuItem.title}</h1>
                <img className="storyboard-icon" src={menuItem.iconImage} alt={menuItem.title} />
            </a>
            
            
        </div>
      ));
    }
  }

StoryboardMenu.propTypes = {
    storyboardMenuItems: PropTypes.object.isRequired,
}
export default StoryboardMenu;