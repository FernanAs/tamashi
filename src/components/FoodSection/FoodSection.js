import React from 'react'
import { 
    FoodContainer, 
    FoodHeading, 
    FoodTitle, 
    FoodWrapper,
    FoodImg,
    FoodInfo,
    FoodPrice,
    FoodButton,
    FoodCard,
    FoodDesc
} from './FoodSection.elements'

const FoodSection = ({heading, data}) => {
    return (
        <FoodContainer>
            <FoodHeading>{heading}</FoodHeading>
            <FoodWrapper>
                {data.map((food, index)=> {
                    return(
                        <FoodCard key={index}>
                            <FoodImg src={food.img} alt={food.alt} />
                            <FoodInfo>
                            <FoodTitle>{food.name}</FoodTitle>
                            <FoodDesc>{food.desc}</FoodDesc>
                            <FoodPrice>{food.price}</FoodPrice>
                            <FoodButton>{food.button}</FoodButton>
                            </FoodInfo>
                        </FoodCard>
                    )
                })}
            </FoodWrapper>
        </FoodContainer>
    )
}

export default FoodSection

