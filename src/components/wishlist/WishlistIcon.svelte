<script>

</script>

<div class="wishlist-icon-container" style="position: relative;" on:click={() => {}}>
    <a href="/#/wishlist"><img src="./assets/icons/heart.png" alt="heart outline" class="wishlist-icon"></a>
</div>

<style>
    .wishlist-icon-container {
       padding: 0 30px 0 20px;
    }

    .wishlist-icon-container a {
        padding: 0;
        margin: 0;
    }

    .wishlist-icon {
        width: 21px;
        height: auto;
        background: var(--header-gradient);
        padding: 10px;
        border-radius: 10px;
        position: relative;
        
    }

    .wishlist-icon-container::after {
        content: "";
        width: 1px;
        height: var(--nav-separator-height);
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-block;
        background: var(--header-gradient);
    }

</style>