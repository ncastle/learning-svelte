import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		pageData: 'This html comes from the <code>+pages.js</code> load function!'
	};
}

// This will throw an error to show how errors are caught with the +errors.svelte page
/** @type {import('./$types').Actions} */
export const actions = {
	default: async () => {
		throw error(500, 'Example error');
	}
};
