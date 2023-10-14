import React from "react";
import Carousel from "../components/Carousel";
import carousel_1 from "../util/images/carousel/carousel_1.png";
import Product from "../components/Product";

const Home = () => {
    const imagesCarousel = [
        carousel_1,
        // Adicione quantas imagens você precisar
    ];

    return (
        <React.Fragment>
            <Carousel images={imagesCarousel}/>

            <div className="home-description">
                <p className="home-description--p">
                    Gisele Bündchen apresenta a nova Coleção V Love.
                    Design exclusivo em releituras modernas para quem ama autenticidade em cada detalhe.
                </p>
            </div>

            <section className="section--best-sellers">
                <div className="split">
                    <h1 className="split--h1">Mais vendidos</h1>
                    <p className="split--p">Da sua wishlist para o porta-joias</p>
                    <div className="split--border"></div>
                </div>

                <div className="best-sellers--products">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <div className="best-sellers--button">
                    Ver coleção completa
                </div>
            </section>

            <section className="section--category">
                <div className="split">
                    <h1 className="split--h1">Escolha por categoria</h1>
                    <p className="split--p">Eternize os seus momentos mais especiais</p>
                    <div className="split--border"></div>
                </div>

                <div className="category--categories">
                    <div className="categories-button">
                        <img src={require("../util/categories/aneis.webp")} alt=""/>

                        <div className="categories-name">
                            <h5>Anéis</h5>
                        </div>
                    </div>

                    <div className="categories-button">
                        <img src={require("../util/categories/brincos.webp")} alt=""/>

                        <div className="categories-name">
                            <h5>Brincos</h5>
                        </div>
                    </div>

                    <div className="categories-button">
                        <img src={require("../util/categories/pulseiras.webp")} alt=""/>

                        <div className="categories-name">
                            <h5>Pulseiras</h5>
                        </div>
                    </div>

                    <div className="categories-button">
                        <img src={require("../util/categories/pingentes.webp")} alt=""/>

                        <div className="categories-name">
                            <h5>Pingentes</h5>
                        </div>
                    </div>

                    <div className="categories-button">
                        <img src={require("../util/categories/colares.webp")} alt=""/>

                        <div className="categories-name">
                            <h5>Colares</h5>
                        </div>
                    </div>

                    <div className="categories-button">
                        <img src={require("../util/categories/aliancas.webp")} alt=""/>

                        <div className="categories-name">
                            <h5>Alianças</h5>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;