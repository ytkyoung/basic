import styled from 'styled-components';

const Card = (props) => {
  console.log(props);
  console.log(props.brand.title);
  return (
    <div className="card">
      <CardItem>
        <BrandLogo>
          <img src={props.brand.icon} alt={props.brand.title} />
        </BrandLogo>
        <div className="card-line"></div>
        <div className="card-title">
          <h3>{props.brand.title}</h3>
        </div>
        <div className="card-line2"></div>
        <div className="card-text">
          <p>{props.brand.text}</p>
        </div>
      </CardItem>
    </div>
  );
};

const CardItem = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .card-line {
    background-color: var(--color-font-black);
    height: 0.1rem;
    width: 10%;
  }
  .card-line2 {
    background-color: var(--color-font-black);
    height: 0.1rem;
    width: 100%;
  }
  .card-title {
    h3 {
      padding: 10rem 0rem 1rem 0rem;
    }
  }
`;

const BrandLogo = styled.div`
  width: 40%;
  padding-bottom: 3rem;
  img {
    width: 100%;
  }
`;

export default Card;
