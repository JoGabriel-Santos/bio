import React, { useState } from "react";

const ProductCard = ({ productData }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const redirectToProduct = () => {
        window.location.href = `/detalhes-do-produto/${productData._id}`;
    };

    const paymentInstallments = (price, numInstallments) => {
        const amount = parseFloat(price.replace(",", "."));
        const installmentValue = amount / numInstallments;
        const formattedInstallmentValue = installmentValue.toFixed(2).replace(".", ",");

        return `${numInstallments}x de R$ ${formattedInstallmentValue} sem juros`;
    }

    if (!productData) {
        return null;
    }

    return (
        <React.Fragment>
            <div
                className={`productCard ${isHovered ? "hidden" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={redirectToProduct}
            >
                <img src={productData.productPicture} alt=""/>

                <div className="product-card--info">
                    <h2 className="info-name">{productData.productName}</h2>

                    {
                        isHovered ? (
                            <div className="buy--button">Comprar</div>
                        ) : (
                            <>
                                <h6 className="info-price">R$ {productData.productPrice}</h6>
                                <p className="info-payment">{paymentInstallments(productData.productPrice, 10)}</p>
                            </>
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductCard;