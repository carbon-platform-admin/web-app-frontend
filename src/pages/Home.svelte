<script>
    import { fade } from "svelte/transition";
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
    import Summary from "../sections/Summary.svelte"
</script>

<div class="home-container" in:fade>
    <!-- <Featured /> -->
    <Summary />
    <CategoryWidget />
    <Recommended />
    <About />
</div>

<style>
</style>