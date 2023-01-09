<script>
	import Router from 'svelte-spa-router';

	import Footer from "./sections/Footer.svelte";

	import Home from './pages/Home.svelte';
	import Cart from './pages/Cart.svelte';

	import Navbar from './components/navbar/Navbar.svelte';
    import CarbonFootprintCalc from './pages/CarbonFootprintCalc.svelte';
    import ProductDetail from './pages/ProductDetail.svelte';
    import Success from './pages/Success.svelte';
    import Cancel from './pages/Cancel.svelte';
    import Search from './pages/Search.svelte';
    import Wishlist from './pages/Wishlist.svelte';


	if (Object.keys(localStorage).length === 0) {
		localStorage.setItem('cart', JSON.stringify([]));
		localStorage.setItem('wishlist', JSON.stringify([]));
	}	

	const isProd = true;
</script>

<main>
	<Navbar />
	<Router routes={{
		'/': Home,
		'/cart': Cart,
		'/success': Success,
		'/cancel': Cancel,
		'/calculate': CarbonFootprintCalc,
		'/products/:productHandle': ProductDetail,
		'/search/:query': Search,
		'/wishlist': Wishlist
	}} />
	<Footer />
</main>

<style>

</style>