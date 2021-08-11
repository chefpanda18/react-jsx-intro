const App = () => (
	<div>
		<Tweet username="ken1" name="kentaro" date={25 - 12 - 20} message="merry christmas" />
		<Tweet username="charlie1" name="charles" date={new Date().toDateString()} message="whats up?" />
		<Tweet username="ben1" name="ben" date={new Date().toDateString()} message="hello" />
	</div>
);

ReactDOM.render(<App />, document.getElementByID('root'));
