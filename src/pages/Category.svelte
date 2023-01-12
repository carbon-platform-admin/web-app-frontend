<script>
    import BucketWrapper from "../components/BucketWrapper.svelte";
    import CategorySnippet from "../UI/CategorySnippet.svelte";
    import { Category, articleDict } from "../utils/utils";

    export let params;
</script>

<div class="category-container">
    <h1>{params.category.charAt(0).toUpperCase() + params.category.slice(1)}</h1>
    
    <h4>Learn how you can reduce your {params.category} CO2 footprint</h4>
    <div class="articles">
        <BucketWrapper title="Articles">
            <ul>
                {#each articleDict[params.category] as article}
                    <li>
                        <a href={article}>{article}</a>
                    </li>
                {/each}
            </ul>
        </BucketWrapper>
    </div>
    <CategorySnippet category={new Category("Jewelery", [], "Get your loved ones something that shines bright this holiday season.")}/>
</div>

<style>
    .category-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .articles {
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
    }
    .category-container ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
    }

    .category-container li {
        margin: 20px 0;
    }
    .category-container h1, .category-container h4 {
        text-align: center;
        margin: 20px 0;
    }
</style>