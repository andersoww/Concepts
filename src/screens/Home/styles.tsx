import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

/* Import Components */

import Card from '../../components/Card';

export const Container = styled.View`
    flex:1;
    background-color: #242435;
    
`
/* Container Balance */
export const ContainerBalance = styled.View`
marginTop: 27px;
align-items: center;
`
export const TextPatrimony = styled.Text`
fontSize: 12px;
font-weight: 300;
color: white;
`
export const TextBalance = styled.Text`
font-size: 16px;
font-weight: 700;
font-family: 'Roboto';
color: white;
`


/* FlatList Data*/
const styleFlatList = {
    paddingHorizontal: 14,
    backgroundColor: '#4B4C64',
    borderRadius: 10,
    marginTop: 10
}
export const Data = ({ data, navigation }: any) => {

    return (
        <FlatList data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Card onPress={() => navigation.navigate('Details', item)} name={item.name} symbol={item.symbol} average_price={item.average_price} last_price={item.last_price} quantity={item.quantity} />}
            style={styleFlatList} />
    );
}

