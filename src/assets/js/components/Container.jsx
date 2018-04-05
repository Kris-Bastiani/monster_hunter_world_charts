import React from 'react';
import Table from './Table.jsx';
import TextInput from './TextInput.jsx';
import throttle from '../services/throttle';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredRows: this.props.tableRows,
			w: window.innerWidth
		};
		this.checkWidth = this.checkWidth.bind(this);
		this.search = this.search.bind(this);
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

	search(e) {
		const query = e.target.value.toLowerCase();
		const filteredRows = this.props.tableRows.filter(row => {
			return row.name.toLowerCase().indexOf(query) !== -1;
		});
		this.setState({ filteredRows: filteredRows });
	}

	render() {
		return (
			<React.Fragment>
				<TextInput label='Filter: ' changeHandler={this.search} />
				<p>{this.state.search}</p>
				<Table
					tableHeaderProps={this.props.tableHeaderProps}
					tableBodyProps={{ rows: this.state.filteredRows}}
					w={this.state.w}
				/>
			</React.Fragment>
		);
	}
}
