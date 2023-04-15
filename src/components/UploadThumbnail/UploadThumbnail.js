import "./UploadThumbnail.scss";
import { Link } from "react-router-dom";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Publish from "../../assets/images/publish.svg";

function UploadThumbnail() {
  function handlePublish() {
    alert("Upload complete. Redirecting to Home");
  }

  return (
    <div>
      <div className="Upload__Title--container">
        <h1 className="Upload__Title--main">Upload Video</h1>
      </div>
      <div className="Upload__thumbnail--section">
        <label className="Upload__thumbnail--section-label">
          VIDEO THUMBNAIL
          <div className="Upload__thumbnail--background">
            <video
              className="Upload__thumbnail--actual"
              controls
              poster={Thumbnail}
              type="video/mp4"
            ></video>{" "}
          </div>
        </label>
        <form className="Upload__thumbnail--form">
          <label className="Upload__thumbnail--form-label">
            TITLE YOUR VIDEO
            <div className="Upload__thumbnail--form-label-box-top">
              <textarea
                type="text"
                className="Upload__thumbnail--description"
                placeholder="Add a title to your video"
              ></textarea>
            </div>
          </label>
          <label className="Upload__thumbnail--form-label">
            ADD A VIDEO DESCRIPTION
            <textarea
              type="text"
              className="Upload__thumbnail--description Upload__thumbnail--description-larger"
              placeholder="Add a description to your video"
            ></textarea>
          </label>
        </form>
      </div>
      <div className="Upload__thumbnail--buttons">
        <Link to="/" className="publish__link">
          <button type="submit" className="cancel__button">
            CANCEL
          </button>
        </Link>{" "}
        <Link to="/" className="publish__link">
          <button
            onClick={handlePublish}
            type="submit"
            className="publish__button"
          >
            PUBLISH
          </button>{" "}
        </Link>{" "}
      </div>
    </div>
  );
}

export default UploadThumbnail;
