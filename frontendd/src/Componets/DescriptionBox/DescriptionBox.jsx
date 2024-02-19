import React from "react";
import "./DiscriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Deacription</div>
        <div className="description-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          magnam, quae aperiam tenetur qui suscipit quibusdam assumenda alias
          nostrum quam fugit fugiat dignissimos ex officia labore dicta
          architecto minima vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam
          dolorem reprehenderit dolorum eligendi maxime suscipit dolore
          consequatur. Fuga illo sapiente dolorum repellendus distinctio error
          facilis hic incidunt doloremque alias!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
