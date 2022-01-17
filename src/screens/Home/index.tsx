import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import { TextBigger, TextRegular } from '../../components/Size';
import { Container, ContainerBalance, Data, TextBalance, TextPatrimony } from './styles';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const data = [
    {
        id: 1,
        symbol: 'MXFR11',
        name: 'Maxi Renda Fundo de Investimento Imobiliario',
        average_price: 13.20,
        last_price: 10.01,
        quantity: 171,
    },
    {
        id: 2,
        symbol: 'FLMA11',
        name: 'FI Imobiliario Continental Square Faria Lima',
        average_price: 100.00,
        last_price: 132.00,
        quantity: 6,
    },
    {
        id: 3,
        symbol: 'MXFR11',
        name: 'Maxi Renda Fundo de Investimento Imobiliario',
        average_price: 13.20,
        last_price: 10.01,
        quantity: 171,
    },
    {
        id: 4,
        symbol: 'MXFR11',
        name: 'Maxi Renda Fundo de Investimento Imobiliario',
        average_price: 13.20,
        last_price: 10.01,
        quantity: 171,
    }
]
const index = ({ navigation }: any) => {
    const getData = async () => {
        try {
            const value = await AsyncStorageLib.getItem('@Data')
            const JsonData = value != null ? JSON.parse(value) : null;
            return JsonData
        } catch (error) {

        }
    }
    return (
        <Container>
            <Header />
            <ContainerBalance>
                <TextRegular>Seu Patrimônio</TextRegular>
                <TextBigger>R$55.402,90</TextBigger>
            </ContainerBalance>
            <TouchableOpacity style={{ paddingHorizontal: 14 }} onPress={() => { navigation.navigate('Add') }}>
                <View style={{ backgroundColor: '#0ABD6A', width: 40, height: 35, borderRadius: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, color: '#E8E8EE' }}>+</Text>
                </View>
            </TouchableOpacity>
            <Data data={data} navigation={navigation} />
        </Container>
    );
}

export default index;