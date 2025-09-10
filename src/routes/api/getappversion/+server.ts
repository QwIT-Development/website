import type { RequestHandler } from '@sveltejs/kit';

const appVersionCache = new Map<number, string>();

export const GET: RequestHandler = async () => {
	const jenkinsLastSuccessful =
		'https://build.firka.app/job/firka/job/firka/job/main/lastSuccessfulBuild/api/json';

	const res = await fetch(jenkinsLastSuccessful);
	if (!res.ok) return new Response('Failed to fetch build info', { status: 502 });

	const { number } = (await res.json()) as { number: number };

	if (appVersionCache.has(number)) {
		return new Response(JSON.stringify({ version: appVersionCache.get(number) }), {
			headers: { 'Content-Type': 'application/json' }
		});
	}

	console.log(`${number} miss!`);

	const txtRes = await fetch(
		`https://build.firka.app/job/firka/job/firka/job/main/${number}/consoleText`
	);
	if (!txtRes.ok) return new Response('Failed to fetch console text', { status: 502 });

	const txt = await txtRes.text();
	const appVersion = txt.split('Updated version to: ')[1].split('+')[0];

	appVersionCache.set(number, appVersion);

	return new Response(JSON.stringify({ version: appVersion }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
