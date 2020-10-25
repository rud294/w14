import React from 'react'
import Head from './head'
import Header from './header'
import Card from './common/card'
import Currency from './common/currency'

const Main = () => {
  return (
    <div>
      <Head title="hw14" />
      <Header />
      <Card />
      <Currency />
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
