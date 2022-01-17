import React from 'react';
import styled from 'styled-components/native';

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
`
/* Container Header Left */
export const ContainerLeft = styled.View`
padding-left: 19px;
padding-top: 29px;
`
/* Container Header Right */
export const ContainerRight = styled.View`
padding-top: 29px;
padding-right: 22px;
`
export const Image = styled.Image`
width: 48px;
height: 48px;
border-radius: 30px;
`
export const Avatar = ({ imageSource }: any) => {
    return (
        <Image source={{ uri: imageSource }} />
    );
}
