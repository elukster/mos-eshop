import React, { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

import "./ProductItem.css";

const ProductItem = (props) => {
  const pathToLink = "/catalog/" + props.id;

  const stateData = {
    id: props.id,
    pathname: "/catalog/" + props.id,
    title: props.title,
    description: props.description,
    imgUrl: props.imageUrl,
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="img-fluid img-thumbnail product-img" src={props.imageUrl} />

        <div className="card-body product-card">
          <p className="card-text">{props.children}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group mx-auto">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary "
              >
                <Link className="nav-link" to={pathToLink} state={stateData}>
                  View
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
