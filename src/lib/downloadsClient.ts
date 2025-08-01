/*
        ez egy temporary megoldas, apirol kene fetchelni, igen ez neked szol coffeelink
*/

const apiLink = 'https://massthrakz.kiralyoil.top/api/web/version';

export async function downloadsClient() {
	const response = await fetch(apiLink);
	const data = await response.json();
	const extVerElement = document.getElementById('ext-ver');
	// kurvara kell a null check de tenyleg mar
	if (extVerElement) {
		extVerElement.innerText = data.extensionVersion;
	}

	// ipa
	document.getElementById('ipa')?.setAttribute('href', data.ipaURL);
	// android
	document.getElementById('arm64')?.setAttribute('href', data.arm64URL);
	// android armeabi
	document.getElementById('armeabi')?.setAttribute('href', data.armeabiURL);

	const appVerElement = document.getElementById('app-ver');
	if (appVerElement) {
		appVerElement.innerText = data.appVersion;
	}
}
