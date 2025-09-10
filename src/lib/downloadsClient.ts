let latestAppVersion;
let latestExtVersion;

export function checkCache() {
	const extVerElement = document.getElementById('ext-ver') as HTMLElement;
	const appVerElement = document.getElementById('app-ver') as HTMLElement;

	const appVersionCache = localStorage.getItem('latestAppVersion');
	const extVersionCache = localStorage.getItem('latestExtVersion');

	if (appVersionCache) appVerElement.innerText = appVersionCache;
	if (extVersionCache) extVerElement.innerText = extVersionCache;
}

export async function downloadsClient() {
	const extVerElement = document.getElementById('ext-ver') as HTMLElement;
	const appVerElement = document.getElementById('app-ver') as HTMLElement;

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

	localStorage.setItem('latestAppVersion', latestAppVersion);
	localStorage.setItem('latestExtVersion', latestExtVersion);

	if (extVerElement) {
		extVerElement.innerText = latestExtVersion;
	}

	if (appVerElement) {
		appVerElement.innerText = latestAppVersion;
	}
}
