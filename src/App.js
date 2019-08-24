import React from 'react';
import './App.scss';
import Station from './Station';
import CurrentlyPlaying from './CurrentlyPlaying';
import backArrow from './imgs/back-arrow.png';
import switchBtn from './imgs/switch.png';

const stations = [
	{ name: 'Putin FM', frequency: '66,6' },
	{ name: 'Dribbble FM', frequency: '101,2' },
	{ name: 'Doge FM', frequency: '99,4' },
	{
		name      : 'Ballads FM',
		frequency : '87,1',
		cover     : 'https://coolsilh.com/png-256/2167964-moon_001.png'
	},
	{ name: 'Maximum FM', frequency: '142,2' }
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStation : null
		};
	}

	switchOff = () => {
		this.setState({
			currentStation : null
		});
	};

	showStation = (name) => {
		const station = this.state.currentStation === name ? null : name;

		this.setState({
			currentStation : station
		});
	};

	render() {
		return (
			<div className="radio-container">
				<div className="radio-header">
					<div className="radio-header-icon">
						<img src={backArrow} alt="Back" />
					</div>
					Stations
					<div className="radio-header-icon" onClick={this.switchOff}>
						<img src={switchBtn} alt="Switch on/off" />
					</div>
				</div>
				<ul className="radio-stations">
					{stations.map((station, i) => (
						<li key={i}>
							<Station
								name={station.name}
								frequency={station.frequency}
								cover={station.cover}
								onStationClick={this.showStation}
								isCurrentlyPlaying={this.state.currentStation === station.name}
							/>
						</li>
					))}
				</ul>
				<div className="currently-playing">
					{this.state.currentStation && <CurrentlyPlaying playing={this.state.currentStation} />}
				</div>
			</div>
		);
	}
}

export default App;
