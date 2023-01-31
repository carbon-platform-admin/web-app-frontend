<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    import { api } from "../axios";
    import BlogItem from "../components/blogs/BlogItem.svelte";
    import { paginateList } from "../utils/utils";

    var articles = [[]];
    $: currIdx = 0;

    onMount(() => {
        
        api.get('blogs/articles/recent').then(res => {
            articles = paginateList(res.data, 3);
            
        }).catch(err => console.log(err)).finally(() => {
            console.log(articles);

        })

    })

    function increment(i, n=1) {
        if (i === articles.length - 1) {
            return i;
        }

        currIdx = i + n;
    }

    function decrement(i, n=1) {
        if (i === 0) {
            return i;
        }

        currIdx = i - n;
    }
</script>

<div class="recent-articles" >
    <h2>Recent Articles</h2>
    {#if currIdx !== 0}
        <button class="left" on:click|preventDefault={() => decrement(currIdx)} in:fade out:fade>
            <img src="./assets/icons/left-arrow.png" alt="left arrow">
        </button>
    {/if}
    {#if currIdx !== articles.length - 1}
        <button class="right" on:click|preventDefault={() => increment(currIdx)} in:fade out:fade>
            <img src="./assets/icons/right-arrow.png" alt="right arrow">
        </button>
    {/if}
    <a href="/#/blogs">View all</a>
    <ul class="articles-list">
        {#each articles[currIdx] as article}
            <BlogItem blog={article} />
        {/each}
    </ul>
</div>

<style>
    .recent-articles {
        position: relative;
        width: 90%;
        margin: 0 auto;
    }

    .right, .left {
        position: absolute;
        top: 20px;  
        background-color: transparent;
        border: none;
        outline: none;
        transition: all .2s ease-in-out;
    }

    .recent-articles img {
        width: 40px;
        height: 40px;
    }

    .recent-articles button:hover {
        transform: translateY(-2px);
    }

    .left {
        left: 100px;
    }

    .right {
        right: 100px;
    }
    .articles-list {
        display: flex;
        list-style: none;
        padding: 0;
        width: max-content;
        margin: 0 auto;
        margin-bottom: 50px;
    }

    .recent-articles h2 {
        font-weight: 400;
        font-size: xx-large;
        text-align: center;
        color: var(--navbar-color);
        margin-bottom: 20px;
    }
    .recent-articles a {
        position: absolute;
        right: 0;
        top: 0;
        color: var(--navbar-color);
        font-weight: 500;
    }

    

    .recent-articles a:hover {
        text-decoration: underline;
    }
</style>


