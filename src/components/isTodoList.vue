<template>
	<div class="todo">
		<ul class="todo__list" v-if="todos.length">
			<is-todo-item
				class="todo__item"
				v-for="(item, index) in todos"
				:key="item.id"
				:index="index"
				:todo="item"
				@isDone="$emit('isDone')"
				@remove-todo="removeTodo"
				@toggle-check="toggleCheck"
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

		const toggleCheck = id => {
			emit('toggle-check', id)
		}
		return {
			removeTodo,
			toggleCheck,
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
