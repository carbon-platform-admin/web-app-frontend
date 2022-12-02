<script>
    import { onDestroy, onMount } from 'svelte';
    import { api } from '../axios';
    import { colors, enumerate } from '../utils/utils';

    $: featured = [];
    $: currIdx = 0;
    $: loading = true;

    // var clientWidth = 
    // var featured_item = document.querySelector('.featured-item');


    // featured_item.setAttribute('style', `width: ${}`


    let interval = setInterval(function () {
        if (featured.length !== 0) {moveSlideShow('next')};
        
    }, 4800);

    onDestroy(() => {
        clearInterval(interval);
    })

    onMount(() => {
        api.get('categories/featured').then((res) => {
            featured = res.data;
            loading = false;
        }).catch((err) => {
            console.log(err)
            alert("Error fetching featured categories")
        })
    })

    
    function moveSlideShow(dir) {
        if (dir === 'next') {
            currIdx++;    
            currIdx = currIdx % featured.length
        } else if (dir === 'back') {
            currIdx--;
            if (currIdx < 0) {
                currIdx = featured.length - 1;
            }
        }
        clearInterval(interval);

        
        let itemWidth = document.querySelector('.featured_item');

        if (itemWidth === undefined || itemWidth === null) {
            return
        }
        itemWidth = itemWidth.clientWidth
        
        var slideShow = document.querySelector('.slideshow')
        slideShow.setAttribute('style', `transform: translateX(-${currIdx * itemWidth}px)`);
    }
</script>
{#if loading}
    <div class="loading-container"><span class="loading">Loading</span></div>
{:else}
    <div class="featured-container" style={"position: relative;"}>
        <button class="progress_slide_show" on:click|preventDefault={() => moveSlideShow('back')}>
            <img src="./assets/icons/less-than.png" alt="less than sign">
        </button>
        <button class="progress_slide_show right" on:click|preventDefault={() => moveSlideShow('next')}>
            <img src="./assets/icons/greater-than.png" alt="greater than sign">
        </button>
        <ul class="slideshow">
            {#each enumerate(featured) as category}
                <li style={"background-color: " + colors[category[0]]} 
                class="featured_item">
                    <a href={category[1].link}>
                        <h2>{category[1].name}</h2>
                        <h3>Shop now</h3>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style>

    .loading-container {
        height: 600px;
    }

    .featured-container {
        overflow-x: hidden;
    }

    .slideshow {
        display: flex;
        list-style: none;
        flex-grow: 1;
        padding: 0;
        margin: 0;
        transition: all 400ms ease-in-out;
    }

    .featured_item {
        height: 600px;
        text-align: center;
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
        width: 99.1vw;
        cursor: pointer;
        
    }

    .featured-container a {
        width: 100%;
        text-align: center;
        vertical-align: middle;
    }

    .featured-container img {
        width: 18px;
        height: 18px;
        background-color: var(--sub-nav-color);
        padding: 16px;
        border-radius: 50%;
        transition: background-color 200ms ease-in-out;
    }

    .featured-container img:hover {
        background-color: rgba(139, 154, 168, 0.7);
    }

    .progress_slide_show {
        position: absolute;
        top: 50%;
        border: none;
        background: transparent;
        z-index: 5;
        padding: 0;
        transform: translateX(-35%);
        opacity: 0.8;
        transition: opacity 200ms ease-in-out;
    }

    .right {
        transform: translateX(calc(99.1vw - 65%));
    }

    .featured-container h2, .featured-container h3 {
        width: 15ch;
        color: var(--sub-nav-color);
        margin: 30px auto;
        font-weight: 300;
        font-size: 40px;
    }

    /* .featured-container h3 {
        background-color: ;
    } */


</style>