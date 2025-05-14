<script lang="ts">
    import '$lib/global.css';
    import Buttons from '$lib/components/Buttons.svelte';

    const navLinks: { name: string; url: string; style: "small_secondary" | "small_primary" }[] = [
        { name: 'GitHub', url: 'https://github.com/QwIT-Development', style: 'small_secondary'},
        { name: 'Letöltés', url: '/downloads', style: 'small_primary'}
    ];

    let brandingHover = false;
    const normalLogo = '/dave.svg';
    const hoverLogo = '/dave-hover.gif';
</script>

    <div class="branding">
        <a href="/"
        on:mouseenter={() => brandingHover = true}
        on:mouseleave={() => brandingHover = false}>
            <img src={brandingHover ? hoverLogo : normalLogo} alt="logo" />
            <h1>Firka Napló</h1>
        </a>
    </div>
    <div class="links">
        {#each navLinks as link}
            <Buttons label={link.name} type={link.style} href={link.url}></Buttons>
        {/each}
    </div>

<style>
    div.branding {
        top: 48px;
        left: 48px;
        z-index: 1000;
        position: fixed;
        height: 40px;
    }

    div.branding a {
        display: inline-flex;
        align-items: center;
        gap: 16px;
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
</style>