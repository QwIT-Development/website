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
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 176px 20px 176px 20px;
	}

	@media (max-width: 825px) {
		main {
			min-height: auto;
			padding: 0 20px 0 20px;
		}
	}
</style>
