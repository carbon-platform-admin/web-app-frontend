<script>

</script>

<div class="search-container">
    <input type="text" class="search">
    <button class="search_button"><img src="./assets/icons/loupe.png" alt="search icon"></button>
</div>

<style>

    .search-container {
        background-color: white;
        border-radius: 30px;
        max-height: 40px;
        min-width: 370px;
        position: relative;
        margin-left: 30px;
    }

    .search {
        outline: none;
        border: none;
        background-color: transparent;
        padding: 0 10px;
        margin: 0;
        height: 100%;
        width: 90%;
    }

    .search_button {
        border: none;
        margin: 0;
        height: 32px;
        width: 32px;
        padding: 0;
        background: var(--header-gradient);
        border-radius: 50%;
        position: absolute;
        right: 4px;
        top: 4px;
    }

    .search_button img {
        object-fit: scale-down;
        width: 20px;
    }
</style>