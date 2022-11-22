<script>
	import { createForm } from 'felte'
	
	export let initialValues;
	export let onSubmit;
	export let onBack;
	
	const { form, data } = createForm({ onSubmit, initialValues })
</script>