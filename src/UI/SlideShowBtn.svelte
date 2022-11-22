<script>
    export let dir = 'next';
    export let moveSlideShow;
</script>



<button class="progress_slide_show right" on:click|preventDefault={() => moveSlideShow(dir)}>
    {#if dir === 'next'}
        <img src="./assets/icons/greater-than.png" alt="greater than sign">
    {:else}
        <img src="./assets/icons/less-than.png" alt="greater than sign">
    {/if}
</button>

<style>
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
    .progress_slide_show img {
        width: 128px;
        height: 128px;
    }
    .right {
        transform: translateX(calc(99.1vw - 65%));
    }
</style>