import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActiveStation.scss';
import plus from './imgs/plus.png';
import minus from './imgs/minus.png';
import defaultCover from './imgs/station-cover.png';

class ActiveStation extends Component {
	static defaultProps = {
		cover : defaultCover
	};

	render() {
		const backgroundImg = { backgroundImage: `url(${this.props.cover})` };

		return (
			<div className="active-station">
				<div className="active-station-volume">
					<img src={minus} alt="Turn down the volume" />
				</div>
				<div className="active-station-cover" style={backgroundImg} />
				<div className="active-station-volume">
					<img src={plus} alt="Turn up the volume" />
				</div>
			</div>
		);
	}
}

ActiveStation.propTypes = {
	cover : PropTypes.string
};

export default ActiveStation;
