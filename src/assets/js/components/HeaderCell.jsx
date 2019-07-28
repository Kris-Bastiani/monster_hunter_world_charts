import { h, Component } from 'preact';

export default class HeaderCell extends Component {
	render(props) {
		return <th class={props.class} scope={props.scope}>
			{props.value}
		</th>;
	}
}

HeaderCell.defaultProps = { scope: 'col' };
