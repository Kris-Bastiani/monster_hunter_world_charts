import React from 'react';

module.exports = class HeaderCell extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<th className={this.props.className} scope={this.props.scope}>
				{this.props.value}
			</th>
		);
	}
}
