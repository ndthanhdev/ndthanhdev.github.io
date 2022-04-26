import * as React from "react";
import { Link, navigate } from "gatsby";

function Index() {
	let [count, decrease] = React.useReducer(
		(state: number, _action: undefined) => {
			return state - 1;
		},
		5
	);

	count = Math.max(count, 0);

	let handleTick = () => {
		if (count <= 0) {
			navigate("/cv");
		}
		decrease(undefined);
	};

	const handleTickRef = React.useRef(handleTick);
	handleTickRef.current = handleTick;

	React.useEffect(() => {
		let interval = setInterval(() => handleTickRef.current(), 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<h2>
				I have not built the homepage yet 😀, navigating to{" "}
				<Link to="/cv">my CV</Link> in {count} seconds...
			</h2>
		</>
	);
}

export default Index;
