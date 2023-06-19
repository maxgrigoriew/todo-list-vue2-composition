<template>
	<li class="todo">
		<div class="todo__inner">
			<div class="todo__title" :class="{ done: todo.isDone }">
				<span class="todo__number">{{ index + 1 }}.</span>
				<span class="todo__title">{{ todo.title }}</span>
			</div>
			<div class="todo__buttons">
				<isBtn
					@click="toggleCheck(index)"
					class="todo__btn"
					:class="{ active: todo.isDone }"
				>
					<font-awesome-icon icon="fa-solid fa-check" />
				</isBtn>
				<isBtn @click="removeTodo(todo.id)" class="todo__btn">
					<font-awesome-icon icon="fa-solid fa-trash-can" />
				</isBtn>
				<isBtn @click="editTodo(index)" class="todo__btn">
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
	border-radius: 10px;
	background: $accent-color;
	color: #fff;
	font-weight: 700;
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
	&__btn {
		width: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid $accent-color;
		background: #fff;
		color: $accent-color;
		&:hover {
			background: $dark-color;
			color: #fff;
		}
	}
	&__number {
		display: inline-block;
		margin-right: 10px;
		font-weight: 700;
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
