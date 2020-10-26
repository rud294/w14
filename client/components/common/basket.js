import React from 'react'

const Basket = () => {
    return (
        <div>
            Dis is Basket
            <div className="product__image"></div>
            <div className="product__title"></div>
            <div className="product__price"></div>
            <div className="product__amount"></div>
            <div className="product__total_price"></div>
            <button type="button"  className="product__remove">-</button>
            <div id="total-amount"></div>
        </div>
    )
}

Basket.prototype = {}
export default Basket