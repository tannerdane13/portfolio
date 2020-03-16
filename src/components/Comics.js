import React from 'react';
import PropTypes from 'prop-types'
import '../App.css';
import ComicMedia from './ComicMedia';


class Comics extends React.Component {
    render() {
      return this.props.comics.map((comic) => (
        <ComicMedia key={comic.id} comic={comic} />
      ));
    }
  }

Comics.propTypes = {
    comics: PropTypes.object.isRequired
}
export default Comics;