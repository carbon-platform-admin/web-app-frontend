<script>
	import { createForm } from 'felte'

    import {countries} from '../../utils'
	
	export let initialValues;
	export let onSubmit;
	
	const { form } = createForm({ onSubmit, initialValues })
</script>

<form use:form>
	<label for=country>Country of Residence</label>
	<select id=country name=country>
        {#each countries as {name, code}}
            <option value={code}>{name}</option>
        {/each}
    </select>
	<button type=submit>Confirm</button>
</form>                                                                   