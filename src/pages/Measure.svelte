<script>
    import Recommended from "../sections/Recommended.svelte";


</script>

<div class="measure-page">
    <h1>
        Calculate your CO2 Footprint
    </h1>
    <iframe title="detailed-calculator" width="710" height="550" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" src="https://calculator.carbonfootprint.com/calculator.aspx"></iframe>
    <Recommended />
</div>

<style>
    .measure-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .measure-page h1 {
        margin: 40px 0;
    }

    .measure-page iframe {
        margin: 0 auto;
    }
</style>

