export const GET = async () => {
	const extenstionURL = 'https://api.github.com/repos/QwIT-Development/firka-extension/releases';

	const req = await fetch(extenstionURL);
	const resp = await req.json();
	const extVersion = resp[0].name;

	return new Response(JSON.stringify({ version: extVersion }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
