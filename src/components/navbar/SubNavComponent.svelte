<script>
    import NavDropdown from "./NavDropdown.svelte";

    export let category;
    export let pos = 'right';
    $: isActive = false;

</script>

<li class="sub-nav-comp-container" on:mouseenter={() => {isActive=true}} on:mouseleave={() => {isActive=false}}>
    <a href={category.link}>
        <h3>{category && category.title}</h3>
    </a>
    {#if category.subCategories.length !== 0}
        <img src="./assets/icons/down-arrow-colored.png" alt="down-arrow">
        {#if isActive}
            <NavDropdown content={category.subCategories} pos={pos}/>
        {/if}
    {/if}
</li>

<style>
    .sub-nav-comp-container {
        display: flex;
        padding: 17px 10px;
        padding-left: 0;
        cursor: pointer;
        position: relative;

    }

    .sub-nav-comp-container:hover {
        color: var(--navbar-color) !important;
    }

    .sub-nav-comp-container h3 {
        font-size: 14px;
        font-weight: 600;
        margin: 0;
        margin-left: 15px;
        color: var(--navbar-color);
    }



    .sub-nav-comp-container img {
        object-fit: scale-down;
        width: 16px;
        height: 100%;
        margin-top: 3px;
        margin-left: 6px;
    }
</style>