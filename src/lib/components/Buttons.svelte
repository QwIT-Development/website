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
	<a {href} {id} class="button {typeClass}" {...$$restProps}>
		<slot>
			{#if icon}
				{#if icon.startsWith('ri:')}
					<span
						class={formatIconClass(icon)}
						aria-label={label}
						role="img"
						style="width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 16px; line-height: 1;"
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
	<div class="button {typeClass} disabled" {...$$restProps}>
		<slot>
			{#if icon}
				{#if icon.startsWith('ri:')}
					<span
						class={formatIconClass(icon)}
						aria-label={label}
						role="img"
						style="width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 16px; line-height: 1;"
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
	/* M3 Button base */
	.button {
		display: inline-flex;
		height: 40px;
		padding: 0 20px 0 16px;
		justify-content: center;
		align-items: center;
		gap: 8px;
		flex-shrink: 0;
		border-radius: var(--shape-full, 100px);
		text-decoration: none;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			box-shadow 0.2s ease;
		white-space: nowrap;
	}

	.button span {
		width: 16px;
		height: 16px;
	}

	/* Filled Tonal — secondary action (M3 "filled tonal button") */
	.button-small_secondary {
		background: var(--md-surface-container-highest, var(--button_secondaryfill));
		color: var(--md-on-surface-variant, var(--text_secondary));
		box-shadow: none;
	}
	.button-small_secondary:hover {
		background: var(--md-secondary-container, var(--button_secondaryfill));
		color: var(--md-on-secondary-container, var(--text_primary));
		box-shadow: var(--elevation-1);
	}

	/* Filled — primary action (M3 "filled button") */
	.button-small_primary {
		background: var(--md-primary, var(--accent_accent));
		color: var(--md-on-primary, var(--text_primary_button));
		box-shadow: none;
	}
	.button-small_primary:hover {
		background: var(--md-primary, var(--accent_accent));
		color: var(--md-on-primary, var(--text_primary_button));
		box-shadow: var(--elevation-2);
		filter: brightness(1.08);
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
		opacity: 0.38;
		pointer-events: none;
		cursor: not-allowed;
		background: var(--md-surface-container-highest, var(--button_secondaryfill));
		color: var(--md-on-surface, var(--text_secondary));
	}
</style>
