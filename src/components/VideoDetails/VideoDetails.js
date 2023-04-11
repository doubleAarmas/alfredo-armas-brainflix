import Views from "../../assets/images/views.svg";
import Likes from "../../assets/images/likes.svg";
import Mohan from "../../assets/images/Mohan-muruge.jpg";
import "./VideoDetails.scss";
import Comment from "../../assets/images/add_comment.svg";

function VideoDetails({ selectedVideo }) {
  const { title, channel, timestamp, views, likes, description, comments } =
    selectedVideo;
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString();

  return (
    <div className="video__details">
      <h1 className="video__details--title">{title}</h1>
      <div className="video__details--larger">
        <div className="video__details--subsection">
          <h4 className="video__details--channel">By {channel}</h4>
          <p className="video__details--timestamp">{formattedDate}</p>
        </div>
        <div className="video__details--subsection2">
          <div className="video__details--views-container">
            <div className="video__details--views-icon"></div>
            <p className="video__details--views">{views}</p>
          </div>
          <div className="video__details--likes-container">
            <div className="video__details--likes-icon"></div>
            <p className="video__details--likes">{likes}</p>
          </div>
        </div>
      </div>

      <div className="video__details--description-container">
        <p className="video__details--description">{description}</p>
        <p className="video__details--comments-title">3 Comments</p>
      </div>
      <div className="comment__form--container">
        <div className="comment__form--image"></div>
        <form className="comment__form">
          <div className="comment__form--label-container">
            <label className="comment__form--label">
              JOIN THE CONVERSATION
            </label>
            <textarea
              type="text"
              className="comment__form--box"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button type="submit" className="comment__form--button">
            <img
              src={Comment}
              className="comment__form--icon"
              alt="comment icon"
            ></img>
            COMMENT
          </button>
        </form>
      </div>
      <div className="comment__section">
        <div className="comment__section--image-placeholder"></div>
        <div className="comment__section--headers">
          <h4 className="comment__section--name">{comments[0].name}</h4>
          <p className="comment__section--timestamp">{comments[0].timestamp}</p>
        </div>
        <p className="comment__section--review">{comments[0].comment}</p>
      </div>
      <div className="comment__section">
        <div className="comment__section--image-placeholder"></div>
        <div className="comment__section--headers">
          <h4 className="comment__section--name">{comments[1].name}</h4>
          <p className="comment__section--timestamp">{comments[1].timestamp}</p>
        </div>
        <p className="comment__section--review">{comments[1].comment}</p>
      </div>
      <div className="comment__section">
        <div className="comment__section--image-placeholder"></div>
        <div className="comment__section--headers">
          <h4 className="comment__section--name">{comments[2].name}</h4>
          <p className="comment__section--timestamp">{comments[2].timestamp}</p>
        </div>
        <p className="comment__section--review">{comments[2].comment}</p>
      </div>
    </div>
  );
}

export default VideoDetails;
