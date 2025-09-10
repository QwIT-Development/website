<script lang="ts">
	import '$lib/global.css';
	import { onMount } from 'svelte';

	onMount(() => {});

	// szabadalmaztatott EZ Edit 3 object
	const roadmap = [
		{
			title: 'Már elérhető',
			icon: '/box.svg',
			cardClass: '',
			itemClass: 'done',
			sections: [
				{
					title: 'ALAP',
					items: [
						'Bejelentkezési képernyő',
						'Kezdőlapon tanórákról információ',
						'Jegyek száma és aránya',
						'Órarend',
						'Órarend havi nézet',
						'Órarend beállításai',
					]
				},
				{
					title: "Extrák",
					items: [
						'App ikonok',
					]
				}
			]
		},
		{
			title: 'Hamarosan',
			icon: '/timer.svg',
			cardClass: '',
			itemClass: 'soon',
			sections: [
				{
					title: null,
					items: [
						'Kezdőlap',
						'Órarendben dolgozatok, óra témája, stb.',
						'"Tőbb" menüpont',
						'Mulasztások',
						'Beállítások',
						'Navigációs sáv testreszabása',
						'Személyreszabás',
						'Balkezes mód',
						'Témák',
						'Jegyek mentése'
					]
				}
			]
		},
		{
			title: 'Később',
			icon: '/clock-plus.svg',
			cardClass: 'disabled',
			itemClass: 'later',
			sections: [
				{
					title: null,
					items: [
						'Jegyekhez grafikon',
						'Értesítések',
						'Extrák',
						'Naptár szinkronizálása'
					]
				}
			]
		}
	];

	const mainCard = roadmap[0];
	const sideCards = roadmap.slice(1);
</script>

<main>
	<div class="title">
		<h2 class="font_web_h2">Roadmap</h2>
	</div>
	<div class="content">
		<div class="card tiny_shadow {mainCard.cardClass}">
			<div class="parted">
				<img src={mainCard.icon} class="icon" alt="" />
				<p class="title font_header_16px">{mainCard.title}</p>
			</div>
			{#each mainCard.sections as section}
				<div class="gparted">
					{#if section.title}
						<p class="title2 font_header_14px">{section.title}</p>
					{/if}
					{#each section.items as item}
						<div class="item">
							<div class="checkmark {mainCard.itemClass}"></div>
							<p class="item-name font_body_16px_regular">{item}</p>
						</div>
					{/each}
				</div>
			{/each}
		</div>
		<div class="cards">
			{#each sideCards as card}
				<div class="card tiny_shadow {card.cardClass}">
					<div class="parted">
						<img src={card.icon} class="icon" alt="" />
						<p class="title font_header_16px">{card.title}</p>
					</div>
					{#each card.sections as section}
						<div class="gparted">
							{#if section.title}
								<p class="title2 font_header_14px">{section.title}</p>
							{/if}
							{#each section.items as item}
								<div class="item">
									<div class="checkmark {card.itemClass}"></div>
									<p class="item-name font_body_16px_regular">{item}</p>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	div.parted {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	div.gparted {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
		align-self: stretch;
	}

	div.cards {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 20px;
		align-self: stretch;
	}

	div.item {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.checkmark {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		-webkit-mask-size: contain;
		mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
	}

	.checkmark.done {
		background-color: var(--accent_accent);
		-webkit-mask-image: url(/checkmark_ok.svg);
		mask-image: url(/checkmark_ok.svg);
	}

	.checkmark.soon,
	.checkmark.later {
		background-color: var(--button_secondaryfill);
		-webkit-mask-image: url(/checkmark_todo.svg);
		mask-image: url(/checkmark_todo.svg);
	}

	p.item-name {
		color: var(--text_secondary);
	}

	p.title {
		color: var(--text_primary);
	}
	p.title2 {
		color: var(--text_teritary);
	}

	.icon {
		width: 20px;
		height: 20px;
		aspect-ratio: 1/1;
	}

	.title h2 {
		color: var(--text_primary);
	}

	main {
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 32px;
	}

	div.content {
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
		align-self: stretch;
		background: var(--card_card);
		flex-shrink: 0;
	}

	div.card.disabled {
		background: var(--Card-Translucent);
	}

	div.card.disabled * {
		opacity: 0.5;
	}

	@media (max-width: 1540px) {
		main {
			display: flex;
			width: 100%;
			flex-direction: column;
			align-items: center;
			gap: 40px;
		}

		.content {
			display: flex;
			overflow-x: auto;
			flex-direction: column;
			align-items: center;
			-webkit-overflow-scrolling: touch;
			scrollbar-width: none;
			width: 336px;
		}

		.content::-webkit-scrollbar {
			display: none;
		}

		div.card {
			width: 336px;
		}
	}
</style>
