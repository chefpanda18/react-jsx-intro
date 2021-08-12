const Person = (props) => {
	<p>"learn some info about this person</p>;
	let reply;
	if (props.age > 17) {
		reply = <h3>pleasge go vote!</h3>;
	} else {
		reply = <h3>you must be 18!</h3>;
	}

	return (
		<div>
			<p>I am {props.age} years old!</p>
			<p>{reply}</p>
		</div>
	);
};

ReactDOM.render(<App />);
