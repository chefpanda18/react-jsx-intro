const Person = (props) => {
	let reply;

	// loop over hobbies with map
	let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);

	if (props.age > 17) {
		reply = <h3>please go vote!</h3>;
	} else {
		reply = <h3>you must be 18!</h3>;
	}

	return (
		<div>
			<p>learn some info about this person</p>
			<p>{props.name.slice(0, 6)}</p>
			<p>I am {props.age} years old!</p>
			<span>{reply}</span>
			<span>Hobbies!</span>
			<span>{hobbies}</span>
		</div>
	);
};
