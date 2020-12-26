import hero from '../img/Hero.mp4';

const HomeSection = () => {
  return (
    <div>
      <div className="home-intro">
        <div className="home-title-teil1">
          <div className="hide">
            <h2>
              What's <span>next</span>
            </h2>
          </div>
          <div className="hide">
            <h2> starts</h2>
          </div>
        </div>
        <div className="home-title-teil1">
          <div className="hide">
            <h2>HERE</h2>
          </div>
        </div>
      </div>
      <div className="home-hero-video">
        <video className="videoTag" autoPlay loop muted>
          <source src={hero} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HomeSection;
