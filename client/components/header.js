import React from 'react'
import { Link } from 'react-router-dom'

import Currency from './common/currency'
import Sort from './common/sort'

import OrderCount from './common/order-count'


const Header = () => {
    return (
        <div>
            <div className="flex bg-indigo-800 font-bold text-white justify-center p-2">
                <div id="brand name">
                    <Link to="/"> Brand name </Link>
                </div>           
            </div>
            <Currency />
            <Sort />
            <OrderCount />
        </div>
        
    )

}

export default Header