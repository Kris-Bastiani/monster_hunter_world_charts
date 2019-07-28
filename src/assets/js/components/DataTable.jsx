import { h, Component } from 'preact';
import TableBody from './TableBody.jsx';
import TableHeader from './TableHeader.jsx';

export default class DataTable extends Component {
	render(props) {
		return (
			<table>
				<TableHeader
					{...props.tableHeaderProps}
					summary={ props.w < 620 ? props.tableHeaderProps.summary : null }
				/>
				<TableBody
					{...props.tableBodyProps}
					summary={props.w < 620}
				/>
			</table>
		);
	}
}
