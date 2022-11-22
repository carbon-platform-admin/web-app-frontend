<script>
    import { onMount } from "svelte";
    import { api } from "../axios";
    import Footer from "../sections/Footer.svelte";
    import ForYou from "../sections/ForYou.svelte";
    import Recommended from "../sections/Recommended.svelte";
    import PriceDisplay from "../UI/products/PriceDisplay.svelte";
    import ProductDataToggle from "../UI/products/ProductDataToggle.svelte";
    import StarRating from "../UI/StarRating.svelte";

    import { enumerate, checkWishlist } from "../utils/utils";

    export let params;
    $: product = {}
    $: loading = true;
    $: selectedQuantity = 1
    $: inWishlist = checkWishlist();

    window.addEventListener("popstate", () => {
        window.location.reload();
    });

    onMount(async () => {
        await api.get("products/" + params.productHandle).then((res) => {
            product = res.data;
            loading = false;
        }).catch((err) => {
            console.log(err);
        });
    })

    function decrement() {
        
        if (selectedQuantity === 1) {
            return;
        }
        selectedQuantity--;
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

    function toggleFromWishlist(newProduct) {
        let wishlist = new Set(JSON.parse(localStorage.getItem('wishlist')))
        if (wishlist.has(JSON.stringify(newProduct))) {
            wishlist.remove(JSON.stringify(newProduct))
        } else {
            wishlist.add(JSON.stringify(newProduct))
        }

        localStorage.setItem('wishlist', JSON.stringify(new Array(wishlist)))
    }

    async function checkout() {
        let checkoutData = [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: product.title,
                    images: [product.image_src]
                },
                unit_amount: product.variant_price * 100 // this is in cents
            },
            quantity: selectedQuantity,
        }]

        await api.post("products/create-checkout-session", checkoutData).then(res => {
            console.log(res.data)
        }).catch(error => {
            if (error.response.status === 303) {
                window.location = error.response.data
            }
        })
    }

</script>

<div class="product-navbar">
    <span><a href="/#/">Home</a> > <a href="/#/">All products</a> > {product.title}</span>
