<template>
	<div class="todos">
		<h1 class="todos__title">Страница списка задач</h1>
		<form class="form" @submit.prevent="addTodo">
			<isInput class="form__input" v-model="inputValue" />
			<IsBtn class="form__btn" @click="addTodo">
				<font-awesome-icon icon="fa-solid fa-plus"
			/></IsBtn>
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
			<isBtn @click="editTodo" class="form__btn">
				<font-awesome-icon icon="fa-solid fa-check"
			/></isBtn>
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
.todos {
	padding-top: 100px;
	&__title {
		margin-bottom: 50px;
	}
}
.form {
	display: flex;
	margin-bottom: 40px;
	&__input {
		flex-grow: 1;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	&__btn {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
}
</style>
