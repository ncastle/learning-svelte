<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<h1>Routing error page!</h1>

<p>This is an <code>+error.svelte</code> page customized for the 'routing' path</p>

<h2>{$page.status}: {$page.error?.message}</h2>

<p
	on:keydown={() => goto('/routing#error')}
	on:click={() => goto('/routing#error')}
	style:color={'blue'}
	style:cursor={'pointer'}
>
	Go back to routing
</p>