</div>
<div class="product-detail-container">
    {#if loading}
        <span>Loading</span>
    {:else}
        <img src={product.image_src} alt={product.image_alt_text}>
        <div class="product-info">
            <div class="info">
                <h1>{product.title}</h1>
                <span class="vendor-name">{product.vendor.name}</span>
                <PriceDisplay {product}/>
                {#if product.review_count !== 0}
                    <StarRating product={product} full={true}/>
                {/if}
            </div>
            <div class="buttons">
                <div class="quantity-selector">
                    <span>Qty.</span>
                    <button class="decrement" on:click={() => {decrement()}}>-</button>
                    <span class="quantity-counter">{selectedQuantity}</span>
                    <button class="increment" on:click={() => {selectedQuantity++}}>+</button>

                    <h3>${Math.round(selectedQuantity * product.variant_price)}</h3>
                </div>
                <div class="cart-buttons">
                    <button class="wishlist-icon" on:click|preventDefault={() => {toggleFromWishlist(product)}}><img src={!inWishlist ? "./assets/icons/heart.png" : "./assets/icons/heart-full.png"} alt="empty heart"></button>
                    <button class="cart-btn" on:click|preventDefault={() => {
                        addToCart(product, selectedQuantity)
                    }}>Add to cart</button>
                    <button class="cart-btn" on:click={checkout}>Buy now</button>
                </div>
            </div>
            
            <div class="delivery-and-social">
                <form class="delivery-form">
                    <label for="zipcode">
                        <img src="./assets/icons/delivery-truck.png" alt="2d Delivery truck">
                        Delivery Options</label>
                    <span>
                        <input type="text" name="zipcode" placeholder="Zipcode">
                        <button type="submit" on:click|preventDefault>Check</button>
                    </span>
                </form>
                <div class="social">
                    <div class="social-links">
                        <img src="./assets/icons/share.png" alt="tree data structure">
                        <span>Share</span>
                        <a href="https://www.facebook.com/"><img src="./assets/icons/facebook.png" alt="facebook logo"></a>
                        <a href="https://twitter.com/"><img src="./assets/icons/twitter.png" alt="twitter logo"></a>
                    </div>
                </div>
            </div>
            <div class="misc-product-details">
                <button>
                    <img src="./assets/icons/parcel.png" alt="Cardboard package box with arrow">
                    Return/Exchange
                </button>
                <button>
                    <img src="./assets/icons/cancel.png" alt="Circle with x through it">
                    Cancellation
                </button>
                <button>
                    <img src="./assets/icons/three-o-clock-clock.png" alt="Clock face set to 3am">
                    Preparation Time
                </button>
            </div>
            <ProductDataToggle {product}/>
        </div>
    {/if}
    
</div>
<ForYou />
<Recommended />
<Footer />

<style>

    .product-navbar {
        width: var(--main-content-width);
        margin: 0 auto;
        padding-top: 10px;
        font-size: 13px;
        padding-bottom: 30px;
        color: var(--navbar-color);

    }

    .product-detail-container { 
        display: grid;
        grid-template-columns: .8fr 1fr;
        column-gap: 1em;
        width: var(--main-content-width);
        margin: 0 auto;
        
    }

    .product-info {
        display: flex;
        flex-direction: column;
    }

    .product-detail-container img {
        height: 603px;
        width: 586px;
        border-radius: 10px;
    }

    .quantity-selector {
        display: flex;
        color: var(--navbar-color);
        font-size: large;
    }

    .quantity-counter {
        background-color: white;
        padding: 0 20px;
        vertical-align: middle;
        line-height: 50px;
    }

    .quantity-selector h3 {
        font-weight: 500;
        margin-left: 20px;
        transform: translateY(8px);
    }

    .quantity-selector span {
        line-height: 50px;
    }

    .quantity-selector button {
        background-color: white;
    }

    .buttons {
        display: flex;
        width: 100%;
        background-color: var(--sub-nav-color);
        flex-direction: column;
        padding-left: 17px;
        padding-top: 40px;
        margin-top: 40px;
        border-radius: 10px;
        padding-bottom: 25px;
    }

    .buttons button {
        height: 54px;
        padding: 0 20px;
    }

    .wishlist-icon {
        width: 64px;
        background-color: var(--sub-nav-color);
    }

    .increment {
        border: none;
        border-left: 1px solid grey; 
        border-radius: 0 10px 10px 0;
        transition: all 200ms ease-in-out;
    }

    .decrement {
        border: none;
        border-right: 1px solid grey;
        margin-left: 10px;
        border-radius: 10px 0 0 10px;
        transition: all 200ms ease-in-out;
    }

    .cart-buttons {
        display: grid;
        grid-template-columns: .5fr 2fr 2fr;
        column-gap: 10px;
        width: 70%;
        margin-top: 20px;
    }

    .cart-buttons button {
        background-color: var(--navbar-color);
        border: none;
        color: white;
        border-radius: 10px;
        transition: all 200ms ease-in-out;
    }

    .cart-buttons img {
        height: 26px;
        width: 26px;
    }

    .cart-btn {
        font-size: larger;
    }

    .increment:hover, .decrement:hover {
        background-color: var(--navbar-color);
        color: white;
    }

    .cart-btn:hover {
        background-color: white;
        color: var(--navbar-color);
        border: 1px solid var(--navbar-color);
    }

    .delivery-and-social {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 10px;
        position: relative;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 30px;
    }

    .delivery-form {
        display: grid;
        grid-template-rows: 1fr 1fr;
    }

    .delivery-form img{
        width: 27px;
        height: 27px;
        position: relative;
        bottom: 0;
        margin-right: 7px;
        transform: translateY(20%);
    }

    .delivery-form label {
        position: relative;
        font-weight: 600;
    }

    .delivery-form span {
        margin-left: 5ch;

    }

    .delivery-form input{
        border: none;
        border-bottom: 1px solid var(--border-color);
        outline: none;
        margin-top: 5px;
        font-size: medium;
        font-weight: 600;

    }
    
    .delivery-form input::after{
        content: "";
        display: block;
        width: 10%;
        height: 1px;
        background-color: var(--border-color);
        right: 0;
        position: relative;
    }
    .delivery-form button {
        border: none;
        background-color: transparent;
        font-size: medium;
        font-weight: 600;
        color: var(--navbar-color);
    }

    .delivery-form button:hover {
        transform: translateY(-1px);
    }
    
    .social img {
        width: 27px;
        height: 27px;
        border-radius: 0px;
        transform: translateY(8px);
    }

    .social-links {
        vertical-align: middle;
        right: 0;
        position: absolute;
    }

    .social-links span {
        font-weight: 600;
        font-size: 16px;
        
    }

    .misc-product-details {
        display: flex;
        justify-content: space-between;
        padding: 20px 30px;
    }

    .misc-product-details button {
        background: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 600;
        color: var(--navbar-color);
        transition: transform 200ms ease-in-out;
    }

    .misc-product-details button:hover {
        transform: translateY(-2px);
    }

    .misc-product-details button > img {
        height: 23px;
        width: 23px;
        transform: translateY(5px);
    }
</style>