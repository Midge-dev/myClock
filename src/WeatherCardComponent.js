import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class WeatherCard extends Component {
	render() {
		return (
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						{/* {JSON.stringify(this.props.weather)}{this.props.weather.temp_f} */}
						<h1>{this.props.weather.location?.name}, {this.props.weather.location?.region}</h1>
						<hr></hr>
						<h4>Currently:</h4>
						<h3>{this.props.weather.current?.temp_f}&deg;F<img src={this.props.weather.current?.condition.icon} /></h3>
						<hr></hr>
						<h4>Expected:</h4>
						<h3>
							<h4>H: {this.props.weather.forecast?.forecastday[0].day.maxtemp_f}&deg; F</h4>
							<h4>L: {this.props.weather.forecast?.forecastday[0].day.mintemp_f}&deg; F</h4>
							<img src={this.props.weather.forecast?.forecastday[0].day.condition.icon} />
						</h3>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default WeatherCard;
