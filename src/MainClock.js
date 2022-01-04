import React, { Component } from 'react';
import WeatherCard from './WeatherCardComponent';
import Quotes from './QuoteComponent';

const accessKey = 'JAVSWj2grC_pjDpfMPsIZIvPx6XHvLY-KYA_CD1b37M';

async function makeRequest() {
	const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=space&client_id=${accessKey}`);
	const data = await response.json();
	return data;
}

async function weatherApi() {
	const response = await fetch(`http://api.weatherapi.com/v1/ip.json?key=293ae895f9244bf0a66180139220301&q=auto:ip`);
	const data = await response.json();
	const response2 = await fetch(
		`http://api.weatherapi.com/v1/forecast.json?key=293ae895f9244bf0a66180139220301&q=${data.city}`
	);
	const data2 = await response2.json();
	return {
		timeZoneId: data.tz_id,
		weather: data2
	};
}

async function quotesApi() {
	const response = await fetch("https://type.fit/api/quotes")
	const data = await response.json();
	return data;
}
class MainClock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Intl.DateTimeFormat('en-US', {
				dateStyle: 'full',
				timeStyle: 'long',
				timeZone: 'America/Los_Angeles'
			}).format(new Date()),
			timeZone: 'America/Los_Angeles',
			weather: {},
			quote: {}
		};
		// this.onClick = this.onClick.bind(this);
	}

	tick() {
		this.setState({
			time: new Intl.DateTimeFormat('en-US', {
				dateStyle: 'full',
				timeStyle: 'long',
				timeZone: this.state.timeZone
			}).format(new Date())
		});
	}

	async componentDidMount() {
		this.timer = setInterval(() => this.tick(), 1000);
		const data = await makeRequest();
		const pics = Math.floor(Math.random() * data.results.length);
		document.querySelector('body').style.background = `url(${data.results[pics].urls.regular})`;
		const ipAddress = await weatherApi();
		this.setTimeZone(ipAddress.timeZoneId);
		this.setState({
			weather: ipAddress.weather
		});
		const quotes = await quotesApi();
		const quote = Math.floor(Math.random() * quotes.length);
		console.log(quote);
		this.setState({ quote: quotes[quote].text })
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	setTimeZone(timeZone) {
		this.setState({ timeZone });
	}

	render() {
		return (
			<div>
				<div className="clock">{this.state.time}</div>
				<WeatherCard className="weatherCard" weather={this.state.weather} />
				<Quotes randomQuote={this.state.quote}/>
			</div>
		);
	}
}

export default MainClock;
