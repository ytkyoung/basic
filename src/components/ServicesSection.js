import branding from '../img/branding-img.svg';

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          BASIC® is a <span>branding</span> and <span>digital design</span>
          agency building products, services, and ecommerce experiences that
          turn cultural values into company value.
        </h2>
        <button>SEE THE WORK</button>
      </div>
      <div className="branding">
        <img src={branding} alt="branding basic" />
      </div>
    </div>
  );
};

export default ServicesSection;
