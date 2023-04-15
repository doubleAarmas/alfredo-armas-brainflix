import CommentItem from "../CommentItem/CommentItem";

function CommentList({ comments }) {
  return (
    <div className="comments">
      {Array.isArray(comments) && comments.length > 0 ? (
        comments.map((commentSingle) => (
          <CommentItem
            key={commentSingle.id}
            comment={commentSingle.comment}
            name={commentSingle.name}
            timestamp={new Date(commentSingle.timestamp).toLocaleDateString(
              "en-US"
            )}
          />
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

export default CommentList;
