import React from 'react'

const Basket = () => {
    return (
        <div>
            Dis is Basket
            <div className="product__image">1</div>
            <div className="product__title">1</div>
            <div className="product__price">1</div>
            <div className="product__amount">1</div>
            <div className="product__total_price">1</div>
            <button type="button"  className="product__remove">-1-</button>
            <div id="total-amount">1</div>
        </div>
    )
}

Basket.prototype = {}
export default Basket