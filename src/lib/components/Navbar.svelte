<script lang="ts">
	import {onMount} from 'svelte';
	import '$lib/global.css';
	import Buttons from '$lib/components/Buttons.svelte';
	let brandingHover = false;

	import {navLinks, normalLogo} from '$lib/components/Navbar';
	let hoverLogo = '/logo.png';

	onMount(() => {});
</script>

<nav>
	<div class="branding">
		<a
			href="/"
			on:mouseenter={() => (brandingHover = true)}
			on:mouseleave={() => (brandingHover = false)}
		>
			<img src={brandingHover ? hoverLogo : normalLogo} alt="logo" />
			<span class="font_header_16px brand-name">Folio</span>
		</a>
	</div>
	<div class="links">
		{#each navLinks as link}
			<Buttons label={link.name} type={link.style} href={link.url} icon={link.icon}></Buttons>
		{/each}
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 24px;
		background: var(--md-surface-container-low, var(--card_card));
		border-bottom: 1px solid var(--md-outline-variant, #BFC9C4);
		transition: background 0.3s ease, border-color 0.3s ease;
	}

	div.branding a {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		color: var(--text_primary);
		transition: opacity 0.2s ease;
	}

	div.branding a:hover {
		opacity: 0.8;
	}

	div.branding a img {
		width: 36px;
		height: 36px;
		border-radius: var(--shape-sm);
	}

	.brand-name {
		color: var(--text_primary);
	}

	div.links {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		flex-wrap: nowrap;
	}

	@media (max-width: 825px) {
		nav {
			height: auto;
			flex-direction: column;
			gap: 16px;
			padding: 16px 20px;
		}

		div.branding a {
			flex-direction: row;
			gap: 12px;
		}

		div.links {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
