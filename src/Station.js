import React, { Component } from 'react';
import ActiveStation from './ActiveStation';
// import PropTypes from 'prop-types';

class Station extends Component {
	render() {
		const { name, frequency, onStationClick, isCurrentlyPlaying } = this.props;

		return (
			<React.Fragment>
				<div className="station" onClick={() => onStationClick(name)}>
					<span className="station-name">{name}</span>
					<span className="station-frequency">{frequency}</span>
				</div>

				{isCurrentlyPlaying && <ActiveStation info={this.props.info} />}
			</React.Fragment>
		);
	}
}

export default Station;
