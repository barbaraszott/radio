import React, { Component } from 'react';

class CurrentlyPlaying extends Component {
	render() {
		const isPlaying = this.props.playing !== null;
		const show = { display: isPlaying ? 'block' : 'none' };
		const station = this.props.playing;

		return (
			<React.Fragment>
				<span className="currently-playing-header">currently playing</span>
				<span className="currently-playing-station">{station}</span>
			</React.Fragment>
		);
	}
}

export default CurrentlyPlaying;
