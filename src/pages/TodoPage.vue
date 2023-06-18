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
		<is-modal :isModal="isOpenModal" @toggle-modal="toggleModal">
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
import { computed, defineComponent, onMounted } from 'vue'
import { store } from '../store'

export default defineComponent({
	name: 'TodoPage',
	components: { IsBtn, isInput, IsTodoList, IsModal },
	setup() {
		const inputValue = computed({
			get() {
				return store.state.inputValue
			},
			set(value) {
				store.commit('setInputValue', value)
			},
		})

		const todoTitle = computed({
			get() {
				return store.state.todoTitle
			},
			set(value) {
				store.commit('setTodoTitle', value)
			},
		})
		const todos = computed(() => store.state.todos)
		const todoIndex = computed(() => store.state.todoIndex)
		const isOpenModal = computed(() => store.state.isOpenModal)

		const addTodo = () => {
			store.commit('addTodo')
		}

		const removeTodo = (todoId) => {
			store.commit('removeTodo', todoId)
		}

		const toggleCheck = (index) => {
			store.commit('toggleCheck', index)
		}

		const openTodo = (index) => {
			store.commit('openTodo', index)
		}

		const editTodo = () => {
			store.commit('editTodo')
		}

		const toggleModal = () => {
			store.commit('clearTodoTitle')
			store.commit('toggleOpenModal')
		}

		onMounted(() => {
			store.commit('initializeStore')
		})
		return {
			inputValue,
			addTodo,
			removeTodo,
			toggleCheck,
			openTodo,
			todoTitle,
			todoIndex,
			isOpenModal,
			toggleModal,
			editTodo,
			todos,
		}
	},
})
</script>
<style lang="scss">
.form {
	margin-bottom: 40px;
}
</style>
