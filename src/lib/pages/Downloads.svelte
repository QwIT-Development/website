<script lang="ts">
	import '$lib/global.css';
	import Buttons from '$lib/components/Buttons.svelte';
	import { onMount } from 'svelte';
	import { checkCache, downloadsClient } from '$lib/downloadsClient';

	let appVersion = '1.0.1';

	$: appDownloadLinks = {
		arm64: `https://github.com/Zan1456/folio/releases/download/${appVersion}/app-arm64-v8a-release.apk`,
		armeabi: `https://github.com/Zan1456/folio/releases/download/${appVersion}/app-armeabi-v7a-release.apk`
	};

	const staticLinks = {
		chromestore: 'https://chromewebstore.google.com/detail/firxa/emafoaifbfppcccgfmpcoheonhjnpldj',
		firefox: 'https://addons.mozilla.org/hu/firefox/addon/firxa/'
	};

	onMount(async () => {
		checkCache();
		const versions = await downloadsClient();
		if (versions.appVersion && versions.appVersion !== 'unknown') {
			appVersion = versions.appVersion;
		}
	});
</script>

<div class="main" id="anchor-downloads">
	<div class="title">
		<h2 class="font_web_h2">Töltsd le a Folio-t</h2>
		<p class="font_body_16px_regular">
			A mobil app elérhető Android telefonokon, és a kedvenc böngésződbe pedig
			letöltheted a bővítményt.
		</p>
	</div>
	<div class="cards">
		<div class="card">
			<div class="card-header">
				<div class="card-icon">
					<span class="ri-smartphone-line"></span>
				</div>
				<div>
					<h2 class="font_header_h2">Alkalmazás</h2>
					<p class="font_body_14px_regular version" id="app-ver"></p>
				</div>
			</div>
			<div class="divider"></div>
			<div class="card-section">
				<p class="font_header_14px label">Android</p>
				<div class="section-buttons">
					<Buttons
						label="Google Play"
						type="small_secondary"
						icon="ri:google-play-fill"
						disabled={true}
					></Buttons>
				</div>
				<div class="section-buttons">
					<Buttons
						id="arm64"
						label="arm64.apk"
						type="small_secondary"
						icon="/apk.svg"
						href={appDownloadLinks.arm64}
					></Buttons>
					<Buttons
						id="armeabi"
						label="armeabi.apk"
						type="small_secondary"
						icon="/apk.svg"
						href={appDownloadLinks.armeabi}
					></Buttons>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px label">Forráskód</p>
				<div class="section-buttons">
					<Buttons label="GitHub" href="https://github.com/Zan1456/folio" icon="ri:github-fill"></Buttons>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-header">
				<div class="card-icon">
					<span class="ri-puzzle-line"></span>
				</div>
				<div>
					<h2 class="font_header_h2">Bővítmény</h2>
					<p class="font_body_14px_regular version" id="ext-ver"></p>
				</div>
			</div>
			<div class="divider"></div>
			<div class="card-section">
				<p class="font_header_14px label">Chromium (Chrome, Edge, stb.)</p>
				<div class="section-buttons">
					<Buttons
						label="Chrome Web Store"
						type="small_secondary"
						icon="ri:chrome-fill"
						href={staticLinks.chromestore}
					></Buttons>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px label">Firefox</p>
				<div class="section-buttons">
					<Buttons
						label="Firefox Add-ons"
						type="small_secondary"
						icon="ri:firefox-browser-fill"
						href={staticLinks.firefox}
						disabled={true}
					></Buttons>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px label">Forráskód</p>
				<div class="section-buttons">
					<Buttons label="GitHub" href="https://github.com/QwIT-Development/firka-extension" icon="ri:github-fill"></Buttons>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	div.main {
		display: flex;
		width: 820px;
		flex-direction: column;
		align-items: flex-start;
		gap: 48px;
	}

	div.title {
		display: flex;
		width: 460px;
		flex-direction: column;
		align-items: flex-start;
		gap: 16px;
	}

	.title h2 {
		color: var(--text_primary);
	}

	.title p {
		color: var(--text_secondary);
	}

	div.cards {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		justify-content: center;
		gap: 20px;
		align-self: stretch;
	}

	/* M3 Filled Card */
	div.card {
		display: flex;
		width: 400px;
		padding: 24px;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		border-radius: var(--shape-xl, 28px);
		background: var(--md-surface-container, var(--card_card));
		box-shadow: var(--elevation-1);
		transition: box-shadow 0.2s ease, background 0.2s ease;
	}

	div.card:hover {
		box-shadow: var(--elevation-2);
	}

	.card-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 16px;
		align-self: stretch;
	}

	.card-icon {
		width: 48px;
		height: 48px;
		border-radius: var(--shape-md, 12px);
		background: var(--md-primary-container, var(--accent_15));
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--md-on-primary-container, var(--accent_secondary));
		font-size: 22px;
		flex-shrink: 0;
	}

	.card-header h2 {
		color: var(--text_primary);
	}

	.version {
		color: var(--text_teritary);
		margin-top: 2px;
	}

	.divider {
		width: 100%;
		height: 1px;
		background: var(--md-outline-variant, #BFC9C4);
		opacity: 0.6;
	}

	.card-section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
		align-self: stretch;
	}

	.label {
		color: var(--text_teritary);
		letter-spacing: 0.5px;
		text-transform: uppercase;
		font-size: 11px;
	}

	.section-buttons {
		display: flex;
		align-items: flex-start;
		align-content: flex-start;
		gap: 8px;
		align-self: stretch;
		flex-wrap: wrap;
	}

	@media (max-width: 1540px) {
		div.main {
			width: 100%;
			flex-direction: column;
			align-items: center;
			gap: 40px;
		}

		div.title {
			flex-direction: column;
			align-items: center;
			text-align: center;
			width: 360px;
		}

		div.cards {
			flex-direction: column;
			align-items: center;
		}

		div.card {
			width: 360px;
		}
	}
</style>
