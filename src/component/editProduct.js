import React from "react";
import ParticelConfig from "../config/Particle";
import svg from "../Pic/2.jpg";
import svg1 from "../Pic/7.jpg";
import svg2 from "../Pic/8.jpg";
import svg3 from "../Pic/9.jpg";
import svg4 from "../Pic/6.jpg";
import Foot from "../component/Foot";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const EditProduct = () => {
  const hero = [svg, svg1, svg2, svg3, svg4];
  const hero2 = ["Ari Rachman (21102023)", "Maulidia Ramadanti (21102026)", "Syaloom Zefanya Yuni Br Manurung (21102036)", "Mohammad Tegar Ibrahim (21102016)", "Salsa Dila Ananda Putri (21102006)"];
  return (
    <div>
      <ParticelConfig></ParticelConfig>
      <div className="box boxC container text-center">
        <div className="row row1">
          <div className="herosi">
            <h1 className="title is-1">TENTANG KAMI</h1>
          </div>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {hero.map((e, i) => (
              <SwiperSlide>
                <div className="col">
                  <img className="zero" src={e} alt="img" />
                  <h1 className="title is-6">{hero2[i]}</h1>
                  <div className="prof">
                    <p className="card-text">Perkenalkan nama saya {hero2[i]} saya adalah Mahasiswa ITTP kelas IF 09 P saya di berperan sebagai ..... dalam tugas besar Basis data ini saya berharap tugas besar kalin ini dapat berguna bagi orang orang</p>
                    <br></br>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container container1">
        <Foot />
      </div>
    </div>
  );
};

export default EditProduct;
