<template>
	<div class="todo">
		<ul class="todo__list" v-if="todos.length">
			<is-todo-item
				class="todo__item"
				v-for="(item, index) in todos"
				:key="item.id"
				:index="index"
				:todo="item"
				@remove-todo="removeTodo"
				@toggle-check="toggleCheck"
				@edit-todo="editTodo"
			/>
		</ul>
		<h3 v-else>Список пуст</h3>
	</div>
</template>
<script>
import { defineComponent } from 'vue'
import isTodoItem from './isTodoItem.vue'

export default defineComponent({
	components: { isTodoItem },
	props: ['todos'],
	setup(props, { emit }) {
		const removeTodo = id => {
			emit('remove-todo', id)
		}

		const toggleCheck = (id, index) => {
			emit('toggle-check', id, index)
		}

		const editTodo = index => {
			emit('edit-todo', index)
		}
		return {
			removeTodo,
			toggleCheck,
			editTodo,
		}
	},
})
</script>
<style lang="scss">
.todo {
	&__item {
		margin-bottom: 20px;
	}
}
</style>
