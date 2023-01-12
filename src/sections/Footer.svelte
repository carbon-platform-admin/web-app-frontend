<script>
    import { tags, policies } from "../categories/categories"
    let categories = [
        'Transportation',
        'Home',
        'Food',
        'Purchases'
    ]
</script>

<div class="footer">
    <ul>
        <h2>Categories</h2>
        <br >
        {#each categories as category}
            <li>
                <p>
                    {category}
                </p>
            </li>
        {/each}
    </ul>
    <ul>
        <h2>Tags</h2>
        <br >
        {#each tags as item}
            <li>
                <p>
                    {item}
                </p>
            </li>
        {/each}
    </ul>
    <ul>
        <h2>Policies</h2>
        <br >
        {#each policies as item}
            <li>
                <p>
                    {item}
                </p>
            </li>
        {/each}
    </ul>
    <ul>
        <h2>Contact & Support</h2>
        <br >
        <li>
            <p>
                help@thecarbonplatform.com
            </p>
        </li>
        <li>
            <p>
                7143815418
            </p>
        </li>
        <li>
            <div class="social">
                <a href="https://www.facebook.com/"><img src="./assets/icons/facebook.png" alt="facebook logo"></a>
                <a href="https://twitter.com/"><img src="./assets/icons/twitter.png" alt="twitter logo"></a>
            </div> 
        </li>
    </ul>
</div>

<style>
    .footer {
        background-color: var(--navbar-color);
        color: white;
        min-height: 500px;
        display: flex;
        padding-top: 3em;
        justify-content: center;
    }

    .footer ul {
        margin: 0 4em;
        list-style: none;
    }

    .footer ul >

    .footer p {
        font-size: 15px;
    }

    .social img {
        width: 27px;
        height: 27px;
        border-radius: 0px;
        transform: translateY(8px);
    }
</style>