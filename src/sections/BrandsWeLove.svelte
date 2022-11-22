<script>
    import { onMount } from "svelte";
    import { api } from "../axios";
    import About from "./About.svelte";

    $: loading = true;
    let brands = [];

    onMount(() => {
        api.get("vendors/featured").then(res => {
            brands = res.data;
            loading = false;
        }).catch(err => {
            console.log(err);
        })
    })
</script>

<div class="brands-we-love">
    <h2>Brands we Love</h2>
    

    {#if loading}
        <span>Loading...</span>
    {:else}
        <div class="list-wrapper">
            <ul class="brand-list">
                {#each brands as brand}
                    <li class="brand-item">{brand.name}</li>
                {/each}
            </ul>
        </div>
    {/if}
</div>

<style>
    .brands-we-love {
        width: var(--main-content-width);
        margin: 0 auto;
    }

    .brands-we-love h2 {
        margin-bottom: 1em;
        font-weight: 500;
    }

    .list-wrapper {
        border: 1px solid var(--border-color);
        border-radius: 10px;
        overflow: hidden;
    }


    .brand-list {
        list-style: none;
        display: flex;
        padding: 0;
    }

    .brand-item {
        
        color: var(--navbar-color);
        min-height: 100px;
        min-width: 20ch;
        padding: 20px 30px;
        font-size: 17px;
        font-weight: 500;
        border-right: 1px solid var(--border-color);
        text-align: center;
    }
</style>