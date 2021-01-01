const ContactOfficesItem = (props) => {
  return (
    <div className="office-item">
      <div className="office">
        <div className="office-img">
          <img src={props.office.img} alt="office" />
        </div>
        <div className="office-title">
          <h2>{props.office.title}</h2>
        </div>
        <div className="office-info">
          <div className="office-date">
            <h3>{props.office.date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOfficesItem;
