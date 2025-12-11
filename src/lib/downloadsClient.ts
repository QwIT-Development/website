import SvelteMarkdown from '@humanspeak/svelte-markdown';
let latestAppVersion;
let latestExtVersion;
let latestLegacyVersion;

export function checkCache() {
	const extVerElement = document.getElementById('ext-ver') as HTMLElement;
	const appVerElement = document.getElementById('app-ver') as HTMLElement;
	const toggleSwitch = document.getElementById('legacy-toggle') as HTMLInputElement;
	toggleSwitch.addEventListener('change', downloadsClient);

	const appVersionCache = localStorage.getItem('latestAppVersion');
	const extVersionCache = localStorage.getItem('latestExtVersion');
	const legacyVersionCache = localStorage.getItem('latestLegacyVersion');

	if (toggleSwitch.checked) {
		if (legacyVersionCache) appVerElement.innerText = legacyVersionCache;
	} else {
		if (appVersionCache) appVerElement.innerText = appVersionCache;
	}
	if (extVersionCache) extVerElement.innerText = extVersionCache;
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
	const legacySwitch = document.getElementById('legacy-toggle') as HTMLInputElement;

	let resp = await fetch('/api/getappversion', {
		method: 'GET'
	});
	const app = await resp.json();

	resp = await fetch('/api/getlegacyversion', {
		method: 'GET'
	});
	const legacy = await resp.json();

	resp = await fetch('/api/getextversion', {
		method: 'GET'
	});
	const ext = await resp.json();

	latestAppVersion = app.version;
	latestExtVersion = ext.version;
	latestLegacyVersion = legacy.version;

	localStorage.setItem('latestAppVersion', latestAppVersion);
	localStorage.setItem('latestExtVersion', latestExtVersion);
	localStorage.setItem('latestLegacyVersion', latestLegacyVersion);

	if (extVerElement) {
		extVerElement.innerText = latestExtVersion;
	}

	if (appVerElement) {
		if (legacySwitch.checked) {
			appVerElement.innerText = latestLegacyVersion;
		} else {
			appVerElement.innerText = latestAppVersion;
		}
	}
}
