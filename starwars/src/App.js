import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars: [],
			nextUrl: null,
			prevUrl: null
		};
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people');
	}

	getCharacters = (URL) => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				// console.log(data);
				this.setState({ starwarsChars: data.results, nextUrl: data.next, prevUrl: data.previous });
			})
			.catch((err) => {
				throw new Error(err);
			});
	};

	nextHandler = (event) => {
		if (this.state.nextUrl) {
			this.getCharacters(this.state.nextUrl);
		}
	};
	prevHandler = (event) => {
		if (this.state.prevUrl) {
			this.getCharacters(this.state.prevUrl);
		}
	};

	render() {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<CharacterList starwars={this.state.starwarsChars} />
				<div className="btns-container">
					<button onClick={this.prevHandler}> &#8592; Previous </button>
					<button onClick={this.nextHandler}> Next &#8594; </button>
				</div>
			</div>
		);
	}
}

export default App;
