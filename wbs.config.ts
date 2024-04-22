import { Config } from './types/config';

/**
 * 블로그에 대한 전반적인 설정을 정의합니다.
 * 자세한 설정 방법은 공식 문서를 참고 바랍니다.
 * https://github.com/gwansikk/WebBlogService
 */
const config: Config = {
  icon: '🧩',
  name: 'WebBlogService',
  baseURL: 'https://web-blog-service.vercel.app',
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
    maxWidth: 820,
  },
};

export default config;
