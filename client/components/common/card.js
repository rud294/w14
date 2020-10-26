import React from 'react'

const Card = () => {
    return (
        <div className="flex flex-col justify-center card max-w-sm rounded overflow-hidden shadow-lg">
            <img className="card__image w-full" src="#" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="card__title fot-bold text-xl mb-2">Title</div>
                <div className="flex justify-evenly">
                    <div className="card__price text-gray-700 text-base">card__price</div>
                    <div className="currency text-gray-700 text-base">currency</div>
                </div>
                <div className="card__poduct-amount text-gray-700 text-base">card__product-ammount</div>
            </div>
            <div className="px-6 pt-4 pb-2">
               <button
                    type="button"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold"
                    >Add
                </button>
            </div>
        </div>
    )  
}

Card.prototype = {}

export default React.memo(Card)
