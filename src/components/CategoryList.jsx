import React from "react";

const CategoryButton = ({ imageSrc, categoryName }) => (
    <div className="categories-button">
        <img src={require(`../util/categories/${imageSrc}`)} alt=""/>
        <div className="categories-name">
            <h5>{categoryName}</h5>
        </div>
    </div>
);

const CategoryList = () => {
    return (
        <section className="section--category">
            <div className="split">
                <h1 className="split--h1">Escolha por categoria</h1>
                <p className="split--p">Eternize os seus momentos mais especiais</p>
                <div className="split--border"></div>
            </div>

            <div className="category--categories">
                <CategoryButton imageSrc="aneis.webp" categoryName="Anéis"/>
                <CategoryButton imageSrc="brincos.webp" categoryName="Brincos"/>
                <CategoryButton imageSrc="pulseiras.webp" categoryName="Pulseiras"/>
                <CategoryButton imageSrc="pingentes.webp" categoryName="Pingentes"/>
                <CategoryButton imageSrc="colares.webp" categoryName="Colares"/>
                <CategoryButton imageSrc="aliancas.webp" categoryName="Alianças"/>
            </div>
        </section>
    );
};

export default CategoryList;