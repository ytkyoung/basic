const Thinkitem = (props) => {
  return (
    <div className="think-item">
      <div className="think">
        <div className="think-img">
          <img src={props.think.img} alt="think" />
        </div>
        <div className="think-title">
          <h2>{props.think.title}</h2>
        </div>
        <div className="think-info">
          <div className="think-category">
            <h3>{props.think.category}</h3>
          </div>
          <div className="think-date">
            <h3>{props.think.date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thinkitem;
