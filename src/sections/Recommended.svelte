<script>
    import { onMount } from "svelte";
    import { api } from "../axios";

    import ProductSlideshow from "../UI/products/ProductSlideshow.svelte";
    import { recommendedStore } from "../stores/RecommendedStore";
    
    $: products = [];

    onMount(async () => {
        const unsubscribe = recommendedStore.subscribe(data => {
            products = data
           
        })
        console.log(products)
        if (products.length > 0) {return}


        await api.get("products/recommended_preview").then((res) => {
            products = res.data;
            recommendedStore.set(products);
        }).catch((err) => {
            console.log(err);
        })

    })
</script>

<section id="#recommended">
    <div class="recommended-container">
        <h2>The Carbon Platform Recommends</h2>
        <ProductSlideshow products={products} id={"The Carbon Platform Recommends"} move={5} />
    </div>
</section>

<style>
    .recommended-container {
        width: var(--main-content-width);
        margin: 0 auto;
        margin-bottom: 30px;
    }
</style>