<svelte:head>
	<title>Firka - Privacy Policy</title>
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import HuPolicy from './hu.svelte';

	let isHungarian = false;

	onMount(() => {
		const lang = navigator.language;
		if (lang?.toLowerCase().includes('hu')) {
			isHungarian = true;
		}
	});
</script>

<main style={isHungarian ? 'display: none;' : ''}>
	<div class="title">
		<h2 class="font_web_h2">Privacy Policy</h2>
	</div>
	<ul>
		<li class="font_body_16px_regular">
			<b>Firka</b> (hereinafter: "application") is a mobile, desktop, and web client application that
			allows you to download and display your data from the e-Kréta system in a user-friendly way. Your
			academic data is transmitted only directly between the application and the Kréta servers over an
			encrypted connection.
		</li>
		<li class="font_body_16px_regular">
			The developers and/or operators of Firka, as well as the application itself, do not copy,
			store, or forward your academic and personal data to third parties for any purpose or under
			any circumstances. This data is managed by Educational Development Informatikai Zrt. You can
			find their privacy policy here:
			<a href="https://tudasbazis.ekreta.hu/pages/viewpage.action?pageId=4065038"
				>e-Kréta Privacy Policy</a
			>
			<ul>
				<li class="font_body_16px_regular">
					To delete or modify this data, contact your homeroom teacher or your school's system
					administrator.
				</li>
			</ul>
		</li>
		<li class="font_body_16px_regular">
			The application collects anonymous usage statistics to determine the number of users and
			installations, as well as their device platforms. You can disable this in the settings. We ask
			that you keep this feature enabled if possible, so that we have more accurate information
			about the platform distribution of our users.
		</li>
		<li class="font_body_16px_regular">
			When the application encounters an error, you have the option to send an error report. This
			report does not contain personal and/or academic data, but it does provide detailed
			information about the error, its cause, and your device. It is your responsibility to review
			the data to be sent on the screen that appears before sending. Error reports are stored in a
			private Discord room, accessible only to the app's developers.
		</li>
		<li class="font_body_16px_regular">
			Each time the application is launched (on the following platforms: Android, Linux, Windows),
			it checks for a new version using the Firka API and the Github API, and upon request,
			downloads and installs the update from there.
		</li>
		<li class="font_body_16px_regular">
			If you have any questions regarding your data (viewing, deleting, modifying, data
			portability), contact us at the email address <a href="mailto:social@firka.app"
				>social@firka.app</a
			>, or on our Discord server!
		</li>
		<li class="font_body_16px_regular">
			By using the client application on any device and platform, you acknowledge and accept this
			privacy policy. The Firka team reserves the right to modify this policy and is not obligated
			to notify its users of any changes!
		</li>
	</ul>
</main>

{#if isHungarian}
	<HuPolicy />
{/if}

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
