import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import Header from '../../components/Header';
import { Input } from '../../components/Input';
import { Container } from './styles';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { useForm, Controller } from 'react-hook-form';
import navigations from '../../navigations';

type TypeFormData = {
    name: string;
    symbol: string;
    price: number;
    quantity: number;
}

const index = ({ navigation }: any) => {
    const { control, handleSubmit } = useForm<TypeFormData>({
        defaultValues: {
            name: '',
            symbol: '',
            price: 0,
            quantity: 0
        }
    })

    const Submit = async (value: any) => {
        try {
            const jsonvalue = JSON.stringify(value)
            await AsyncStorageLib.setItem('@Data', jsonvalue)
            Alert.alert('Cadastro Realizado com Sucesso');
            navigation.navigate('Home')
        } catch (error) {

        }
    }

    return (
        <Container>
            <Header />
            <View style={{ alignItems: "center", marginTop: 10 }}><Text style={{ fontSize: 30 }}>Novo Cadastro</Text></View>
            <View style={{ backgroundColor: '#4B4C64', paddingHorizontal: 20, borderRadius: 10, paddingBottom: 10, height: '100%' }}>
                <View style={{ marginTop: 90 }}>

                    <View style={{}}>
                        <Text>Nome</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="name"
                        />

                    </View>
                    <View style={{}}>
                        <Text>Símbolo</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="symbol"
                        />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: 5, width: '50%' }}>
                            <Text>Preço</Text>
                            <Controller

                                control={control}
                                render={({ field: { onChange, onBlur } }) => (
                                    <Input
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        keyboardType='numeric'
                                    />
                                )}
                                name="price"
                            />
                        </View>
                        <View style={{ width: '49%' }}>
                            <Text>Quantidade</Text>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur } }) => (
                                    <Input
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        keyboardType='numeric'
                                    />
                                )}
                                name="quantity"
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 100 }}>
                        <TouchableOpacity onPress={handleSubmit(data => Submit(data))} style={{ backgroundColor: '#0ABD6A', marginTop: 10, width: 100, alignItems: 'center', borderRadius: 10 }}><Text style={{ fontSize: 18 }}>Salvar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default index
