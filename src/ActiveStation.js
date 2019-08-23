import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import plus from './imgs/plus.png';
import minus from './imgs/minus.png';

class ActiveStation extends Component {
	render() {
		return (
			<div className="active-station">
				<div className="active-station-volume">
					<img src={minus} alt="Turn down the volume" />
				</div>
				<div className="active-station-cover" />
				<div className="active-station-volume">
					<img src={plus} alt="Turn up the volume" />
				</div>
			</div>
		);
	}
}

export default ActiveStation;
