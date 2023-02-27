import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
// https://astro.build/config
export default defineConfig({
	site: 'https://blog.geisha2.dev',
	markdown: {
		remarkPlugins: [[remarkToc, { heading: 'índice' }], rehypeAccessibleEmojis],
	},
	integrations: [mdx(), preact()],
});
