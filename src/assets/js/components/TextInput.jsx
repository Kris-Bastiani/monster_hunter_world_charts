import React from 'react';

export default class TextInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<label className={this.props.className}>
				<span>{this.props.label}</span>
				<input type='text' onChange={this.props.changeHandler} />
			</label>
		);
	}
}
