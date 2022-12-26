import React from "react";
import ParticelConfig from "../../config/Particle";
import { svg, svg1, svg2, svg3, svg4 } from "../../Img/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Nav from "../../component/Nav";
import Foot from "../../component/Foot";

const About = () => {
  const hero = [
    { svg: svg, name: "Ari Rachman (21102023)", tugas: "....." },
    { svg: svg1, name: "Maulidia Ramadanti (21102026)", tugas: "....." },
    { svg: svg2, name: "Syaloom Zefanya Yuni Br Manurung (21102036)", tugas: "....." },
    { svg: svg3, name: "Mohammad Tegar Ibrahim (21102016)", tugas: "....." },
    { svg: svg4, name: "Salsa Dila Ananda Putri (21102006)", tugas: "....." },
  ];
  return (
    <div>
      <Nav></Nav>
      <ParticelConfig></ParticelConfig>
      <div className="box boxC container text-center">
        <div className="row row1">
          <div className="herosi">
            <h1 className="title is-1">TENTANG KAMI</h1>
          </div>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {hero.map((e) => (
              <SwiperSlide>
                <div className="col">
                  <img className="zero" src={e.svg} alt="img" />
                  <h1 className="title is-6">{e.name}</h1>
                  <div className="prof">
                    <p className="card-text">
                      Perkenalkan nama saya {e.name} saya adalah Mahasiswa ITTP kelas IF 09 P saya di berperan sebagai {e.tugas} dalam tugas besar Basis data ini saya berharap tugas besar kalin ini dapat berguna bagi orang orang
                    </p>
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

export default About;
