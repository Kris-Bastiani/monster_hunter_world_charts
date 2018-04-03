import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.jsx';
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
		<React.Fragment>
			<Table
				tableHeaderProps={tableHeaderProps}
				tableBodyProps={tableBodyProps}
			/>
		</React.Fragment>
	),
	document.getElementById('app')
);
