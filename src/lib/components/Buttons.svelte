<script>
    import '$lib/global.css';

	export let icon = '';
	export let label = 'link';
	export let href = '/';
	/** @type {'small_primary' | 'small_secondary'}*/
	export let type = 'small_secondary';

    let typeClass = `button-${type}`;
    if (type === 'small_primary') {
        typeClass += ' font_body_14px_semibold';
    } else if (type === 'small_secondary') {
        typeClass += ' font_body_14px_regular';
    }
</script>

<a {href} class="button {typeClass} tiny-shadow" {...$$restProps}>
	<slot>
		{#if icon}
			<img src={icon} alt="" />
		{/if}
		<p>{label}</p>
	</slot>
</a>

<style>
	.button {
		display: inline-flex;
		height: 34px;
		padding: 12px 14px 12px 12px;
		justify-content: center;
		align-items: center;
		gap: 6px;
		flex-shrink: 0;
        border-radius: 22px;
        text-decoration: none;
	}
    .button img {
        width: 16px;
        height: 16px;
    }

    .button-small_secondary {
        background: var(--button_secondaryfill);
        color: var(--text_secondary);
    }
    .button-small_secondary:hover {
        background: linear-gradient(0deg, var(--accent_15) 0%, var(--accent_15) 100%), var(--button_secondaryfill);
        color: var(--text_primary);
    }

    .button-small_primary {
        background: var(--accent_accent);
        color: var(--text_primary);
    }
    .button-small_primary:hover {
        background: var(--button_secondaryfill);
    }
</style>
