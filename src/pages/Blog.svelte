<script>
    import { onMount } from "svelte";
    import { api } from "../axios";
    import Blogs from "../sections/Blogs.svelte";
    import RecentArticles from "../sections/RecentArticles.svelte";

    export let params;
    $: blog = {};
    $: loading = true;

    onMount(() => {
        api.get(`blogs/${params.blogTitle}`).then(res => {
            console.log(res.data);
            blog = res.data;
        }).catch(err => {
            window.alert('Error fetching blog')
            console.log(err)
        }).finally(() => {
            loading = false;
        })
    })
</script>
{#if !loading}
    <div class="blog-page">
        <h2>{blog.title}</h2>
        {@html blog.content}
        <RecentArticles />
        <Blogs />
    </div>
{/if}

<style>
    .blog-page {
        width: 90%;
        margin: 0 auto;
    }
    .blog-page h2 {
        text-align: center;
    }
</style>