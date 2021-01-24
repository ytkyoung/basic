const AboutSnapshotItem = (props) => {
  return (
    <>
      <div className="snap-card">
        <div className="snap-card-title">
          <h2>{props.shot.title}</h2>
        </div>
        <div className="snap-card-stat">
          <h1>
            {props.shot.stat}
            {props.shot.unit}
          </h1>
          <div className="snap-card-text">
            <p>{props.shot.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSnapshotItem;
