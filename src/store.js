import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		count: 0,
		todos: [],
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

		addTodo(state, todo) {
			state.todos.push(todo)
			this.commit('setLocalSorage', state.todos)
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
	},
})
