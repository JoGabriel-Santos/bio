import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ title, buttonText }) => {
    return (
        <section className="section--product-list">
            <div className="split">
                <h1 className="split--h1">{title}</h1>
                <p className="split--p">Da sua wishlist para o porta-joias</p>
                <div className="split--border"></div>
            </div>

            <div className="product-list--products">
                {
                    title === "Mais vendidos" ? (
                        <>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </>
                    ) : (
                        <>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </>
                    )
                }
            </div>

            <div className="see-more--button">{buttonText}</div>
        </section>
    );
};

export default ProductList;