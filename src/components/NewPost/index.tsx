import React from "react";
import "./style.css";

export const NewPost = () => {
  return (
    <div className="newpost-container">
      <h1>New Post</h1>
      <div>
        <img
          src="https://scontent.fssz2-1.fna.fbcdn.net/v/t39.30808-6/323551107_874582850409170_6600734580481088019_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Sdvuc1irWTIAX_YFWYq&tn=JuXjPDCb_OrkRaDN&_nc_ht=scontent.fssz2-1.fna&oh=00_AfA3wt2SALp7R-YAEySO2az_3FHMQ5y4K7bNKijpxU9qUg&oe=63B728A7"
          alt="Rodolfo"
          height={50}
          width={50}
        />
        <span>Texto de teste só para testar...</span>
      </div>
    </div>
  );
};
