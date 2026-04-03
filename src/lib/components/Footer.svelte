<script lang="ts">
	import '$lib/global.css';
	import { onMount } from 'svelte';

	let year = new Date().getFullYear();
	let easterEggActive = false;

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
		const button = document.querySelector('.style-switch') as HTMLButtonElement;
		const themeToggle = document.getElementById('themeToggle');
		const htmlElement = document.documentElement;

		const pfps = [
			"c5b487b54a2cd32d7a1532b71e277c4f",
			"00fceb32d3b3a40215ab3424f0815eb2",
			"6a0e6d74d10119476b50cb235a7cc955",
			"94edbcd38b918e8aff114c2801be11f3",
			"920ea4fcc04abe6955ac6d42e88f23eb",
			"32c93b147a6f8bb54416cb0694f469c6"
		]

		if (Math.random() < 0.05 && !htmlElement.classList.contains('dark-mode')) {
			easterEggActive = true;
			htmlElement.classList.add('dark-mode');
			if (themeToggle) {
				(themeToggle as HTMLElement).style.display = 'none';
			}
			if (button) {
				const name = pfps[Math.floor(Math.random() * pfps.length)];
				button.style.borderRadius = '90px';
				button.style.background =
					`url(/pfps/${name}.png) 100% / cover no-repeat`;
			}
			return;
		}

		if (easterEggActive) {
			easterEggActive = false;
			if (themeToggle) {
				(themeToggle as HTMLElement).style.display = '';
			}
			if (button) {
				button.style.borderRadius = '';
				button.style.background = '';
				button.style.backgroundBlendMode = '';
			}
		}

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
        const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');

        if (prefersLightScheme.matches) {
            htmlElement.classList.remove('dark-mode');
            themeToggle?.style.setProperty('-webkit-mask-image', 'url(/moon.svg)');
            themeToggle?.style.setProperty('mask-image', 'url(/moon.svg)');
        } else {
            htmlElement.classList.add('dark-mode');
            themeToggle?.style.setProperty('-webkit-mask-image', 'url(/sun.svg)');
            themeToggle?.style.setProperty('mask-image', 'url(/sun.svg)');
        }
    });
</script>

<footer class="font_body_12px_regular">
	<div class="social-links">
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
		<p>Design by <a href="https://yoursit.ee/xou">xou</a></p>
		<p>© {year} All Rights Reserved</p>
	</div>
	<div class="page-links">
		<a href="/privacy">Adatkezelés</a>
		<span class="separator">·</span>
		<a href="/support">Támogatás</a>
	</div>
</footer>

<button
	on:click={toggleTheme}
	class="style-switch"
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
	footer {
		display: flex;
		flex-direction: column;
		gap: 16px;
		color: var(--text_teritary);
		position: fixed;
		bottom: 32px;
		left: 32px;
		z-index: 100;
	}

	footer * a {
		color: var(--text_teritary);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	footer * a:hover {
		color: var(--accent_accent);
	}

	.social-links {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.social-links a {
		font-size: 18px;
		height: 18px;
		width: 18px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--text_teritary);
		transition: color 0.2s ease;
	}

	.social-links a:hover {
		color: var(--accent_accent);
	}

	.notice {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.page-links {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.separator {
		color: var(--md-outline-variant, #BFC9C4);
	}

	.custom-icon-svg {
		display: inline-block;
		width: 18px;
		height: 18px;
		-webkit-mask-size: contain;
		mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
	}

	.style-switch {
		display: flex;
		width: 40px;
		height: 40px;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		border-radius: var(--shape-full);
		right: 24px;
		bottom: 24px;
		position: fixed;
		background: var(--md-surface-container-high, var(--button_secondaryfill));
		cursor: pointer;
		color: var(--text_secondary);
		transition:
			background 0.3s ease,
			color 0.3s ease,
			box-shadow 0.2s ease;
		border: 1px solid var(--md-outline-variant, #BFC9C4);
		box-shadow: var(--elevation-1);
	}

	.style-switch:hover {
		background: var(--md-surface-container-highest, var(--button_secondaryfill));
		color: var(--accent_accent);
		box-shadow: var(--elevation-2);
	}

	.style-switch .custom-icon-svg {
		width: 20px;
		height: 20px;
	}

	@media (max-width: 825px) {
		footer {
			position: static;
			display: flex;
			align-items: center;
			text-align: center;
			margin: 64px 0 100px 0;
			gap: 16px;
			width: 100%;
		}

		.social-links {
			justify-content: center;
		}

		.style-switch {
			right: 20px;
			bottom: 20px;
		}
	}
</style>
