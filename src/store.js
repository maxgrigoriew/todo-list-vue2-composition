import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		count: 0,
		todos: [],
		inputValue: '',
		todoTitle: '',
		isOpenModal: false,
		todoIndex: null,
	},
	getters: {
		getTodos(state) {
			if (!localStorage.getItem('todos')) {
				return JSON.parse(localStorage.getItem('todos'))
			} else return state.todos
		},
	},
	mutations: {
		initializeStore(state) {
			if (localStorage.getItem('todos')) {
				console.log(JSON.parse(localStorage.getItem('todos')))
				state.todos = JSON.parse(localStorage.getItem('todos'))
			}
		},
		setLocalSorage(state) {
			localStorage.setItem('todos', JSON.stringify(state.todos))
		},

		removeTodo(state, todoId) {
			state.todos = state.todos.filter((todo) => todo.id !== todoId)
			this.commit('setLocalSorage', state.todos)
		},

		toggleCheck(state, index) {
			state.todos[index].isDone === false
				? (state.todos[index].isDone = true)
				: (state.todos[index].isDone = false)
			this.commit('setLocalSorage', state.todos)
		},

		editTodo(state) {
			state.todos[state.todoIndex].title = state.todoTitle
			state.todos[state.todoIndex].isDone = false
			state.todoTitle = ''
			state.isOpenModal = false
		},

		openTodo(state, index) {
			state.todoIndex = index
			state.isOpenModal = true
			state.todoTitle = state.todos[state.todoIndex].title
		},

		addTodo(state) {
			const todo = {
				id: Date.now(),
				title: state.inputValue,
				isDone: false,
			}
			if (state.inputValue) {
				console.log('sdf')
				state.todos.push(todo)
				this.commit('setLocalSorage', state.todos)
				state.inputValue = ''
			}
		},

		setInputValue(state, payload) {
			state.inputValue = payload
		},
	},
})
