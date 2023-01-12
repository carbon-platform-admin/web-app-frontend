<script>
    import { fade } from "svelte/transition";

    import BestSelling from "../sections/BestSelling.svelte";
    import BrandsWeLove from "../sections/BrandsWeLove.svelte";
    import CategoryWidget from "../sections/CategoryWidget.svelte";
    import Recommended from "../sections/Recommended.svelte";
    import CategorySnippet from "../UI/CategorySnippet.svelte";
    import { Category } from "../utils/utils";

</script>

<div class="market-container" in:fade>
    <h1>Marketplace</h1>
    <CategoryWidget />
    <Recommended />
    <BestSelling />
    <CategorySnippet category={new Category("Jewelery", [], "Get your loved ones something that shines bright this holiday season.")}/>
    <CategorySnippet category={new Category("Household furnishings and equipment")}/>
    <CategorySnippet category={new Category("Bedding, Cushions, and Throws")}/>
    <CategorySnippet category={new Category("Tops & T-Shirts")}/>
    <CategorySnippet category={new Category("Pants")}/>
    <BrandsWeLove />
</div>

<style>
    .market-container h1 {
        font-weight: 400;
        color: var(--navbar-color);
        text-align: center;
        margin-top: 60px;
    }
</style>