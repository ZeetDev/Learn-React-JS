// you can add condition directly using if
const AgeComponent = ({
	age,
	onClick,
}: { age: number; onClick: () => void }) => {
	if (age < 20) {
		return (
			<h1>
				Your Age Is <strong>{age}</strong> You Are Less Then <strong>20</strong>
			</h1>
		);
	}

	return (
		<button type="button" onClick={onClick}>
			Your Age Is <strong>{age}</strong> You Are Grater Then <strong>20</strong>
		</button>
	);
};

// you can add condition directly using switch
const ColorComponent = ({ color }: { color: string }) => {
	switch (color) {
		case "red":
			return <h1>Red</h1>;
		case "green":
			return <h1>Green</h1>;
		case "blue":
			return <h1>Blue</h1>;
		default:
			return <h1>Unknown Color</h1>;
	}
};

function ConditionalRendering() {
	function handleShowMessage(message: string) {
		alert(message);
	}

	return (
		<div>
			<AgeComponent age={80} onClick={() => handleShowMessage("Hello Word")} />
			<ColorComponent color="red" />
		</div>
	);
}

export default ConditionalRendering;
