import React from 'react';
import HeaderCell from './HeaderCell.jsx';

export default class TableHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const values = Object.keys(this.props.values);

		return (
			<thead>
				<tr>
					<HeaderCell scope='row' value={this.props.title} />
					{values.map(value => {
						return <HeaderCell key={value} value={this.props.values[value]} />
					})}
				</tr>
			</thead>
		);
	}
}
