<script>
    export let product;
</script>

<spa class="price-display-container">
    {#if product.active_discount > 0}
        <span class="price">${((1 - product.active_discount) * product.variant_price).toFixed(2)}</span>
        <span class="old_price">${product.variant_price}</span>
        <span>{`(Save ${product.active_discount * 100}%)`}</span>
    {:else}
        <span class="price">${product.variant_price}</span>
    {/if}
</spa>

<style>
    .price-display-container {
        font-weight: 600;
        font-size: small;
        margin-top: 5px;
        display: block;
        color: var(--price-color);
    }
    
    .price {
        font-size: large;
    }

    .old_price {
        text-decoration: line-through;
        margin-left: 10px;
        color: grey;
    }



</style>