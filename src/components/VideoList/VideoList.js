import VideoListItem from "../VideoListItem/VideoListItem";

function VideoList({ clickHandler, videos }) {
  return (
    <div className="nav">
      {videos.map((videos) => (
        <VideoListItem
          key={videos.id}
          videos={videos}
          clickHandler={clickHandler}
        />
      ))}
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
