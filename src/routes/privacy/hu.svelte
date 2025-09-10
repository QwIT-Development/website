<script>
</script>

<svelte:head>
	<title>Firka - Adatkezelési Tájékoztató</title>
</svelte:head>

<main>
	<div class="title">
		<h2 class="font_web_h2">Adatkezelési Tájékoztató</h2>
	</div>
	<ul>
		<li class="font_body_16px_regular">
			A <b>Firka</b> (továbbiakban: "alkalmazás") egy mobilos, asztali és webes kliensalkalmazás, segítségével
			az e-Kréta rendszeréből letöltheted és felhasználóbarát módon megjelenítheted az adataidat. Tanulmányi
			adataid csak közvetlenül az alkalmazás és a Kréta-szerverek között közlekednek, titkosított kapcsolaton
			keresztül.
		</li>
		<li class="font_body_16px_regular">
			A Firka fejlesztői és/vagy üzemeltetői, valamint az alkalmazás a tanulmányi és személyes
			adataidat semmilyen célból és semmilyen körülmények között nem másolják, nem tárolják és
			harmadik félnek nem továbbítják. Ezeket így az Educational Development Informatikai Zrt.
			kezeli, az Ő adatkezeléssel kapcsolatos tájékoztatójukat itt találod:
			<a href="https://tudasbazis.ekreta.hu/pages/viewpage.action?pageId=4065038"
				>e-Kréta Adatkezelési Tájékoztató</a
			>
			<ul>
				<li class="font_body_16px_regular">
					Azok törlésével vagy módosítával kapcsolatban keresd az osztályfőnöködet vagy az iskolád
					rendszergazdáját.
				</li>
			</ul>
		</li>
		<li class="font_body_16px_regular">
			Az alkalmazás névtelen használati statisztikákat gyűjt, ezek alapján tudjuk meghatározni a
			felhasználók és a telepítések számát, valamint az eszközük platformját. Ezt a beállításokban
			kikapcsolhatod. Kérünk, hogy ha csak teheted, hagyd ezt a funkciót bekapcsolva, hogy pontosabb
			információnk legyen a felhasználóink platform-megoszlásáról.
		</li>
		<li class="font_body_16px_regular">
			Amikor az alkalmazás hibába ütközik, lehetőség van hibajelentés küldésére. Ez személyes-
			és/vagy tanulmányi adatokat nem tartalmaz, viszont részletes információval szolgál a hibáról,
			annak okáról és eszközödről. A küldés előtt megjelenő képernyőn a te felelősséged átnézni a
			továbbításra kerülő adatsort. A hibajelentéseket egy privát Discord szobában tároljuk, ezekhez
			csak az app fejlesztői férnek hozzá.
		</li>
		<li class="font_body_16px_regular">
			Az alkalmazás (az alábbi platformokon: Android, Linux, Windows) minden egyes indításakor a
			Firka API, valamint a Github API segítségével ellenőrzi, hogy elérhető-e új verzió, és kérésre
			innen letölti és telepíti a frissítést.
		</li>
		<li class="font_body_16px_regular">
			Amennyiben az adataiddal kapcsolatban bármilyen kérdésed van (megtekintés, törlés, módosítás,
			adathordozás), keress minket a <a href="mailto:social@firka.app">social@firka.app</a> e-mail címen,
			vagy Discord szerverünkön!
		</li>
		<li class="font_body_16px_regular">
			A kliensalkalmazás bármely eszközön és platformon történő használatával tudomásul vetted és
			elfogadod a jelen adatkezelési tájékoztatót. A Firka csapata fenntartja a jogot a tájékoztató
			módosítására és a módosításokról nem köteles értesíteni a felhasználóit!
		</li>
	</ul>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 48px;
		width: 820px;
	}
	.title h2 {
		color: var(--text_primary);
	}
	li {
		color: var(--text_secondary);
	}
	a {
		color: var(--accent_accent);
	}
	ul {
		gap: 15px;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 1440px) {
		main {
			display: flex;
			width: 45%;
			flex-direction: column;
			align-items: center;
			gap: 40px;
		}
	}
	@media (max-width: 825px) {
		main {
			width: 100%;
		}
	}
</style>
