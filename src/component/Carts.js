import React from "react";
import Foot from "./Foot";
import "../App.css";

const Carts = ({ nums1, setNums1 }) => {
  let naw = 0;
  let naw1 = 0;
  let naw2 = 0;
  nums1.forEach((e) => {
    naw += e.jumlah;
    naw1 += e.total_harga;
  });

  const handelOnclick = async (e) => {
    const naes1 = nums1[parseInt(e.target.dataset.key)];
    const keranjangs = {
      jumlah: naes1.jumlah,
      total_harga: naes1.total_harga,
      product: naes1,
      id: naes1.id,
    };

    let nama = JSON.parse(localStorage.getItem("Makanan"));

    if (e.target.dataset.num === "yes") {
      keranjangs.jumlah = naes1.jumlah += 1;
      keranjangs.total_harga = keranjangs.jumlah * naes1.product.price;
      nama.forEach((e) => {
        if (e.id === naes1.id) {
          e.jumlah = keranjangs.jumlah;
          e.total_harga = keranjangs.total_harga;
          localStorage.setItem("Makanan", JSON.stringify(nama));
          setNums1(nama);
        }
      });
    } else {
      if (keranjangs.jumlah > 1) {
        keranjangs.jumlah = naes1.jumlah -= 1;
        keranjangs.total_harga = keranjangs.jumlah * naes1.product.price;
        nama.forEach((e) => {
          if (e.id === naes1.id) {
            e.jumlah = keranjangs.jumlah;
            e.total_harga = keranjangs.total_harga;
            localStorage.setItem("Makanan", JSON.stringify(nama));
            setNums1(nama);
          }
        });
      }
    }
  };

  const deletButtonHandler = (e) => {
    let i = e.target.dataset.key;
    let nama = JSON.parse(localStorage.getItem("Makanan"));
    nama.splice(i, 1);
    localStorage.setItem("Makanan", JSON.stringify(nama));
    setNums1(nama);
  };

  return (
    <div>
      <div className="titleBody">
        <h1 className="title is-2" style={{ textAlign: "center" }}>
          Keranjang
        </h1>
      </div>
      <div className="container">
        <div className="box box123 d-flex">
          <div className="modal-dialog modal-dialog1 modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-body asdadsaw">
                {nums1.map((e, i) => (
                  <div key={i}>
                    <div className="d-flex zsa ">
                      <img src={e.product.image} alt="img" className="sres12" />
                      <div className=" cJAlqk1">
                        <h1 className="zesa ">{e.product.title}</h1>
                        <h1 className="zesa zesa3">
                          Harga asli: $ {e.product.price} <span className="bsl">({e.jumlah})</span>
                          <br></br>
                          <span className="wd"> Total : ${e.total_harga.toFixed(2)}</span>
                        </h1>
                      </div>
                    </div>
                    <div className="areas">
                      <button onClick={deletButtonHandler} data-key={i} data-num="no" className="mr-5 sadawdadss button is-link is-light">
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                      <button onClick={handelOnclick} data-key={i} data-num="yes" className="button sadawdadss is-link is-light">
                        +
                      </button>
                      <span className="cm5b1 sadawdadss">{e.jumlah}</span>
                      <button onClick={handelOnclick} data-key={i} data-num="no" className="button sadawdadss is-link is-light">
                        -
                      </button>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sdawda">
            <div className="box">
              <h1 className="title is-6">Ringkasan belanja</h1>
              <div className="d-flex">
                <h1>Total barang</h1>
                <h1 className="asd">$ {naw1.toFixed(2)}</h1>
              </div>

              <div className="d-flex">
                <h1>Total diskon</h1>
                <h1 className="asd">$ {naw2.toFixed(2)}</h1>
              </div>

              <hr />

              <div className="d-flex mt-6">
                <h1 className="title is-6">Total harga</h1>
                <h1 className="asd">$ {naw1.toFixed(2)}</h1>
              </div>

              <button className="button is-link is-light Beli">Beli ({naw})</button>
            </div>
          </div> 
        </div>
      </div>
      <Foot></Foot>
    </div>
  );
};

export default Carts;
