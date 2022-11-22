<script>

</script>

<div class="email-auth-container">
    <h3>Login to your account</h3>
    <form class="email-auth_form">
        <label for="email">Email</label>
        <input name="email" type="email">
        <label for="password">Password</label>
        <input name="password" type="password">
        <button type="submit"><h2>Login</h2></button>
    </form>
</div>

<style>
    .email-auth-container {
        text-align: center;
        position: relative;
        z-index: 100;
    }


    .email-auth_form {
        display: grid;
        grid-template-columns: 1fr;
        width: 85%;
        margin: 0 auto;
    }

    .email-auth_form input {
        min-height: 35px;
        padding: 0 10px;
        font-size: 15px;
        font-weight: 500;
    }

    .email-auth_form button h2 {
        font-size: 1.5em;
    }

    .email-auth_form button {
        border: none;
        margin-top: 20px;
        background-color: var(--navbar-color);
        filter: opacity(.6);
        color: white;
        border-radius: 2px;
    }

    .email-auth_form button:hover {
        transition: all .15s ease-in-out;
        filter: opacity(1);
    }

    .email-auth_form input:focus-visible {
        outline: none;
        border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    }
</style>


