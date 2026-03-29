import type { RequestHandler } from '@sveltejs/kit';

let cache: { version: string; fetchedAt: number } | null = null;
const CACHE_TTL = 10 * 60 * 1000;

export const GET: RequestHandler = async () => {
	try {
		if (cache && Date.now() - cache.fetchedAt < CACHE_TTL) {
			return new Response(JSON.stringify({ version: cache.version }), {
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const res = await fetch('https://api.github.com/repos/Zan1456/folio/releases', {
			headers: { 'Accept': 'application/vnd.github+json' }
		});
		if (!res.ok) {
			return new Response(JSON.stringify({ version: 'unknown' }), {
				status: 502,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const releases = await res.json() as { tag_name: string }[];
		const version = releases[0]?.tag_name ?? 'unknown';

		cache = { version, fetchedAt: Date.now() };

		return new Response(JSON.stringify({ version }), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error('getappversion error:', err);
		return new Response(JSON.stringify({ version: 'unknown' }), {
			status: 502,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
