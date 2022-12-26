import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Lottie from "lottie-react";
import Parret from "../../lotif3.json";

const AddProduct = () => {
  const [img, setImg] = useState("");

  const onImgUpload = (e) => {
    const file = e.target.files[0];
    setImg(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-6">{img === "" ? <Lottie loop={true} animationData={Parret}></Lottie> : <img src={img} alt="preview" />}</div>
          <div className="col col1">
            <div className="py-4">
              <h1 className="text-center txt-login">Add Product</h1>
            </div>
            <form>
              <div className="mb-3">
                <label className="form-label">Title Product</label>
                <input placeholder="Enter title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                <input placeholder="Enter title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                <textarea placeholder="input..." className="form-control" id="exampleInputPassword1" />
              </div>
              <Link type="submit" className="btn btn-primary kuros1 full mt-5" to="/AdminPage">
                Add Product
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
