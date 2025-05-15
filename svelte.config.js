import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { visit } from 'unist-util-visit';

const addClass = (node, className) => {
  if (!node.properties) {
    node.properties = {};
  }
  if (!node.properties.className) {
    node.properties.className = [];
  }
  if (!Array.isArray(node.properties.className)) {
    node.properties.className = [node.properties.className];
  }
  node.properties.className.push(className);
};

const rehypeTags = () => {
  const tagClasses = {
    'p': 'font_body_16px_regular',
    'li': 'font_body_16px_regular',
    'h1': 'font_header_h1',
    'h2': 'font_header_h2',
    'h3, h4, h5, h6': 'font_header_18px'
  };

  return (tree) => {
    Object.entries(tagClasses).forEach(([tags, className]) => {
      tags.split(', ').forEach(tag => {
        visit(tree, { tagName: tag.trim() }, (node) => {
          addClass(node, className);
        });
      });
    });
  };
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeTags]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},
	extensions: ['.svelte', '.md']
};

export default config;
