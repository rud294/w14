import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'
import Card from './common/card'
import { getGoods } from '../redux/reducers/goods'
 
const Main = () => {
  const listOfGoods = useSelector( (store) => store.goods.listOfGoods)
  const dispatch = useDispatch()

  // console.log('listOfGoods from Main.js', listOfGoods)

  useEffect ( () => {
    // console.log('useEffect from main')
    dispatch(getGoods())
    return () => {}
  }, [])
  return (
    <div>
      <Head title="hw14" />
      <Header />
      
      <div className="flex flex-wrap">
        { listOfGoods.reduce((acc, item) => { 
            // console.log(item.title)
            return [...acc,(
              <div key={ item.id } className="m-8">
                <Card data={ item } />
              </div>)]
            }, []) }
      </div>        
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
