import React from 'react'
import Mid from './Mid'
import MidBody from './MidBody'
import Product from './Product'
import Slider from './Slider'
import Social from './Social'

const HomePage = () => {
    return (
        <div>
            <Slider />
            <Mid />
            <Product />
            <MidBody />
            <Social />
        </div>
    )
}

export default HomePage