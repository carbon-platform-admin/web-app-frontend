<script>
    import Country from '../components/carbonFootprintForms/Country.svelte';
    import Travel from '../components/carbonFootprintForms/Travel.svelte';
    import CarTravel from '../components/carbonFootprintForms/travel/CarTravel.svelte';

    // multi page form
    const pages = [Country, Travel]

    // The current page of our form
    let page = 0;

    // The state of all of our pages
    $: pagesState = [];

    // Handlers

    function onSubmit(values) {
        if (page === pages.length - 1) {
            // We post the data on our final page
            console.log('Submitted data: ', pagesState)
        } else {
            pagesState[page] = values;
            page += 1;
        }
    }

    function onBack(values) {
        if (page === 0) return;
        pagesState[page] = values;
        page -= 1;
    }
</script>

<div class="footprint-calc">
    <svelte:component
        this={pages[page]}
        {onSubmit}
        {onBack}
        initialValues={pagesState[page]}
    />
</div>