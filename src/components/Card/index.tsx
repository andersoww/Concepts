import React from 'react';
import { ContainerCard, Information, LeftContainer, Name, RightContainer, TitleText } from './styles';

const index = ({ symbol, name, average_price, last_price, quantity, onPress }: any) => {
    return (
        <ContainerCard onPress={onPress}>

            <LeftContainer>
                {/* Container Title Name */}
                <Name symbol={symbol} name={name} />
                {/* Container Information */}
                <Information average_price={average_price} last_price={last_price} quantity={quantity} />
            </LeftContainer>

            <RightContainer >
                <TitleText />
            </RightContainer>
        </ContainerCard>
    );
}

export default index;