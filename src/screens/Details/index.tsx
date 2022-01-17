import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import Header from '../../components/Header';
import { Container, ContainerContent, ContainerDetails, ContainerItem, ContainerNameAction, Divider } from './styles'
import CardDetails from '../../components/CardDetails';
import { TextBig, TextBigger, TextRegular } from '../../components/Size';
const index = () => {
    const data = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ]
    const [collapsed, setCollapsed] = useState(0);


    return (
        <Container>
            <Header />
            <ContainerContent>
                <ContainerNameAction >
                    <View>
                        <TextBigger>MXRF11</TextBigger>
                        <TextRegular >Maxi Renda Fundo de Investimento Imobiliario</TextRegular>
                    </View>
                    <View>
                        <TextBig>23%</TextBig>
                    </View>
                </ContainerNameAction>

                <ContainerDetails>
                    {/* 1 */}
                    <View >
                        <ContainerItem>
                            <TextRegular color={'#84849B'} >PREÇO MÉDIO</TextRegular>
                            <TextBig color={'#E8E8EE'}>R$ 13,20</TextBig>
                        </ContainerItem>
                        <ContainerItem >
                            <TextRegular color={'#84849B'}>VALOR APLICADO</TextRegular>
                            <TextBig color={'#E8E8EE'}>R$ 2.257,20</TextBig>
                        </ContainerItem>
                        <View  >
                            <TextRegular color={'#84849B'} >3 meses</TextRegular>
                            <TextBigger >R$ 48,00</TextBigger>
                        </View>
                    </View>
                    {/* 2 */}
                    <View >
                        <ContainerItem>
                            <TextRegular color={'#84849B'}>ÚLT. COTAÇÃO</TextRegular>
                            <TextBig color={'#E8E8EE'} >R$ 10,01</TextBig>
                        </ContainerItem>
                        <ContainerItem >
                            <TextRegular color={'#84849B'} > SALDO BRUTO</TextRegular>
                            <TextBig color={'#E8E8EE'}>R$ 10,01</TextBig>
                        </ContainerItem>
                        <ContainerItem >
                            <TextRegular color={'#84849B'}>3 meses</TextRegular>
                            <TextBigger color={'#E8E8EE'}  >R$ 96,00</TextBigger>
                        </ContainerItem>
                    </View>
                    {/* 3 */}
                    <View>
                        <ContainerItem style={{ alignItems: 'flex-end' }}>
                            <TextRegular color={'#84849B'}>QUANTIDADE</TextRegular>
                            <TextBig color={'#E8E8EE'} >171</TextBig>
                        </ContainerItem>
                        <ContainerItem style={{ alignItems: 'flex-end', marginBottom: 7 }}>
                            <TextRegular color={'#84849B'}>PREJUIZO</TextRegular>
                            <TextBigger color={'#FF4F52'}>R$ -545,49</TextBigger>
                        </ContainerItem>
                        <ContainerItem style={{ alignItems: 'flex-end' }}>
                            <TextRegular color={'#84849B'}>12 meses</TextRegular>
                            <TextBigger color={'#E8E8EE'}>R$ 192,00</TextBigger>
                        </ContainerItem>
                    </View>
                </ContainerDetails>
                <Divider />
                <FlatList data={data} renderItem={({ item }) => <CardDetails onPress={() => setCollapsed(item.id)} collapsed={collapsed} id={item.id} />} />
            </ContainerContent>
        </Container>
    )
}

export default index
