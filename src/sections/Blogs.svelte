<script>
    import { onMount } from "svelte";
    import { api } from "../axios";
    import { concatBlog } from "../utils/utils";



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
                <li class="blog-item">
                    <img src={blog.thumbnail} alt="">
                    <h3>{blog.title}</h3>
                    <p>{concatBlog(blog.content)}</p>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>

    .blog-list {
        display: flex;
        list-style: none;
        padding: 0;

    }

    .blogs-container h2 {
        font-weight: 400;
    }

    .blogs-container {
        width: var(--main-content-width);
        margin: 4em auto;
        justify-content: center;
        position: relative;
    }

    .blog-item {
        width: 446px;
        margin: 0 15px;
    }

    .blog-item:hover {
        color: var(--accent-color);
    }

    .blog-item img {
        border-radius: 15px;
        width: 100%;
        cursor: pointer;
    }

    .blogs-container a {
        position: absolute;
        right: 0;
        top: 0;
        color: var(--navbar-color);
        font-weight: 500;
    }

    .blog-item h3 {
        cursor: pointer;
        transition: all 200ms ease-in-out;
        font-weight: 500;
    }

    .blog-item p {
        line-height: 35px;
        font-size: 17px;
        font-weight: 500;
        color: var(--navbar-color) !important;
    }

    .blogs-container a:hover {
        text-decoration: underline;
    }


</style>