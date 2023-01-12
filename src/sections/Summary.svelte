<script>
    import BucketWrapper from "../components/BucketWrapper.svelte";
</script>

<div class="summary-wrapper">
    
    <BucketWrapper title="Measure">
        <p>Estimate and track improvement on your personal CO2 footprint!</p>

        <p>
            Take our fast <a href="/#/measure">10 question version</a> 
            to get started with a rough estimate or our 
            <a href="/#/measure"> detailed version</a> for more precision
        </p>
    </BucketWrapper>
    <img src="./assets/icons/right-arrow.png" alt="arrow pointing right">
    <BucketWrapper title="Learn">
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
    <img src="./assets/icons/right-arrow.png" alt="arrow pointing right">
    <BucketWrapper title="Act">
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
</div>

<style>
    .summary-wrapper {
        display: flex;
        width: var(--main-content-width);
        margin: 0 auto;
        justify-content: space-between;
        padding-top: 40px;
    }

    .summary-wrapper img {
        width: 80px;
        height: 80px;
        margin-top: 175px;
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