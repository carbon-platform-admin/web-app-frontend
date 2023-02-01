<script>
    import { onMount } from "svelte";


    export let title = '';
    export let width = "340px";

    onMount(() => {
        let matches = document.querySelectorAll(".bucket-wrapper");

        matches.forEach(match => {
            match.style.width = width;
        })
    })
</script>

<div class="bucket-wrapper">
    <h1>{title}</h1>
    <slot>

    </slot>
</div>

<style>
    .bucket-wrapper {
        border: 2px solid var(--accent-color);
        /* max-width: 340px; */
        padding: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin: 0 auto;
    }

    .bucket-wrapper h1 {
        margin-top: 0;
        margin-bottom: 20px;
        font-weight: 400;
    }

</style>
