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
        max-width: 60%;
        margin: auto;
    }

    :global(#privacy-markdown h1, #privacy-markdown h2) {
        color: var(--text_primary);
        font-family: 'Montserrat', sans-serif;
        margin-top: 1em;
        margin-bottom: 0.5em;
        font-size: 2em;
    }

    :global(#privacy-markdown h1) {
        font-size: 2.5em;
        font-weight: 800;
        margin-top: 0;
    }

    :global(#privacy-markdown p, #privacy-markdown li) {
        color: var(--text_secondary);
        margin-bottom: 0.2em;
    }

    :global(li) {
        margin-left: 1em;
    }

    :global(#privacy-markdown a) {
        color: var(--accent_accent)
    }

    :global(html:not(.dark-mode) #privacy-markdown a) {
        color: var(--accent_readable)
    }

    :global(#privacy-markdown hr) {
        margin-top: 5em;
        margin-bottom: 1em;
    }

    @media (max-width: 1100px) {
        :global(#privacy-markdown) {
            max-width: 90%;
        }
    }

</style>