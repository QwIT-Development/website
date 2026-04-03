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
						'Hamarosan'
					]
				},
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
						'Hamarosan'
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
						'Hamarosan'
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
		<div class="card {mainCard.cardClass}">
			<div class="parted">
				<div class="icon-wrap icon-done">
					<img src={mainCard.icon} class="icon" alt="" />
				</div>
				<p class="card-title font_header_16px">{mainCard.title}</p>
			</div>
			{#each mainCard.sections as section}
				<div class="gparted">
					{#if section.title}
						<p class="section-label font_header_12px">{section.title}</p>
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
			{#each sideCards as card, i}
				<div class="card {card.cardClass}">
					<div class="parted">
						<div class="icon-wrap {i === 0 ? 'icon-soon' : 'icon-later'}">
							<img src={card.icon} class="icon" alt="" />
						</div>
						<p class="card-title font_header_16px">{card.title}</p>
					</div>
					{#each card.sections as section}
						<div class="gparted">
							{#if section.title}
								<p class="section-label font_header_12px">{section.title}</p>
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
	main {
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 32px;
	}

	.title h2 {
		color: var(--text_primary);
	}

	.content {
		display: flex;
		align-items: stretch;
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
		flex-shrink: 0;
		align-self: stretch;
		transition: box-shadow 0.2s ease;
	}

	div.card.disabled {
		background: var(--md-surface-container-low, var(--card_translucent));
		box-shadow: none;
	}

	div.card.disabled * {
		opacity: 0.45;
	}

	div.cards {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 20px;
		align-self: stretch;
	}

	/* Icon badge */
	.icon-wrap {
		width: 36px;
		height: 36px;
		border-radius: var(--shape-md, 12px);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.icon-done {
		background: var(--md-primary-container, var(--accent_15));
	}

	.icon-soon {
		background: var(--md-secondary-container, #CEE9DE);
	}

	.icon-later {
		background: var(--md-surface-container-highest, var(--button_secondaryfill));
	}

	.icon {
		width: 18px;
		height: 18px;
	}

	div.parted {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	div.gparted {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
		align-self: stretch;
	}

	div.item {
		display: flex;
		align-items: center;
		gap: 10px;
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
		background-color: var(--md-primary, var(--accent_accent));
		-webkit-mask-image: url(/checkmark_ok.svg);
		mask-image: url(/checkmark_ok.svg);
	}

	.checkmark.soon,
	.checkmark.later {
		background-color: var(--md-outline, var(--text_teritary));
		-webkit-mask-image: url(/checkmark_todo.svg);
		mask-image: url(/checkmark_todo.svg);
	}

	p.item-name {
		color: var(--text_secondary);
	}

	p.card-title {
		color: var(--text_primary);
	}

	p.section-label {
		color: var(--text_teritary);
		text-transform: uppercase;
		letter-spacing: 0.5px;
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
			width: 360px;
			align-self: center;
		}

		.content::-webkit-scrollbar {
			display: none;
		}

		div.card {
			width: 360px;
		}
	}
</style>
