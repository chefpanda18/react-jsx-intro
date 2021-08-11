const Named = (props) => {
	return (
		<div>
			<p>My name is: {props.name}</p>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
