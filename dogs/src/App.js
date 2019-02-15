import React, { Component } from 'react';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			doggies: []
		};
	}

	componentDidMount() {
		this.getDogs('https://dog.ceo/api/breeds/image/random');
	}

	getDogs = (URL) => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				console.log(JSON.stringify(myJson));
				this.setState({ doggies: myJson.message });
			})
			.catch((err) => {
				throw new Error(err);
			});
	};

	render() {
		return (
			<div className="App">
				<h1 className="Header">Dogs!</h1>
				<img className="dog-img" src={this.state.doggies} alt="dog" />
			</div>
		);
	}
}

export default App;
