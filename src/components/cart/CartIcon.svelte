<script>

</script>

<div class="cart-icon-container" style="position: relative;" on:click={() => {window.location.href = "/#/cart"}}>
    <img src="./assets/icons/cart.png" alt="heart outline" class="cart-icon">
    <h2>Cart</h2>
</div>

<style>
    .cart-icon-container {
       padding: 0 40px 0 20px;
       display: flex;
       vertical-align: middle;
    }

    .cart-icon-container h2 {
        background: var(--header-gradient);
          /* Mask the color to the text, and remove the rest  */
        -webkit-background-clip: text;
        background-clip: text;
        /* Make the text fill color value transparent so the masked background color comes through */
        -webkit-text-fill-color: transparent;
        margin: 10px 0 0 10px;
        cursor: pointer;
        
    }

    .cart-icon {
        width: 21px;
        height: 21px;
        background: var(--header-gradient);
        padding: 10px;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
    }


</style>