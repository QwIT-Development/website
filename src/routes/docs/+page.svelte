<script lang="ts">
    import '$lib/global.css';
    import {browser} from '$app/environment';
    import {onMount} from 'svelte';
    
    onMount(() => {
        if (browser) {
            window.location.href = 'https://docs.qwit.org';
        }
    });
</script>

<h1 style="font_web_h1">Átirányítás...</h1>
<a href="https://docs.qwit.org">Ha nem működik, kattints ide</a>

<style>
    h1 {
        color: var(--text_primary);
    }
    a {
        color: var(--text_teritary);
        transition: color 0.3s ease;
    }
    a:hover {
		color: var(--text_primary);
	}
</style>