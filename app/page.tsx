import getPosts from '@lib/get-posts';

import Banner from '@components/Banner/Banner';
import Card from '@components/Card/Card';
import PageLayout from '@components/PageLayout/PageLayout';

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
          time={10}
          {...banner}
        />
      </Banner>
      {posts?.slice(1).map(({ thumbnail, title, ...props }) => (
        <Card key={title} to={title}>
          <Card.Image src={thumbnail} alt={title} />
          <Card.Info title={title} {...props} />
          <Card.Meta time={13} {...props} />
        </Card>
      ))}
    </PageLayout>
  );
}
