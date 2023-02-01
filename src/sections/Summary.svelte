<script>
    import BucketWrapper from "../components/BucketWrapper.svelte";
</script>

<div class="summary-wrapper">
    
    <BucketWrapper title="Measure - CO2 Calculator" width="340px">
        <p>Estimate and track improvement on your personal CO2 footprint!</p>

        <p>
            Take our fast <a href="/#/measure">10 question version</a> 
            to get started with a rough estimate or our 
            <a href="/#/measure"> detailed version</a> for more precision
        </p>
    </BucketWrapper>
    <img class="arrow-small" src="./assets/icons/right-arrow.png" alt="arrow pointing right">
    <BucketWrapper title="Learn - Blogs & Articles" width="340px">
        <p>Once you have an estimate of your personal CO2 footprint, learn ways to reduce it!</p>

        <ul class="learn-list">
            <li>
                <p><a href="/#/learn/transportation">Transportation</a> - flights, electric vehicles, hybrids, bicycles</p>
                
            </li>
            <li>
                <p><a href="/#/learn/home">Home</a> - renewable energy, battery storage, heat pumps, windows</p>
            </li>
            <li>
                <p><a href="/#/learn/food">Food</a> - low/no carbon milk to vodka</p>
            </li>
            <li>
                <p><a href="/#/learn/purchases">Purchases</a> - sustainable, reusable recycled clothing and more</p>
            </li>
        </ul>
    </BucketWrapper>
    <img class="arrow-small" src="./assets/icons/right-arrow.png" alt="arrow pointing right">
    <BucketWrapper title="Act - Marketplace" width="340px">
        <p>
            Inspired to start your carbon reduction journey? 
            Every little bit helps! Check out our curated and 
            verified selection of products to start you on your way!
        </p>
        <ul>
            <li>
                <p><a href="/#/transportation/markeplace">Transportation</a></p>
                
            </li>
            <li>
                <p><a href="/#/home/markeplace">Home</a></p>
                
            </li>
            <li>
                <p><a href="/#/food/markeplace">Food</a></p>
                
            </li>
            <li><p><a href="/#/purchases/markeplace">Purchases</a></p></li>
        </ul>
    </BucketWrapper>
    <img class="arrow-graphic" src="./assets/icons/arrow-going-back.png" alt="arrow pointing back to the left">
</div>

<style>
    .summary-wrapper {
        display: flex;
        width: var(--main-content-width);
        margin: 0 auto;
        justify-content: space-between;
        padding-top: 40px;
        position: relative;
        margin-bottom: 300px;
    }

    .arrow-small {
        width: 80px;
        height: 80px;
        margin-top: 175px;
    }
    
    .arrow-graphic {
        width: 100%;
        position: absolute;
        bottom:-50%;
    }
    .summary-wrapper ul {
        list-style-type: none;
        padding: 0;
        
    }

    .learn-list {
        text-align: left;
    }

    .summary-wrapper a {
        color: var(--accent-color);
        text-decoration: underline;
    }
</style>    