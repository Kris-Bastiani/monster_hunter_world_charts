import { h, Component } from 'preact';
import Cell from './Cell.jsx';
import HeaderCell from './HeaderCell.jsx';

export default class Row extends Component {
	constructor() {
		super();
		this.summariseValues = this.summariseValues.bind(this);
	}

	summariseValues(values) {
		const summary = [[], [], [], []];
		const markup = [];

		Object.keys(values).forEach(value => Number.isNaN(values[value]) || summary[values[value]].push(value));

		summary.forEach((value, index) => {
			markup.push(<p
				key={`${this.props.header}_${index}`}
				className={`rating_${index}`}
				aria-label={`Rating: ${index}`}
			>
				{value.join(', ')}
			</p>);
		});

		return markup;
	}

	render(props) {
		const values = Object.keys(props.values);
		let cells;

		if (props.summary) {
			cells = (
				<Cell
					title={props.header}
					value={this.summariseValues(props.values)}
				/>
			);
		} else {
			cells = values.map(value => <Cell
				key={`${props.header}_${value}`}
				title={value}
				value={props.values[value]}
				class={`rating_${props.values[value]}`}
			/>);
		}

		return (
			<tr>
				<HeaderCell scope='row' value={props.header} />
				{cells}
			</tr>
		);
	}
}

Row.defaultProps = {
	values: {
		Fire: '?',
		Water: '?',
		Thunder: '?',
		Ice: '?',
		Dragon: '?',
		Poison: '?',
		Sleep: '?',
		Paralysis: '?',
		Blast: '?',
		Stun: '?',
	},
};
