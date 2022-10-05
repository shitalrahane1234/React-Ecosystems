import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import NewTodoForm from './todos/NewTodoForm';

const App = () => (
	<div className="app">
		<h1 className="app-heading">TodoList Lidl App</h1>
		<NewTodoForm />
		<TodoList />
	</div>
);

export default hot(module)(App);
