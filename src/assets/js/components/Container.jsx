import { h, Component } from 'preact';
import DataTable from './DataTable.jsx';
import TextInput from './TextInput.jsx';
import throttle from '../helpers/throttle';

export default class Cell extends Component {
	constructor() {
		super();
		this.state = {
			filteredRows: [],
			w: window.innerWidth,
		};
		this.checkWidth = this.checkWidth.bind(this);
		this.search = this.search.bind(this);
	}

	checkWidth() { return throttle(() => this.setState({ w: window.innerWidth })); }

	componentDidMount() {
		this.setState({
			filteredRows: this.props.tableRows,
			w: window.innerWidth,
		});

		window.addEventListener('resize', e => this.checkWidth(e));
	}

	componentWillUnmount() { window.removeEventListener('resize', e => this.checkWidth(e)); }

	search(e) {
		const query = e.target.value.toLowerCase();
		this.setState({
			filteredRows: this.props.tableRows.filter(row => row.name.toLowerCase().indexOf(query) !== -1),
		});
	}

	render() {
		return (
			<div>
				<div className='toolbar'>
					<TextInput
						className='filter'
						label='Filter:'
						changeHandler={this.search}
					/>
				</div>
				<DataTable
					tableHeaderProps={this.props.tableHeaderProps}
					tableBodyProps={{ rows: this.state.filteredRows }}
					w={this.state.w}
				/>
			</div>
		);
	}
}
