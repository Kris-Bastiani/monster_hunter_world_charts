import React from 'react';
import TableBody from './TableBody.jsx';
import TableHeader from './TableHeader.jsx';

export default class Table extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<table>
				<TableHeader
					{...this.props.tableHeaderProps}
					summary={
						this.props.w < 620
							? this.props.tableHeaderProps.summary
							: null
					}
				/>
				<TableBody
					{...this.props.tableBodyProps}
					summary={this.props.w < 620}
				/>
			</table>
		);
	}
}
