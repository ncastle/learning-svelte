<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>
	<a href="https://kit.svelte.dev/docs/routing" target="_blank" rel="noopener noreferrer"
		>Routing in SvelteKit</a
	>
</h1>

<p>
	SvelteKit implements a <em>filesystem-based router</em>, which means that the URLs that are visted
	in the application are determined by the directories in the project.
</p>

<!---------------------------------------------------------------------------------------------------->

<h2>Routing basics:</h2>

<ul>
	<li><code>src/routes</code> is the root route (where the home page lives)</li>
	<li>
		<code>src/routes/about</code> creates an about route
	</li>
	<li>
		<code>src/blog/[slug]</code> creates a route with a <em>parameter</em>, <code>slug</code>. This
		is a route that can be used to load data dynamically
	</li>
	<li>
		You can change the root route (<code>src/routes</code>) to a different directory by editing the
		project config
	</li>
</ul>

<!---------------------------------------------------------------------------------------------------->

<h2>Route Files:</h2>

<p>
	Each route contains one or more <em>route files</em> which are files with a <code>+</code> prefix
</p>
<p>There are a number of different route files:</p>

<ul>
	<li>
		<strong>+page</strong>
		<ul>
			<li>+page.svelte</li>
			<li>+page.js (+page.ts)</li>
			<li>+page.server.js (+page.server.ts)</li>
		</ul>
	</li>
	<li>
		<strong>+error</strong>
		<ul>
			<li>+error.svelte</li>
		</ul>
	</li>
	<li>
		<strong>+layout</strong>
		<ul>
			<li>+layout.svelte</li>
			<li>+layout.js (+layout.ts)</li>
			<li>+layout.server.js (+layout.server.ts)</li>
		</ul>
	</li>
	<li>
		<strong>+server</strong>
		<ul>
			<li>+server.js (+server.ts)</li>
		</ul>
	</li>
</ul>

<!---------------------------------------------------------------------------------------------------->

<h2>Page Files:</h2>

<ul>
	<li>+page.svelte</li>
	<li>+page.js (or +page.ts)</li>
	<li>+page.server.js (or +page.server.ts)</li>
</ul>

<h3>+page.svelte</h3>

<ul>
	<li>A <code>+page.svelte</code> component (or file) defines a page of your app.</li>
	<li>
		By default, pages are rendered server-side (SSR) on initial load, and client-side (CSR) on
		subsequent loads / navigation
	</li>
</ul>

<p>The file that renders this page is <code>src/routes/about/+page.svelte</code></p>
<p>
	Note: SvelteKit uses <code>&lt;a&gt;</code> tags to navigate between routes, rather than a
	framework-specific <code>&lt;Link&gt;</code> tag
</p>

<h3>+page.js</h3>

<p>
	If you need to load data before rendering a page, add a <code>+page.js</code> (or
	<code>+page.ts</code>) module (file) in the directory of the route you need data for. You can then
	export a <code>load</code> function in the module. An example of this would look like the following:
</p>

<pre class="codeblock">
  import &lcub; error &rcub; from '@sveltejs/kit';

  /** @type &lcub;import('./$types').PageLoad&rcub; */
  export function load(&lcub; params &rcub;) &lcub;
      if (params.slug === 'hello-world') &lcub;
          return &lcub;
              title: 'Hello world!',
              content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
          &rcub;;
      &rcub;

      throw error(404, 'Not found');
  &rcub;
</pre>

<p>
	This function will run along side +page.svelte, so it will run on the server on initial render,
	and then on the client on subsequent navigations. See more about the <code>load</code> function on
	the <a href="/loading">Loading Data page</a>
</p>

<p>
	You can also export different <em>page options</em> that will change the behavior of the page.
	More info on the <a href="/page-options">Page Options</a> page
</p>

<p>
	The following html comes from the <code>+page.ts</code>
	file associated with this page (<code>src/routes/routing/+page.svelte</code>):
</p>
<pre><p>      {@html data.pageData}</p></pre>

<h3>+page.server.js</h3>

<p>
	If your load function needs to only be run on the server (accessing data in a database, accessing
	private environment variables like API keys), then you can rename <code>+page.js</code> to
	<code>+page.server.js</code>
	(or
	<code>+page.server.ts</code>) and change <code>PageLoad</code> to <code>PageServerLoad</code>.
	Example:
</p>

<pre class="codeblock">
  import &lcub; error &rcub; from '@sveltejs/kit';

  /** @type &lcub;import('./$types').PageServerLoad&rcub; */
  export function load(&lcub; params &rcub;) &lcub;
      const post = await getPostFromDatabase(params.slug);

      if (post) &lcub;
          return post;
      &rcub;

      throw error(404, 'Not found');
  &rcub;
</pre>

<p>
	As well as exporting a <code>load</code> function, <code>+page.server.js</code> can export
	<em>actions</em>, which allow you to write data using a <code>&lt;form&gt;</code> element. This
	will be covered in greater detail on the <a href="/form-actions">Form Actions</a> page
</p>

<p>Last</p>

<a target="_blank" href="https://icons8.com/icon/59826/link">Link</a> icon by
<a target="_blank" href="https://icons8.com">Icons8</a> why

<style>
	h1::after {
		content: '';
		background-image: url('/src/images/icons8-link-30.png');
		background-size: cover;
		display: inline-block;
		width: 32px;
		height: 32px;
		position: relative;
		top: 5px;
		margin-left: 0.5rem;
	}

	h1 a:visited {
		color: black;
	}

	code {
		padding: 0.2rem 0.4rem;
		margin: 0 0.2rem;
		border-radius: 0.3rem;
		background-color: #93afc4;
	}

	pre.codeblock {
		width: fit-content;
		background-color: white;
		border-radius: 1rem;
		padding: 1rem;
		white-space: pre-wrap;
	}

	p {
		width: 60%;
		margin: 1rem 0;
	}

	ul {
		list-style-position: inside;
		margin-left: 1rem;
	}

	ul ul {
		margin-left: 1.5rem;
	}

	li {
		padding: 0.5rem 0;
	}

	p {
		line-height: 2rem;
	}

	p:last-of-type {
		margin-bottom: 5vh;
	}
</style>
