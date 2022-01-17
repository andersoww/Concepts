import React from 'react'
import { TextBig, TextRegular } from '../Size'
import { Header, ContainerLeft, ContainerRight, Avatar } from './styles'

const index = () => {
    return (
        <Header>
            <ContainerLeft>
                <TextRegular>Bem vindo de volta Rodrigo!</TextRegular>
                <TextBig>FII+</TextBig>
            </ContainerLeft>
            <ContainerRight>
                <Avatar imageSource='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
            </ContainerRight>
        </Header>
    )
}

export default index
