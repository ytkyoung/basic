const NewsItem = (props) => {
  return (
    <div className="news-item">
      <div className="news">
        <div className="news-img">
          <img src={props.news.img} alt="news" />
        </div>
        <div className="news-title">
          <h2>{props.news.title}</h2>
        </div>
        <div className="news-info">
          <div className="news-category">
            <h3>{props.news.category}</h3>
          </div>
          <div className="news-date">
            <h3>{props.news.date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
