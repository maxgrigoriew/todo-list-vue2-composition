<template>
	<main class="main">
		<div class="container">
			<is-header />
			<router-view />
		</div>
	</main>
</template>
<script>
import isHeader from './../components/isHeader.vue'
export default {
	components: { isHeader },
}
</script>
<style lang="scss">
.main {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}
</style>
