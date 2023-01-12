<script>
    import Blogs from "../sections/Blogs.svelte";
    import Vlogs from "../sections/Vlogs.svelte";
    import BucketWrapper from "../components/BucketWrapper.svelte";
    import Recommended from "../sections/Recommended.svelte";

    let transportationArticles = [
        'https://blog.google/products/travel/find-flights-with-lower-carbon-emissions/',
        'https://cars.usnews.com/cars-trucks/advice/how-to-buy-an-electric-car',
        'https://www.bicycling.com/news/a20031666/14-commuter-pros-share-their-secrets/'
    ]

    let homeArticles = [
        'https://www.energy.gov/eere/solar/homeowners-guide-going-solar',
        'https://www.pge.com/en_US/residential/solar-and-vehicles/other-solar-options/battery-storage-for-residential-customers.page',
        'https://www.andersenwindows.com/taxcredit/',
        'https://www.washingtonpost.com/opinions/2023/01/04/heat-pumps-climate-carbon-emission-revolution/'
    ]

    let foodArticles = [
        'https://phys.org/news/2022-01-plant-based-diets-carbon-footprint-capture.html#:~:text=The%2',
        'https://www.lowlyfood.com/',
       
    ]

    let pruchaseArticles = [
        'https://www.projectcece.com/blog/545/what-is-carbon-neutral-fashion/',
        'https://the-ethos.co/what-is-sustainability-carbon-neutral-beauty/',
        'https://www.panaprium.com/blogs/i/carbon-neutral-clothing',
    ]
</script>

<div class="learn-container">
    <h1>Learn</h1>
    <div class="learning-categories">
        <BucketWrapper title="Transportation">
            <ul>
                {#each transportationArticles as article}
                    <li>
                        <a href={article}>
                            <p>
                                {article}
                            </p>
                        </a>
                    </li>
                {/each}
            </ul>
        </BucketWrapper>
        <BucketWrapper title="Home">
            <ul>
                {#each homeArticles as article}
                    <li>
                        <a href={article}>
                            <p>
                                {article}
                            </p>
                        </a>
                    </li>
                {/each}
            </ul>
        </BucketWrapper>
        <BucketWrapper title="Food">
            <ul>
                {#each foodArticles as article}
                    <li>
                        <a href={article}>
                            <p>
                                {article}
                            </p>
                        </a>
                    </li>
                {/each}
            </ul>
        </BucketWrapper>
        <BucketWrapper title="Purchases">
            <ul>
                {#each pruchaseArticles as article}
                    <li>
                        <a href={article}>
                            <p>
                                {article}
                            </p>
                        </a>
                    </li>
                {/each}
            </ul>
        </BucketWrapper>
    </div>
</div>
<Blogs />
<Vlogs />
<Recommended />

<style>
    .learn-container h1{
        text-align: center;
        font-weight: 400;
        margin: 50px auto;
    }
    .learning-categories {
        display: flex;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        width: 85%;
    }

    .learning-categories ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .learning-categories li {
        margin: 10px 0;
        display: flex;
        max-width: 30ch;
    }

    .learning-categories p {
        /* max-width: 20ch; */
        font-size: 13px;
        color: var(--accent-color);
        text-decoration: underline;
        font-weight: 400;
        text-align: left;
        cursor: pointer;
        margin: 0;
        display: flex;
    }

    .learning-categories a {
        max-width: 30ch;
    }
</style>