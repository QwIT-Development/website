/*
        ez egy temporary megoldas, apirol kene fetchelni, igen ez neked szol coffeelink
*/

const apiLinks = {
        extension: 'https://api.github.com/repos/qwit-development/firka-extension/releases/latest',
        app: 'https://api.github.com/repos/qwit-development/app-legacy/releases/latest',
}

export async function downloadsClient() {
        const response = await fetch(apiLinks.extension);
        const data = await response.json();
        const currentVersion = data.tag_name;
        let firefoxDownload = data.assets.find((asset: any) => asset.name.includes('firefox.zip'));
        firefoxDownload = firefoxDownload.browser_download_url;

        document.querySelector('[href="firefox"]')?.setAttribute('href', firefoxDownload);
        const extVerElement = document.getElementById('ext-ver');
        // kurvara kell a null check de tenyleg mar
        if (extVerElement) {
            extVerElement.innerText = currentVersion;
        }

        const appResponse = await fetch(apiLinks.app);
        const appData = await appResponse.json();
        const appCurrentVersion = appData.tag_name;

        // ipa
        let appDownload = appData.assets.find((asset: any) => asset.name.includes('firkaapp.ipa'));
        appDownload = appDownload.browser_download_url;
        document.querySelector('[href="ipadirect"]')?.setAttribute('href', appDownload);
        // android
        appDownload = appData.assets.find((asset: any) => asset.name.includes('app-arm64-v8a-release.apk'));
        appDownload = appDownload.browser_download_url;
        document.querySelector('[href="aarm64"]')?.setAttribute('href', appDownload);
        // android armeabi
        appDownload = appData.assets.find((asset: any) => asset.name.includes('app-armeabi-v7a-release.apk'));
        appDownload = appDownload.browser_download_url;
        document.querySelector('[href="aarmeabi"]')?.setAttribute('href', appDownload);

        const appVerElement = document.getElementById('app-ver');
        if (appVerElement) {
            appVerElement.innerText = appCurrentVersion;
        }
}