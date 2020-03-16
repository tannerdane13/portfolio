import React from 'react';
import PropTypes from 'prop-types'
import '../App.css';
import InkIllustrationMedia from './InkIllustrationMedia';


class InkIllustrations extends React.Component {
    render() {
      return this.props.inkIllustrations.map((inkIllustration) => (
        <InkIllustrationMedia key={inkIllustration.id} inkIllustration={inkIllustration} />
      ));
    }
  }

InkIllustrations.propTypes = {
    inkIllustrations: PropTypes.object.isRequired,
    InkIllustrationsPage: PropTypes.object.isRequired,
}
export default InkIllustrations;

