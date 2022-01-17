import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Header from '../../components/Header';
import { Input } from '../../components/Input';
import { Container } from './styles';
import AsyncStorageLib from '@react-native-async-storage/async-storage'; import { State } from 'react-native-gesture-handler';
;

const index = () => {
    const handleSubmit = async (value: any) => {
        try {
            const jsonvalue = JSON.stringify(value)
            await AsyncStorageLib.setItem('@Data', jsonvalue)
            return console.log('Deu certo')
        } catch (error) {

        }
    }
    const [state, setState] = useState<any>({
        name: '',
        symbol: '',
        price: 0,
        quantity: 0

    })
    return (
        <Container>
            <Header />
            <View style={{ alignItems: "center", marginTop: 10 }}><Text style={{ fontSize: 30 }}>Novo Cadastro</Text></View>
            <View style={{ backgroundColor: '#4B4C64', paddingHorizontal: 20, borderRadius: 10, paddingBottom: 10, height: '100%' }}>
                <View style={{ marginTop: 90 }}>

                    <View style={{}}>
                        <Text>Nome</Text>
                        <Input onChangeText={item => setState({ ...state, name: item })} />
                    </View>
                    <View style={{}}>
                        <Text>Símbolo</Text>
                        <Input onChangeText={item => setState({ ...state, symbol: item })} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: 5, width: '50%' }}>
                            <Text>Preço</Text>
                            <Input keyboardType='numeric' onChangeText={item => setState({ ...state, price: item })} />
                        </View>
                        <View style={{ width: '49%' }}>
                            <Text>Quantidade</Text>
                            <Input keyboardType='numeric' onChangeText={item => setState({ ...state, quantity: item })} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 100 }}>
                        <TouchableOpacity onPress={() => { handleSubmit(state) }} style={{ backgroundColor: '#0ABD6A', marginTop: 10, width: 100, alignItems: 'center', borderRadius: 10 }}><Text style={{ fontSize: 18 }}>Salvar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default index
