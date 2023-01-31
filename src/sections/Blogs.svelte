<script>
    import { onMount } from "svelte";
    import { api } from "../axios";
    import BlogItem from "../components/blogs/BlogItem.svelte";



    $: blogs = [];
    $: loading = true;

    function fetchBlogs() {
        api.get("blogs/recent").then(res => {
            blogs = res.data;
            loading = false;
        }).catch(err => {

        });
    }

    onMount(() => {
        
        fetchBlogs();
    })
</script>

<div class="blogs-container">
    <h2>Recent Blog Posts</h2>
    <a href="/#/blogs">View all</a>
    {#if loading}
        <span>Loading...</span>
    {:else}
        <ul class="blog-list">
            {#each blogs as blog}
                <BlogItem {blog} />
            {/each}
        </ul>
    {/if}
</div>

<style>
    
    .blog-list {
        display: flex;
        list-style: none;
        padding: 0;
        width: max-content;
        margin: 0 auto;
    }

    .blogs-container h2 {
        font-weight: 400;
        font-size: xx-large;
        text-align: center;
        color: var(--navbar-color);
        margin-bottom: 70px;
    }

    .blogs-container {
        width: 90%;
        margin: 4em auto;
        justify-content: center;
        position: relative;
    }

    .blogs-container a {
        position: absolute;
        right: 0;
        top: 0;
        color: var(--navbar-color);
        font-weight: 500;
    }

    

    .blogs-container a:hover {
        text-decoration: underline;
    }
</style>