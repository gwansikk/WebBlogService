import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import Container from '../components/Container/Container';
import getPosts from '../lib/get-posts';
import { getRandomIndex } from '../utils/array';

export default async function Home() {
  const posts = await getPosts();
  const banner = posts[getRandomIndex(posts)];

  return (
    <Container>
      {banner && (
        <Banner
          to={banner.title}
          src={banner.image}
          alt={banner.title}
          {...banner}
        >
          <Card.Info className="text-wbs-white" {...banner} />
          <Card.Meta className="text-wbs-white" time={13} {...banner} />
        </Banner>
      )}
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {posts?.map(({ image, title, ...props }) => (
          <Card key={title} to={title}>
            <Card.Image src={image} alt={title} />
            <Card.Info title={title} {...props} />
            <Card.Meta time={13} {...props} />
          </Card>
        ))}
      </div>
    </Container>
  );
}
