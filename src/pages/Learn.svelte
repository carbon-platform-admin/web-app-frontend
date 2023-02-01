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
            <BucketWrapper title={articleCategory} width="90%">
                <ul>
                    {#each articleDict[articleCategory] as article}
                        <li class="snippet-item">
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
        color: var(--navbar-color);
    }
    .learning-categories {
        display: grid;
        margin: 0 auto;
        width: 85%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 20px;
    }

    .learning-categories ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .snippet-item {
        text-align: center;
    }



    .learning-categories li {
        margin: 10px 0;
        display: flex;
    }


</style>