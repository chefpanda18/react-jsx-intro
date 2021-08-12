const App = () => (
	<div>
		<Person name="penelope" age={22} hobbies={[ 'running', 'jumping', 'screaming' ]} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
