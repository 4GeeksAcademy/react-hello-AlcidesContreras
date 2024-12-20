import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({title, text, buttonText}) => {
    return(
        <div className="container jumbotron bg-secondary-subtle ">
            <h1 className="display-4">{title}</h1>
            <hr className="my-4"/>
            <p>{text}</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">{buttonText}</a>
        </p>
      </div>
    );   
};


Jumbotron.prototype = {
title: PropTypes.string,
text: PropTypes.string,
buttonText: PropTypes.string
}

export default Jumbotron;