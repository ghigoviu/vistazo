<template>
	<main id="Home-page">
		<div class="logo">
			<img :src="logoURL" alt="Vue" /> 
		</div>
		<h1>Inicio</h1>

		
	</main>
</template>

<script setup>
	import logoURL from '../assets/logo.jpg'
	import Cards from '../components/Cards.vue'

	
</script>

<style lang="scss" scoped>
	.logo {
		margin-bottom: 1rem;

		img {
			width: 10rem;
		}
	}
</style>