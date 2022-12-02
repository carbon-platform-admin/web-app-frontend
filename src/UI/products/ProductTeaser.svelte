<script>
    import { onMount } from "svelte";

    import StarRating from "../StarRating.svelte";
    import ProductModifierTag from "./ProductModifierTag.svelte";
    import PriceDisplay from "./PriceDisplay.svelte";
    import { enumerate } from "../../utils/utils";

    export let product;

    export let inCart = false;

    

    let wishlist;
    $: inWishlist = false;

    function addToWishlist() {
        inWishlist = !inWishlist;

        let productString = JSON.stringify(product);
        wishlist = new Set(JSON.parse(localStorage.getItem('wishlist')));


        if (wishlist.has(productString)) {
            wishlist.delete(productString);
        } else {
            wishlist.add(productString)
        }
        

        localStorage.setItem('wishlist', JSON.stringify([...wishlist]));
        
    }
    
    function addToCart(newProduct, newQty) {
        // Utilizes local storage to persist cart state
        let targetIdx = -1;
        let cart = JSON.parse(localStorage.getItem('cart'));
        
        enumerate(cart).forEach(([idx, productString]) => {
            let productData = JSON.parse(productString);
            if (JSON.stringify(productData["product"]) === JSON.stringify(newProduct)) {
                cart[idx] = JSON.stringify({"product": newProduct, "qty": newQty + productData["qty"]})
                targetIdx = idx
                
            }
        })

        if (targetIdx === -1) {
            cart.push(JSON.stringify({"product": newProduct, "qty": newQty}))
        }
        localStorage.setItem('cart', JSON.stringify(cart))     
    }

    onMount(() => {
        wishlist = new Set(JSON.parse(localStorage.getItem('wishlist')));
        inWishlist = wishlist.has(JSON.stringify(product));
    })
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
                <button class="img-wrapper" on:click|preventDefault|stopPropagation={addToWishlist}><img src={inWishlist ? "./assets/icons/heart-full.png" : "./assets/icons/heart.png"} alt=""></button>
                <button class="add-to-cart" on:click|preventDefault|stopPropagation={() => {addToCart(product, 1)}}>Add to cart</button>
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

    .add-to-cart {
        padding: 0;
        margin: 0;
        padding: 8px 40px;
        border-radius: 10px;
        border: 1px solid #7F7F7F;
        background-color: transparent;
        font-weight: bold;
        font-weight: 400;
        font-size: 19px;
        margin-left: 10px;
    }

    .add-to-cart:hover {
        color: white;
        background-color: var(--navbar-color);
    }

    /* .carts button:hover {
        background-color: ;
    } */

    .carts img {
        width: 25px;
        height: 25px;
        top: 3px;
        position: relative;
    }

    .img-wrapper {
        border-radius: 10px;
        background-color: var(--navbar-color);
        border: none;
        outline: none;
        transition: transform 200ms ease-in-out;
    }

    .img-wrapper:hover {
        transform: translateY(-1px);
    }

</style>