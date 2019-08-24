import React from 'react';
import './App.scss';
import Station from './Station';
import CurrentlyPlaying from './CurrentlyPlaying';
import backArrow from './imgs/back-arrow.png';
import switchBtn from './imgs/switch.png';
import { getStations } from './stations';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStation : null,
			stations       : [],
			isLoading      : true,
			failed         : false
		};
	}

	componentDidMount() {
		getStations()
			.then((value) => {
				console.log('Data received!');
				this.setState({
					stations  : value,
					isLoading : false
				});
			})
			.catch((error) => {
				console.log(error.message);

				this.setState({
					isLoading : false,
					failed    : true
				});
			});

		console.log('API called, waiting for data');
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

				<div className="radio-stations">
					{this.state.isLoading && <p className="status-msg">Loading...</p>}
					{this.state.failed && <p className="status-msg">Sorry! No radio today :(</p>}
					<ul className="radio-stations-list">
						{this.state.stations.map((station, i) => (
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
				</div>

				<div className="currently-playing">
					{this.state.currentStation && <CurrentlyPlaying playing={this.state.currentStation} />}
				</div>
			</div>
		);
	}
}

export default App;
