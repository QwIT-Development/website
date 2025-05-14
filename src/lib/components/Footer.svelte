<script lang="ts">
	import '$lib/global.css';

	let year = new Date().getFullYear();

    const links = [
        { icon: 'ri:bluesky-fill', href: 'https://bsky.app/profile/firka.app', label: 'Bluesky'},
        { icon: 'ri:tiktok-fill', href: 'https://www.tiktok.com/@firka.naplo', label: 'TikTok'},
        { icon: 'ri:discord-fill', href: 'https://discord.gg/UA48Zc3cYz', label: 'Discord'},
        { icon: 'ri:instagram-line', href: 'https://www.instagram.com/firka.naplo', label: 'Instagram'},
        { icon: '/yoursitee.svg', href: 'https://yoursit.ee/firka', label: 'YourSitee'}
    ]

    function formatIconClass(iconName: string): string {
        return iconName.replace(':', '-');
    }
</script>

<footer class="font_body_16px_regular">
	<div class="links">
        {#each links as link}
            {#if link.icon.startsWith('ri:')}
                <a href={link.href} target="_blank" rel="noopener noreferrer" class={formatIconClass(link.icon)} aria-label={link.label}></a>
            {:else}
            <!-- bad but works -->
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <span class="custom-icon-svg" style="-webkit-mask-image: url({link.icon}); mask-image: url({link.icon}); background-color: currentColor;"></span>
                </a>
            {/if}
        {/each}
    </div>
	<div class="notice">
		<p>Website design made by <a href="https://yoursit.ee/xou">xou</a></p>
		<p>Copyright © {year}, All Rights Reserved</p>
	</div>
	<div class="links-ugly">
		<a href="/privacy">Adatkezelés</a>
	</div>
</footer>
<div class="style-switch"></div>

<style>
	footer {
		display: inline-flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		gap: 24px;
		color: var(--text_teritary);
		position: fixed;
		bottom: 48px;
		left: 48px;
	}

	footer * a {
		color: var(--text_teritary);
		text-decoration: underline;
	}

	footer * a:hover {
		color: var(--text_primary);
	}

	.links {
		display: flex;
		align-items: center;
		gap: 12px;
	}

    .links a {
        text-decoration: none;
        font-size: 16px;
        height: 16px;
        width: 16px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--text_teritary);
    }

    .links a:hover {
        color: var(--text_primary);
    }

    .custom-icon-img {
        height: 16px;
        width: 16px;
        object-fit: contain;
    }

    .custom-icon-svg {
        display: inline-block;
        width: 16px;
        height: 16px;
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position: center;
        mask-position: center;
    }
</style>
