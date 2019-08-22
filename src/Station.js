import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Station extends Component {
	render() {
		const { name, frequency, onStationClick, isCurrentlyPlaying, info } = this.props;
		const show = { display: isCurrentlyPlaying ? 'block' : 'none' };

		return (
			<React.Fragment>
				<div
					onClick={() => {
						onStationClick(name);
					}}
				>
					<h1>{name}</h1>
					<span>{frequency}</span>
				</div>
				<div className="currently-playing-info" style={show}>
					{info}
				</div>
			</React.Fragment>
		);
	}
}

export default Station;
