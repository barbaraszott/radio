import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrentlyPlaying extends Component {
	render() {
		return (
			<React.Fragment>
				<span className="currently-playing-header">currently playing</span>
				<span className="currently-playing-station">{this.props.playing}</span>
			</React.Fragment>
		);
	}
}

CurrentlyPlaying.propTypes = {
	playing : PropTypes.string
};

export default CurrentlyPlaying;
