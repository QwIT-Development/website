<script lang="ts">
	import '$lib/global.css';
	import { onMount } from 'svelte';

	let year = new Date().getFullYear();

	const links = [
		{ icon: 'ri:bluesky-fill', href: 'https://bsky.app/profile/firka.app', label: 'Bluesky' },
		{ icon: 'ri:tiktok-fill', href: 'https://www.tiktok.com/@firka.naplo', label: 'TikTok' },
		{ icon: 'ri:discord-fill', href: 'https://discord.gg/UA48Zc3cYz', label: 'Discord' },
		{
			icon: 'ri:instagram-line',
			href: 'https://www.instagram.com/firka.naplo',
			label: 'Instagram'
		},
		{ icon: '/yoursitee.svg', href: 'https://yoursit.ee/firka', label: 'YourSitee' }
	];

	function formatIconClass(iconName: string): string {
		return iconName.replace(':', '-');
	}

	function toggleTheme() {
		const htmlElement = document.documentElement;
		const themeToggle = document.getElementById('themeToggle');
		htmlElement.classList.toggle('dark-mode');
		themeToggle?.style.setProperty(
			'-webkit-mask-image',
			htmlElement.classList.contains('dark-mode') ? 'url(/sun.svg)' : 'url(/moon.svg)'
		);
		themeToggle?.style.setProperty(
			'mask-image',
			htmlElement.classList.contains('dark-mode') ? 'url(/sun.svg)' : 'url(/moon.svg)'
		);
	}

	onMount(() => {
		const htmlElement = document.documentElement;
		const themeToggle = document.getElementById('themeToggle');
		// check if the user has a theme preference
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
		if (prefersDarkScheme.matches) {
			htmlElement.classList.add('dark-mode');
			themeToggle?.style.setProperty('-webkit-mask-image', 'url(/sun.svg)');
			themeToggle?.style.setProperty('mask-image', 'url(/sun.svg)');
		}
	});
</script>

<footer class="font_body_16px_regular">
	<div class="links">
		{#each links as link}
			{#if link.icon.startsWith('ri:')}
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class={formatIconClass(link.icon)}
					aria-label={link.label}
				></a>
			{:else}
				<!-- bad but works -->
				<a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
					<span
						class="custom-icon-svg"
						style="-webkit-mask-image: url({link.icon}); mask-image: url({link.icon}); background-color: currentColor;"
					></span>
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
<button
	on:click={toggleTheme}
	class="style-switch tiny-shadow"
	aria-label="Theme toggle"
	type="button"
>
	<span
		id="themeToggle"
		class="custom-icon-svg"
		style="-webkit-mask-image: url(data:,); mask-image: url(data:,); background-color: currentColor;"
	></span>
</button>

<style>
	.style-switch {
		display: flex;
		width: 32px;
		height: 32px;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		border-radius: 16px;
		right: 48px;
		bottom: 48px;
		position: fixed;
		background: var(--button_secondaryfill);
		cursor: pointer;
		color: var(--text_teritary);
		transition:
			background 0.3s ease,
			color 0.3s ease;
            border: none;
	}
	.style-switch:hover {
		background:
			linear-gradient(0deg, var(--accent_15) 0%, var(--accent_15) 100%), var(--button_secondaryfill);
		color: var(--text_primary);
	}

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
		transition: color 0.3s ease;
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

	@media (max-width: 768px) {
		footer {
			position: static;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			margin-bottom: 72px;
			margin-top: 72px;
			gap: 24px;
		}
		.style-switch {
			display: none;
		}
	}
</style>
