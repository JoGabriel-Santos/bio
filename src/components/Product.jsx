import React, { useState } from "react";

const Product = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <React.Fragment>
            <div
                className={`product ${isHovered ? "hidden" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src={require("../util/images/product_1.webp")} alt=""/>

                <div className="product-card--info">
                    <h2 className="info-name">Pingente ouro amarelo e topázio london</h2>

                    {
                        isHovered ? (
                            <div className="buy--button">Comprar</div>
                        ) : (
                            <>
                                <h6 className="info-price">R$ 890,00</h6>
                                <p className="info-payment">10x sem juros de R$ 89,00</p>
                            </>
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default Product;