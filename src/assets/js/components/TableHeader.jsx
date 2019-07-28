import { h, Component } from 'preact';
import HeaderCell from './HeaderCell.jsx';

export default class TableHeader extends Component {
	render(props) {
		const values = Object.keys(props.values);
		const cells = props.summary
			? <HeaderCell value={props.summary} />
			: values.map(value => <HeaderCell key={value} value={props.values[value]} />);

		return (
			<thead>
				<tr>
					<HeaderCell className='txt_right' value={props.title} />
					{cells}
				</tr>
			</thead>
		);
	}
}
