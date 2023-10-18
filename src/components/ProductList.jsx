import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import * as API from "../api";

const ProductList = ({ title, buttonText }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const productsData = await API.getProducts();
            setProducts(productsData.data);

        } catch (error) {
            console.error("Error fetching products:", error.message);

        } finally {
            setIsLoading(false);
        }
    };

    const renderProductCards = () => {
        if (isLoading) {
            return <p className="loading-products">Carregando produtos...</p>;
        }

        return products.map((product, index) => (
            <ProductCard key={index} productData={product}/>
        ));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

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
                            {
                                renderProductCards()
                            }
                        </>
                    )
                }
            </div>

            <div className="see-more--button">{buttonText}</div>
        </section>
    );
};

export default ProductList;