import React from 'react';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { removeTodo } from '../redux/Actions/NewTodoForm';
const TodoList = ({ todos, onRemovePressed }) => {
	// console.log(todoList);

	return (
		<div className="list-wrapper">
			{todos.map((todo, index, arr) => {
				return <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />;
			})}
		</div>
	);
};
const mapStateToProps = (state) => {
	const { todos } = state;
	return { todos };
};
const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (text) => dispatch(removeTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
