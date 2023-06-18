<template>
	<div class="todo">
		<h2 class="todo__title">Какие планы на сегодня?</h2>
		<form class="form" @submit.prevent="addTodo">
			<isInput class="form__input" v-model="inputValue" />
			<IsBtn class="btn" @click="addTodo">Добавить задачу</IsBtn>
		</form>
		<is-todo-list
			:todos="todos"
			@remove-todo="removeTodo"
			@toggle-check="toggleCheck"
			@edit-todo="openTodo"
		/>
		<is-modal :isModal="isOpenModal" @close-modal="openModal">
			<h3>Редактирование задачи</h3>
			<isInput class="form__input" v-model="todoTitle" />
			<isBtn @click="editTodo">Сохранить</isBtn>
		</is-modal>
	</div>
</template>
<script>
import IsBtn from '@/components/isBtn.vue'
import isInput from '@/components/isInput.vue'
import IsModal from '@/components/isModal.vue'
import IsTodoList from '@/components/isTodoList.vue'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
	name: 'TodoPage',
	components: { IsBtn, isInput, IsTodoList, IsModal },
	setup() {
		const inputValue = ref('')
		const todoTitle = ref('')
		const todoIndex = ref(null)
		const isOpenModal = ref(false)
		const todos = ref([])

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

		const removeTodo = (todoId) => {
			todos.value = todos.value.filter((todo) => todo.id !== todoId)
			setLocalSorage()
		}

		const toggleCheck = (id, index) => {
			todos.value[index].isDone === false
				? (todos.value[index].isDone = true)
				: (todos.value[index].isDone = false)
		}

		const openTodo = (index) => {
			console.log('log')
			todoIndex.value = index
			isOpenModal.value = true
			todoTitle.value = todos.value[todoIndex.value].title
		}

		const editTodo = () => {
			todos.value[todoIndex.value].title = todoTitle.value
			todoTitle.value = ''
			isOpenModal.value = false
			setLocalSorage()
		}
		const openModal = () => {
			todoTitle.value = ''
			isOpenModal.value = !isOpenModal.value
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
			openTodo,
			todoTitle,
			todoIndex,
			isOpenModal,
			openModal,
			editTodo,
		}
	},
})
</script>
<style lang="scss">
.form {
	margin-bottom: 40px;
}
</style>
