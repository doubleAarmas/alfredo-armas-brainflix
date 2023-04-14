import "./CommentItem.scss";

function CommentItem({ name, timestamp, comment }) {
  return (
    <div className="comment__section">
      <div className="comment__section--image-placeholder"></div>
      <div className="comment__section--headers">
        <h4 className="comment__section--name">{name}</h4>
        <p className="comment__section--timestamp">{timestamp}</p>
      </div>
      <p className="comment__section--review">{comment}</p>
    </div>
  );
}
export default CommentItem;
