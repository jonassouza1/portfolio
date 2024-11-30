import React from "react";
import { useState,useEffect } from "react";
import "./styled.css";
import github from "@/assets/githubappimg.jpg";
import thelast from "@/assets/thelast.png";
import logo from "@/assets/logoE.png";
import enterface from "@/assets/interface.jpg";
import leptop from "@/assets/leptop.jpg";
import {Swiper, SwiperSlide} from "swiper/react";



export const Projects = () => {
  const [iframe, setiframe] = useState("");
  const [count, setCount] = useState<number>(4);
  const images = [
    { id: "1", image: `${github}`, iframe: 'https://jonassouza1.github.io/projeto-inicial-fetch-github-api/' },
    { id: "2", image: `${thelast}`, iframe: 'https://jonassouza1.github.io/projeto-the-last-of-us/'},
    { id: "3", image: `${logo}`, iframe: 'https://jonassouza1.github.io/company-page/'},
    { id: "4", image: `${enterface}`, iframe: 'https://jonassouza1.github.io/advanced-react-typescript-project' },
    { id: "5", image: `${leptop}`, iframe:'https://ecommerce-ivory-ten.vercel.app/' },
  ];
  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 960) {
        setCount(3);
        if (window.innerWidth < 730) {
          setCount(2);
        }

        if (window.innerWidth < 480) {
          setCount(1);
        }
      } else {
        setCount(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    
      <section className="divProjects">
        <div className="projects">
      <h2 >Projetos</h2>
      <p>clique em um dos projetos para vê-lo na tela abaixo</p>
       <div className="carousel">
        <Swiper
          slidesPerView={count}
          pagination={{ clickable: true }}
          navigation
        >
          {images.map((el) => (
            <SwiperSlide className="swiperSlides" key={el.id}>
               <a
              onClick={() => {
                setiframe(
                  el.iframe
                );
              }}
            >
              <img src={el.image} alt="cliente" />
            </a>
              
            </SwiperSlide>
          ))}
        </Swiper>
      
      </div>
        <div className="projectImg">
          <iframe src={iframe} />
        </div>
        <div className="divFullscren">
        <h4>| |</h4>
        <div className='arrow'></div>
        <a className="fullscreen" href={iframe} target="_blank">
          Abrir projeto em outra aba
        </a>
        </div>
        
        </div>
      </section>
    
  );
};
