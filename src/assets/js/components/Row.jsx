import React from 'react';
import Cell from './Cell.jsx';
import HeaderCell from './HeaderCell.jsx';

export default class Row extends React.Component {
	constructor(props) {
		super(props);
		this.summariseValues = this.summariseValues.bind(this);
	}

	summariseValues(values) {
		const summary = [[],[],[],[]];
		const markup = [];

		Object.keys(values).forEach((value, index) => {
			isNaN(values[value]) || summary[values[value]].push(value);
		});

		summary.forEach((value, index) => {
			markup.push(
				<p
					key={this.props.header + '_' + index}
					className={'rating_' + index}
					aria-label={'Rating: ' + index}
				>
					{value.join(', ')}
				</p>
			);
		});

		return markup;
	}

	render() {
		const values = Object.keys(this.props.values);
		let cells;

		if (this.props.summary) {
			cells = (
				<Cell
					title={this.props.header}
					value={this.summariseValues(this.props.values)}
				/>
			);
		} else {
			cells = values.map(value => {
				return <Cell
					key={this.props.header + '_' + value}
					title={value}
					value={this.props.values[value]}
					className={'rating_' + this.props.values[value]}
				/>
			})
		}

		return (
			<tr>
				<HeaderCell scope='row' value={this.props.header} />
				{cells}
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
