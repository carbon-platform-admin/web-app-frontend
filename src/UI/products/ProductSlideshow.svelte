<script>
    import ProductTeaser from "./ProductTeaser.svelte";

    export let products = [];

    export let id;

    export let move = 1;

    $: currIdx = 0;

    let limit; 

    
    function moveSlideshow(dir) {
        var slideshow = document.getElementById("category-slideshow-" + id.replaceAll(" ", "-").toLocaleLowerCase())

        let slideLength = document.getElementById("slide-item").offsetWidth;

        limit = Math.min(Math.ceil(products.length / move) - 1, 10);


        if (dir === 'next') {
            currIdx++;
            slideshow.setAttribute("style", `transform: translateX(-${move * currIdx * slideLength}px)`)
        } else if (dir === 'back') {
            currIdx--;
            slideshow.setAttribute("style", `transform: translateX(-${(move * currIdx * slideLength)}px)`)
        }        
    }

    
</script>

<div class="product-slideshow-container">
    {#if currIdx !== 0}
        <button class="progress_slide_show" on:click|preventDefault={() => moveSlideshow('back')}>
            <img src="./assets/icons/less-than.png" alt="less than sign">
        </button>
    {/if}
    
    {#if currIdx !== limit}
        <button class="progress_slide_show right" on:click|preventDefault={() => moveSlideshow('next')}>
            <img src="./assets/icons/greater-than.png" alt="greater than sign">
        </button>
    {/if}
    <ul class="product-slideshow" id={"category-slideshow-" + id.replaceAll(" ", "-").toLocaleLowerCase()}>
        {#each products as product}
            {#if product.title !== null}
                <li id="slide-item">
                    <ProductTeaser product={product}/>
                </li>
            {/if}
        {/each}
    </ul>
</div>

<style>
    .product-slideshow-container {
        width: inherit;
        position: relative;
        overflow: hidden;
    }

    .product-slideshow {
        display: flex;
        width: inherit;
        list-style: none;
        padding-left: 2px;
        padding: 0;
        transition: transform 600ms ease-in-out;
    }

    .progress_slide_show {
        position: absolute;
        top: 39%;
        border: none;
        background: transparent;
        z-index: 10;
        padding: 0;
        transform: translateX(-35%);
        transition: opacity 200ms ease-in-out;
    }

    .progress_slide_show img {
        width: 18px;
        height: 18px;
        background-color: #9bcfdd;
        padding: 16px;
        border-radius: 50%;
        /* transition: background-color 100ms linear; */
    }

    .progress_slide_show img:hover {
        background-color: rgba(139, 154, 168, 1);
    }

    .right {
        right: 0;
        transform: translateX(35%);
    }
</style>