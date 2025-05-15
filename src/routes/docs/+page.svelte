<script>
	import '$lib/global.css';
	export let data;
</script>

<div class="markdown-content">
	<svelte:component this={data.content} />
</div>

<style>
	.markdown-content {
		max-width: 600px;
		color: var(--text_secondary);
	}

	.markdown-content :global(p),
	.markdown-content :global(h1),
	.markdown-content :global(h2),
	.markdown-content :global(h3),
	.markdown-content :global(h4),
	.markdown-content :global(h5),
	.markdown-content :global(h6),
	.markdown-content :global(li),
	.markdown-content :global(pre),
	.markdown-content :global(code),
	.markdown-content :global(blockquote),
	.markdown-content :global(td),
	.markdown-content :global(th) {
		overflow-wrap: break-word;
		word-wrap: break-word;
		word-break: break-word;
	}

	.markdown-content :global(pre) {
		white-space: pre-wrap;
	}

    .markdown-content :global(h1),
    .markdown-content :global(h2),
    .markdown-content :global(h3),
    .markdown-content :global(h4),
    .markdown-content :global(h5),
    .markdown-content :global(h6) {
        color: var(--text_primary);
        font-weight: 600;
        margin: 0.5em 0;
    }

    .markdown-content :global(a) {
        color: var(--accent_accent);
        transition: color 0.3s ease;
    }

    .markdown-content :global(a:hover) {
        color: var(--text_primary);
    }

    .markdown-content :global(li::marker) {
        color: #00000000;
    }

    .markdown-content :global(li) {
        list-style-position: outside;
        padding-left: 1em;
        margin-bottom: 0.5em;
    }
</style>