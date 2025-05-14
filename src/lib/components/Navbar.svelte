<script lang="ts">
    import '$lib/global.css';

    const navLinks = [
        { name: 'Github', url: 'https://github.com/QwIT-Development', style: 'button_small_secondary'},
        { name: 'Letöltés', url: '/downloads', style: 'button_small_primary'}
    ]
</script>

    <div class="branding">
        <img src="/dave.svg" alt="logo" />
        <h1>Firka Napló</h1>
    </div>
    <div class="links">

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