import Mohan from "../../assets/images/Mohan-muruge.jpg";
import AddComment from "../../assets/images/add_comment.svg";

function Comments() {
  return (
    <div>
      <h4>3 Comments</h4>
      <div>
        <img src={Mohan}></img>
      </div>
      <div comment__section>
        <h4>Join the Conversation</h4>
        <input type="text" placeholder="Add a new comment"></input>
        <img src={AddComment}></img>
        <button>Comment</button>
      </div>
      <div className="comment__container">
        <div className="comment__container--filled">
          <div className="comment__container-image--placeholder"></div>
          <h4>Michael Lyons</h4>
          <p className="comment__container--timestamp">08/09/2021</p>
          <p className="comment__container--text">
            They BLEW the ROOF off at their last event, once everyone started
            figuring out they were going. This is still simply the greatest
            opening of an event I have EVER witnessed.
          </p>
        </div>
      </div>
      <div className="comment__container">
        <div className="comment__container--filled">
          <div className="comment__container-image--placeholder"></div>
          <h4>Gary Wong</h4>
          <p className="comment__container--timestamp">07/15/2021</p>
          <p className="comment__container--text">
            Every time I see him shred I feel so motivated to get off my couch
            and hop on my board. He’s so talented! I wish I can ride like him
            one day so I can really enjoy myself!
          </p>
        </div>
      </div>
      <div className="comment__container">
        <div className="comment__container--filled">
          <div className="comment__container-image--placeholder"></div>
          <h4>Theodore Duncan</h4>
          <p className="comment__container--timestamp">07/11/2021</p>
          <p className="comment__container--text">
            How can someone be so good!!! You can tell he lives for this and
            loves to do it every day. Everytime I see him I feel instantly
            happy! He’s definitely my favorite ever!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
