<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { frontendHost } from "../../hosts";

    import { concatBlog } from "../../utils/utils";


    export let blog;

    onMount(() => {
        if (blog.thumbnail === null || blog.thumbnail === '') {
            const el = document.querySelector('.blog-title');
            el.style.setProperty("--blog-thumbnail-display", 'none');
        }
    })

    function handleClick(link) {
        if (link === null) {
            window.open(frontendHost + 'learn/blogs/' + blog.title);
        } else {
            window.open(link, '_blank');
        }
    }
</script>

<li class="blog-item" on:click={() => handleClick(blog.external_link)} in:fade out:fade>
    <h3 class="blog-title">{blog.title}</h3>
    {#if blog.thumbnail !== null && blog.thumbnail !== ''}
        <img src={blog.thumbnail} alt="">
    {/if}
    {#if blog.content !== null && blog.content !== ''}
        {@html blog.content}
    {/if}
</li>

<style>
    :root {
        --blog-thumbnail-display: inline-block;
        --blog-thumbnail-width: 446px;
        --blog-thumbnail-height: 273px;
    }

    .blog-item {
        max-width: 446px;
        margin: 0 15px;
        position: relative;
        overflow-y: hidden;
        max-height: 400px;
    }

    .blog-item:hover {
        cursor: pointer;
    }

    .blog-item img {
        border-radius: 15px;
        width: var(--blog-thumbnail-width);
        height: var(--blog-thumbnail-height);
        object-fit: cover;
        cursor: pointer;
    }

    .blog-item h3 {
        cursor: pointer;
        /* transition: all 200ms ease-in-out; */
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        position: relative;
        bottom: 0;
        margin-bottom: 10px;
    }

    /* .blog-item h3::after {
        content: "";
        background-color: grey;
        width: 446px;
        height: 273px;
        display: var(--blog-thumbnail-display);
        position: relative;
        border-radius: 15px;
       .blog-item p {
        line-height: 35px;
        font-size: 17px;
        font-weight: 500;
        color: var(--navbar-color) !important;
    } top: 10px;
    } */

    
</style>