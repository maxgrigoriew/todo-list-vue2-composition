<template>
	<div class="todo">
		{{ todos }}
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
import { computed, defineComponent, onMounted, ref } from 'vue'
import { store } from '../store'

export default defineComponent({
	name: 'TodoPage',
	components: { IsBtn, isInput, IsTodoList, IsModal },
	setup() {
		const inputValue = ref('')
		const todoTitle = ref('')
		const todoIndex = ref(null)
		const isOpenModal = ref(false)
		const todos = computed(() => store.state.todos)

		const addTodo = () => {
			const todo = {
				id: Date.now(),
				title: inputValue.value,
				isDone: false,
			}
			if (inputValue.value) {
				store.commit('addTodo', todo)
				inputValue.value = ''
			}
		}

		const removeTodo = (todoId) => {
			store.commit('removeTodo', todoId)
		}

		const toggleCheck = (id, index) => {
			store.commit('toggleCheck', index)
		}

		const openTodo = (index) => {
			todoIndex.value = index
			isOpenModal.value = true
			todoTitle.value = todos.value[todoIndex.value].title
		}

		const editTodo = () => {
			todos.value[todoIndex.value].title = todoTitle.value
			todos.value[todoIndex.value].isDone = false
			todoTitle.value = ''
			isOpenModal.value = false
		}

		const openModal = () => {
			todoTitle.value = ''
			isOpenModal.value = !isOpenModal.value
		}
		onMounted(() => {
			store.commit('initializeStore')
			console.log(todos)
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
			openModal,
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
