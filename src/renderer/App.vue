<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'de_notes'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	height: 100vh;
	width: 100vw;
	padding: 20px;
	font-family: 'Source Sans Pro', sans-serif;
	background:
		radial-gradient(ellipse at top left,
			rgba(255, 255, 255, 1) 40%,
			rgba(219, 219, 219, .9) 100%);
}
</style>
