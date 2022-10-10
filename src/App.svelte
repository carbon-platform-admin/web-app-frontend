<script>
	import Router from 'svelte-spa-router';

	import Home from './pages/Home.svelte';
	import Login from './pages/Login.svelte';
	import Cart from './pages/Cart.svelte';
</script>

<main>
	<nav>
		<a href="/#/">Home</a>
		<a href="/#/login">Login</a>
		<a href="/#/cart">Cart</a>
	</nav>
	<button on:click|preventDefault={() => {document.body.classList.toggle('dark-theme')}}>Switch Mode</button>
	<Router routes={{
		'/': Home,
		'/login': Login,
		'/cart': Cart
	}} />
</main>

<style>
	
</style>