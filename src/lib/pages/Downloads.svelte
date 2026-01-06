<script lang="ts">
	import '$lib/global.css';
	import Buttons from '$lib/components/Buttons.svelte';
	import { onMount } from 'svelte';
	import { checkCache, downloadsClient } from '$lib/downloadsClient';

	let showTooltip = false;
	let legacy = true;

	const appDownloadLinks = {
		testflight: 'https://testflight.apple.com/join/NdzF8b84',
		fdroid: 'https://repo.firka.app/fdroid/repo?fingerprint=C5656F50D80497CE659DB2E88F436114DE617A09B66980D2226DF9D042AE2925',
		arm64: 'https://repo.firka.app/fdroid/repo/app.firka.naplo_arm64-v8a.apk',
		armeabi: 'https://repo.firka.app/fdroid/repo/app.firka.naplo_armeabi-v7a.apk'
	}

	const legacyAppDownloadLinks = {
		arm64: 'https://github.com/QwIT-Development/app-legacy/releases/download/v5.1.6fix/app-arm64-v8a-release.apk',
		armeabi: 'https://github.com/QwIT-Development/app-legacy/releases/download/v5.1.6fix/app-armeabi-v7a-release.apk',
		testflight: '#',
		fdroid: '#'
	};

	const githubLinks = {
		app: 'https://github.com/QwIT-Development/firka',
		extension: 'https://github.com/QwIT-Development/firka-extension',
		legacy: 'https://github.com/QwIT-Development/app-legacy'
	};

	const staticLinks = {
		chromestore: 'https://chromewebstore.google.com/detail/firxa/emafoaifbfppcccgfmpcoheonhjnpldj',
		firefox: 'https://addons.mozilla.org/hu/firefox/addon/firxa/'
	};

	$: selectedAppLinks = legacy ? legacyAppDownloadLinks : appDownloadLinks;
	$: selectedGithubLink = legacy ? githubLinks.legacy : githubLinks.app;

	const showModal = () => {
		if(legacy) return;
		const modal = document.querySelector('.modal') as HTMLDivElement;
		modal.hidden = !modal.hidden;
		if (!modal.hidden) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}
	}

	$: {
		if (!legacy) {
			document.documentElement.classList.add('bnw-mode');
		} else {
			document.documentElement.classList.remove('bnw-mode');
		}
	}

	onMount(() => {
		checkCache();
		downloadsClient();
	});
</script>

<div class="main" id="anchor-downloads">
	<div class="modal" hidden>
		<div class="row-space-between">
			<h2 class="font_header_h2">Béta figyelmeztetés</h2>
			<button class="modal-close" on:click={showModal} title="Bezárás">✕</button>
		</div>
		<p class="font_body_16px_regular">
			Jelenleg a legacy alkalmazást ajánljuk, ami régebbi,
			de stabilabban működik, és több funkció van benne.
		</p>
	</div>
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
				<div class="row-space-between">
					<h2 class="font_header_h2">Alkalmazás</h2>
					<div class="card-toggle">
						<label class="checkbox-label font_body_16px_regular" 
							on:mouseenter={() => showTooltip = true}
							on:mouseleave={() => showTooltip = false}>
							Régimódi vagyok!
							<input type="checkbox" id="legacy-toggle" bind:checked={legacy} on:change={showModal} />
							{#if showTooltip}
								<div class="tooltip font_body_16px_regular">
									Jelenleg a legacy alkalmazást ajánljuk, ami régebbi, de stabilabban működik, és több funkció van benne.
								</div>
							{/if}
						</label>
					</div>
				</div>
				<p class="font_body_16px_regular" id="app-ver"></p>
			</div>
			<div class="card-section">
				<p class="font_header_14px">Android</p>
				<div class="section-buttons">
					<Buttons label="F-Droid" type="small_primary"
							 href={selectedAppLinks.fdroid}
							 icon="/android.svg" disabled={true} ></Buttons>
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
						href={selectedAppLinks.arm64}
						disabled={!legacy} ></Buttons>
					<Buttons
						id="armeabi"
						label="armeabi.apk"
						type="small_secondary"
						icon="/apk.svg"
						href={selectedAppLinks.armeabi}
						disabled={!legacy} ></Buttons>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px">iOS</p>
				<div class="section-buttons">
					<Buttons
						label="TestFlight"
						type="small_primary"
						icon="/testflight.svg"
						href={selectedAppLinks.testflight} 
						disabled={true} ></Buttons>
				</div>
			</div>
			<div class="card-section">
				<p class="font_header_14px">Forráskód</p>
				<div class="section-buttons">
					<Buttons label="GitHub" href={selectedGithubLink} icon="ri:github-fill"></Buttons>
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
					<Buttons label="GitHub" href={githubLinks.extension} icon="ri:github-fill"></Buttons>
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

	.modal {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--card_card);
		padding: 24px;
		border-radius: 16px;
		width: 30%;
		z-index: 1001;
		box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.3);
	}

	.modal h2 {
		color: var(--text_primary);
		margin: 0;
	}

	.modal p {
		color: var(--text_secondary);
		margin-top: 16px;
		width: 80%;
	}

	.modal button {
		position: relative;
		background: transparent;
		border: none;
		color: var(--text_primary);
		font-size: 20px;
		cursor: pointer;
		transition: color 0.3s;
	}

	.modal button:hover {
		color: var(--accent_readable);
	}

	.modal button::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: var(--accent_readable);
		pointer-events: none;
		opacity: 0;
		transform: translate(-50%, -50%) scale(0);
		transform-origin: center center;
		will-change: transform, opacity;
		transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
	}

	.modal button:hover::after {
		opacity: 0.2;
		transform: translate(-50%, -50%) scale(1);
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		color: var(--text_secondary);
		font-size: 14px;
		font-weight: 600;
		position: relative;
		padding: 4px 8px;
		border-radius: 8px;
	}

	.checkbox-label input[type="checkbox"] {
		width: 20px;
		height: 20px;
		cursor: pointer;
		appearance: none;
		background-color: var(--button_secondaryfill);
		border: 1px solid var(--text_teritary);
		border-radius: 4px;
	}

	input[type="checkbox"]:checked {
		appearance: revert;
		accent-color: var(--accent_readable);
	}

	.checkbox-label:hover {
		color: var(--text_primary);
		background-color: var(--button_secondaryfill);
	}

	.tooltip {
		position: absolute;
		bottom: calc(100% + 8px);
		left: 50%;
		transform: translateX(-50%);
		background: var(--text_primary);
		color: var(--card_card);
		padding: 8px 12px;
		border-radius: 8px;
		font-size: 12px;
		font-weight: 500;
		white-space: nowrap;
		z-index: 1002;
		animation: tooltipFadeIn 0.3s ease-in-out;
	}

	@keyframes tooltipFadeIn {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
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
