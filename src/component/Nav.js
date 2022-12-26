import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  let naw = 0;
  const [nums1, setNums1] = useState([]);

  nums1.forEach((e) => {
    naw += e.jumlah;
  });

  useEffect(() => {
    setNums1(JSON.parse(localStorage.getItem("Makanan")));
  }, [setNums1]);

  if (localStorage.getItem("Makanan") === null) {
    localStorage.setItem("Makanan", "[]");
  }

  let now = new Date();
  let dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear();

  let months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
  let week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  let values = [week[dname], months[mo], dnum, yr];

  return (
    <nav className="container navbar navbar-expand-lg" id="yekos">
      <div className="container-fluid">
        <Link to={"/home"} className="navbar-item sadadawa">
          <p className="ari">Basdat Shop</p>
        </Link>

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div hidden={naw === 0 ? true : false} class="styled__CartItemCount-sc-16e3jyi-9 kurad">
              {naw}
            </div>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <ul className="dropdown-menu">
            <div className="d-flex">
              <p className="navbar-item sadaas">keranjang({nums1.length})</p>
              <Link to={"/Carts"} className="sadaas navbar-item xca">
                Lihat Semua Keranjang
              </Link>
            </div>
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content modal-content1">
                <div className="modal-body" style={{ height: "200px", width: "10px !important", margin: "20px" }}>
                  {nums1.map((e, i) => (
                    <div key={i}>
                      <div className="d-flex zsa ">
                        <img src={e.product.image} alt="img" className="sres" />
                        <div className="cJAlqk">
                          <h1 className="zesa jIREKO">{e.product.title}</h1>
                          <h1 className="zesa jIREKO">{e.jumlah} Barang</h1>
                        </div>
                        <div>
                          <h1 className="zesa1 jIREKO"> $ {e.total_harga}</h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ul>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sadsd">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-start">
            <Link to={"/Product"} className="navbar-item item1">
              Product
            </Link>
            <Link to={"/About"} className="navbar-item item1">
              Tentang Kami
            </Link>
          </div>

          <div className="navbar-end">
            <div>
              <p className="navbar-item">
                {values[0]} / {values[2]} / {values[1]} / {values[3]}
              </p>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item item2">
                <div hidden={naw === 0 ? true : false} class="styled__CartItemCount-sc-16e3jyi-9 kurad">
                  {naw}
                </div>
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>

              <div className="navbar-dropdown asda">
                <div>
                  <div className="d-flex">
                    <p className="navbar-item">keranjang({nums1.length})</p>
                    <Link to={"/Carts"} className="navbar-item xca">
                      Lihat Semua Keranjang
                    </Link>
                  </div>
                  <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content modal-content1">
                      <div className="modal-body" style={{ height: "200px", width: "10px !important", margin: "20px" }}>
                        {nums1.map((e, i) => (
                          <div key={i} className="d-flex zsa ">
                            <img src={e.product.image} alt="img" className="sres" />
                            <div className="cJAlqk">
                              <h1 className="zesa jIREKO">{e.product.title}</h1>
                              <h1 className="zesa jIREKO">{e.jumlah} Barang</h1>
                            </div>
                            <h1 className="zesa1 jIREKO"> $ {e.total_harga}</h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
