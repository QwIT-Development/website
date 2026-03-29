<script lang="ts">
	import '$lib/global.css';
	import Buttons from '$lib/components/Buttons.svelte';
	import { onMount } from 'svelte';
	import { checkCache, downloadsClient } from '$lib/downloadsClient';

	const appDownloadLinks = {
		arm64: 'https://repo.firka.app/fdroid/repo/app.firka.naplo_arm64-v8a.apk',
		armeabi: 'https://repo.firka.app/fdroid/repo/app.firka.naplo_armeabi-v7a.apk'
	};

	const staticLinks = {
		chromestore: 'https://chromewebstore.google.com/detail/firxa/emafoaifbfppcccgfmpcoheonhjnpldj',
		firefox: 'https://addons.mozilla.org/hu/firefox/addon/firxa/'
	};

	onMount(() => {
		checkCache();
		downloadsClient();
	});
</script>

<div class="main" id="anchor-downloads">
	<div class="title">
		<h2 class="font_web_h2">Töltsd le a Firka Naplót</h2>
		<p class="font_body_16px_regular">
			A mobil app elérhető robotos telefonokon, és a kedvenc böngésződbe pedig
			letöltheted a bővítményt.
		</p>
	</div>
	<div class="cards">
		<div class="card tiny_shadow">
			<div class="card-header">
				<h2 class="font_header_h2">Alkalmazás</h2>
				<p class="font_body_16px_regular" id="app-ver"></p>
			</div>
			<div class="card-section">
				<p class="font_header_14px">Android</p>
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
				<p class="font_header_14px">Forráskód</p>
				<div class="section-buttons">
					<Buttons label="GitHub" href="https://github.com/Zan1456/folio" icon="ri:github-fill"></Buttons>
				</div>
			</div>
		</div>
		<div class="card tiny_shadow">
			<div class="card-header">
				<h2 class="font_header_h2">Bővítmény</h2>
				<p class="font_body_16px_regular" id="ext-ver"></p>
			</div>
			<div class="card-section">
				<p class="font_header_14px">Chromium (Chrome, Edge, stb.)</p>
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
				<p class="font_header_14px">Firefox</p>
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
				<p class="font_header_14px">Forráskód</p>
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
		width: 400px;
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
	}

	.row-space-between {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		align-items: center;
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

	div.card {
		display: flex;
		width: 400px;
		padding: 20px;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		border-radius: 16px;
		background: var(--card_card);
	}

	.card-header h2 {
		color: var(--text_primary);
	}

	.card-header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 6px;
		align-self: stretch;
	}

	.card-header p {
		color: var(--text_secondary);
	}

	.card-section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
		align-self: stretch;
	}

	.card-section p {
		color: var(--text_secondary);
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
		.modal {
			width: 80%;
		}

		div.main {
			display: flex;
			width: 100%;
			flex-direction: column;
			align-items: center;
			gap: 40px;
		}

		div.title {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
			align-self: auto;
			text-align: center;
			width: 336px;
		}

		div.cards {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
		}

		div.card {
			width: 336px;
		}
	}
</style>
