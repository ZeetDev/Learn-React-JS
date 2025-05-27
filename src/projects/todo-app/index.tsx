import { useState } from "react";
import style from "./style.module.css";

function TodoApp() {
	//  states
	const [inputValue, setInputValue] = useState<string>("");
	const [todoData, setTodoData] = useState<
		{ text: string; completed: boolean }[]
	>([]);
	const [todoIndex, setTodoIndex] = useState<number | null>(null);

	// input change event
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	// submit form
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		switch (true) {
			case !inputValue:
				break;

			case todoData.some((todo) => todo.text === inputValue):
				setInputValue("");
				break;

			case todoIndex !== null:
				todoData[todoIndex].text = inputValue;
				setTodoData([...todoData]);
				setTodoIndex(null);
				setInputValue("");
				break;

			default:
				setTodoData([
					...todoData,
					{
						text: inputValue,
						completed: false,
					},
				]);
				break;
		}

		// make input value empty
		setInputValue("");
	}

	// handle edit
	function handleEdit(todoIndexNum: number) {
		setInputValue(todoData[todoIndexNum].text);
		setTodoIndex(todoIndexNum);
	}

	// handle delete
	function handleDelete(todoIndexNum: number) {
		todoData.splice(todoIndexNum, 1);
		setTodoData([...todoData]);
	}

	// handle toggle complete
	function handleToggleComplete(todoIndexNum: number) {
		todoData[todoIndexNum].completed = !todoData[todoIndexNum].completed;
		setTodoData([...todoData]);
	}

	return (
		<div className={style.wrapper}>
			<form action="GET" onSubmit={handleSubmit}>
				<input
					value={inputValue}
					type="text"
					name="task"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
				/>
				<button type="submit">Add</button>
			</form>

			<ul className={style.todoLists}>
				{todoData.length === 0 && <p>No todo found...</p>}
				{todoData.map((todo, index) => (
					<li key={todo.text}>
						<button
							type="button"
							style={{
								textDecoration: todo.completed ? "underline" : "auto",
								cursor: "pointer",
								background: "transparent",
								color: "#fff",
								border: "none",
								outline: "none",
							}}
							onClick={() => handleToggleComplete(index)}
						>
							{todo.text}
						</button>
						<button type="button" onClick={() => handleEdit(index)}>
							Edit
						</button>
						<button type="button" onClick={() => handleDelete(index)}>
							Delete
						</button>
					</li>
				))}
			</ul>

			<button type="button" onClick={() => setTodoData([])}>
				Clear All
			</button>
		</div>
	);
}

export default TodoApp;
