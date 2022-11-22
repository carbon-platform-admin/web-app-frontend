<script>
    import { onMount } from "svelte";
    import { api } from "../axios";
    import About from "./About.svelte";

    $: vlogs = [];
    $: loading = true;

    let currIdx = 0;
    let cap;

    function fetchVlogs() {
        api.get("/blogs/vlogs").then(res => {
            vlogs = res.data
            loading = false;
            
            cap = Math.min(vlogs.length, 10)
        }).catch(err => {
            console.log(err);
        });
    }

    function handleClick(dir) {
        let vlogs = document.querySelector(".vlogs-list");
        let elWidth = document.querySelector(".vlog-item").clientWidth;
        if (dir === 0) {
            currIdx--;
        } else {
            currIdx += 1;
        }

        vlogs.setAttribute("style", `transform: translateX(-${currIdx * elWidth}px)`);
    }

    onMount(() => {
        fetchVlogs();
    })
</script>

<div class="vlogs-container">
    <h2>Video Blogs</h2>
    <a href="/#/vlogs" class="view-all">View all</a>
    {#if loading}
        <span>Loading...</span>
    {:else}
        {#if currIdx !== 0}
            <button class='slideshow-btn left' on:click={() => {handleClick(0)}}>
                <img src="./assets/icons/less-than.png" alt="less than sign">
            </button>
        {/if}
        <ul class="vlogs-list">
            {#each vlogs as vlog}
                <li class="vlog-item">
                    <a href={vlog.external_link}>
                        <img src={vlog.thumbnail} alt={vlog.alt_text}>
                        <h4 class="vlog-title">{vlog.title}</h4>
                    </a>
                </li>
            {/each}
        </ul>
        {#if currIdx !== cap - 1}
            <button class="slideshow-btn" on:click={() => {handleClick(1)}}>
                <img src="./assets/icons/greater-than.png" alt="greater than sign">
            </button>
        {/if}
    {/if}
</div>

<style>

    .vlogs-container {
        width: var(--main-content-width);
        margin: 0 auto;
        position: relative;
    }

    .vlogs-list {
        display: flex;
        overflow: hidden;
        width: 100%;
        list-style: none;
        padding: 0;
        transition: transform 600ms ease-in-out;
    }

    .vlogs-container::before {
        content: "";
        display: block;
        background-color: white;
        height: 90%;
        width: 400px;
        position: absolute;
        top: 30px;
        left: -400px;
        z-index: 10;
    }

    .view-all {
        position: absolute;
        right: 0;
        top: 0;
        color: var(--navbar-color);
    }

    .view-all:hover {
        text-decoration: underline;
    }

    .vlog-item {
        width: 446px;
        padding: 0 15px;
        color: var(--navbar-color);
    }
    
    .vlog-item img{
        border-radius: 15px;
        width: 100%;
    }

    .slideshow-btn {
        width: 45px;
        height: 45px;
        position: absolute;
        right: -15px;
        top: 45%;
        border: none;
        outline: none;
        border-radius: 50%;
        z-index: 10;
        background-color: var(--slideshow-btn-color);
    }

    .left {
        left: -15px;
    }

    .slideshow-btn img {
        width: 18px;
    }

</style>