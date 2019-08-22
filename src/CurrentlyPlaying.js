import React, { PureComponent } from 'react';

class CurrentlyPlaying extends PureComponent {
	render() {
		const isPlaying = this.props.playing !== null;
		const show = { display: isPlaying ? 'block' : 'none' };
		const station = this.props.playing;

		return (
			<div className="currently-playing">
				<div style={show}>
					<span className="currently-playing-header">currently playing</span>
					<span className="currently-playing-station">{station}</span>
				</div>
			</div>
		);
	}
}

export default CurrentlyPlaying;
