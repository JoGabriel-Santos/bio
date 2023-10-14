import React from "react";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import carousel_1 from "../util/images/carousel/carousel_1.png";

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

            <ProductList title="Mais vendidos" buttonText="Ver coleção completa"/>

            <CategoryList/>

            <ProductList title="Lançamentos" buttonText="Mostrar mais"/>
        </React.Fragment>
    );
};

export default Home;