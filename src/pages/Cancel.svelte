<script>
    
</script>

<div class="cancel-container">
    <h1>Your order has not been placed</h1>
    <button class="back-to-shopping" on:click={() => {window.location = '/'}}>Back to shopping</button>
</div>

<style>
    .cancel-container {
        min-height: 50vh;
        text-align: center;
        color: var(--navbar-color);
    }

    .cancel-container h1 {
        margin-top: 4em;
        margin-bottom: 2em;
    }

    .back-to-shopping {
        background-color: var(--navbar-color);
        color: white;
        outline: none;
        border: none;
        padding: 20px;
        font-size: 17px;
        font-weight: 500;
        margin-top: 40px;
    }
</style>