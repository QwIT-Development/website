<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import { privacyPolicyClient } from '$lib/downloadsClient';

	let markdown = '# ...';

	onMount(async () => {
		markdown = await privacyPolicyClient();
	});
</script>

<main id="privacy-markdown">
	<SvelteMarkdown source={markdown} />
</main>

<style>
	:global(#privacy-markdown) {
		font-family: 'Figtree', sans-serif;
		max-width: 680px;
		margin: auto;
		color: var(--md-on-surface, var(--text_secondary));
	}

	:global(#privacy-markdown h1) {
		font-family: 'Montserrat', sans-serif;
		color: var(--text_primary);
		font-size: 40px;
		font-weight: 700;
		line-height: 1.15;
		margin-top: 0;
		margin-bottom: 24px;
	}

	:global(#privacy-markdown h2) {
		font-family: 'Montserrat', sans-serif;
		color: var(--text_primary);
		font-size: 24px;
		font-weight: 700;
		line-height: 1.2;
		margin-top: 2em;
		margin-bottom: 0.75em;
	}

	:global(#privacy-markdown p) {
		color: var(--text_secondary);
		margin-bottom: 0.75em;
		line-height: 1.6;
		font-size: 16px;
	}

	:global(#privacy-markdown li) {
		color: var(--text_secondary);
		margin-left: 1.5em;
		margin-bottom: 0.3em;
		line-height: 1.6;
		font-size: 16px;
	}

	:global(#privacy-markdown a) {
		color: var(--md-primary, var(--accent_accent));
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	:global(#privacy-markdown hr) {
		border: none;
		border-top: 1px solid var(--md-outline-variant, #BFC9C4);
		margin-top: 4em;
		margin-bottom: 2em;
	}

	@media (max-width: 1100px) {
		:global(#privacy-markdown) {
			max-width: 90%;
		}
	}
</style>
