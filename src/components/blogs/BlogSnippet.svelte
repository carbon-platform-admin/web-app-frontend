<script>
    export let blog;
</script>

<div class="blog-snippet" on:click={() => window.open(blog.external_link, '_blank')}>
    <h4>{blog.title}</h4>
</div>

<style>
    .blog-snippet {
        margin: 0 auto;
        min-width: 90%;
        min-height: 50px;
        border-radius: 10px;
    }

    .blog-snippet:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        cursor: pointer;
    }

    .blog-snippet h4 {
        font-weight: 400;
        font-size: 20px;
    }
</style>