<template>
	<button class="btn" @click="$emit('click')">
		<slot />
	</button>
</template>
<style lang="scss">
@import './../assets/styles/vars';

.btn {
	cursor: pointer;
	background: transparent;
	border: none;
	background: $accent-color;
	color: #fff;
	padding: 0 20px;
	height: 50px;
	transition: background 0.3s ease-in-out;
	&:hover {
		background: $dark-color;
		color: #fff;
	}
}
</style>
