<script lang="ts">
    import Buttons from '$lib/components/Buttons.svelte';
    import { navLinks } from '$lib/components/Navbar';

    const discordInvite = navLinks.find(link => link.name === 'Discord')?.url || '#';
</script>

<main>
    <div class="title">
        <h2 class="font_web_h2">Támogatóink</h2>
    </div>
    <div class="cards">
        <div class="card tiny_shadow">
            <div class="card-header">
                <h2 class="font_web_h3">TokyoHost</h2>
                <p class="font_body_16px_regular">Szerverek biztosítása és üzemeltetése</p>
            </div>
            <Buttons label="Weboldal" type="small_primary"
                href="https://tokyohost.eu/"
                icon="/tokyohost.svg" ></Buttons>
        </div>
        <div class="card tiny_shadow empty">
            <div class="card-header">
                <h2 class="font_web_h3">Ez a rész üres...</h2>
                <p class="font_body_16px_regular">Szeretnél hozzájárulni a Firka fejlesztéséhez?</p>
            </div>
            <Buttons label="Kapcsolatfelvétel" type="small_secondary"
                href={discordInvite} icon="ri:discord-fill"></Buttons>
        </div>
    </div>
</main>

<style>
    main {
        gap: 40px;
        display: flex;
        flex-direction: column;
    }

    .title {
        color: var(--text_primary);
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
    }

	div.card {
		display: flex;
		padding: 20px;
        width: 100%;
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

	@media (max-width: 1540px) {
        main {
            align-items: center;
        }

        .title {
            text-align: center;
        }

        .cards {
            width: 90%;
        }
    }
</style>