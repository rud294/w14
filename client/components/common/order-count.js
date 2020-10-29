import React from 'react'
import { Link } from 'react-router-dom'

const OrderCount = () => {
    return (
        <div className="flex item-center">
            <div className="my-1 text-m text-gray-700 font-medium"  href="#" >
                Total items in cart: xxx
            </div>
            <div className="flex justify-center">
                <Link id="order-count" className="relative text-gray-700 hover:text-gray-600" to="/basket"> 
                    <svg 
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                    </svg>
                    <span className="absolute top-0 rounded-full bg-indigo-500 text-white p-1 " > 
                        корзина 
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default OrderCount