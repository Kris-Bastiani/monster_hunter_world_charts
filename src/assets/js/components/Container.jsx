import React from 'react';
import Table from './Table.jsx';
import throttle from '../services/throttle';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			w: window.innerWidth
		};
		this.checkWidth = this.checkWidth.bind(this);
	}

	checkWidth(e) {
		const cb = e => {
			this.setState({ w: window.innerWidth });
		};

		return throttle(cb(e), 300);
	}

	componentDidMount() {
		window.addEventListener('resize', e => {
			this.checkWidth(e);
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', e => {
			this.checkWidth(e);
		});
	}

	render() {
		return (
			<React.Fragment>
			<Table
				tableHeaderProps={this.props.tableHeaderProps}
				tableBodyProps={this.props.tableBodyProps}
				w={this.state.w}
			/>
			</React.Fragment>
		);
	}
}
