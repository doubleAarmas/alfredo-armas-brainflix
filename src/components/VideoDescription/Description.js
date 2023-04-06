import Views from "../../assets/images/views.svg";
import Likes from "../../assets/images/likes.svg";
import "./Description";

function Description() {
  return (
    <div>
      <div>
        <h1>BMX Rampage: 2021 Highlights</h1>
      </div>
      <div>
        <h4>By Red Crow</h4>
        <p>07/11/2021</p>
      </div>
      <div className="views__container">
        <img
          src={Views}
          className="views__container--icon"
          alt="views-icon"
        ></img>
        <p>1,001,023</p>
      </div>
      <div className="likes__container">
        <img
          src={Likes}
          className="likes__container--icon"
          alt="likes-icon"
        ></img>
        <p>110,985</p>
      </div>
      <div>
        <p className="description__text">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </div>
    </div>
  );
}

export default Description;
