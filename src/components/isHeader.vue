<template>
	<header class="header">
		<nav class="menu">
			<ul class="menu__list">
				<li class="menu__item">
					<router-link to="/" class="menu__link">Главная</router-link>
				</li>
				<li class="menu__item">
					<router-link to="/todos" class="menu__link">Список задач</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'isHeader',
}
</script>
<style lang="scss" scoped>
@import './../assets/styles/vars';
.header {
	border: 2px solid $accent-color;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
}
.menu {
	&__list {
		display: flex;
		align-items: center;
		gap: 0 50px;
		justify-content: center;
		padding: 20px 0;
	}
	&__link {
		color: $accent-color;
		transition: color 0.3s ease-in-out;
		&:hover {
			color: $dark-color;
		}
	}
}
</style>
