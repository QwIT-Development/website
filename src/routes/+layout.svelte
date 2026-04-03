<script lang="ts">
	import '$lib/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
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
		color: var(--text_primary);
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		/* top: 64px nav bar + 32px gap; bottom: ~160px for fixed footer */
		padding: 96px 24px 180px 24px;
	}

	@media (max-width: 825px) {
		main {
			min-height: auto;
			/* mobile: nav stacks vertically (~120px) */
			padding: 140px 20px 20px 20px;
		}
	}
</style>
