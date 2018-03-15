import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.jsx';
import monsters from './data/monsters';

const elements = Object.keys(monsters[0].weaknesses);

ReactDOM.render(
	(
		<Table
			headerTitle='Monsters'
			headerValues={elements}
			rows={monsters}
		/>
	),
	document.getElementById('app')
);
