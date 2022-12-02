<script>
    import { onMount, onDestroy } from "svelte";

    import { fade } from "svelte/transition";

    import { SearchResultStore } from "../stores/SearchResultsStore";
    import ProductTeaser from "../UI/products/ProductTeaser.svelte";

    import { queryStore } from "../stores/QueryStore";

    $: results = [];
    $: query = '';

    



   

    onMount(() => {
        const unsubscribeQuery = queryStore.subscribe(data => {
            query = data
        })

        const unsubscribe = SearchResultStore.subscribe(data => {
            results = data;
        })
        
        if (query === "") {
            SearchResultStore.set([]);
        }
    })

    



</script>

<div class="search-page-container" in:fade>
    {#if results.length === 0}
        <h3>
            No Search Result for '{query}'
        </h3>
    {:else}
        <ul class="results-list">
            {#each results as result}
                <li class="result-item">
                    <ProductTeaser product={result}/>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>

    .search-page-container {
        width: var(--main-content-width);
        margin: 0 auto;
        overflow-x: hidden;
        min-height: 50vh;
    }
    .results-list {
        display: flex;
        padding: 0;
        list-style: none;
        overflow-x: hidden;
    }
</style>