import React from 'react'
import { useSelector } from 'react-redux'

const Card = (props) => {
    const currency = useSelector( (s) => s.goods.currency )
    const rate = useSelector( (s) => s.goods.rates[s.goods.currency])
    const actualPrice = props.data.price * rate
    return (
        <div className="flex flex-col card max-w-xs rounded overflow-hidden shadow-lg">
            <img className="card__image w-full object-cover h-40" src={ props.data.image } alt={props.data.title} />
            <div className="px-6 py-4">
    <div className="card__title font-bold text-xl mb-2">{props.data.title}</div>
                <div className="flex justify-evenly">
                    <div className="card__price text-gray-700 text-base">{ actualPrice.toFixed(2) }</div>
                    <div className="currency text-gray-700 text-base">{ currency }</div>
                </div>
                <div className="card__poduct-amount text-gray-700 text-base">card__product-ammount</div>
            </div>
            <div className="px-6 pt-4 pb-2">
               <button
                    type="button"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-base"
                    >Add
                </button>
            </div>
        </div>
    )  
}



export default Card
