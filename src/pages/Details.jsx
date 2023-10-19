import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import formatPrice from "../helpers/formatPrice";
import paymentInstallments from "../helpers/paymentInstallments";
import * as API from "../api";

const Details = () => {
    const { productId } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState();

    const fetchProduct = async () => {
        try {
            const productData = await API.getProductById(productId);
            setProductData(productData.data);

        } catch (error) {
            console.error("Error fetching products:", error.message);

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <React.Fragment>
            <section className="section-product">
                {isLoading ? (
                    <p className="loading-products">Carregando produto...</p>
                ) : (
                    <>
                        <h1 className="product-link">{productData.productName}</h1>

                        <div className="product">
                            <div className="product-image">
                                <img src={productData.productPicture} alt=""/>
                            </div>

                            <div className="product-info">
                                <div className="info--name-ref">
                                    <h2>{productData.productName}</h2>
                                    <h6>Referência: {productData._id}</h6>
                                </div>

                                <div className="info--payment">
                                    <h4 className="payment-price">R$ {formatPrice(productData.productPrice)}</h4>
                                    <h6 className="payment-installments">{paymentInstallments(productData.productPrice, 10)}</h6>
                                </div>

                                <div className="info--quantity">
                                    <div className="quantity-icon">
                                        <ion-icon name="remove-outline"></ion-icon>
                                    </div>

                                    <h4 className="quantity">12</h4>

                                    <div className="quantity-icon">
                                        <ion-icon name="add-outline"></ion-icon>
                                    </div>
                                </div>

                                <div className="info-cart">
                                    <div className="add-to-cart--button">Adicionar ao carrinho</div>
                                    <div className="add-to-favorites">
                                        <img src={require("../util/icons/heart.png")} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>

            <ProductList title="Produtos relacionados" buttonText="Mostrar mais"/>
        </React.Fragment>
    );
};

export default Details;