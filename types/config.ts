export type Ext = '.mdx' | '.md';

export type Config = {
  name: string; // 서비스 이름
  site: string; // 배포 URL
  path: string; // 게시글 경로
  ext: Ext[]; // 게시글 확장자
  metadata: {
    description: string;
  };
  socialLinks?: {
    icon: 'github';
    link: string;
  };
};
