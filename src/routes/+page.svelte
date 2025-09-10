<svelte:head>
	<title>Firka</title>
</svelte:head>

<script lang="ts">
    import Downloads from '$lib/pages/Downloads.svelte';
    import Roadmap from '$lib/pages/Roadmap.svelte';
</script>

<main>
<Downloads />
<Roadmap />
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 120px;
    }

    @media (max-width: 825px) {
        main {
            gap: 72px;
        }
    }
</style>