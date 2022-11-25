<script>
    import CategoryWidget from "../sections/CategoryWidget.svelte";
    import Featured from "../sections/Featured.svelte";
    import Recommended from "../sections/Recommended.svelte";
    import CategorySnippet from "../UI/CategorySnippet.svelte";

    import { Category } from "../utils/utils";
    import TagSlideshow from "../sections/TagSlideshow.svelte";
    import BestSelling from "../sections/BestSelling.svelte";
    import JustIn from "../sections/JustIn.svelte";
    import About from "../sections/About.svelte";
    import Blogs from "../sections/Blogs.svelte";
    import Vlogs from "../sections/Vlogs.svelte";
    import BrandsWeLove from "../sections/BrandsWeLove.svelte";
</script>

<div class="home-container">
    <Featured />
    <CategoryWidget />
    <Recommended />
    <TagSlideshow />
    <CategorySnippet category={new Category("Jewelery", [], "Get your loved ones something that shines bright this holiday season.")}/>
    <CategorySnippet category={new Category("Household furnishings and equipment")}/>
    <Vlogs />
    <BestSelling />
    <JustIn />
    <CategorySnippet category={new Category("Bedding, Cushions, and Throws")}/>
    <CategorySnippet category={new Category("Tops & T-Shirts")}/>
    <CategorySnippet category={new Category("Pants")}/>
    <!-- TODO -->
    <BrandsWeLove />
    <!-- Brands We Love -->
    <Blogs />
    <About />
    
</div>

<style>
</style>