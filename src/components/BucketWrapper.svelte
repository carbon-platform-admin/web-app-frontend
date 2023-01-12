<script>
    export let title = '';
</script>

<div class="bucket-wrapper">
    <h1>{title}</h1>
    <slot>

    </slot>
</div>

<style>
    .bucket-wrapper {
        border: 2px solid var(--accent-color);
        max-width: 340px;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .bucket-wrapper h1 {
        margin-top: 0;
        margin-bottom: 20px;
        font-weight: 400;
    }

</style>
