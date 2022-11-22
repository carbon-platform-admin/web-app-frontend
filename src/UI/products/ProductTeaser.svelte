<script>
    import StarRating from "../StarRating.svelte";
    import ProductModifierTag from "./ProductModifierTag.svelte";
    import PriceDisplay from "./PriceDisplay.svelte";

    export let product;

    export let inCart = false;
    
    
</script>

<div class="product-teaser-container" on:click={window.location.href = "http://localhost:8080/#/products/" + product.handle}>
        {#if product.active_discount > 0}
            <ProductModifierTag type="discount" content={product.active_discount}/>
        {/if}

        {#if product.carbon_footprint < .1}
            <ProductModifierTag type="eco" content=""/>
        {/if}
        <img src={product.image_src} alt={product.image_alt_text}>
        <h4>{product.title}</h4>
        <p>{product.vendor.name}</p>
        <StarRating product={product}/>
        <PriceDisplay {product}/>
        {#if !inCart}
            <div class="carts">
                <a href="/#/wishlist"><img src="./assets/icons/heart.png" alt=""></a>
                <a href="/#/cart"><button>Add to cart</button></a>
            </div>
        {/if}
</div>

<style>
    .product-teaser-container {
        width: 224px;
        padding: 18px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        margin: 0 10px;
        background-color: white;
        justify-content: space-between;
        cursor: pointer;
        position: relative;
        color: var(--navbar-color);
        height: 90%;
    }

    .product-teaser-container h4 {
        font-size: 20px;
        font-weight: 400;
        margin: 5px 0;
    }

    .product-teaser-container p {
        margin-top: 0;
        margin-bottom: 5px;
    }

    .product-teaser-container img {
        object-fit: cover;
        width: inherit;
        height: 224px;
        border-radius: 10px;
        cursor: pointer;
    }


    .carts { 
        margin-top: 5px;
        height: 40px;
        display: flex;
    }

    .carts button {
        padding: 0;
        margin: 0;
        padding: 8px 40px;
        border-radius: 10px;
        border: 1px solid #7F7F7F;
        background-color: transparent;
        font-weight: bold;
        font-weight: 400;
        font-size: 19px;
        margin-left: 20px;
    }

    .carts button:hover {
        color: white;
        background-color: var(--navbar-color);
    }

    /* .carts button:hover {
        background-color: ;
    } */

    .carts img {
        width: 30px;
        height: 30px;
        margin-top: 3px;
    }

</style>