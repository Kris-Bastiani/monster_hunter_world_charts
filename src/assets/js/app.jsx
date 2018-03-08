import React from 'react';
import ReactDOM from 'react-dom';
import TableBody from './components/TableBody.jsx';
import TableHeader from './components/TableHeader.jsx';
import monsters from './data/monsters';

const elements = Object.keys(monsters[0].weaknesses);

ReactDOM.render(
	(<table>
		<TableHeader title='Monster' values={elements} />
		<TableBody rows={monsters} />
	</table>),
	document.getElementById('app')
);
