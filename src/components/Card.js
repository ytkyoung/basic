const Card = (props) => {
  console.log(props);
  console.log(props.brand.title);
  return (
    <div className="card">
      <div className="brand-logo">
        <img src={props.brand.icon} alt={props.brand.title} />
      </div>
      <hr />
      <div className="card-title">
        <h3>{props.brand.title}</h3>
      </div>
      <div className="card-text">
        <p>{props.brand.text}</p>
      </div>
    </div>
  );
};

export default Card;
