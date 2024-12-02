<template>
	<div>
		<nav>
			<div class="container">
				<router-link to="/">Home</router-link>
				<router-link to="/about">About</router-link>
				<router-link to="/staggered">Staggered</router-link>
			</div>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
}

html * {
	box-sizing: border-box;
}

nav {
	background: #1f2937;
}

nav .container {
	margin: 0 auto;
	padding: 16px 32px;
	max-width: 1200px;
}

nav a {
	margin-right: 10px;
	font-family: 'Poppins', sans-serif;
	color: #ffffff;
	font-weight: 500;
	font-size: 14px;
	text-decoration: none;
	padding: 8px 12px;
	border-radius: 6px;
	letter-spacing: 0.7px;
}

nav a.router-link-active {
	background: #101827;
	border: solid 1px #404040;
}
</style>
