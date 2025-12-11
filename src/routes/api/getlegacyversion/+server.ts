import type { RequestHandler } from '@sveltejs/kit';

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
type CacheEntry = { value: string; expiresAt: number };
let legacyCache: CacheEntry | undefined;

export const GET: RequestHandler = async () => {
	const now = Date.now();

	if (legacyCache && legacyCache.expiresAt > now) {
		return new Response(JSON.stringify({ version: legacyCache.value }), {
			headers: { 'Content-Type': 'application/json' }
		});
	}

	console.log(`legacy: miss!`);

	const legacyURL = 'https://api.github.com/repos/QwIT-Development/app-legacy/releases';
	const req = await fetch(legacyURL);
	if (!req.ok) return new Response('Failed to fetch releases', { status: 502 });

	const resp = (await req.json()) as Array<{ name?: string }>;
	const legacyVersion = resp?.[0]?.name ?? 'unknown';

	legacyCache = { value: legacyVersion, expiresAt: now + CACHE_TTL_MS };

	return new Response(JSON.stringify({ version: legacyVersion }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
