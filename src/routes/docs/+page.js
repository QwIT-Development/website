export async function load() {
    try {
        // @ts-ignore
        const post = await import('./content/SUMMARY.md');
        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        console.error('Error loading SUMMARY.md:', e);
        return {
            status: 404,
            error: new Error('Could not find or process SUMMARY.md'),
            content: null,
            meta: null
        };
    }
}