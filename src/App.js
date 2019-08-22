import React from 'react';
import './App.css';
import Station from './Station';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStation : null,
			stations       : [
				{ name: 'station1', frequency: 11.11, info: 'lol11111' },
				{ name: 'station2', frequency: 22.22, info: 'lol2222' },
				{ name: 'station3', frequency: 33.33, info: 'lol3333' }
			]
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
				<div className="currently-playing">{this.state.currentStation}</div>
			</div>
		);
	}
}

export default App;
