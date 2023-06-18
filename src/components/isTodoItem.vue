<template>
	<li class="todo">
		<div class="todo__inner">
			<div class="todo__title" :class="{ done: todo.isDone }">
				<span class="todo__number">{{ index + 1 }}.</span>
				<span class="todo__title">{{ todo.title }}</span>
			</div>
			<div class="todo__buttons">
				<isBtn @click="toggleCheck(index)" :class="{ active: todo.isDone }">
					<font-awesome-icon icon="fa-solid fa-check" />
				</isBtn>
				<isBtn @click="removeTodo(todo.id)">
					<font-awesome-icon icon="fa-solid fa-trash-can" />
				</isBtn>
				<isBtn @click="editTodo(index)">
					<font-awesome-icon icon="fa-solid fa-pen-to-square" />
				</isBtn>
			</div>
		</div>
	</li>
</template>
<script>
import { defineComponent } from 'vue'
import isBtn from './isBtn.vue'
export default defineComponent({
	props: ['todo', 'index'],
	emits: ['isDone'],
	components: { isBtn },
	setup(props, { emit }) {
		const toggleCheck = (index) => {
			emit('toggle-check', index)
		}

		const removeTodo = (id) => {
			emit('remove-todo', id)
		}

		const editTodo = (index) => {
			emit('edit-todo', index)
		}
		return {
			toggleCheck,
			removeTodo,
			editTodo,
		}
	},
})
</script>
<style lang="scss" scoped>
@import './../assets/styles/vars';

.todo {
	padding: 20px;
	border: 2px solid $accent-color;
	&__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0 20px;
	}
	&__buttons {
		display: flex;
		gap: 0 10px;
	}
}
.done {
	text-decoration: line-through;
	color: $gray-color;
}
.active {
	background: $dark-color;
}
</style>
