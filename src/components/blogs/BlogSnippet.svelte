<script>
    export let blog;
</script>

<div class="blog-snippet" on:click={() => window.open(blog.external_link, '_blank')}>
    <h4>{blog.title}</h4>
</div>

<style>

</style>