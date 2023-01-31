<script>
    import { frontendHost } from "../hosts";
</script>

<div class="success-container">
    <h1>Your order has been placed!</h1>
    <h3>An email has been sent with the order confirmation</h3>

    <button class="back-to-shopping" on:click={() => {window.location = frontendHost}}>Back to Shopping</button>
</div>

<style>
    .success-container {
        min-height: 50vh;
        text-align: center;
        color: var(--navbar-color);
    }

    .success-container h1 {
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