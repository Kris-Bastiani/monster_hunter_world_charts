import React from 'react';
import Row from './Row.jsx';

export default class TableBody extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tbody>
				{this.props.rows.map(row => {
					return (
						<Row
							key={row.name}
							header={row.name}
							values={row.weaknesses}
							summary={this.props.summary}
						/>
					);
				})}
			</tbody>
		);
	}
}
