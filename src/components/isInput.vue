<template>
	<input
		type="text"
		class="input"
		:value="value"
		@input="$emit('input', $event.target.value)"
	/>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: ['value'],
})
</script>
<style lang="scss">
@import './../assets/styles/vars';

.input {
	border: 2px solid $accent-color;
	background: #fff;
	height: 50px;
	padding: 0 20px;
}
</style>
