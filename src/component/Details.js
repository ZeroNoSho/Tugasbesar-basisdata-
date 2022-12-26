import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productSelector, getProducts1 } from "../features/productSlice";
import { Link, useParams } from "react-router-dom";
import Foot from "./Foot";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Details = ({ nums1, setNums1 }) => {
  const [nums, setNums] = useState(0);
  const [dis, setDis] = useState(true);
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

  useEffect(() => {
    if (nums > 0) {
      setDis(false);
    } else {
      setDis(true);
    }
  }, [nums]);

  function handelOnclick(e) {
    if (e.target.dataset.num === "yes") {
      setNums(nums + 1);
    } else {
      if (nums > 0) {
        setNums(nums - 1);
      }
    }
  }

  if (localStorage.getItem("Makanan") === null) {
    localStorage.setItem("Makanan", "[]");
  }

  function createProduct() {
    const MySwal = withReactContent(Swal);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const keranjangs = {
      jumlah: nums,
      total_harga: product.price * nums,
      product: product,
      id: product.id,
    };

    let nama = JSON.parse(localStorage.getItem("Makanan"));
    setNums1(nama);

    if (JSON.parse(localStorage.getItem("Makanan")).length === 0) {
      nama.push(keranjangs);
      localStorage.setItem("Makanan", JSON.stringify(nama));
      setNums1(nama);
    } else {
      const nama2 = nama.find((c) => c.id === product.id);
      if (nama2 === undefined) {
        nama.push(keranjangs);
        localStorage.setItem("Makanan", JSON.stringify(nama));
        setNums1(nama);
      } else {
        nama.forEach((e) => {
          if (e.id === nama2.id) {
            e.jumlah = e.jumlah + nums;
            e.total_harga = e.total_harga + product.price * nums;
            localStorage.setItem("Makanan", JSON.stringify(nama));
            setNums1(nama);
          }
        });
      }
    }

    const Toast = MySwal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Success Menambahkan Ke Keranjang",
    });
  }

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column cm1">
            <img src={product === undefined ? "" : product.image} alt="img" className="images" />
          </div>
          <div className="column cm2">
            <div className="cm4">
              <h5 className="subtitle is-6">{product === undefined ? "" : product.category}</h5>
              <Link to={"/Product"} className="button is-link is-outlined" style={{ height: "25px" }}>
                Kembali
              </Link>
            </div>
            <div className="cm3">
              <h1 className="title is-1">{product === undefined ? "" : product.title}</h1>
              <h5 className="subtitle is-6">{product === undefined ? "" : product.description}</h5>
              <h3 className="subtitle is-4">$ {product === undefined ? "" : product.price} </h3>
            </div>
            <div className="cm5">
              <button onClick={handelOnclick} data-num="yes" className="button is-link is-light">
                +
              </button>
              <span className="cm5b1">{nums}</span>
              <button onClick={handelOnclick} data-num="no" className="button is-link is-light">
                -
              </button>
              <button data-set={product === undefined ? "" : product.id} onClick={createProduct} disabled={dis} className="button is-link is-light cm5b2">
                Tambah Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
      <Foot></Foot>
    </>
  );
};

export default Details;
