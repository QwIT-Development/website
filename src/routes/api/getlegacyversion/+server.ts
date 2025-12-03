import type { RequestHandler } from '@sveltejs/kit';

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
type CacheEntry = { value: string; expiresAt: number };
let extensionCache: CacheEntry | undefined;

export const GET: RequestHandler = async () => {
	const now = Date.now();

	if (extensionCache && extensionCache.expiresAt > now) {
		return new Response(JSON.stringify({ version: extensionCache.value }), {
			headers: { 'Content-Type': 'application/json' }
		});
	}

	console.log(`ext: miss!`);

	const extensionURL = 'https://api.github.com/repos/QwIT-Development/app-legacy/releases';
	const req = await fetch(extensionURL);
	if (!req.ok) return new Response('Failed to fetch releases', { status: 502 });

	const resp = (await req.json()) as Array<{ name?: string }>;
	const extVersion = resp?.[0]?.name ?? 'unknown';

	extensionCache = { value: extVersion, expiresAt: now + CACHE_TTL_MS };

	return new Response(JSON.stringify({ version: extVersion }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
