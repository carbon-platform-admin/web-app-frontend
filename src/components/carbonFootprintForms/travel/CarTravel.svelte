<script>
	import { createForm } from 'felte'

    // importing our travel options to make our code cleaner
    import { carTravelOptions } from '../../../utils'
	
	export let initialValues;
	export let onSubmit;
	export let onBack;
	
	const { form, data } = createForm({ onSubmit, initialValues })

    console.log(carTravelOptions)
</script>

<form use:form>
    <div class="">
        <div class=carTravel>
            <h2>How often do you travel by car per year?</h2>
            {#each carTravelOptions as option}
                <label for=carTravel>
                    <input type=radio name=carTravel>{option}
                </label>
            {/each}
        </div>
    </form>