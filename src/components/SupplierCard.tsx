import React from 'react';
import { Dimensions, Text, View, Image, StyleSheet } from 'react-native';
import { Supplier } from '../interfaces/supplier.interface';
import { BtnRemove } from './BtnRemove';

const windowWi = Dimensions.get('window').width;

interface Props {
    supplier: Supplier
}

export const SupplierCard = ({ supplier }: Props) => {
    return (
        <View style={{
            ...styles.cardContainer,
            width: windowWi * 0.4
        }}>
            <View>
                <Text style={styles.name}>{supplier.name}</Text>
                <Text style={styles.subText}>{'#' + supplier.suppCode}</Text>
            </View>
            <Image style={styles.image} source={require('../../assets/suppliers.png')} />
            <Text style={styles.textDesc}>{supplier.desc}</Text>
            <BtnRemove id={supplier.id} supplier={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'white',
        height: 120,
        width: 150,
        margin: 25,
        borderRadius: 10,
        padding: 10
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    subText: {
        color: 'grey',
        fontWeight: 'bold',
    },
    textDesc: {
        fontSize: 10,
        marginTop: 8,
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        right: 0,
        opacity: 0.4
    }
});
