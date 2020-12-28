import FeaturedNewsItem from '../components/FeaturedNewsItem';
import data from '../data/fnews.json';

const FeaturedNews = () => {
  return (
    <section className="featured-news">
      <div className="news-box">
        {data.map((news, index) => (
          <FeaturedNewsItem key={index} news={news} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;
