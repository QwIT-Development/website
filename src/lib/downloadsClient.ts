let latestAppVersion;
let latestExtVersion;

export async function downloadsClient() {
	const extVerElement = document.getElementById('ext-ver');

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

	const appVerElement = document.getElementById('app-ver');

	if (extVerElement) {
		extVerElement.innerText = latestExtVersion;
	}

	if (appVerElement) {
		appVerElement.innerText = latestAppVersion;
	}
}
