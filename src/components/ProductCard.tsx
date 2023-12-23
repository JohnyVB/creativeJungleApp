import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { Products } from '../interfaces/product.interface';

const windowWi = Dimensions.get('window').width;

interface Props {
    product: Products
}

export const ProductCard = ({ product }: Props) => {

    return (
        <View style={{
            ...styles.cardContainer,
            width: windowWi * 0.4
        }}>
            <View>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.subText}>{'#' + product.prodCode}</Text>
            </View>
            <Image style={styles.image} source={require('../../assets/products.png')} />
            <Text style={styles.textDesc}>{product.desc}</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
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
        zIndex: 100,
        fontSize: 10,
        marginTop: 8,
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        opacity: 0.4
    }
});
