<script>
	import { createForm } from 'felte'
	
	export let initialValues;
	export let onSubmit;
	export let onBack;
	
	const { form, data } = createForm({ onSubmit, initialValues })
</script>

<form use:form>
    <div class="radio-buttons">
        <div class=carTravel>
            <h2>How often do you travel by car per year?</h2>
            <label for=carTravel>
                <input type=radio name=carTravel>30,000 miles
            </label>
            
            <label for=carTravel>
                <input type=radio name=carTravel>10,000 miles
            </label>
            <label for=carTravel>
                <input type=radio name=carTravel>5,000 miles
            </label>
            <label for=carTravel>
                <input type=radio name=carTravel> less than 5,000 miles
            </label>
        </div>

        <div class=airTravel>
            <h2>How would you describe your flying habits?</h2>
            <label for=airTravel>
                <input type=radio name=airTravel>Frequent Flyer
            </label>
            
            <label for=airTravel>
                <input type=radio name=airTravel>Multiple times per year
            </label>
            <label for=airTravel>
                <input type=radio name=airTravel>Rarely (once per year)
            </label>
            <label for=airTravel>
                <input type=radio name=airTravel>Never
            </label>
        </div>

        <div class=publicTransit>
            <h2>How often do you use public transit?</h2>
            <label for=publicTransit>
                <input type=radio name=publicTransit>Daily
            </label>
            
            <label for=publicTransit>
                <input type=radio name=publicTransit>Multiple times per week
            </label>
            <label for=publicTransit>
                <input type=radio name=publicTransit>Once per week
            </label>
            <label for=publicTransit>
                <input type=radio name=publicTransit>Never
            </label>
        </div>airTravelpublicTransit
    
    </div>
    

    <button type=button on:click={() => onBack($data)}>Previous page</button>
	<button type=submit>Next</button>
</form>