import React from 'react';
import TableBody from './TableBody.jsx';
import TableHeader from './TableHeader.jsx';
import throttle from '../services/throttle';

export default class Table extends React.Component {
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
			<table>
				<TableHeader
					title={this.props.headerTitle}
					values={this.props.headerValues}
					summary={this.state.w < 620 ? this.props.headerSummary : null}
				/>
				<TableBody rows={this.props.rows} summary={this.state.w < 620} />
			</table>
		);
	}
}
