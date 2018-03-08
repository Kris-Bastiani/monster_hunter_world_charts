import React from 'react';

module.exports = class Cell extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<td className={this.props.className} title={this.props.title}>
				{this.props.value}
			</td>
		);
	}
}
