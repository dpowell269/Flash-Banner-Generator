<template>
	<div>
		<nav>
			<div class="container">
				<router-link to="/">Home</router-link>
				<router-link to="/percentage-off">Percentage Off</router-link>
				<router-link to="/staggered">Staggered</router-link>
				<router-link to="/carousel-banner">Carousel Banner</router-link>

			</div>
		</nav>
		<router-view class="main" />
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
	font-family: 'Poppins', sans-serif;
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

h2 {
	font-weight: 700;
	text-align: left;
}

label {
	display: block;
	width: 100%;
	font-size: 12px;
}

input {
	display: block;
	width: 100%;
	border: solid 1px #d1d5dc;
	border-radius: 6px;
	padding: 6px 12px;
	margin: 5px 0;
}

/* input[type='color'] {
	padding: 0;
	border: none;
	border-radius: 0;
} */

input[type='color'] {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	background: none;
	border: solid 1px #d1d5dc;
	cursor: pointer;
	height: 50px;
	padding: 0;
	width: 50px;
	border-radius: 50%;
}

input[type='color']::-webkit-color-swatch-wrapper {
	border: none;
	padding: 0;
	border-radius: 50%;
}

input[type='color']::-webkit-color-swatch {
	border: none;
	padding: 0;
	border-radius: 50%;
}
input[type='color']::-moz-color-swatch {
	border: none;
	padding: 0;
	border-radius: 50%;
}

button {
	background: #4f46e5;
	color: #ffffff;
	border: none;
	border-radius: 6px;
	padding: 8px 12px;
	font-weight: 500;
	font-size: 14px;
	letter-spacing: 0.7px;
	max-width: 320px;
	cursor: pointer;
}

.label-input-group {
	display: flex;
	flex-direction: column;
	gap: 4px;
	max-width: 320px;
	margin-bottom: 12px;
}

.editable-fields {
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-bottom: 24px;
}

.main {
	max-width: 1200px;
	margin: auto;
}
</style>
