<script>
    // Foreign exports
    import { onMount } from 'svelte';

    // Local imports
    import { api } from '../axios';
    import { colors, enumerate } from "../utils/utils";
    
    $: categories = [];
    $: currIdx = 0;

    // Take the clientWidth* of the list's wrapper div, divide by the total width of the list
    // *Client width is the total width of element minus the width of the scrollbar (if applicable)

    // $: idxCap = 0;

    // // Fetch the main categories with no parent categories
    // onMount(() => {
    //     api.get('categories/roots').then((res) => {
    //         categories = res.data['content'];

           

            
    //     }).catch((err) => {
    //         console.log(err);
    //         alert("Error fetching categories")
    //     }).finally(() => {
    //         console.log(document.querySelector('.category_item').clientWidth);
    //         console.log(document.querySelector('.category_item').clientWidth * categories.length);
    //         console.log(document.querySelector('.categories-widget').clientWidth);
    //         idxCap = Math.round((document.querySelector('.category_item').clientWidth * categories.length) / document.querySelector('.categories-widget').clientWidth);
    //     });
    // })





    // function moveSlideShow(dir) {
    //     if (dir === 'next') {
    //         currIdx++;    
    //     } else if (dir === 'back') {
    //         currIdx--;
    //         if (currIdx < 0) {
    //             currIdx = idxCap - 1;
    //         }
    //     }

        
    //     let itemWidth = document.querySelector('.category_slideshow').clientWidth;
        
    //     var slideShow = document.querySelector('.category_slideshow')
    //     slideShow.setAttribute('style', `transform: translateX(-${currIdx * itemWidth}px)`);

    // }

    function handleRedirect(extension) {
        console.log(window.location.href);
        if (window.location.href.includes('/#/marketplace')) {
            window.location.href = extension + "/marketplace";
            return
        } 
        window.location.href = extension;
    }
</script>

<section id="category-widget">
    <div class="categories-widget">
        <!-- {#if currIdx !== 0}
            <button class="progress_slide_show" on:click|preventDefault={() => moveSlideShow('back')}>
                <img src="./assets/icons/less-than.png" alt="less than sign">
            </button>
        {/if}
        
        {#if currIdx !== idxCap - 1}
            <button class="progress_slide_show right" on:click|preventDefault={() => moveSlideShow('next')}>
                <img src="./assets/icons/greater-than.png" alt="greater than sign">
            </button>
        {/if} -->
        <ul class="category_slideshow">
            <li class="category-item">
                <div class="icon-wrapper" on:click={() => {handleRedirect('/#/transportation')}}><img src="./assets/icons/categories/train.png" alt="train"></div>
                <h2>Transportation</h2>
            </li>
            <li class="category-item">
                <div class="icon-wrapper" on:click={() => {handleRedirect("/#/home")}}><img src="./assets/icons/categories/home.png" alt="house icon"></div>
                <h2>Home</h2>
            </li>
            <li class="category-item">
                <div class="icon-wrapper" on:click={() => {handleRedirect("/#/food")}}><img src="./assets/icons/categories/fork.png" alt="fork"></div>
                <h2>Food</h2>
            </li>
            <li class="category-item">
                <div class="icon-wrapper" on:click={() => {handleRedirect('/#/purchases')}}><img src="./assets/icons/categories/dollar-sign.png" alt="dollar sign"></div>
                <h2>Purchases</h2>
            </li>
        </ul>
    </div>
</section>

<style>

    /* #category-widget {
        overflow: hidden;
    } */

    .categories-widget {
        width: var(--main-content-width);
        margin: 60px auto;
        position: relative;
        overflow: hidden;
        height: fit-content;
    }
    

    /* .categories-widget::before {
        content: '';
        display: block;
        width: 191px;
        background-color: var(--sub-nav-color);
        position: absolute;
        height: 500px;
        left: 0;
        transform: translateX(-191px);
        z-index: 2;
    } */

    /* .categories-widget::after {
        content: '';
        display: block;
        width: 191px;
        background-color: var(--sub-nav-color);
        position: absolute;
        height: 500px;
        right: 0;
        top: 0;
    } */

    .categories-widget img {
        width: 128px;
        height: 128px;
    }

    .category-item {
        text-align: center;
    }

    .category-item h2 {
        font-weight: 400;
        color: var(--navbar-color);
        cursor: pointer;
    }

    .icon-wrapper {
        padding: 58px;
        border-radius: 50%;
        background-color: var(--navbar-color);
        cursor: pointer;
    }

    .category_slideshow {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        height: fit-content;
        transition: transform 600ms ease-in-out;
        justify-content: space-between;
    }

    .progress_slide_show {
        position: absolute;
        top: 39%;
        border: none;
        background: transparent;
        z-index: 5;
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