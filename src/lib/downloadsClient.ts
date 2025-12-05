import SvelteMarkdown from '@humanspeak/svelte-markdown';
let latestAppVersion;
let latestExtVersion;

export function checkCache() {
	const extVerElement = document.getElementById('ext-ver') as HTMLElement;
	const appVerElement = document.getElementById('app-ver') as HTMLElement;
	const legacyVerElement = document.getElementById('legacy-ver') as HTMLElement;

	const appVersionCache = localStorage.getItem('latestAppVersion');
	const extVersionCache = localStorage.getItem('latestExtVersion');
	const legacyVersionCache = localStorage.getItem('latestLegacyVersion');

	if (appVersionCache) appVerElement.innerText = appVersionCache;
	if (extVersionCache) extVerElement.innerText = extVersionCache;
	if (legacyVersionCache) legacyVerElement.innerText = legacyVersionCache;
}

export async function privacyPolicyClient(): Promise<string> {
	const browserLocale = navigator.language;
	const isHungarian = browserLocale?.toLowerCase().startsWith('hu');
	const fileLink = isHungarian ? 'README.md' : 'README_en.md';

	const resp = await fetch(`https://raw.githubusercontent.com/QwIT-Development/privacy-policy/refs/heads/master/${fileLink}`);
	const policy = await resp.text();

	return policy;
}

export async function downloadsClient() {
	const extVerElement = document.getElementById('ext-ver') as HTMLElement;
	const appVerElement = document.getElementById('app-ver') as HTMLElement;
	const legacyVerElement = document.getElementById('legacy-ver') as HTMLElement;

	let resp = await fetch('/api/getappversion', {
		method: 'GET'
	});
	const app = await resp.json();

	resp = await fetch('/api/getextversion', {
		method: 'GET'
	});
	const ext = await resp.json();

	latestAppVersion = app.version;
	latestExtVersion = ext.version;
	const latestLegacyVersion = 'v5.1.6 fix';

	localStorage.setItem('latestAppVersion', latestAppVersion);
	localStorage.setItem('latestExtVersion', latestExtVersion);
	localStorage.setItem('latestLegacyVersion', latestLegacyVersion);

	if (extVerElement) {
		extVerElement.innerText = latestExtVersion;
	}

	if (appVerElement) {
		appVerElement.innerText = latestAppVersion;
	}

	if (legacyVerElement) {
		legacyVerElement.innerText = latestLegacyVersion;
	}
}
