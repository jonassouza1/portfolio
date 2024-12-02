import React, {useEffect,useRef} from "react";
import imageBackground from "@/assets/parallax1.jpg";
import digitalimg from "@/assets/digital.jpg";
import "./styled.css";
export const Footer = () => {

  const leftBoxRef:any = useRef(null);
  const rightBoxRef:any = useRef(null);

  useEffect(() => {
    // Seleciona as divs usando as referências
    const boxes = [leftBoxRef.current, rightBoxRef.current];

    // Cria o Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Quando a div entra na tela, adiciona a classe 'visible'
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Para de observar depois que a animação acontecer
        }
      });
    }, {
      threshold: 0.5, // A div precisa estar 50% visível para iniciar a animação
    });

    // Observa as divs
    boxes.forEach(box => observer.observe(box));

    // Limpeza do observer ao desmontar o componente
    return () => {
      boxes.forEach(box => observer.unobserve(box));
    };
  }, []); 

  return (
    <footer style={{ backgroundImage: `url(${imageBackground})` }}>
      <div ref={leftBoxRef} className="imgContat box">
        <img src={`${digitalimg}`} alt="image digital" />
      </div>
      <div ref={rightBoxRef} className="infoContat box">
        <a
          href="https://www.linkedin.com/in/jonas-souza-dev-fullstack"
          target="_blank"
        >
          <i
            className="fa-brands fa-linkedin"
            style={{ color: " #74C0FC" }}
          ></i>
        </a>
        <a href="https://github.com/jonassouza1" target="_blank">
          <i
            className="fa-brands fa-square-github"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=555196848538&text=Olá%20Gostaria%20de%20mais%20informações"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp" style={{ color: "#63E6BE" }}></i>
        </a>
      </div>
    </footer>
  );
};
