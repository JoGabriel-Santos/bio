import React from "react";

const Product = () => {

    return (
        <React.Fragment>
            <div className="product">
                <img src={require("../util/images/product_1.webp")} alt=""/>

                <div className="product-card--info">
                    <h2 className="info-name">Pulseira ouro amarelo e bolinhas</h2>
                    <h6 className="info-price">R$ 890,00</h6>
                    <p className="info-payment">10x sem juros de R$ 89,00</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Product;