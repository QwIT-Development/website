let latestAppVersion;
let latestExtVersion;

let arm64URL = '';
let armeabiURL = '';

export async function downloadsClient() {
	const extVerElement = document.getElementById('ext-ver');

	const resappver = await fetch('/api/getappversion', {
		method: 'GET'
	});
	const appdata = await resappver.json();
	latestAppVersion = appdata.version;

	const resextver = await fetch('/api/getextversion', {
		method: 'GET'
	});
	const extdata = await resextver.json();
	latestAppVersion = appdata.version;
	latestExtVersion = extdata.version;

	document.getElementById('arm64')?.setAttribute('href', arm64URL);
	document.getElementById('armeabi')?.setAttribute('href', armeabiURL);

	const appVerElement = document.getElementById('app-ver');

	if (extVerElement) {
		extVerElement.innerText = latestExtVersion;
	}

	if (appVerElement) {
		appVerElement.innerText = latestAppVersion;
	}
}
