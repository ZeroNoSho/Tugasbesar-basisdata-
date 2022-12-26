import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Foot = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="ari">Basdat Shop</h1>
            <p className="ari1">Copyright © 2023. Kelompok 5</p>
          </div>
          <div className="column">
            <table className="tables">
              <thead>
                <tr>
                  <th>
                    <h1 className="title is-4 ari1">Basdat Shop</h1>
                  </th>
                  <th>
                    <h1 className="title is-4 ari1">Kontak</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tr">
                    <Link to={"/Product"} className="ari1">
                      Product
                    </Link>
                  </td>
                  <td className="tr ari1">Youtube</td>
                </tr>
                <tr>
                  <td className="tr">
                    <Link to={"/About"} className="ari1">
                      Tentang Kami
                    </Link>
                  </td>
                  <td className="tr ari1">Instagram</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="tr ari1">Tiktok</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
