import data from '../data/brands.json';
import Card from '../components/Card';

console.log(data);

const FeaturedEngagements = () => {
  return (
    <section>
      <div className="featured-engagements">
        <div className="description">
          <h2>
            FEATURED <span>ENGAGEMENTS</span>
          </h2>
        </div>
        <div className="brands-cards">
          <div className="show-container">
            {data.map((brand, index) => (
              <Card key={index} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEngagements;
