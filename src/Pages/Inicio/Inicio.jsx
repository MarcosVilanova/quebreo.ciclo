import "./Inicio.css";
import CicloSVG from "../../Components/InicioSVG/CicloSVG.jsx";
// ======================== SWIPER STYLES =========================
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from 'swiper/modules';
// Swiper (componentes)
import { Swiper, SwiperSlide } from 'swiper/react';

// React Bootstrap
import { Container, Card } from 'react-bootstrap';
const servicos = [
    {
        titulo: "Violência ",
        titulo2:"Física",
        itens: [
            "Agressões",
            "Uso de força",
            "Sufocamento",
            "Queimaduras"
        ]
    },
    {
        titulo: "Violência ",
        titulo2:"Psicológica",
        itens: [
            "Ameaças",
            "Humilhação",
            "Manipulação",
            "Isolamento"
        ]
    },
    {
        titulo: "Violência ",
        titulo2:"Sexual",
        itens: [
            "Sem consentimento",
            "Abuso",
            "Coação",
            "Exploração"
        ]
    },
    {
        titulo: "Violência ",
        titulo2:"Patrimonial",
        itens: [
            "Controle financeiro",
            "Destruição de bens",
            "Retenção de documentos",
            "Impedir trabalho"
        ]
    },
    {
        titulo: "Violência ",
        titulo2:"Moral",
        itens: [
            "Calúnia",
            "Difamação",
            "Injúria",
            "Ofensas"
        ]
    }
];

export default function CicloSection() {
    return (
        <>
        <section className="tituloInicio ">
            <div className="tituloContainer">
                    <h1 >
                        QUEBRE O CICLO DA <span style={{ color: "#603fad" }}>VIOLÊNCIA DOMÉSTICA</span>
                    </h1>
                    <p>Você não está sozinha! Juntas somos mais fortes.</p>

                <a href={"tel:180"} target="_blank" className="btnDenunciaInicio">
                    Denuncie
                </a>
                </div>
        </section>


        <section >

             <CicloSVG/>

        </section>




        <section>
            <Container className="tipoViolencia py-5">
                <h2>Tipos de Violencia</h2>
                <p className="subtituloTipoViolencia">Identifique os principais tipos de violencia</p>

                <Swiper
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    lazy={true}
                    preloadImages={false}
                    modules={[Pagination]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2, spaceBetween: 10 },
                        992: { slidesPerView: 3, spaceBetween: 10 },
                        1200: { slidesPerView: 4, spaceBetween: 10 },
                    }}
                >
                    {servicos.map((item) => (

                        <SwiperSlide key={item.id}>
                            <Card className="cardServico">

                                <Card.Body className="bodyCard">
                                    <div className="contentCard">

                                        <Card.Title className="titleCard">
                                            <span>{item.titulo}</span>
                                            <span className="titulo2">{item.titulo2}</span>
                                        </Card.Title>

                                        <div className="descCard">
                                            {item.itens.map((desc, index) => (
                                                <p key={index}>• {desc}</p>
                                            ))}
                                        </div>

                                    </div>
                                </Card.Body>

                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>



            </Container>

        </section>

            <section className="bannerViolencia">
                <Container className="bannerContainer">

                    <div className="bannerContent">
                        <h3>
                            Violência Doméstica é Crime
                        </h3>

                        <p>
                            Denuncie. Sua voz pode salvar vidas.
                        </p>

                        <div className="bannerActions">
                            <a href="tel:180" className="btnBannerDenuncia">
                                Disque 180
                            </a>

                            <a href="#canais" className="btnBannerDenuncia">
                                Canais de apoio
                            </a>

                            <a href="#saibaMais" className="btnBannerDenuncia">
                                Saiba mais
                            </a>
                        </div>

                    </div>

                </Container>
            </section>

          
    </>
    );
}