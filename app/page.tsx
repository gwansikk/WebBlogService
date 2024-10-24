import getPosts from '@lib/get-posts';

import { readTime } from '@utils/number';

import Banner from '@components/Banner';
import Card from '@components/Card';
import PageLayout from '@components/PageLayout';

export default async function MainPage() {
  const posts = await getPosts();
  const banner = posts[0];

  return (
    <PageLayout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Banner
        to={banner.title}
        src={banner.thumbnail}
        alt={banner.title}
        className="sm:col-span-2 lg:col-span-3"
        {...banner}
      >
        <Card.Info className="text-wbs-white" {...banner} />
        <Card.Meta
          className="justify-start text-wbs-white"
          time={Math.floor(readTime(banner.body))}
          {...banner}
        />
      </Banner>
      {posts?.slice(1).map(({ thumbnail, title, body, ...props }) => (
        <Card key={title} to={title}>
          <Card.Image src={thumbnail} alt={title} />
          <Card.Info title={title} {...props} />
          <Card.Meta time={readTime(body)} {...props} />
        </Card>
      ))}
    </PageLayout>
  );
}
