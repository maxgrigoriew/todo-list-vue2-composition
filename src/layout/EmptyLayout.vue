<template>
	<div class="empty">
		<div class="empty__inner">
			<h3 class="empty__title">Страница не найдена</h3>
			<router-link to="/" class="btn">На главную</router-link>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.empty {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	&__inner {
		text-align: center;
	}
}
</style>
