<script>
    import * as firebaseui from "firebaseui";
    import { auth } from "../firebase";
    import * as firebase from 'firebase/auth';
    import 'firebaseui/dist/firebaseui.css';
    import { onMount } from "svelte";
    
    onMount(() => {
        var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    
        ui.start(`.alternate-auth-container`, {
            signInOptions: [
                {
                    provider: firebase.GoogleAuthProvider.PROVIDER_ID,
                },
                {
                    provider: firebase.FacebookAuthProvider.PROVIDER_ID,
                }
            ],
            signInSuccessUrl: '/',
            privacyPolicyUrl: '/',
        })
    })
</script>


<div class="alternate-auth-container">

</div>

