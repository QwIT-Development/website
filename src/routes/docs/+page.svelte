<script lang="ts">
    import {goto} from '$app/navigation';
    import {onMount} from 'svelte';
    onMount(() => {
        goto('https://docs.qwit.org');
    })
</script>