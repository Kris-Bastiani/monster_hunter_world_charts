import React from 'react';
import Cell from './Cell.jsx';
import HeaderCell from './HeaderCell.jsx';

export default class Row extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const values = Object.keys(this.props.values);

		return (
			<tr>
				<HeaderCell scope='row' value={this.props.header} />
				{values.map(value => {
					return <Cell key={value} title={value} value={this.props.values[value]} />
				})}
			</tr>
		);
	}
}

Row.defaultProps = {
	values: {
		'Fire': '?',
		'Water': '?',
		'Thunder': '?',
		'Ice': '?',
		'Dragon': '?',
		'Poison': '?',
		'Sleep': '?',
		'Paralysis': '?',
		'Blast': '?',
		'Stun': '?'
	}
};
