<script>
    import { onMount } from "svelte";
    export let type;
    export let content;

   

</script>

<span class={`product-tag-container ` + type}>
    {#if type === "discount"}
        <span>Save {content * 100}%</span>
    {:else if type === "eco"}
        <img src='https://climate-startup-v1.s3.us-west-1.amazonaws.com/tag_icons/organic.png' alt="small leaf icon">
    {/if}
</span>

<style>

    .eco {
        background-color: #68A678; 
        left: -1px; 
        border-radius: 0px 10px 10px 0px;
    }

    .discount {
        right: -1px;
        border-radius: 10px 0 0 10px;
        background-color: var(--navbar-color);
    }

    .product-tag-container {
        position: absolute;
        
        top: 10%;
        padding: 4px 8px;
        font-weight: 700;
        color: white;
        font-size: 12px;
        display: inline-block;
        min-width: 50px;
    }

    .product-tag-container img {
        width: 13px;
        height: 13px;
        right: 5px;
    }

</style>