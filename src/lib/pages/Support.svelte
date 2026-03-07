<script lang="ts">
	let openFaq: number | null = null;

	const faqs = [
		{
			question: 'Nem tudok bejelentkezni az alkalmazásba.',
			answer:
				'Győződj meg róla, hogy a KRÉTA felhasználóneved és jelszavad helyes, és az iskolád neve pontosan szerepel a listában. Ha a probléma fennáll, próbálj meg kijelentkezni és újra bejelentkezni.'
		},
		{
			question: 'Hiányoznak vagy hibásak a jegyeim.',
			answer:
				'A Firka a KRÉTA rendszerből szinkronizálja az adatokat. Ha hiányos adatokat látsz, ellenőrizd a KRÉTA webes felületen is. Ha ott helyes, próbálj meg frissíteni az alkalmazásban (húzd le az oldalt).'
		},
		{
			question: 'Az alkalmazás összeomlik vagy hibát jelez.',
			answer:
				'Próbáld meg bezárni és újraindítani az alkalmazást. Ha a hiba megmarad, telepítsd újra az alkalmazást. Ha ez sem segít, lépj kapcsolatba velünk az alábbi email-en vagy a Discord szerveren.'
		},
		{
			question: 'Hogyan lehet törölni a fiókomat?',
			answer:
				'A Firka nem tárol fiókadatokat a saját szerverein — közvetlenül a KRÉTA rendszeren keresztül működik. A Firka alkalmazás törlésével minden helyi adat eltávolításra kerül.'
		},
		{
			question: 'Melyik eszközökön érhető el a Firka?',
			answer: 'A Firka jelenleg iOS és Android platformokon érhető el.'
		}
	];

	function toggle(i: number) {
		openFaq = openFaq === i ? null : i;
	}
</script>

<div class="support-page">
	<div class="hero">
		<h1 class="font_web_h2">Segítség & Támogatás</h1>
		<p class="font_body_16px_regular subtitle">
			Kérdésed van? Szívesen segítünk.
		</p>
	</div>

	<div class="cards-grid">
		<a href="mailto:support@firka.app" class="card tiny-shadow" aria-label="Email support">
			<div class="card-icon">
				<span class="ri-mail-line"></span>
			</div>
			<div class="card-content">
				<h2 class="font_header_18px">Email</h2>
				<p class="font_body_14px_regular">support@firka.app</p>
				<span class="card-cta font_body_14px_regular">Üzenetet küldök →</span>
			</div>
		</a>

		<a
			href="https://discord.gg/GGEUTJj5P7"
			target="_blank"
			rel="noopener noreferrer"
			class="card tiny-shadow"
			aria-label="Discord server"
		>
			<div class="card-icon">
				<span class="ri-discord-fill"></span>
			</div>
			<div class="card-content">
				<h2 class="font_header_18px">Discord</h2>
				<p class="font_body_14px_regular">Csatlakozz a közösséghez</p>
				<span class="card-cta font_body_14px_regular">Megnyitom →</span>
			</div>
		</a>

		<a
			href="https://github.com/QwIT-Development"
			target="_blank"
			rel="noopener noreferrer"
			class="card tiny-shadow"
			aria-label="GitHub issues"
		>
			<div class="card-icon">
				<span class="ri-github-fill"></span>
			</div>
			<div class="card-content">
				<h2 class="font_header_18px">GitHub</h2>
				<p class="font_body_14px_regular">Hibát találtál? Jelezd itt</p>
				<span class="card-cta font_body_14px_regular">Issues →</span>
			</div>
		</a>
	</div>

	<div class="faq-section">
		<h2 class="font_web_h3">Gyakori kérdések</h2>
		<div class="faq-list">
			{#each faqs as faq, i}
				<button
					class="faq-item tiny-shadow"
					class:open={openFaq === i}
					on:click={() => toggle(i)}
					aria-expanded={openFaq === i}
				>
					<div class="faq-header">
						<span class="font_header_16px">{faq.question}</span>
						<span class="faq-chevron ri-arrow-down-s-line"></span>
					</div>
					{#if openFaq === i}
						<p class="faq-answer font_body_14px_regular">{faq.answer}</p>
					{/if}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.support-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 72px;
		width: 100%;
		max-width: 800px;
	}

	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		text-align: center;
	}

	.hero h1 {
		color: var(--text_primary);
	}

	.subtitle {
		color: var(--text_secondary);
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		width: 100%;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 24px;
		border-radius: 16px;
		background: var(--card_card);
		text-decoration: none;
		color: var(--text_primary);
		transition: background 0.2s ease, transform 0.2s ease;
	}

	.card:hover {
		background: linear-gradient(0deg, var(--accent_15) 0%, var(--accent_15) 100%), var(--card_card);
		transform: translateY(-2px);
	}

	.card-icon {
		width: 40px;
		height: 40px;
		border-radius: 12px;
		background: var(--accent_15);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--accent_secondary);
		font-size: 20px;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.card-content h2 {
		color: var(--text_primary);
	}

	.card-content p {
		color: var(--text_secondary);
	}

	.card-cta {
		color: var(--accent_readable);
		margin-top: 8px;
	}

	:global(html.dark-mode) .card-cta {
		color: var(--accent_accent);
	}

.faq-section {
		display: flex;
		flex-direction: column;
		gap: 24px;
		width: 100%;
	}

	.faq-section h2 {
		color: var(--text_primary);
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.faq-item {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 20px 24px;
		border-radius: 12px;
		background: var(--card_card);
		border: none;
		cursor: pointer;
		text-align: left;
		gap: 0;
		transition: background 0.2s ease;
	}

	.faq-item:hover {
		background: linear-gradient(0deg, var(--accent_15) 0%, var(--accent_15) 100%), var(--card_card);
	}

	.faq-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		color: var(--text_primary);
	}

	.faq-chevron {
		font-size: 20px;
		color: var(--text_teritary);
		flex-shrink: 0;
		transition: transform 0.2s ease;
	}

	.faq-item.open .faq-chevron {
		transform: rotate(180deg);
	}

	.faq-answer {
		color: var(--text_secondary);
		margin-top: 12px;
		line-height: 1.6;
	}

	@media (max-width: 825px) {
		.cards-grid {
			grid-template-columns: 1fr;
		}

		.support-page {
			gap: 48px;
		}
	}
</style>
