import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import monsters from './data/monsters';

const tableHeaderProps = {
	title: 'Monsters',
	summary: 'Weaknesses',
	values: Object.keys(monsters[0].weaknesses)
};

ReactDOM.render(
	(
		<Container
			tableHeaderProps={tableHeaderProps}
			tableRows={monsters}
		/>
	),
	document.getElementById('app')
);
