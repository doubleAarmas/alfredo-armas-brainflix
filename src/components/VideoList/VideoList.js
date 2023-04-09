import VideoListItem from "../VideoListItem/VideoListItem";
import "./VideoList.scss";

function VideoList({ clickHandler, videos }) {
  return (
    <div>
      <p className="video__list--header"> NEXT VIDEOS</p>

      <div className="nav">
        {videos.map((videos) => (
          <VideoListItem
            key={videos.id}
            videos={videos}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

// function VideoLists({ clickHandler, video }) {
//   return (
//     <button className="nav__button" onClick={() => clickHandler(video.id)}>
//       {video.title}
//     </button>
//   );
// }

export default VideoList;
