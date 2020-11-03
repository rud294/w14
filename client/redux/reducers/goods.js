import axios from 'axios'
// import Currency from '../../components/common/currency'

const GET_GOODS = 'GET_GOODS'
const SET_CURRENCY = 'SET_CURRENCY'
// https://api.exchangeratesapi.io/latest?base=USD
const initialState = {
    listOfGoods: [], 
    // cur_rency: []// ['usd','eur','cad']
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_GOODS: {
            console.log('from goods', state)
            return {
                ...state,
                listOfGoods: action.data
            }
        }
        case SET_CURRENCY: {
            return {
                ...state,
                cur_rency: action.data 
            }
        } 
        default:
            return state
    }
}

export function getGoods() {
    return (dispatch) => {
        // console.log('test getGoods')
        axios('/api/v1/goods').then (({ data }) => {
            // console.log('from function getGoods', {data})
            dispatch({ type: GET_GOODS, data })
        })
    }
}

// export function setCurrency() {
//     return (dispatch, setState) => {
//         // console.log('setState getGoods')
//         dispatch({ type: SET_CURRENCY, setState })
//     }
// }