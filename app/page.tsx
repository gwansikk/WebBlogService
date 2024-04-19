import getPosts from '@lib/get-posts';

import Banner from '@components/Banner/Banner';
import Card from '@components/Card/Card';
import PageLayout from '@components/PageLayout/PageLayout';

export default async function MainPage() {
  const posts = await getPosts();
  const banner = posts[0];

  return (
    <PageLayout>
      {banner && (
        <Banner
          to={banner.title}
          src={banner.image}
          alt={banner.title}
          {...banner}
        >
          <Card.Info className="text-wbs-white" {...banner} />
          <Card.Meta className="text-wbs-white" time={10} {...banner} />
        </Banner>
      )}
      <div className="grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {posts?.slice(1).map(({ image, title, ...props }) => (
          <Card key={title} to={title}>
            <Card.Image src={image} alt={title} />
            <Card.Info title={title} {...props} />
            <Card.Meta time={13} {...props} />
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
