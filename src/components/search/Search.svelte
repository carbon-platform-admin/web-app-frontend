<script>
    import algoliasearch from 'algoliasearch/lite';
    import { frontendHost } from '../../hosts';

    import { SearchResultStore } from "../../stores/SearchResultsStore";
    import { queryStore } from "../../stores/QueryStore";

    import { onMount } from "svelte";

    const algoliaAppID = "B8LL3M4JX0";
    const algoliaPublicKey = "d4efaae7309f0667b068b5162a2660bb";

    let searchClient;
    let index;

    $: query = '';
    $: hits = [];

    onMount(() => {
        if (query === '' && window.location.href.includes('search')) {
            window.location = frontendHost;
        }
        searchClient = algoliasearch(
            algoliaAppID,
            algoliaPublicKey,
        )

        index = searchClient.initIndex('products');

    })

    async function search() {
        const result = await index.search(query);
        hits = result.hits;

        SearchResultStore.set(hits);
        queryStore.set(query);


        if (query === '') {
            window.location = frontendHost;
        } else if (!window.location.toString().includes('search')) {
            window.location = frontendHost + 'search/' + query;
        }
    }

</script>

<div class="search-container">
    <input type="text" class="search" name="query" bind:value={query} on:keyup={search}>
    <button class="search_button" type="submit"><img src="./assets/icons/loupe.png" alt="search icon"></button>
</div>

<style>

    .search-container {
        background-color: white;
        border-radius: 30px;
        max-height: 40px;
        min-width: 370px;
        position: relative;
        margin-left: 30px;
    }

    .search {
        outline: none;
        border: none;
        background-color: transparent;
        padding: 0 10px;
        margin: 0;
        height: 100%;
        width: 90%;
    }

    .search_button {
        border: none;
        margin: 0;
        height: 32px;
        width: 32px;
        padding: 0;
        background: var(--header-gradient);
        border-radius: 50%;
        position: absolute;
        right: 4px;
        top: 4px;
    }

    .search_button img {
        object-fit: scale-down;
        width: 20px;
    }
</style>