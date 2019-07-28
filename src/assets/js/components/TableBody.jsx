import { h, Component } from 'preact';
import Row from './Row.jsx';

export default class TableBody extends Component {
	render(props) {
		return (
			<tbody>
				{props.rows.map(row => (
					<Row
						key={row.name}
						header={row.name}
						values={row.weaknesses}
						summary={props.summary}
					/>
				))}
			</tbody>
		);
	}
}
