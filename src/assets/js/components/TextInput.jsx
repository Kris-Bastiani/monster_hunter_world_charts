import { h, Component } from 'preact';

export default class TextInput extends Component {
	render(props) {
		return (
			<label className={props.className}>
				<span>{props.label}</span>
				<input type='text' onInput={props.changeHandler} />
			</label>
		);
	}
}
