import React, { Component } from 'react';
import ActiveStation from './ActiveStation';
import PropTypes from 'prop-types';

class Station extends Component {
	render() {
		const { name, frequency, onStationClick, isCurrentlyPlaying } = this.props;

		return (
			<React.Fragment>
				<div className="station" onClick={() => onStationClick(name)}>
					<span className="station-name">{name}</span>
					<span className="station-frequency">{frequency}</span>
				</div>

				{isCurrentlyPlaying && <ActiveStation cover={this.props.cover} />}
			</React.Fragment>
		);
	}
}

Station.propTypes = {
	name               : PropTypes.string.isRequired,
	frequency          : PropTypes.string.isRequired,
	cover              : PropTypes.string,
	onStationClick     : PropTypes.func.isRequired,
	isCurrentlyPlaying : PropTypes.bool.isRequired
};

export default Station;
