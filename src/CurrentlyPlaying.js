import React, { Component } from 'react';

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

export default CurrentlyPlaying;
