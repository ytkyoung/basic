const AboutCapabilitiesItem = (props) => {
  const listItems = props.test.map((number, index) => (
    <li key={index}>{number}</li>
  ));
  return (
    <>
      <div className="capa-card">
        <div className="capa-card-title">
          <h2>{props.capa.title}</h2>
        </div>
        <div className="capa-card-list">
          <ul>{listItems}</ul>
        </div>
      </div>
    </>
  );
};

export default AboutCapabilitiesItem;
