import React from 'react'
import { View } from 'react-native'
import { TextRegular } from '../Size'
import Collapsible from 'react-native-collapsible'
import { Divider } from './styles'
import { ContainerButton, ContainerItem } from './styles'

const index = ({ onPress, collapsed, id }: any) => {
    return (
        <ContainerButton onPress={onPress}>
            <ContainerItem >
                <TextRegular color={'#4B4C64'}>15 de Outubro de 2021</TextRegular>
                <TextRegular color={'#4B4C64'}>TOTAL</TextRegular>
            </ContainerItem>
            <ContainerItem>
                <ContainerItem >
                    <TextRegular color={'#4B4C64'}>Cotas:</TextRegular>
                    <TextRegular>200</TextRegular>
                </ContainerItem>
                <ContainerItem >
                    <TextRegular color={'#4B4C64'}>Prov. por Cota:</TextRegular>
                    <TextRegular>R$0,08</TextRegular>
                </ContainerItem>
                <TextRegular>R$ 16,00</TextRegular>
            </ContainerItem>

            <Collapsible collapsed={collapsed !== id} >
                <Divider />
                <View>
                    <View style={{ marginTop: 18, justifyContent: "space-between", flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextRegular color={'#4B4C64'}>Preço na data base:</TextRegular>
                            <TextRegular>R$72,95</TextRegular>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextRegular color={'#4B4C64'}>%Preço na data base:</TextRegular>
                            <TextRegular>0,791</TextRegular>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TextRegular color={'#4B4C64'}>data base:</TextRegular>
                        <TextRegular>30 de Setembro</TextRegular>
                    </View>
                </View>
            </Collapsible>
        </ContainerButton>
    )
}

export default index
