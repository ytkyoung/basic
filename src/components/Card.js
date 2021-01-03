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
    background-color: #00ff15;
    height: 0.3rem;
    width: 5%;
  }
`;

const BrandLogo = styled.div`
  background-color: blue;
  width: 20%;
  img {
    width: 100%;
  }
`;

export default Card;
