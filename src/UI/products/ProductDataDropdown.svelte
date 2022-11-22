<script>
    import { createEventDispatcher, onMount } from 'svelte';
        
    export let product;
    export let title;
    export let activeDropdown;


    $:dropdownOpen = title === activeDropdown;

    window.addEventListener("productDataToggle", (e) => {
        let element = document.getElementById(title);
        if (e.detail.activeDropdown !== title) {
            element.classList.toggle("active")
        }
    })
    
    const dispatch = createEventDispatcher();

    function handleClick(e) {
        let element = document.getElementById(title);

        element.classList.toggle('active')
        if (dropdownOpen) {
            dropdownOpen = false;
            
        } else {
            dropdownOpen = true;
            dispatch('productDataToggle', {
                activeDropdown: title
            })
        }
    }

    onMount(() => {
        if (dropdownOpen) {
            let element = document.getElementById(title);

            element.classList.toggle('active')
        }
    })
</script>


<div class="product-data-container">
    <div class="section-head">
        <h3 class="section-title">{title}</h3>
        <button on:click={handleClick}>
            <img src="./assets/icons/down-arrow-colored.png" alt="down-arrow" class={dropdownOpen && "upside-down"}>
        </button>
    </div>
    <div class="data-content" id={title}>   
        {#if title === 'Product Details'}
            <div class="dropdown-content table">
                <ul class="data-headers">
                    <li>
                        <span>Carbon Footprint</span>
                    </li>
                    <li>
                        <span>Brand Name</span>
                    </li>
                    <li><span>Weight {'(' + product.variant_weight_unit + ')'}</span></li>
                    <li>
                        <span>SKU</span>
                    </li>
                </ul>
                <ul class="data-values">
                    <li>
                        <span>{product.carbon_footprint}</span>
                    </li>
                    <li>
                        <span>{product.vendor.name}</span>
                    </li>
                    <li>
                        <span>{product.variant_grams}</span>
                    </li>
                    <li>
                        <span>{product.variant_SKU}</span>
                    </li>
                </ul>
            </div>
        {:else if title === 'Product Description'}
            <div class="dropdown-content">
                <p>
                    {product.body}
                </p>
            </div>
        {:else if title === 'Benefits'}
            <div class="dropdown-content">
            </div>
        {:else if title === 'Name of Manufacturer'}
            <div class="dropdown-content">
                <span>{product.vendor.name}</span>
            </div>
        {/if}
    </div>
</div>

<style>

    .upside-down {
        transform: scaleY(-1);
    }

    .section-head {
        display: flex;
        justify-content: space-between;
    }

    .data-content {
        transition: all 200ms ease-in-out;
        display: none;
        opacity: 0;
    }

    .section-title {
        font-size: 14px;
        font-weight: 500;
    }

    .active {
        opacity: 1;
        display: block;
    }

    .product-data-container {
        
        margin-top: 10px;
        padding-top: 10px;
    }

    .dropdown-content {
        display: flex;
    }

    .product-data-container::before {
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        background-color: black;
    }

    .section-head img {
        height: 16px;
        width: 16px;
    }

    .section-head button {
        border: none;
        background-color: transparent;
        right: 0;
        position: relative;
    }

    .table {
        border-radius: 10px;
    }

    .dropdown-content ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    .dropdown-content ul > li {
        padding: 10px 30px;
        border: 1px solid var(--border-color);
    }
</style>