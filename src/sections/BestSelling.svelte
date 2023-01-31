<script>
    import { onMount } from "svelte";
    import { api } from "../axios";

    import ProductSlideshow from "../UI/products/ProductSlideshow.svelte";
    
    $: products = [];

    onMount(async () => {
        await api.get("products/recommended_preview").then((res) => {
            products = res.data;

            if (products.length > 10) {
                products = products.slice(0, 10);
            }
        }).catch((err) => {
            console.log(err);
        })
    })
</script>

<section id="#recommended">
    <div class="recommended-container">
        <h2>Best Selling Products</h2>
        <ProductSlideshow products={products} id={"The Carbon Platform Recommends"} move={5} />
    </div>
</section>

<style>
    .recommended-container {
        width: var(--main-content-width);
        margin: 0 auto;
        margin-bottom: 30px;
    }

    .recommended-container h2 {
        font-weight: 400;
        font-size: xx-large;
        text-align: center;
        color: var(--navbar-color);
        margin-bottom: 70px;
    }
</style>