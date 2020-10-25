import React from 'react'

const Currency = () => {

    return (
        <div>
            <button
                type="button"
                id="usd-button"
                className="mt-2 px-3 py-2 bg-blue-500 t round-1g text-white"
            >
                USD
            </button>
            <button
                type="button"
                id="eur-button"
                className="mt-2 px-3 py-2 bg-blue-500 t round-1g text-white"
            >
                EUR
            </button>
            <button
                type="button"
                id="cad-button"
                className="mt-2 px-3 py-2 bg-blue-500 t round-1g text-white"
            >
                CAD
            </button>
        </div>
    )
}

export default Currency