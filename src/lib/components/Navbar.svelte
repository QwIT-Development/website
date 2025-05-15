<script lang="ts">
	import '$lib/global.css';
	import Buttons from '$lib/components/Buttons.svelte';
	let brandingHover = false;

	import {navLinks, hoverLogo, normalLogo} from '$lib/components/Navbar';
</script>

<nav>
<div class="branding">
	<a
		href="/"
		on:mouseenter={() => (brandingHover = true)}
		on:mouseleave={() => (brandingHover = false)}
	>
		<img src={brandingHover ? hoverLogo : normalLogo} alt="logo" />
		<h1>Firka Napló</h1>
	</a>
</div>
<div class="links">
	{#each navLinks as link}
		<Buttons label={link.name} type={link.style} href={link.url}></Buttons>
	{/each}
</div>
</nav>

<style>
	div.branding {
		top: 48px;
		left: 48px;
		z-index: 1000;
		position: fixed;
		height: 40px;
        max-width: 278px;
        display: flex;
        flex-direction: row;
        gap: 12px;
        color: var(--text_secondary);
	}

	div.branding a {
		display: flex;
		flex-direction: row;
		gap: 24px;
		text-decoration: none;
		color: var(--text_primary);
	}

	div.links {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		right: 48px;
		top: 48px;
		z-index: 1000;
		position: fixed;
		height: 40px;
	}

	div.branding a img {
		width: 40px;
		height: 40px;
	}

	@media (max-width: 768px) {
        nav {
            margin-bottom: 72px;
        }
		div.branding {
			position: static;
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            max-width: none;
            text-align: center;
            padding: 72px 20px 0 20px;
            height: auto;
            margin-bottom: 40px;
		}
		div.branding a {
			display: flex;
			flex-direction: column;
			gap: 16px;
            align-items: center;
		}

		div.links {
			position: static;
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: center;
		}
	}
</style>
