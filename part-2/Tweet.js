const Tweet = (props) => {
	return (
		<ul>
			<li>{props.name}</li>
			<li>username:@{props.username}</li>
			<li>date:{props.date}</li>
			<li>message:{props.message}</li>
		</ul>
	);
};
