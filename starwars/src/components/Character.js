import React from 'react';
import './StarWars.css';

const Character = (props) => {
	const { character } = props;

	return (
		<div className="card">
			<h3>{character.name}</h3>
			<p>
				<span>Birth Year: </span>
				{character.birth_year}
			</p>
			<p>
				<span>Gender: </span>
				{character.gender}
			</p>
			<p>
				<span>Mass: </span>
				{character.mass}
			</p>
			<p>
				<span>Hair Color: </span>
				{character.hair_color}
			</p>
			<p>
				<span>Eye Color: </span>
				{character.eye_color}
			</p>
			<p>
				<span>Skin Color: </span>
				{character.skin_color}
			</p>
			<p>
				<span>Height: </span>
				{character.height}
			</p>
		</div>
	);
};

export default Character;
