import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo, removeTodo } from '../redux/Actions/NewTodoForm';
import './NewTodoForm.css';
const NewTodoForm = ({ todos, onCreatePressed }) => {
	const [todoInputValue, setTodoInputValue] = useState('');
	return (
		<div className="new-todo-form">
			<input
				className="new-todo-textinput"
				type="text"
				onChange={(e) => {
					setTodoInputValue(e.target.value);
				}}
				value={todoInputValue}
			/>
			<button
				onClick={() => {
					const isDuplicate = todos.some(
						(todo) => todo.text === todoInputValue
					);
					if (todoInputValue == '') {
						alert("Can't add empty todo");
					} else if (isDuplicate) {
						alert('Duplicate!!!');
					} else if (!isDuplicate) {
						onCreatePressed(todoInputValue);
						setTodoInputValue('');
					}
				}}
				className="new-todo-btn">
				Create Todo
			</button>
		</div>
	);
};
const mapStateToProps = (state) => {
	const { todos } = state;
	return { todos };
};
const mapDispatchToProps = (dispatch) => ({
	onCreatePressed: (text) => dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
