<script>
	import Nav from '../lib/components/Nav.svelte';
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		padding: 1rem;
	}
</style>
