export const GET = async () => {
	const jenkinsLastSuccessful =
		'https://build.firka.app/job/firka/job/firka/job/main/lastSuccessfulBuild/api/json';

	const appVersionCache = new Map<number, string>();
	const req = await fetch(jenkinsLastSuccessful);
	const resp = await req.json();

	const { number } = resp;

	if (appVersionCache.has(number)) return appVersionCache.get(number) as string;

	const txtReq = await fetch(
		`https://build.firka.app/job/firka/job/firka/job/main/${number}/consoleText`
	);
	const txtResp = await txtReq.text();

	const appVersion = txtResp.split('Updated version to: ')[1].split('+')[0];
	appVersionCache.set(number, appVersion);

	return new Response(JSON.stringify({ version: appVersion }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
