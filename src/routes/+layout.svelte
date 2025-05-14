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
<slot />
<Footer />

<style>
    :global(body) {
        background: var(--background);
    }
</style>