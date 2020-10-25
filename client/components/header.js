import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="flex bg-indigo-800 font-bold text-white justify-center p-2">
            <div id="brand name">
                <Link to="/"> Brand name </Link>
            </div>           
       </div>
    )

}

export default Header