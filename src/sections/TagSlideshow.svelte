<script>
    import { onMount } from 'svelte';
    import { api } from '../axios';

    $: loading = true;
    $: tags = [];

    async function fetchTags() {
        await api.get('tags/').then(res => {
            tags = res.data;
            loading = false;
        }).catch(err => {
            console.log(err);
        });
    }

    onMount(() => {
        fetchTags();
    })
</script>

<div class="tag-slideshow">
    {#if loading}
        Loading <span>...</span>
    {:else}
        <h2>Shop by Tags</h2>
        <a href="/#/tags" alt="">View all</a>
        <ul class="tag-list">
            {#each tags as tag}
            {#if tag.icon_url !== null}
                <li>
                    <img src={tag.icon_url} alt={tag.icon_alt_text || 'aur naur'} class="tag-icon">
                    <h4>{tag.name}</h4>
                </li>
            {/if}
            {/each}
        </ul>
    {/if}
</div>


<style>
    .tag-slideshow {
        width: var(--main-content-width);
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        margin-bottom: 4em;
    }

    .tag-slideshow h2 {
        margin: 0;
    }
    .tag-list {
        list-style: none;
        display: flex;
        position: relative;
        padding: 0;
        padding-top: 40px;
    }

    .tag-slideshow a {
        position: absolute;
        right: 0;
        top: 5;
        color: black;
        text-decoration: none;
    }

    .tag-slideshow a:hover {
        text-decoration: underline;
    }

    .tag-list li {
        padding: 0 90px;
        text-align: center;
        display: block;
    }

    /* .tag-logo-wrapper::before {
        content: '';
        display: block;
        background-color: var(--sub-nav-color);
        width: 120px;
        height: 120px;
        border-radius: 50%;
        position: absolute;
        margin: 0;
    } */


    .tag-icon {
        margin: 0 auto;
        width: 90px;
        /* transform: translateX(-50%) translateY(20%); */
        background-color: var(--sub-nav-color);
        padding: 20px;
        border-radius: 10px;
        object-fit: contain;
    }
</style>