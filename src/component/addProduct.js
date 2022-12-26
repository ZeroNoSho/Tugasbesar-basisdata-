import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts1, productSelector, getCategori } from "../features/productSlice";
import Foot from "./Foot";

const AddProduct = () => {
  const [name, setName] = useState("all");
  const dispatch = useDispatch();
  const product = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProducts1());
  }, [dispatch]);

  return (
    <div className="box2">
      <div className="titleBody">
        <h1 className="title is-2" style={{ textAlign: "center" }}>
          Explore Produk
        </h1>
      </div>
      <div className="columns box2">
        <div className="column">
          <button
            onClick={(e) => {
              dispatch(getProducts1());
              setName(e.target.dataset.category);
            }}
            data-category="all"
            className="button is-link is-light btn2"
          >
            All
          </button>
        </div>
        <div className="column">
          <button
            onClick={(e) => {
              dispatch(getCategori({ name: e.target.dataset.category }));
              setName(e.target.dataset.category);
            }}
            data-category="men's clothing"
            className="button is-link is-light btn2"
          >
            Men's Clothing
          </button>
        </div>
        <div className="column">
          <button
            onClick={(e) => {
              dispatch(getCategori({ name: e.target.dataset.category }));
              setName(e.target.dataset.category);
            }}
            data-category="jewelery"
            className="button is-link is-light btn2"
          >
            Jewelery
          </button>
        </div>
        <div className="column">
          <button
            onClick={(e) => {
              dispatch(getCategori({ name: e.target.dataset.category }));
              setName(e.target.dataset.category);
            }}
            data-category="electronics"
            className="button is-link is-light btn2"
          >
            Electronics
          </button>
        </div>
        <div className="column">
          <button
            onClick={(e) => {
              dispatch(getCategori({ name: e.target.dataset.category }));
              setName(e.target.dataset.category);
            }}
            data-category="women's clothing"
            className="button is-link is-light btn2"
          >
            Women's Clothing
          </button>
        </div>
      </div>
      <div className="box box1">
        <h1 className="subtitle is-3 mt-5">Product : {name}</h1>
        <div className="columns row">
          {product.map((e, i) => (
            <div key={i} className="column col-md-4 hover">
              <Link to={`/Details/${e.id}`}>
                <div className="card card1">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img className="images" src={e.image} alt="img" />
                    </figure>
                  </div>
                  <div className="card-content hover">
                    <div className="media">
                      <div className="media-content pTitel">
                        <p className="title is-6 pTitel">{e.title}</p>
                        <p className="subtitle is-6 pTitel">
                          {e.price}$
                          <br />
                          {e.description}
                        </p>
                        <p className="subtitle is-7 pTitel"> {e.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <h6 className="subtitle is-6" style={{ textAlign: "center", padding: "30px" }}>
            Semua produk telah ditampilkan
          </h6>
        </div>
      </div>
      <Foot></Foot>
    </div>
  );
};

export default AddProduct;
