import { Config } from './types/config';

/**
 * 블로그에 대한 전반적인 설정을 정의합니다.
 */
const config: Config = {
  icon: '🧩',
  name: 'WebBlogService',
  baseURL: 'https://web-blog-service.vercel.app',
  email: 'gwansik.kim@gwansik.dev',
  path: 'posts',
  ext: ['.mdx', '.md'],
  metadata: {
    description: 'Create your own blog more easily!',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/gwansikk/WebBlogService',
    },
  ],
  theme: {
    colors: {
      primary: '#ac32f0',
    },
    screens: {
      maxWidth: 820,
    },
  },
};

export default config;
