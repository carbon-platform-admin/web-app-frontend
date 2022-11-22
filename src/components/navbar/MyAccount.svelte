<script>
    import { onDestroy, onMount } from "svelte";
    import { onAuthStateChanged } from 'firebase/auth';
    
    import { UserStore } from '../../stores/UserStore';
    import { auth } from '../../firebase';   
    import AlternateAuth from "../../auth/AlternateAuth.svelte";
    import EmailAuth from "../../auth/EmailAuth.svelte";


    $: user = {};

    window.addEventListener("click", handleClick);

    function handleClick(e) {
        let childName = e.target.className.split(' ')[0];
        
        const popup = document.querySelector('.firebase-auth-container');

        if (childName === "") {
            return;
        }

        const child = document.querySelector('.' + childName);

        var closeAuthPopup = !popup.contains(child) && !document.querySelector('.auth-nav-container').contains(child) && child !== popup;

        if (closeAuthPopup) {
            popup.setAttribute('style', 'opacity: 0; z-index: 1');
        }
    }
    
    function toggleLoginPopup() {
        const popup = document.querySelector('.firebase-auth-container')
        
        
        if (popup.style.opacity === '1') {
            popup.setAttribute('style', 'opacity: 0; z-index: 1; display: none;');
        } else {
            popup.setAttribute('style', 'opacity: 1; z-index: 20; display: block;')
;
        }
    }
    
    // Store functions
    const unsubscribeFromCurrentUserStore = UserStore.subscribe(data => {
        user = data;
    })
    
    // const unsubscribeFromAuthState = authState.subscribe(u => user = u)
    
    onDestroy(() => unsubscribeFromCurrentUserStore());
</script>

<div class="auth-nav-container">
    <h2 >{Object.keys(user).length !== 0 ? `Welcome ${user.firstName}` : "Login/Sign-up"}</h2>
    <div style="display: flex;">
        <h2 on:click|stopPropagation={toggleLoginPopup} class="auth_toggle">My Account</h2>
        <button on:click|stopPropagation={toggleLoginPopup} class="nav_dropdown auth_toggle">
            <img src="./assets/icons/down-arrow.png" alt="down-arrow">
        </button>
    </div>
    <div class="firebase-auth-container" id="auth_popup">
        <EmailAuth />
        <p>or</p>
        <AlternateAuth />
    </div>
    
</div>

<style>

    .auth-nav-container {
        margin-left: 40px;
        position: relative;
        padding: 0 20px;
        z-index: 16;
    }

    .auth-nav-container::after {
        content: "";
        width: 1px;
        height: var(--nav-separator-height);
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-block;
        background: var(--header-gradient);
    }

    .nav_dropdown {
        background-color: transparent;
        border: none;
    }

    

    .nav_dropdown img {
        width: 16px;
        position: relative;
        top: 5px;
    }

    .auth-nav-container h2 {
        margin: 0;

        background: var(--header-gradient);
          /* Mask the color to the text, and remove the rest  */
        -webkit-background-clip: text;
        /* Make the text fill color value transparent so the masked background color comes through */
        -webkit-text-fill-color: transparent;
    }

    .auth_toggle {
        cursor: pointer
    }

    .firebase-auth-container {
        position: absolute;
        text-align: center;
        background: white;
        border-radius: 5px;
        box-shadow: 0 1px 5px 2px #0000001a;
        width: 320px; 
        height: 618px;
        opacity: 0;
        transition: opacity .5s cubic-bezier(.23,1,.32,1);
        transform: translateY(2%);
        display: none;
        z-index: 30;
    }

    .firebase-auth-container p {
        font-weight: 500;
        font-size: 16px;
        width: fit-content;
        margin: 0 auto;
        margin-top: 10px;
        height: fit-content;
    }

    .firebase-auth-container p::before {
        content: "";
        display: block;
        height: 1px;
        width: 790%;

        background-color: grey;
        position: relative;
        left: -14.3ch;
        top: 13.5px;
    }

    .firebase-auth-container p::after {
        content: "";
        display: block;
        height: 1px;
        width: 790%;
        background-color: grey;
        position: relative;
        right: -2ch;
        bottom: 9px;
    }

    
</style>