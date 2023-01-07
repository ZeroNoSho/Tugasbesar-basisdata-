import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavAdmin() {
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
        <Link className="navbar-item sadadawa">
          <p className="ari">Basdat Shop</p>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sadsd">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-start">
            <Link to={"/AdminPage"} className="navbar-item item1">
              Product
            </Link>
            <Link to={"/CustomerOrder"} className="navbar-item item1">
              Customer Order
            </Link>
          </div>

          <div className="navbar-end">
            <div>
              <p className="navbar-item">
                {values[0]} / {values[2]} / {values[1]} / {values[3]}
              </p>
            </div>
            <Link to={"/Admin"} className="navbar-item item1 btn">
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavAdmin;
