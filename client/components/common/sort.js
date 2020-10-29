import React from 'react'

const Sort = (props) => {
    const onClick = () => {
        props.card.sort()
    }
    return (
        <div>
            <div>
                <button 
                    id="sort-price" 
                    type="button" 
                    className="mt-2 px-3 mx-2 py-2 bg-blue-500 t rounded-lg text-white"
                    onClick={onClick}>
                    sort by price
                </button>
            </div>
            <div>
                <button id="sort-name" 
                    type="button" 
                    className="mt-2 px-3 mx-2 py-2 bg-blue-500 t rounded-lg text-white"
                        onClick={onClick}>
                    sort by alphabet
                </button>
            </div>
        </div>
    )
}

export default Sort