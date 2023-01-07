import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productSelector, getProducts1 } from "../../features/productSlice";
import "../../App.css";
import Lottie from "lottie-react";
import Parret from "../../lotif3.json";

const EditProduct = () => {
  const [img, setImg] = useState("");
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

  const onImgUpload = (e) => {
    const file = e.target.files[0];
    setImg(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-6">{img === "" ? <img src={product === undefined ? "" : product.image} alt="preview" /> : <Lottie loop={true} animationData={Parret}></Lottie>}</div>
          <div className="col col1">
            <div className="py-4">
              <h1 className="text-center txt-login">Edit Product</h1>
            </div>
            <form>
              <div className="mb-3">
                <label className="form-label">Title Product</label>
                <input placeholder={product === undefined ? "" : product.title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label className="form-label">Image Product</label>
                <input
                  onChange={(e) => {
                    onImgUpload(e);
                  }}
                  placeholder="Enter title"
                  type="file"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price Product</label>
                <input placeholder={product === undefined ? "" : product.price} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label className="form-label">Catgory Product</label>
                <div className="gap">
                  <button type="button" className="btn btn-outline-ari" data-bs-toggle="button">
                    men's clothing
                  </button>
                  <button type="button" className="btn btn-outline-ari" data-bs-toggle="button">
                    jewelery
                  </button>
                  <button type="button" className="btn btn-outline-ari" data-bs-toggle="button">
                    electronics
                  </button>
                  <button type="button" className="btn btn-outline-ari" data-bs-toggle="button">
                    women's clothing
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Desc Product</label>
                <textarea placeholder={product === undefined ? "" : product.description} className="form-control" id="exampleInputPassword1" />
              </div>
              <Link type="submit" className="btn btn-primary kuros1 full mt-5" to="/AdminPage">
                Update Product
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
