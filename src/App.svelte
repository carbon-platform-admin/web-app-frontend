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
	import Measure from './pages/Measure.svelte';
    import Learn from './pages/Learn.svelte';
    import Market from './pages/Market.svelte';
    import About from './sections/About.svelte';
    import Category from './pages/Category.svelte';
    import Blog from './pages/Blog.svelte';


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
		'/measure': Measure,
		'/learn': Learn,
		'/learn/blogs/:blogTitle': Blog,
		'/marketplace': Market,
		'/search/:query': Search,
		'/about': About,
		'/cart': Cart,
		'/success': Success,
		'/cancel': Cancel,
		'/products/:productHandle': ProductDetail,
		'/wishlist': Wishlist,
		'/:category': Category
	}} />
	<Footer />
</main>

<style>

</style>