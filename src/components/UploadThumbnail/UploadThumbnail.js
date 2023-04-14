import "./UploadThumbnail.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Publish from "../../assets/images/publish.svg";

function UploadThumbnail() {
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
            <textarea
              type="text"
              className="Upload__thumbnail--description"
              placeholder="Add a title to your video"
            ></textarea>
          </label>
          <label className="Upload__thumbnail--form-label">
            ADD A VIDEO DESCRIPTION
            <textarea
              type="text"
              className="Upload__thumbnail--description"
              placeholder="Add a description to your video"
            ></textarea>
          </label>
        </form>
        {/* <Link to="/home" className="publish__link"> */}
        <button type="submit" className="publish__button">
          <img
            src={Publish}
            className="publish__button--icon"
            alt="upload icon"
          ></img>
          Publish
        </button>{" "}
        {/* </Link>{" "} */}
      </div>
    </div>
  );
}

export default UploadThumbnail;
