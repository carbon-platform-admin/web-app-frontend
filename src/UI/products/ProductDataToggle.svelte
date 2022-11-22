<script>
    import ProductDetail from "../../pages/ProductDetail.svelte";
    import ProductDataDropdown from "./ProductDataDropdown.svelte";

    export let product;

    $: activeSection = 'Product Details';

    function handleSectionChange(e) {
        activeSection = e.detail.activeDropdown
        console.log(activeSection);
    }
</script>

<div class="data-toggle-container">
    <ProductDataDropdown product={product} title="Product Details" on:productDataToggle={handleSectionChange} activeDropdown={activeSection}/>
    <ProductDataDropdown product={product} title="Product Description" on:productDataToggle={handleSectionChange}  activeDropdown={activeSection}/>
    <ProductDataDropdown product={product} title="Name of Manufacturer" on:productDataToggle={handleSectionChange}  activeDropdown={activeSection}/>
</div>

<style>
    .data-toggle-container {
        margin-bottom: 100px;
    }
</style>

