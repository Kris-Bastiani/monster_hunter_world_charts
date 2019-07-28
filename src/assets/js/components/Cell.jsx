import { h, Component } from 'preact';

export default class Cell extends Component {
	render(props) {
		return <td class={props.class} title={props.title}>
			{props.value}
		</td>;
	}
}
