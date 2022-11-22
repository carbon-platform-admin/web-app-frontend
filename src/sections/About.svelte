<script>
    $: activeSection = null;

    function handleClick(idx) {

        console.log(".dropdown-icon" + idx)

        let btn = document.querySelector(".dropdown-icon" + idx);
        btn.classList.toggle("active-icon")
        if (idx === activeSection) {
            activeSection = null;
        } else {
            activeSection = idx;
        }
    }
</script>

<div class="about-container">
    <div class="about-header">
        <div class="company-logo">
            <h1>The Carbon Platform</h1>
            <img src="./assets/icons/carbon.png" alt="element symbol for carbon">
        </div>
        <div class="about-content">
            <h1>About Us</h1>
            <p>The Carbon Platform is a way of conscious living built on a
                foundation rooted deeply in the eco-friendly origin.
                It brings together brands, products,
                experts and individuals that create a
                world where all living beings can co-exist
                harmoniously.</p>
        </div>
    </div>
    <div class="about-body">
        <p>Sustainable lifestyle is the only way 
            forward for every individual if they 
            want to have adequate resources for their 
            survival and co-exist peacefully on this planet. 
            Mankind has exerted so much pressure on each of the 
            natural resources that if everything goes on as it 
            currently is, it will endanger the existence of all life 
            on Earth in the time to come. Amala Earth realises the 
            importance of living consciously and sustainably in every moment. 
            It enables individuals to live every aspect of their lives in an earth-friendly manner. It brings together all stakeholders including brands, products, experts and consumers on its platform to 
            drive a change in consumption and behavioural patterns of individuals and thus, promote responsible choices.
        </p>
        <div class="dropdown">
            <div class="dropdown-anchor">
                <h3>What do we stand for?</h3>
                <img src="./assets/icons/down-arrow-colored.png" alt="down arrow" on:click={() => 
                {handleClick(0)}} class={'dropdown-icon0'}>
            </div>
            <div class={`dropdown-content ${activeSection === 0 && 'active'}`}>
                TEst
            </div>
        </div>
        <div class="dropdown">
            <div class="dropdown-anchor">
                <h3>Our Mission</h3>
                <img src="./assets/icons/down-arrow-colored.png" alt="down arrow" on:click={() => 
                    {handleClick(1)}} class={'dropdown-icon1'}>
            </div>
            <div class={`dropdown-content ${activeSection === 1 && 'active'}`}>
                TEst
            </div>
        </div>
        <div class="dropdown">
            <div class="dropdown-anchor">
                <h3>Key features of the Carbon Platform<h3>
                    <img src="./assets/icons/down-arrow-colored.png" alt="down arrow" on:click={() => 
                    {handleClick(2)}} class={'dropdown-icon2'}>
            </div>
            <div class={`dropdown-content ${activeSection === 2 && 'active'}`}>
                TEst
            </div>
        </div>
        
    </div>
</div>

<style>

    .about-container {
        margin-bottom: 0;
    }
    .company-logo {
        border-radius: 10px;
        background-color: var(--navbar-color);
        min-height: 400px;
        color: white;
    }   

    .company-logo img {
        object-fit: contain;
        width: 200px;
        height: 200px;
    }

    .about-header {
        width: var(--main-content-width);
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        color: var(--navbar-color);
    }

    .about-header h1 {
        font-weight: 600;
        margin: 0;
    }

    .about-header p {
        width: 90%;
        margin: 0 auto;
        font-size: 18px;
        line-height: 33px;
    }

    .about-body {
        text-align: center;
        background-color: var(--sub-nav-color);
        padding-top: 4em;
        margin-top: 10px;
        overflow: hidden;
        padding-bottom: 5em;
    }

    .about-body p {
        width: var(--main-content-width);
        margin: 0 auto;
        font-size: 17px;
        font-weight: 500;
        line-height: 30px;
    }

    .dropdown {
        width: var(--main-content-width);
        margin: 0 auto;
        border-top: 1px solid var(--navbar-color);
        margin-top: 10px;
        position: relative;
        padding: 20px 0;
    }

    .dropdown-anchor {
        display: flex;
    }

    .dropdown h3 {
        margin: 0;
        font-weight: 500;
    }

    .dropdown img {
        width: 16px;
        height: 16px;
        position: absolute;
        right: 5px;
        cursor: pointer;
    }

    .dropdown-content {
        opacity: 0;
        display: none;
    }

    .active {
        display: block;
        opacity: 1;
    }

    .active-icon {
        transform: rotateX(180deg);
    }

    .dropdown-icon {
        position: absolute;
        top: 0;
    }

    
</style>