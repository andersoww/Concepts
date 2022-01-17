import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components/native';
import { TextBig, TextBigger, TextRegular, TextSmall } from "../Size";

export const ContainerCard = styled.TouchableOpacity`
background-color: #84849B;
border-radius: 10px;
margin-top: 20px;
margin-bottom: 5px;
padding: 14px;
flex-direction: row;
justify-content: space-between;
`
/* Conteudo do Conteiner Esquerdo */
export const LeftContainer = styled.View`
width: 64%;
`
export const RightContainer = styled.View`
align-items: flex-end;
`
export const Name = ({ name, symbol }: any) => {
    const ContainerTitle = styled.View`
padding-right: 14px;
`
    return (
        <ContainerTitle>
            <TextBigger>{symbol}</TextBigger>
            <TextRegular>{name}</TextRegular>
        </ContainerTitle>
    );
}
export const Information = ({ average_price, last_price, quantity }: any) => {
    const ContainerInformation = styled.View`
    margin-top: 8px;
    `
    const ContainerPrice = styled.View`
    margin-right: 42px;
    `

    const ContainerLastPrice = styled.View`
    margin-right: 12px;
    `
    return (
        <ContainerInformation>
            <View style={{ flexDirection: 'row' }}>
                <ContainerPrice>
                    <TextSmall color={'#4B4C64'}>PREÇO MÉDIO</TextSmall>
                    <TextRegular color={'#E8E8EE'}>{`R$ ${average_price}`}</TextRegular>
                </ContainerPrice>
                <ContainerLastPrice>
                    <TextSmall color={'#4B4C64'}>ÚLT. COTAÇÃO</TextSmall>
                    <TextRegular color={'#E8E8EE'}>{`R$ ${last_price}`}</TextRegular >
                </ContainerLastPrice>
                <View>
                    <TextSmall color={'#4B4C64'}>QUANTIDADE</TextSmall>
                    <TextRegular color={'#E8E8EE'}>{quantity}</TextRegular>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <ContainerPrice>
                    <TextSmall color={'#4B4C64'}>PREÇO MÉDIO</TextSmall>
                    <TextRegular color={'#E8E8EE'}>R$ 13,20</TextRegular>
                </ContainerPrice>
                <ContainerLastPrice>
                    <TextSmall color={'#4B4C64'}>ÚLT. COTAÇÃO</TextSmall>
                    <TextRegular color={'#E8E8EE'}>R$ 10,01</TextRegular>
                </ContainerLastPrice>
            </View>
        </ContainerInformation>
    );
}
export const TitleText = () => {

    return (
        <View style={{ alignItems: 'flex-end' }}>
            <TextBig>23%</TextBig>
            <View style={{ marginTop: 70, alignItems: 'flex-end' }}>
                <TextRegular>PREJUIZO</TextRegular>
                <TextBigger color={'#FF4F52'}>R$ -545,49</TextBigger>
            </View>
        </View>
    );
}

