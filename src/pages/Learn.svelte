<script>
    import { fade } from "svelte/transition";

    import Blogs from "../sections/Blogs.svelte";
    import Vlogs from "../sections/Vlogs.svelte";
    import BucketWrapper from "../components/BucketWrapper.svelte";
    import Recommended from "../sections/Recommended.svelte";
    import { api } from "../axios";
    import { onMount } from "svelte";
    import BlogSnippet from "../components/blogs/BlogSnippet.svelte";
    import RecentArticles from "../sections/RecentArticles.svelte";

    $: articleDict = {};

    onMount(() => {     
        api.get('blogs/articles').then(res => {
            articleDict = res.data;
        }).catch(err => {
            console.log(err);
        })
    })

    
</script>

<div class="learn-container" in:fade>
    <h1>Learn</h1>
    <div class="learning-categories">
        {#each Object.keys(articleDict) as articleCategory}
            <BucketWrapper title={articleCategory}>
                <ul>
                    {#each articleDict[articleCategory] as article}
                        <li>
                            <BlogSnippet blog={article} />
                        </li>
                    {/each}
                </ul>
            </BucketWrapper>
        {/each}
    </div>
</div>
<Blogs />
<RecentArticles />
<Recommended />

<style>
    .learn-container h1{
        text-align: center;
        font-weight: 400;
        margin: 50px auto;
    }
    .learning-categories {
        display: flex;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        width: 85%;
    }

    .learning-categories ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .learning-categories li {
        margin: 10px 0;
        display: flex;
    }

    .learning-categories p {
        /* max-width: 20ch; */
        font-size: 13px;
        color: var(--accent-color);
        text-decoration: underline;
        font-weight: 400;
        text-align: left;
        cursor: pointer;
        margin: 0;
        display: flex;
    }

    .learning-categories a {
        max-width: 30ch;
    }
</style>