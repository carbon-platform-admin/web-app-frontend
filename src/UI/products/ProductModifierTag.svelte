<script>
    import { onMount } from "svelte";
    export let type;
    export let content;

   

</script>

<span class={`product-tag-container ` + type}>
    {#if type === "discount"}
        <span>Save {content * 100}%</span>
    {:else if type === "eco"}
        <div class="icon-wrapper">
            <img src='https://climate-startup-v1.s3.us-west-1.amazonaws.com/tag_icons/organic.png' alt="small leaf icon" class="eco-icon">
        </div>
    {/if}
</span>

<style>

    .eco {
        background-color: var(--accent-color); 
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
        height: 15px;
        top: 10%;
        padding: 4px 8px;
        font-weight: 700;
        color: white;
        font-size: 12px;
        display: inline-block;
        min-width: 50px;
;
    }

    .icon-wrapper {
        position: relative;
    }

    .eco-icon {
        width: 13px;
        height: 13px;
        right: 5px;
        position: absolute;
    }


</style>