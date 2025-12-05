<script lang="ts">
	import '$lib/global.css';
	import Buttons from '$lib/components/Buttons.svelte';
	import { onMount } from 'svelte';
	import { checkCache, downloadsClient } from '$lib/downloadsClient';

	const appDownloadLinks = {
		testflight: 'https://testflight.apple.com/join/NdzF8b84',
		fdroid: 'https://repo.firka.app/fdroid/repo?fingerprint=C5656F50D80497CE659DB2E88F436114DE617A09B66980D2226DF9D042AE2925',
		arm64: 'https://repo.firka.app/fdroid/repo/app.firka.naplo_arm64-v8a.apk',
		armeabi: 'https://repo.firka.app/fdroid/repo/app.firka.naplo_armeabi-v7a.apk'
	}

	const githubLinks = {
		app: 'https://github.com/QwIT-Development/firka',
		extension: 'https://github.com/QwIT-Development/firka-extension',
		legacy: 'https://github.com/QwIT-Development/app-legacy'
	};

	const staticLinks = {
		chromestore: 'https://chromewebstore.google.com/detail/firxa/emafoaifbfppcccgfmpcoheonhjnpldj',
		firefox: 'https://github.com/QwIT-Development/firka-extension/releases',
		legacyApk: 'https://github.com/QwIT-Development/app-legacy/releases/tag/v5.1.6fix'
	};

	let showModal = false;
	let modalTitle = '';
	let modalContent = '';

	function openModal(title: string, content: string) {
		modalTitle = title;
		modalContent = content;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	function handleUnavailableClick(platform: 'ios' | 'android') {
		if (platform === 'ios') {
			openModal(
				'iOS-re jelenleg még nem elérhető',
				'A Firka Napló jelenleg még nem érhető el nyilvánosan. Elérheted azonban a Discord szerverünkről az #ios-segítség csatornáról.'
			);
		} else if (platform === 'android') {
			openModal(
				'Androidra jelenleg még nem elérhető',
				'A Firka Napló jelenleg még nem érhető el nyilvánosan. Elérheted azonban a <a href="https://build.firka.app/job/firka/job/firka/job/main/" target="_blank">Jenkins buildeink</a> közül.'
			);
		}
	}

	onMount(() => {
		checkCache();
		downloadsClient();
	});
</script>

<div class="main" id="anchor-downloads">
	<div class="title">
		<h2 class="font_web_h2">Töltsd le a Firka Naplót</h2>
		<p class="font_body_16px_regular">
			A mobil app elérhető almás és robotos telefonokon is, és a kedvenc böngésződbe pedig
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
					<button class="button button-small_secondary tiny-shadow" on:click={() => handleUnavailableClick('android')}>
						<span style="-webkit-mask-image: url(/android.svg); mask-image: url(/android.svg); background-color: currentColor;"></span>
						<p>F-Droid</p>
					</button>
					<Buttons
						label="Google Play"
						type="small_secondary"
						icon="ri:google-play-fill"
						disabled={true}
					></Buttons>
				</div>
				<div class="section-buttons">
					<button class="button button-small_secondary tiny-shadow" on:click={() => handleUnavailableClick('android')}>
						<span style="-webkit-mask-image: url(/apk.svg); mask-image: url(/apk.svg); background-color: currentColor;"></span>
						<p>arm64.apk</p>
					</button>
					<button class="button button-small_secondary tiny-shadow" on:click={() => handleUnavailableClick('android')}>
						<span style="-webkit-mask-image: url(/apk.svg); mask-image: url(/apk.svg); background-color: currentColor;"></span>
						<p>armeabi.apk</p>
					</button>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px">iOS</p>
				<div class="section-buttons">
					<button class="button button-small_secondary tiny-shadow" on:click={() => handleUnavailableClick('ios')}>
						<span style="-webkit-mask-image: url(/testflight.svg); mask-image: url(/testflight.svg); background-color: currentColor;"></span>
						<p>TestFlight</p>
					</button>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px">Forráskód</p>
				<div class="section-buttons">
					<Buttons label="GitHub" href={githubLinks.app} icon="ri:github-fill"></Buttons>
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
					<Buttons label="GitHub Releases" href={staticLinks.firefox} icon="ri:github-fill"></Buttons>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px">Forráskód</p>
				<div class="section-buttons">
					<Buttons label="GitHub" href={githubLinks.extension} icon="ri:github-fill"></Buttons>
				</div>
			</div>
		</div>
		<div class="card tiny_shadow">
			<div class="card-header">
				<h2 class="font_header_h2">Legacy alkalmazás</h2>
				<p class="font_body_16px_regular" id="legacy-ver"></p>
			</div>
			<div class="card-section">
				<p class="font_header_14px">Android</p>
				<div class="section-buttons">
					<Buttons
						label="APK"
						type="small_secondary"
						icon="/apk.svg"
						href={staticLinks.legacyApk}
					></Buttons>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px">iOS</p>
				<div class="section-buttons">
					<Buttons
						label="TestFlight"
						type="small_primary"
						icon="/testflight.svg"
						disabled={true}
					></Buttons>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px">Forráskód</p>
				<div class="section-buttons">
					<Buttons label="GitHub" href={githubLinks.legacy} icon="ri:github-fill"></Buttons>
				</div>
			</div>
		</div>
	</div>
</div>

{#if showModal}
	<div class="modal-overlay" on:click={closeModal}>
		<div class="modal" on:click|stopPropagation>
			<div class="modal-header">
				<h2 class="font_web_h2">{modalTitle}</h2>
				<button class="modal-close" on:click={closeModal} aria-label="Bezárás">
					<span class="ri-close-line"></span>
				</button>
			</div>
			<div class="modal-body">
				<p class="font_body_16px_regular">{@html modalContent}</p>
			</div>
		</div>
	</div>
{/if}

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

	.title h2 {
		color: var(--text_primary);
	}

	.title p {
		color: var(--text_secondary);
	}

	div.cards {
		display: flex;
		align-items: stretch;
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

	.button {
		display: inline-flex;
		height: 34px;
		padding: 12px 14px 12px 12px;
		justify-content: center;
		align-items: center;
		gap: 6px;
		flex-shrink: 0;
		border-radius: 22px;
		border: none;
		text-decoration: none;
		cursor: pointer;
		transition:
			background 0.3s ease,
			color 0.3s ease;
		background-color: transparent;
		color: inherit;
		font: inherit;
	}

	.button span {
		width: 16px;
		height: 16px;
	}

	.button-small_secondary {
		background: var(--button_secondaryfill);
		color: var(--text_secondary);
	}

	.button-small_secondary:hover {
		background:
			linear-gradient(0deg, var(--accent_15) 0%, var(--accent_15) 100%), var(--button_secondaryfill);
		color: var(--text_primary);
	}

	.button-small_primary {
		background: var(--accent_accent);
		color: var(--text_primary_button);
	}

	.button-small_primary:hover {
		background:
			linear-gradient(0deg, var(--accent_25) 0%, var(--accent_25) 100%), var(--accent_accent);
		color: var(--text_primary_button);
	}

	.button p {
		font-size: 14px;
		margin: 0;
	}

	.button-small_secondary p {
		font-weight: 400;
	}

	.button-small_primary p {
		font-weight: 600;
	}

	/* Modal styles */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		animation: fadeIn 0.2s ease;
	}

	.modal {
		background: var(--card_card);
		border-radius: 16px;
		padding: 24px;
		max-width: 500px;
		width: 90%;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
		animation: slideIn 0.3s ease;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 16px;
		margin-bottom: 16px;
	}

	.modal-header h2 {
		color: var(--text_primary);
		margin: 0;
		flex: 1;
	}

	.modal-close {
		background: none;
		border: none;
		color: var(--text_secondary);
		cursor: pointer;
		padding: 0;
		font-size: 24px;
		transition: color 0.2s ease;
	}

	.modal-close:hover {
		color: var(--text_primary);
	}

	.modal-body {
		margin-bottom: 24px;
	}

	.modal-body p {
		color: var(--text_secondary);
		margin: 0;
	}

	.modal-body :global(a) {
		color: var(--accent_accent);
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	.modal-body :global(a:hover) {
		opacity: 0.8;
	}

	.modal-footer {
		display: flex;
		gap: 12px;
		justify-content: flex-end;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideIn {
		from {
			transform: translateY(-20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@media (max-width: 1540px) {
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
