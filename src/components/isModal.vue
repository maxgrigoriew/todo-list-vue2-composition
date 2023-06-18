<template>
	<transition name="fade">
		<div class="modal" @click="closeModal" v-show="isModal">
			<div class="modal__inner" @click.stop>
				<div class="modal__title"></div>
				<div class="modal__content">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: ['isModal'],
	setup(props, { emit }) {
		const closeModal = () => {
			emit('close-modal', false)
		}
		return { closeModal }
	},
})
</script>
<style lang="scss">
.modal {
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	&__inner {
		background: #fff;
		padding: 30px;
		min-width: 200px;
		border-radius: 10px;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
