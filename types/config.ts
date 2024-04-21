type Ext = '.mdx' | '.md';
type SocialIcon = 'github' | 'facebook' | 'twitter' | 'instagram' | 'linkedin';

export type Config = {
  icon: string; // 블로그 아이콘
  name: string; // 블로그 이름
  baseURL: string; // 블로그 URL
  path: string; // 게시글 경로
  ext: Ext[]; // 게시글 확장자
  metadata: {
    description: string;
  };
  socialLinks?: [
    {
      icon: SocialIcon;
      link: string;
    },
  ];
  theme: {
    // 테마 설정
    maxWidth: number; // 콘텐츠 최대 너비
  };
};
