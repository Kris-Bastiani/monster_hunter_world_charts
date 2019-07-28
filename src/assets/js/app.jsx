import { h, render, Component } from 'preact';
import Container from './components/Container.jsx';
import monsters from './data/monsters';

const tableHeaderProps = {
	title: 'Monsters',
	summary: 'Weaknesses',
	values: Object.keys(monsters[0].weaknesses),
};

class App extends Component {
	render() {
		return <Container
			tableHeaderProps={tableHeaderProps}
			tableRows={monsters}
		/>;
	}
}

render(<App />, document.getElementById('js__app'));
