import React from 'react';
import HeaderCell from './HeaderCell.jsx';

export default class TableHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const values = Object.keys(this.props.values);
		let cells;

		if (this.props.summary) {
			cells = <HeaderCell value={this.props.summary} />
		} else {
			cells = values.map(value => {
				return <HeaderCell key={value} value={this.props.values[value]} />
			});
		}

		return (
			<thead>
				<tr>
					<HeaderCell scope='col' value={this.props.title} />
					{cells}
				</tr>
			</thead>
		);
	}
}
