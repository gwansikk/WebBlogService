import { Config } from './types/config';

const config: Config = {
  name: '🧩 WebBlogService',
  site: 'https://web-blog-service.vercel.app',
  path: 'posts',
  ext: ['.mdx', '.md'],
  metadata: {
    description: 'Create your own blog more easily!',
  },
  socialLinks: {
    icon: 'github',
    link: 'https://github.com/gwansikk/WebBlogService',
  },
};

export default config;
