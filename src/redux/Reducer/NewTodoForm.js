import { CREATE_TODO, REMOVE_TODO } from '../Constants';
const list = [
	{
		text: 'Complete adding payment type in invoice screen',
		isCompleted: false,
	},
	{
		text: 'Complete adding payment type in mail template',
		isCompleted: false,
	},
];
export const NewTodoForm = (state = list, action) => {
	const { type, payload } = action;
	switch (type) {
		case CREATE_TODO: {
			const { text } = payload;

			const newTodo = {
				text,
				isCompleted: false,
			};
			return state.concat(newTodo);
		}

		case REMOVE_TODO: {
			const { text } = payload;
			return state.filter((todo) => todo.text !== text);
		}
		default:
			return state;
	}
};
