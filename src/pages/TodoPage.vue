<template>
	<div class="todo">
		<h2 class="todo__title">Какие планы на сегодня?</h2>
		<form class="form" @submit.prevent="addTodo">
			<div>{{ todos }}</div>
			<isInput type="text" class="form__input" v-model="inputValue" />
			<IsBtn class="btn" @click="addTodo">Добавить задачу</IsBtn>
		</form>
		<is-todo-list
			:todos="todos"
			@remove-todo="removeTodo"
			@toggle-check="toggleCheck"
		/>
	</div>
</template>
<script>
import IsBtn from '@/components/isBtn.vue'
import isInput from '@/components/isInput.vue'
import IsTodoList from '@/components/isTodoList.vue'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
	name: 'TodoPage',
	components: { IsBtn, isInput, IsTodoList },
	setup() {
		const inputValue = ref('')
		const todos = ref([{ id: 1, title: 'sfsdfds', isDone: false }])

		const setLocalSorage = () => {
			localStorage.setItem('todos', JSON.stringify(todos.value))
		}

		const addTodo = () => {
			const todo = {
				id: Date.now(),
				title: inputValue.value,
				isDone: false,
			}
			if (inputValue.value) {
				todos.value.push(todo)
				inputValue.value = ''
				setLocalSorage()
			}
		}

		const removeTodo = todoId => {
			console.log('id', todoId)
			todos.value = todos.value.filter(todo => todo.id !== todoId)
			setLocalSorage()
		}

		const toggleCheck = id => {
			console.log('isDone', id)
			const todo = todos.value.find(todo => todo.id === id)
			console.log(todo)
		}

		onMounted(() => {
			if (localStorage.getItem('todos')) {
				todos.value = JSON.parse(localStorage.getItem('todos'))
			}
		})
		return {
			inputValue,
			todos,
			addTodo,
			removeTodo,
			toggleCheck,
		}
	},
})
</script>
<style lang="scss">
.form {
	margin-bottom: 40px;
}
</style>
