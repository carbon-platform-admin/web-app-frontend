<script>
    import Search from "../search/Search.svelte"
    import WishlistIcon from "../wishlist/WishlistIcon.svelte";
    import MyAccount from "./MyAccount.svelte"
    import CartIcon from "../cart/CartIcon.svelte";
    import SubNavbar from "./SubNavbar.svelte";
    import { frontendHost } from "../../hosts";


    // Handling which sub nav is active

    $: activeSubNav = 'categories';

    function handleSubNavChange(newSection) {
        activeSubNav = newSection;
    }


</script>

<header class="nav-body">
    <nav class="global-navbar">
        <div class="nav-inner">
            <a href={frontendHost}>
                <div class="logo">
                    <img src="./assets/icons/logo.jpg" alt="Logo">
                    <h1>The Carbon Platform</h1>
                </div>
            </a>
            <ul class="navbar">
                <li><h2><a href="/#/measure">CO2 calculator</a></h2></li>
                <li><a href="/#/learn"><h2>Blog</h2></a></li>
                <li><h2><a href="/#/marketplace">Marketplace</a></h2></li>
                <li><h2><a href="/#/about">About Us</a></h2></li>
            </ul>
            <Search />
            <ul class="navbar">
                <!-- <li><h2><a href=""></a></h2></li> -->
                <li class="login-toggle">
                    <MyAccount />
                </li>
                <li><WishlistIcon /></li>
                <li><CartIcon /></li>
                <!-- <li><h2><a href=""></a></h2></li> -->
            </ul>
        </div>
        <!-- <SubNavbar {activeSubNav}/> -->
    </nav>
</header>

<style>
    .login-toggle {
        position: relative;
    }

    .nav-body {
        background-color: var(--navbar-color);
        width: 100%;
        height: auto;
        position: sticky;
        top: 0;
        z-index: 15;
    }
    .global-navbar {
        width: 100%;
        padding-top: 10px;
        position: relative;
        margin: 0 auto;
    }
    
    .logo h1 {
        margin: 0;
        max-width: 10ch;
        font-size: 14px;
        font-weight: 400;
    }

    .logo img {
        object-fit: scale-down;
        width: 45px;
        margin-right: 10px;
        height: 45px;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        min-width: 500px;
        list-style-type: none;
        margin: 0;
        font-size: 11px;
        padding: 0;
        z-index: 10;
    }

    .sub-nav-component {
        position: relative;
    }

    .sub-nav-component::after {
        content: "";
        width: 20px; 
        height: 14px;
        display: block;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        position: absolute;
        bottom: 0px;
        background-color: var(--sub-nav-color);
        left: calc(50% - 10px);
    }

    .nav-inner {
        display: flex;
        height: 50px;
        margin: 0 auto;
        justify-content: center;
    }

    .navbar a {
        display: block;
    }



    .logo {
        display: flex;
        margin-right: 30px;
    }


    .global-navbar ul h2 {
        margin: 0;
        margin-top: 5px;
    }
    
    .logo h1, .global-navbar ul h2 {
        background: var(--header-gradient);
          /* Mask the color to the text, and remove the rest  */
        -webkit-background-clip: text;
        background-clip: text;
        /* Make the text fill color value transparent so the masked background color comes through */
        -webkit-text-fill-color: transparent;
    }

    
    
</style>