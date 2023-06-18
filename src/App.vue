<template>
	<div id="app" class="container">
		<component :is="layout" />
	</div>
</template>

<script>
export default {
	computed: {
		layout() {
			const layoutName = this.$route.meta.layout
			return () => import(`@/layout/${layoutName}.vue`)
		}
	}
}
</script>

<style></style>
