<script>
    export let activeSubNav;

    import SubNavComponent from "./SubNavComponent.svelte";
    import { categories, aboutCategories } from "../../categories/categories";

    console.log(aboutCategories[0]);
</script>

<div class="sub-nav">
    <ul>
        {#if activeSubNav === 'categories'}
            {#each categories as category}

                <SubNavComponent category={category} pos="down"/>

            {/each}
        {:else if activeSubNav === 'about'}
            {#each aboutCategories as category}
                <SubNavComponent category={category} />
            {/each}
        {/if}
        
    </ul>
</div>

<style>
    .sub-nav {
        background-color: var(--sub-nav-color);
        width: 100%;
        position: relative;
        color: var(--navbar-color);
        z-index: 10;
    }

    /* .sub-nav::before {
        content: "";
        height: 47px;
        width: 400px;
        background-color: #A5C9CA;
        display: block;
        position: absolute;
        left: -100px;
    } */
    .sub-nav ul {
        display: flex;
        list-style: none;
        margin: 0 auto;
        padding: 0;
        padding-left: 100px;
    }
</style>