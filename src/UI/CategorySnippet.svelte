<script>
    import { onMount } from "svelte";
    import { api } from "../axios";
    import ProductSlideshow from "./products/ProductSlideshow.svelte";

    export let category;

    $: products = [];

    onMount(async () => {
        await api.get("products/category_preview/" + encodeURIComponent(category.title)).then((res) => {
            products = res.data;
        }).catch((err) => {
            console.log(err);
        });
    })

</script>

<div class="category-snippet-container">
    <div class="category-info">
        <h2>{category.title}</h2>
        <p>{category.promotional_text}</p>
        <button>See more products</button>
    </div>
    <div class="slideshow-wrapper">
        <ProductSlideshow products={products} id={category.title} />
    </div>
</div>

<style>
    .category-snippet-container {
        display: flex;
        width: var(--main-content-width);
        margin: 0 auto;
        background-color: var(--navbar-color);
        border-radius: 10px;
        margin-bottom: 60px;
        color: white;
    }

    .category-info {
        width: calc((.35 * var(--main-content-width)));
        margin-left: 60px;
        margin-top: 1em;
    }

    .category-info h2 {
        font-weight: 400;
    }

    .category-info button {
        padding: 10px 50px;
        background-color: white;
        font-size: 18px;
        border: none;
        border-radius: 10px;
        color: var(--navbar-color);
        transition: transform 100ms linear;
    }

    .category-info button:hover {
        transform: translateY(-5%);
    }

    .slideshow-wrapper {
        width: calc(var(--main-content-width) * .6);
        position: relative;
        right: 0;
    }
</style>