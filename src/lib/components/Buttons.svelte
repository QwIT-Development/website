<script lang="ts">
	import '$lib/global.css';

	export let icon = '';
	export let label = 'link';
	export let href: null | string = null;
	/** @type {'small_primary' | 'small_secondary'}*/
	export let type = 'small_secondary';
	export let disabled = false;
	export let id: null | string = null;

	let typeClass = `button-${type}`;
	if (type === 'small_primary') {
		typeClass += ' font_body_14px_semibold';
	} else if (type === 'small_secondary') {
		typeClass += ' font_body_14px_regular';
	}

	function formatIconClass(iconName: string): string {
		return iconName.replace(':', '-');
	}
</script>

{#if !disabled}
	<a {href} {id} class="button {typeClass} tiny-shadow" {...$$restProps}>
		<slot>
			{#if icon}
				{#if icon.startsWith('ri:')}
					<span
						class={formatIconClass(icon)}
						aria-label={label}
						role="img"
						style="width: 16px; height: 16px;"
					></span>
				{:else}
					<span
						class="custom-icon-svg"
						style="-webkit-mask-image: url({icon}); mask-image: url({icon}); background-color: currentColor;"
					></span>
				{/if}
			{/if}
			<p>{label}</p>
		</slot>
	</a>
{:else}
	<div class="button {typeClass} tiny-shadow disabled" {...$$restProps}>
		<slot>
			{#if icon}
				{#if icon.startsWith('ri:')}
					<span
						class={formatIconClass(icon)}
						aria-label={label}
						role="img"
						style="width: 16px; height: 16px;"
					></span>
				{:else}
					<span
						class="custom-icon-svg"
						style="-webkit-mask-image: url({icon}); mask-image: url({icon}); background-color: currentColor;"
					></span>
				{/if}
			{/if}
			<p>{label}</p>
		</slot>
	</div>
{/if}

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
		transition:
			background 0.3s ease,
			color 0.3s ease;
	}
	.button span {
		width: 16px;
		height: 16px;
	}

	.button-small_secondary {
		background: var(--button_secondaryfill);
		color: var(--text_secondary);
	}
	.button-small_secondary:hover {
		background:
			linear-gradient(0deg, var(--accent_15) 0%, var(--accent_15) 100%), var(--button_secondaryfill);
		color: var(--text_primary);
	}

	.button-small_primary {
		background: var(--accent_accent);
		color: var(--text_primary_button);
	}
	.button-small_primary:hover {
		background: var(--button_primaryfill);
	}

	.custom-icon-svg {
		display: inline-block;
		width: 16px;
		height: 16px;
		-webkit-mask-size: contain;
		mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
	}

	.disabled {
		opacity: 0.5;
		pointer-events: none;
		cursor: not-allowed;
		background: var(--button_secondaryfill);
		color: var(--text_secondary);
	}
</style>
