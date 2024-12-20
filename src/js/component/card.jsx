import React from "react";
import PropTypes from "prop-types";


const Card = ({imageUrl, cardTitle, cardText, buttonText, altText}) =>{
    return(
      <div className="col-md-6  col-lg-3 my-2">
        <div className="card p-0" >
          <img src={imageUrl} className="card-img-top w-100" alt={altText}/>
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardText}</p>
            <a href="#" class="btn btn-primary">{buttonText}</a>
         </div>
        </div>
      </div>
    )
};

Card.prototype = {
  imageUrl: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  buttonText: PropTypes.string,
  altText: PropTypes.string
}

export default Card;