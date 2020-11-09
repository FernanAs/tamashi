import React from 'react'
import {FoodData1, FoodData2 } from './data';
import { FoodSection } from '../../components';


const Food = () => {
    return (
        <>
            <FoodSection heading='Choose From our Ramen' data={FoodData1} />
            <FoodSection heading="Choose from our Rolls" data={FoodData2} />
        </>
    )
}

export default Food;