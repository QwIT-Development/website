<script lang="ts">
    import '$lib/global.css';
    import Buttons from '$lib/components/Buttons.svelte';

    const navLinks: { name: string; url: string; style: "small_secondary" | "small_primary" }[] = [
        { name: 'GitHub', url: 'https://github.com/QwIT-Development', style: 'small_secondary'},
        { name: 'Letöltés', url: '/downloads', style: 'small_primary'}
    ];
</script>

    <div class="branding">
        <img src="/dave.svg" alt="logo" />
        <h1>Firka Napló</h1>
    </div>
    <div class="links">
        {#each navLinks as link}
            <Buttons label={link.name} type={link.style} href={link.url}></Buttons>
        {/each}
    </div>

<style>
    div.branding {
        display: inline-flex;
        align-items: center;
        gap: 16px;
        top: 48px;
        left: 48px;
        z-index: 1000;
        position: fixed;
        height: 40px;
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

    div.branding img {
        width: 40px;
        height: 40px;
    }

    div.branding h1 {
        color: var(--text_primary);
    }
</style>