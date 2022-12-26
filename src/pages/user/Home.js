import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, productSelector } from "../../features/productSlice";
import Foot from "../../component/Foot";
import Nav from "../../component/Nav";
import Parret from "../../lotif.json";
import "swiper/css";
import "swiper/css/navigation";
import "../../App.css";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Nav></Nav>
      <div className="container cons">
        <div className="columns">
          <div className="column imgs">
            <Lottie loop={true} animationData={Parret}></Lottie>
          </div>
          <div className="column imgs">
            <h3 className="title is-1 dsdfs">
              Temukan barang yang kamu
              <br></br>inginkan di Basdat Shop
            </h3>
            <p>
              Basdat Shop adalah e-commerce yang dapat memberikan pengalaman terbaik untuk jual
              <br></br>beli bagi pengguna
            </p>

            <button className="button is-link mt-5">
              <Link to={"/Product"} style={{ color: "white" }}>
                Explore produk
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="box box1">
        <h1 className="subtitle is-3 mt-5">Product</h1>
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
        </div>

        <button className="button btn1 is-link mt-5 mb-5">
          <Link to={"/Product"} style={{ color: "white" }}>
            Lihat Seluruh Produk
          </Link>
        </button>
      </div>

      <Foot></Foot>
    </div>
  );
};

export default Home;
