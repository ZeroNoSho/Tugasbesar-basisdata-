import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productSelector, getProducts1 } from "../../features/productSlice";
import { Link, useParams } from "react-router-dom";
import NavAdmin from "../../component/NavAdmin";

const AdminDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => productSelector.selectById(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(getProducts1());
  }, [dispatch]);

  return (
    <>
      <NavAdmin></NavAdmin>
      <div className="container">
        <div className="columns">
          <div className="column cm1">
            <img src={product === undefined ? "" : product.image} alt="img" className="images" />
          </div>
          <div className="column cm2">
            <div className="cm4">
              <h5 className="subtitle is-6">{product === undefined ? "" : product.category}</h5>
              <Link to={`/EditProduct/${product === undefined ? "" : product.id}`} className="button is-link is-outlined width100" style={{ height: "25px" }}>
                edit
              </Link>
              <Link to={"/AdminPage"} className="button is-link is-outlined width100" style={{ height: "25px" }}>
                Kembali
              </Link>
            </div>
            <div className="cm3">
              <h1 className="title is-1">{product === undefined ? "" : product.title}</h1>
              <h5 className="subtitle is-6">{product === undefined ? "" : product.description}</h5>
              <h3 className="subtitle is-4">$ {product === undefined ? "" : product.price} </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDetails;
