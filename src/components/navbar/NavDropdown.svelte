<script>
    import SubNavComponent from "./SubNavComponent.svelte";
    
    export let content;
    export let pos;
    
</script>

<div class={`nav-dropdown ${pos}`}>
    <ul>
        {#each content as item}
            <SubNavComponent category={item} />
        {/each}
    </ul>
</div>

<style>
    .nav-dropdown {
        position: absolute;
        bottom: 0;
        z-index: 11;
        
        background-color: var(--sub-nav-color);
        overflow-y: visible;
        width: 280px;
        border: 1px solid (var(--border-color));
    }

    .nav-dropdown ul {
        padding: 0;
    }

    .right {
        transform: translateX(100%);
    }

    .down {
        transform: translateY(100%);
    }
</style>