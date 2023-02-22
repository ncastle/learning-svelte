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
		height: 95vh;
		overflow-y: scroll;
		z-index: 1;
	}

	main::-webkit-scrollbar {
		background-color: #d4d3d3;
		width: 0.75rem;
		border-left: 1px solid #c0bebe;
	}

	main::-webkit-scrollbar-thumb {
		background-color: #acacac;
		border-radius: 1rem;
		scrollbar-width: 0.25rem;
	}
</style>
