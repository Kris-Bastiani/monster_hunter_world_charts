import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import monsters from './data/monsters';

const tableHeaderProps = {
	title: 'Monsters',
	summary: 'Weaknesses',
	values: Object.keys(monsters[0].weaknesses)
};

const tableBodyProps = {
	rows: monsters
};

ReactDOM.render(
	(
		<Container
			tableHeaderProps={tableHeaderProps}
			tableBodyProps={tableBodyProps}
		/>
	),
	document.getElementById('app')
);
