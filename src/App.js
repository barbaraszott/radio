import React from 'react';
import './App.scss';
import Station from './Station';
import CurrentlyPlaying from './CurrentlyPlaying';
// import stationCover from './station-cover.png';

const stations = [
	{ name: 'Putin FM', frequency: '66,6', info: '' },
	{ name: 'Dribbble FM', frequency: '101,2', info: '' },
	{ name: 'Doge FM', frequency: '99,4', info: '' },
	{ name: 'Ballads FM', frequency: '87,1', info: '' },
	{ name: 'Maximum FM', frequency: '142,2', info: '' }
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStation : null
		};
	}

	showStation = (name) => {
		const station = this.state.currentStation === name ? null : name;

		this.setState({
			currentStation : station
		});
	};

	render() {
		return (
			<div className="radio-container">
				<div className="radio-header">Stations</div>
				<div className="radio-stations">
					{this.state.stations.map((station, i) => (
						<Station
							key={i}
							name={station.name}
							frequency={station.frequency}
							info={station.info}
							onStationClick={this.showStation}
							isCurrentlyPlaying={this.state.currentStation === station.name}
						/>
					))}
				</div>
				<CurrentlyPlaying playing={this.state.currentStation} />
			</div>
		);
	}
}

export default App;
