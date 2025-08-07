<script lang="ts">
	import '$lib/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import NavbarShared from '$lib/components/NavbarShared.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const isIndexPage = derived(page, ($page) => $page?.route?.id === '/');
</script>

{#if $isIndexPage}
	<Navbar />
{:else}
	<NavbarShared />
{/if}
<main>
	<slot />
</main>
<Footer />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		background: var(--background);
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 176px 20px 176px 20px;
	}

	@media (max-width: 768px) {
		main {
			min-height: auto;
			padding: 0 20px 0 20px;
		}
	}
</style>
