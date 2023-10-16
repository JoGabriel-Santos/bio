import React from "react";
import ProductList from "../components/ProductList";

const Details = () => {

    return (
        <React.Fragment>
            <section className="section-product">
                <h1 className="product-link">Pingente ouro amarelo e topázio london</h1>

                <div className="product">
                    <div className="product-image">
                        <img src={require("../util/images/product_1.webp")} alt=""/>
                    </div>

                    <div className="product-info">
                        <div className="info--name-ref">
                            <h2>Pingente ouro amarelo e topázio london</h2>
                            <h6>Referência: LP0601</h6>
                        </div>

                        <div className="info--payment">
                            <h4 className="payment-price">R$ 390,00</h4>
                            <h6 className="payment-installments">Em até 7x de R$ 55,71 (sem juros)</h6>
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

                <ProductList title="Produtos relacionados" buttonText="Mostrar mais"/>
            </section>
        </React.Fragment>
    );
};

export default Details;