<script>
    import { onMount } from "svelte";

    import { api } from "../axios";
    import ProductTeaser from "../UI/products/ProductTeaser.svelte";

    let cart = [];
    function buildCart() {
        let cart = [];
        JSON.parse(localStorage.getItem("cart")).forEach(productString => {
            cart.push([JSON.parse(productString)['product'], JSON.parse(productString)['qty']]);
        })
        return cart;
    }

    async function checkout() {
        let checkoutData = cart.map(([product, qty]) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.title,
                        images: [product.image_src]
                    },
                    unit_amount: product.variant_price * 100 // this is in cents
                },
                'quantity': qty,
            }
        })

        await api.post("products/create-checkout-session", checkoutData).then(res => {
            console.log(res.data)
        }).catch(error => {
            if (error.response.status === 303) {
                localStorage.setItem("cart", "[]");
                window.location = error.response.data
            }
        })
    }

    onMount(() => {
        cart = buildCart();
    })
</script>

<div class="cart-page">
    {#if cart.length === 0}
        <h2>Your cart is empty!</h2>
    {:else}
        <h2>Your Cart</h2>
    {/if}
    <ul class='cart-list'>
        {#each cart as [product, qty]}
            <li>
                <ProductTeaser product={product} inCart={true}/>
                <h3>Qty: {qty}</h3>
            </li>
        {/each}
    </ul>

    {#if cart.length === 0}
        <button id="checkout" on:click={() => window.location = '/'}>Add products to cart</button>
    {:else}
        <button id="checkout" on:click={checkout}>Checkout</button>
    {/if}
</div>

<style>
    .cart-page {
        width: var(--main-content-width);
        margin: 4em auto;
        display: flex;
        flex-direction: column;
    }

    .cart-list {
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        margin: 0;
        margin-top: 1em;
    }

    .cart-page button {
        width: 200px;
        height: 40px;
        font-size: 19px;
        font-weight: 500;
        margin: 3em auto;
        margin-bottom: 1em;
        background-color: var(--navbar-color);
        color: white;
        border: none;
        outline: none;
        border-radius: 5px;
    }

    .cart-list h3, .cart-page h2 {
        text-align: center;
    }
</style>