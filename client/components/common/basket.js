import React from 'react'
import Header from '../header'

const Basket = () => {
    return (
        <div>
            <Header />
            <div>
                Dis is Basket
            </div>
            
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