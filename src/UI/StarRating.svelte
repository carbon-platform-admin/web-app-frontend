<script>
    export let product;
    export let full = false;

    const stars = [0, 1, 2, 3, 4]
</script>

<div class="star-rating-container">
    <ul class="star-rating-list">
        {#each stars as star}
            <li>
                {#if star < product.median_rating}
                    <img src="./assets/icons/star.png" alt="shining star icon">
                {:else}
                    <img src="./assets/icons/star-faded.png" alt="grey star icon">
                {/if}
            </li>
        {/each}
    </ul>
    {#if full}
        <span>{product.review_count} {product.review_count === 1 ? ' review' : ' reviews'}</span>
    {/if}
</div>

<style>

    .star-rating-container {
        display: inline-block;
        width: 100%;
    }

    .star-rating-list {
        display: flex;
        list-style: none;
        padding: 0;
    }

    .star-rating-container img {
        width: 14px;
        height: 14px;
        margin-right: 4px;
    }
</style>