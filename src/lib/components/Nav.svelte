<script>
	const pages = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Routing', href: '/routing' },
		{ name: 'Loading Data', href: '/loading' },
		{ name: 'Form Actions', href: '/form-actions' },
		{ name: 'Page Options', href: '/page-options' }
	];
</script>

<ul>
	{#each pages as page}
		<li><a href={page.href}>{page.name}</a></li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		display: flex;
		width: 100%;
		border-bottom: 1px solid black;
		height: 5vh;
		justify-content: center;
		align-items: center;
	}

	li {
		width: fit-content;
		padding: 0 1rem;
	}

	a {
		font-weight: bold;
		text-decoration: none;
		transition: all 0.5s ease;
		color: black;
	}

	a:hover {
		color: gray;
		transition: all 0.5s ease;
	}
</style>
