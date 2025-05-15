export async function load({ params }) {
    const { path } = params;
    
    try {
        let contentPath;
        
        if (Array.isArray(path)) {
            contentPath = path.join('/');
        } else {
            contentPath = path;
        }

        if (!contentPath.endsWith('.md')) {
        contentPath = contentPath + '.md';
        }

        let post;
        
            try {
                post = await import(/* @vite-ignore */`../content/${contentPath}`);
            } catch (importError) {
                console.error(`Failed to import file at path ${contentPath}:`, importError);
                throw importError;
            }
        
        return {
            content: post.default,
            meta: post.metadata,
            path: contentPath
        };
    } catch (e) {
        console.error(`Error loading Markdown file for path ${path}:`, e);
        return {
            status: 404,
            error: new Error(`Could not find or process the document at path: ${path}`),
            content: null,
            meta: null,
            path: path
        };
    }
}
